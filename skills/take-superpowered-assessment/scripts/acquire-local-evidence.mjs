#!/usr/bin/env node

import { createHash } from "node:crypto";
import { constants as fsConstants, readFileSync } from "node:fs";
import { lstat, open, opendir, realpath } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";

const CAP_FIELDS = [
  "wallTimeMs",
  "filesystemAndSqliteCalls",
  "inventoryEntries",
  "inventoryBytes",
  "perReadBytes",
  "aggregateModelVisibleEvidenceBytes",
  "peakRssBytes",
];

function loadFrozenCaps() {
  const manifest = JSON.parse(
    readFileSync(new URL("../plugin.release.json", import.meta.url), "utf8"),
  );
  const caps = manifest?.localEvidenceBudget?.caps;
  if (
    caps === null ||
    typeof caps !== "object" ||
    Array.isArray(caps) ||
    Object.keys(caps).sort().join("\0") !== [...CAP_FIELDS].sort().join("\0")
  ) {
    throw new Error("invalid_frozen_local_evidence_caps");
  }
  for (const field of CAP_FIELDS) {
    if (!Number.isInteger(caps[field]) || caps[field] < 1) {
      throw new Error(`invalid_frozen_local_evidence_cap:${field}`);
    }
  }
  return Object.freeze({ ...caps });
}

export const LOCAL_EVIDENCE_CAPS = loadFrozenCaps();

const REQUEST_FIELDS = new Set([
  "provider",
  "lookbackDays",
  "sourceAttestation",
  "workspaceKey",
  "workspaceRoot",
  "searchTerms",
  "maxEvidenceEntries",
]);
const ATTESTATION_FIELDS = new Set(["confirmed", "sourceLabel"]);
const PROVIDERS = new Set(["codex", "claude_code"]);
const LOOKBACK_DAYS = new Set([7, 14, 28]);
const MAX_REQUEST_BYTES = 16 * 1024;
const MAX_DIRECTORY_DEPTH = 16;

class EvidenceLimitError extends Error {
  constructor(code) {
    super(code);
    this.code = code;
  }
}

function assertPlainObject(value, code) {
  if (
    value === null ||
    typeof value !== "object" ||
    Array.isArray(value) ||
    Object.getPrototypeOf(value) !== Object.prototype
  ) {
    throw new Error(code);
  }
}

function assertExactFields(value, allowedFields, prefix) {
  for (const key of Object.keys(value)) {
    if (!allowedFields.has(key)) {
      throw new Error(`${prefix}:${key}`);
    }
  }
}

function parseBoundedText(value, field, maximum) {
  if (typeof value !== "string") throw new Error(`invalid_${field}`);
  const normalized = value.trim();
  if (normalized.length < 1 || normalized.length > maximum) {
    throw new Error(`invalid_${field}`);
  }
  if (/\p{Cc}/u.test(normalized)) throw new Error(`invalid_${field}`);
  return normalized;
}

export function parseLocalEvidenceRequest(raw) {
  assertPlainObject(raw, "invalid_request");
  assertExactFields(raw, REQUEST_FIELDS, "unknown_request_field");
  if (!PROVIDERS.has(raw.provider)) throw new Error("unsupported_provider");
  if (!LOOKBACK_DAYS.has(raw.lookbackDays)) {
    throw new Error("invalid_lookback_days");
  }

  assertPlainObject(raw.sourceAttestation, "source_attestation_required");
  assertExactFields(
    raw.sourceAttestation,
    ATTESTATION_FIELDS,
    "unknown_attestation_field",
  );
  if (raw.sourceAttestation.confirmed !== true) {
    throw new Error("source_attestation_required");
  }
  const sourceLabel = parseBoundedText(
    raw.sourceAttestation.sourceLabel,
    "source_label",
    120,
  );

  let workspaceKey;
  if (raw.workspaceKey !== undefined) {
    workspaceKey = parseBoundedText(raw.workspaceKey, "workspace_key", 240);
    if (
      !/^[A-Za-z0-9._-]+$/.test(workspaceKey) ||
      workspaceKey === "." ||
      workspaceKey === ".." ||
      path.basename(workspaceKey) !== workspaceKey
    ) {
      throw new Error("invalid_workspace_key");
    }
  }

  let workspaceRoot;
  if (raw.workspaceRoot !== undefined) {
    workspaceRoot = parseBoundedText(
      raw.workspaceRoot,
      "workspace_root",
      4_096,
    );
    if (!path.isAbsolute(workspaceRoot)) {
      throw new Error("invalid_workspace_root");
    }
    workspaceRoot = path.normalize(workspaceRoot);
  }

  let searchTerms = [];
  if (raw.searchTerms !== undefined) {
    if (!Array.isArray(raw.searchTerms) || raw.searchTerms.length > 10) {
      throw new Error("invalid_search_terms");
    }
    searchTerms = raw.searchTerms.map((term) =>
      parseBoundedText(term, "search_term", 120).toLocaleLowerCase("en-US"),
    );
  }

  const maxEvidenceEntries = raw.maxEvidenceEntries ?? 20;
  if (
    !Number.isInteger(maxEvidenceEntries) ||
    maxEvidenceEntries < 1 ||
    maxEvidenceEntries > 50
  ) {
    throw new Error("invalid_max_evidence_entries");
  }

  return {
    provider: raw.provider,
    lookbackDays: raw.lookbackDays,
    sourceAttestation: {
      confirmed: true,
      sourceLabel,
    },
    ...(workspaceKey === undefined ? {} : { workspaceKey }),
    ...(workspaceRoot === undefined ? {} : { workspaceRoot }),
    searchTerms,
    maxEvidenceEntries,
  };
}

function safeRelative(root, candidate) {
  const relative = path.relative(root, candidate);
  if (
    relative === "" ||
    relative === "." ||
    relative.startsWith(`..${path.sep}`) ||
    relative === ".." ||
    path.isAbsolute(relative)
  ) {
    if (relative === "" || relative === ".") return relative;
    throw new EvidenceLimitError("path_escape_rejected");
  }
  return relative;
}

function codexDateDirectoryCanContainEvidence(relative, minimumModifiedAt) {
  const parts = relative.split(path.sep);
  if (parts.length < 1 || parts.length > 3) return true;
  if (!parts.every((part) => /^\d+$/.test(part))) return true;

  const year = Number(parts[0]);
  const month = parts[1] === undefined ? null : Number(parts[1]);
  const day = parts[2] === undefined ? null : Number(parts[2]);
  if (year < 2000 || year > 9999) return true;
  if (month !== null && (month < 1 || month > 12)) return true;
  if (day !== null) {
    if (month === null || day < 1 || day > 31) return true;
    const parsed = new Date(Date.UTC(year, month - 1, day));
    if (
      parsed.getUTCFullYear() !== year ||
      parsed.getUTCMonth() !== month - 1 ||
      parsed.getUTCDate() !== day
    ) {
      return true;
    }
  }

  const endExclusive =
    month === null
      ? Date.UTC(year + 1, 0, 1)
      : day === null
        ? Date.UTC(year, month, 1)
        : Date.UTC(year, month - 1, day + 1);
  return endExclusive > minimumModifiedAt;
}

function timeDistributedFileOrder(files, targetCount) {
  if (files.length <= targetCount) return files;
  const bucketCount = Math.min(targetCount, files.length);
  const buckets = Array.from({ length: bucketCount }, (_, index) => {
    const start = Math.floor((index * files.length) / bucketCount);
    const end = Math.floor(((index + 1) * files.length) / bucketCount);
    return files.slice(start, end);
  });
  const ordered = [];
  for (let offset = 0; ordered.length < files.length; offset += 1) {
    for (const bucket of buckets) {
      const file = bucket[offset];
      if (file) ordered.push(file);
    }
  }
  return ordered;
}

function sha256(value) {
  return createHash("sha256").update(value, "utf8").digest("hex");
}

function initialMetrics() {
  return {
    durationMs: 0,
    filesystemAndSqliteCalls: 0,
    inventoryEntries: 0,
    inventoryBytes: 0,
    filesRead: 0,
    maxSingleReadBytes: 0,
    modelVisibleEvidenceBytes: 0,
    peakRssBytes: 0,
  };
}

function makeLimited(code, provider, metrics, startedAt, nowMs) {
  metrics.durationMs = Math.max(0, nowMs() - startedAt);
  return {
    status: "limited",
    code,
    provider,
    evidence: [],
    metrics,
  };
}

function makeGuard({ caps, metrics, nowMs, rssBytes, startedAt }) {
  const checkRuntime = () => {
    metrics.durationMs = Math.max(0, nowMs() - startedAt);
    metrics.peakRssBytes = Math.max(metrics.peakRssBytes, rssBytes());
    if (metrics.durationMs >= caps.wallTimeMs) {
      throw new EvidenceLimitError("wall_time_exceeded");
    }
    if (metrics.peakRssBytes > caps.peakRssBytes) {
      throw new EvidenceLimitError("peak_rss_exceeded");
    }
  };

  const filesystemCall = () => {
    checkRuntime();
    metrics.filesystemAndSqliteCalls += 1;
    if (metrics.filesystemAndSqliteCalls > caps.filesystemAndSqliteCalls) {
      throw new EvidenceLimitError("filesystem_call_budget_exceeded");
    }
  };

  return { checkRuntime, filesystemCall };
}

async function validateRoot(root, guard) {
  guard.filesystemCall();
  const rootStat = await lstat(root);
  if (rootStat.isSymbolicLink() || !rootStat.isDirectory()) {
    throw new EvidenceLimitError("unsafe_source");
  }
  guard.filesystemCall();
  const canonical = await realpath(root);
  if (canonical !== path.resolve(root)) {
    throw new EvidenceLimitError("unsafe_source");
  }
  return canonical;
}

async function validateContainedPath({ root, candidate, expectedType, guard }) {
  guard.filesystemCall();
  const stat = await lstat(candidate);
  if (stat.isSymbolicLink()) {
    throw new EvidenceLimitError("unsafe_source");
  }
  if (
    (expectedType === "directory" && !stat.isDirectory()) ||
    (expectedType === "file" && !stat.isFile())
  ) {
    throw new EvidenceLimitError("unsafe_source");
  }
  guard.filesystemCall();
  const canonical = await realpath(candidate);
  safeRelative(root, canonical);
  if (canonical !== path.resolve(candidate)) {
    throw new EvidenceLimitError("unsafe_source");
  }
  return { canonical, stat };
}

async function inventoryJsonlFiles({
  root,
  provider,
  expectedUid,
  minimumModifiedAt,
  caps,
  metrics,
  guard,
  beforeDirectoryOpen,
}) {
  const files = [];

  const visit = async (directory, depth) => {
    if (depth > MAX_DIRECTORY_DEPTH) {
      throw new EvidenceLimitError("directory_depth_exceeded");
    }
    const validatedDirectory = await validateContainedPath({
      root,
      candidate: directory,
      expectedType: "directory",
      guard,
    });
    if (beforeDirectoryOpen) await beforeDirectoryOpen({ directory, depth });
    guard.filesystemCall();
    const directoryHandle = await opendir(validatedDirectory.canonical);
    try {
      const openedDirectory = await validateContainedPath({
        root,
        candidate: directory,
        expectedType: "directory",
        guard,
      });
      if (
        openedDirectory.stat.dev !== validatedDirectory.stat.dev ||
        openedDirectory.stat.ino !== validatedDirectory.stat.ino
      ) {
        throw new EvidenceLimitError("unsafe_source");
      }
      for await (const entry of directoryHandle) {
        guard.filesystemCall();
        guard.checkRuntime();
        const candidate = path.join(validatedDirectory.canonical, entry.name);
        const relative = safeRelative(root, candidate);
        if (entry.isSymbolicLink()) {
          throw new EvidenceLimitError("unsafe_source");
        }
        if (
          entry.isDirectory() &&
          provider === "codex" &&
          !codexDateDirectoryCanContainEvidence(relative, minimumModifiedAt)
        ) {
          continue;
        }
        guard.filesystemCall();
        const stat = await lstat(candidate);
        if (stat.isSymbolicLink()) {
          throw new EvidenceLimitError("unsafe_source");
        }
        if (stat.isDirectory()) {
          await visit(candidate, depth + 1);
          continue;
        }
        if (!stat.isFile() || !entry.name.endsWith(".jsonl")) continue;
        if (stat.nlink !== 1) {
          throw new EvidenceLimitError("unsafe_source");
        }
        const validatedFile = await validateContainedPath({
          root,
          candidate,
          expectedType: "file",
          guard,
        });
        if (
          validatedFile.stat.dev !== stat.dev ||
          validatedFile.stat.ino !== stat.ino ||
          validatedFile.stat.nlink !== 1
        ) {
          throw new EvidenceLimitError("unsafe_source");
        }
        if (expectedUid !== null && stat.uid !== expectedUid) {
          throw new EvidenceLimitError("source_owner_mismatch");
        }
        if (stat.mtimeMs < minimumModifiedAt) continue;

        metrics.inventoryEntries += 1;
        if (metrics.inventoryEntries > caps.inventoryEntries) {
          throw new EvidenceLimitError("inventory_entries_exceeded");
        }
        metrics.inventoryBytes += Buffer.byteLength(relative, "utf8") + 48;
        if (metrics.inventoryBytes > caps.inventoryBytes) {
          throw new EvidenceLimitError("inventory_bytes_exceeded");
        }
        files.push({
          absolutePath: validatedFile.canonical,
          relative,
          size: stat.size,
          uid: stat.uid,
          device: stat.dev,
          inode: stat.ino,
          linkCount: stat.nlink,
          modifiedAt: stat.mtime.toISOString(),
          mtimeMs: stat.mtimeMs,
        });
      }
    } finally {
      await directoryHandle.close().catch(() => undefined);
      guard.filesystemCall();
    }
  };

  await visit(root, 0);
  files.sort((left, right) => {
    if (right.mtimeMs !== left.mtimeMs) return right.mtimeMs - left.mtimeMs;
    return left.relative.localeCompare(right.relative, "en");
  });
  return files;
}

function parseTailJsonLines(buffer, offset) {
  let text = buffer.toString("utf8");
  if (offset > 0) {
    const newline = text.indexOf("\n");
    text = newline === -1 ? "" : text.slice(newline + 1);
  }
  const parsed = [];
  const lines = text.split("\n");
  const finalRecordIsUnterminated = !text.endsWith("\n");
  for (const [index, line] of lines.entries()) {
    if (line.trim() === "") continue;
    try {
      parsed.push({ raw: line, value: JSON.parse(line) });
    } catch {
      if (finalRecordIsUnterminated && index === lines.length - 1) continue;
      return null;
    }
  }
  return parsed;
}

export function isSameWorkspacePath(recordedRoot, expectedRoot, platform) {
  if (typeof recordedRoot !== "string" || typeof expectedRoot !== "string") {
    return false;
  }
  if (platform !== "win32") return recordedRoot === expectedRoot;
  if (
    !path.win32.isAbsolute(recordedRoot) ||
    !path.win32.isAbsolute(expectedRoot)
  ) {
    return false;
  }
  return (
    path.win32.resolve(recordedRoot).toLocaleLowerCase("en-US") ===
    path.win32.resolve(expectedRoot).toLocaleLowerCase("en-US")
  );
}

function selectExactCodexWorkspaceRecords(records, workspaceRoot, platform) {
  let exactContextIndex = -1;
  for (const [index, { value }] of records.entries()) {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      continue;
    }
    if (value.type !== "turn_context") continue;
    const payload = value.payload;
    const isExactContext =
      payload === null || typeof payload !== "object" || Array.isArray(payload)
        ? false
        : isSameWorkspacePath(payload.cwd, workspaceRoot, platform);
    if (exactContextIndex === -1) {
      if (isExactContext) exactContextIndex = index;
      continue;
    }
    if (!isExactContext) return [];
  }
  return exactContextIndex === -1 ? [] : records.slice(exactContextIndex);
}

function selectEvidenceText(records, searchTerms) {
  if (records.length === 0) return "";
  if (searchTerms.length === 0) {
    return records.map(({ raw }) => raw).join("\n");
  }
  return records
    .filter(({ raw }) => {
      const normalized = raw.toLocaleLowerCase("en-US");
      return searchTerms.some((term) => normalized.includes(term));
    })
    .map(({ raw }) => raw)
    .join("\n");
}

async function readEvidenceFile({
  root,
  file,
  request,
  platform,
  caps,
  metrics,
  guard,
  beforeRead,
}) {
  const bytesToRead = Math.min(file.size, caps.perReadBytes);
  if (bytesToRead < 1) return null;
  const offset = Math.max(0, file.size - bytesToRead);
  if (beforeRead) await beforeRead();
  const validatedFile = await validateContainedPath({
    root,
    candidate: file.absolutePath,
    expectedType: "file",
    guard,
  });
  if (
    validatedFile.stat.uid !== file.uid ||
    validatedFile.stat.dev !== file.device ||
    validatedFile.stat.ino !== file.inode ||
    validatedFile.stat.nlink !== file.linkCount ||
    validatedFile.stat.nlink !== 1
  ) {
    throw new EvidenceLimitError("unsafe_source");
  }
  guard.filesystemCall();
  const noFollow = fsConstants.O_NOFOLLOW ?? 0;
  const handle = await open(
    validatedFile.canonical,
    fsConstants.O_RDONLY | noFollow,
  );
  try {
    guard.filesystemCall();
    const openedStat = await handle.stat();
    if (
      !openedStat.isFile() ||
      openedStat.uid !== file.uid ||
      openedStat.dev !== file.device ||
      openedStat.ino !== file.inode ||
      openedStat.nlink !== file.linkCount ||
      openedStat.nlink !== 1
    ) {
      throw new EvidenceLimitError("unsafe_source");
    }
    const buffer = Buffer.allocUnsafe(bytesToRead);
    guard.filesystemCall();
    const { bytesRead } = await handle.read(buffer, 0, bytesToRead, offset);
    metrics.filesRead += 1;
    metrics.maxSingleReadBytes = Math.max(
      metrics.maxSingleReadBytes,
      bytesRead,
    );
    const records = parseTailJsonLines(buffer.subarray(0, bytesRead), offset);
    if (records === null) return null;
    if (offset > 0 && records.length === 0) {
      throw new EvidenceLimitError("per_read_bytes_exceeded");
    }
    let attributedRecords = records;
    if (request.provider === "codex" && request.workspaceRoot) {
      attributedRecords = selectExactCodexWorkspaceRecords(
        records,
        request.workspaceRoot,
        platform,
      );
      if (attributedRecords.length === 0) return null;
    }
    const text = selectEvidenceText(attributedRecords, request.searchTerms);
    if (text === "") return null;
    const visibleBytes = Buffer.byteLength(text, "utf8");
    if (
      metrics.modelVisibleEvidenceBytes + visibleBytes >
      caps.aggregateModelVisibleEvidenceBytes
    ) {
      throw new EvidenceLimitError("aggregate_evidence_bytes_exceeded");
    }
    metrics.modelVisibleEvidenceBytes += visibleBytes;
    return {
      sourceId: sha256(`${file.relative}\0${file.modifiedAt}\0${file.size}`),
      modifiedAt: file.modifiedAt,
      truncated: offset > 0,
      text,
    };
  } finally {
    await handle.close();
    guard.filesystemCall();
  }
}

export async function acquireLocalEvidence(rawRequest, options = {}) {
  const request = parseLocalEvidenceRequest(rawRequest);

  for (const [name, value] of Object.entries(options.caps ?? {})) {
    if (
      !CAP_FIELDS.includes(name) ||
      !Number.isInteger(value) ||
      value < 0 ||
      value > LOCAL_EVIDENCE_CAPS[name]
    ) {
      throw new Error(`unsafe_cap_override:${name}`);
    }
  }
  const caps = Object.freeze({ ...LOCAL_EVIDENCE_CAPS, ...options.caps });
  const requestedHomeDir = path.resolve(options.homeDir ?? os.homedir());
  const platform = options.platform ?? process.platform;
  const expectedUid = options.expectedUid ?? process.getuid?.();
  const nowMs = options.nowMs ?? Date.now;
  const rssBytes = options.rssBytes ?? (() => process.memoryUsage.rss());
  const startedAt = nowMs();
  const metrics = initialMetrics();
  const guard = makeGuard({ caps, metrics, nowMs, rssBytes, startedAt });

  if (
    platform !== "win32" &&
    (!Number.isInteger(expectedUid) || expectedUid < 0)
  ) {
    return makeLimited(
      "current_uid_unavailable",
      request.provider,
      metrics,
      startedAt,
      nowMs,
    );
  }

  try {
    if (
      (request.provider === "claude_code" && !request.workspaceKey) ||
      (request.provider === "codex" && !request.workspaceRoot)
    ) {
      return makeLimited(
        "workspace_attribution_required",
        request.provider,
        metrics,
        startedAt,
        nowMs,
      );
    }
    guard.filesystemCall();
    const homeDir = await realpath(requestedHomeDir);
    let canonicalRoot;
    if (request.provider === "codex") {
      canonicalRoot = await validateRoot(
        path.join(homeDir, ".codex", "sessions"),
        guard,
      );
    } else {
      const projectsRoot = await validateRoot(
        path.join(homeDir, ".claude", "projects"),
        guard,
      );
      canonicalRoot = await validateRoot(
        path.join(projectsRoot, request.workspaceKey),
        guard,
      );
      if (safeRelative(projectsRoot, canonicalRoot) !== request.workspaceKey) {
        throw new EvidenceLimitError("unsafe_source");
      }
    }
    const minimumModifiedAt =
      nowMs() - request.lookbackDays * 24 * 60 * 60 * 1_000;
    const files = await inventoryJsonlFiles({
      root: canonicalRoot,
      provider: request.provider,
      expectedUid: platform === "win32" ? null : expectedUid,
      minimumModifiedAt,
      caps,
      metrics,
      guard,
      beforeDirectoryOpen: options.beforeDirectoryOpen,
    });
    const evidence = [];
    let truncationReason;
    for (const file of timeDistributedFileOrder(
      files,
      request.maxEvidenceEntries,
    )) {
      guard.checkRuntime();
      let selected;
      try {
        selected = await readEvidenceFile({
          root: canonicalRoot,
          file,
          request,
          platform,
          caps,
          metrics,
          guard,
          beforeRead: options.beforeRead,
        });
      } catch (error) {
        if (
          error instanceof EvidenceLimitError &&
          error.code === "aggregate_evidence_bytes_exceeded" &&
          evidence.length > 0
        ) {
          truncationReason = error.code;
          break;
        }
        throw error;
      }
      if (selected) evidence.push(selected);
      if (evidence.length >= request.maxEvidenceEntries) break;
    }
    guard.checkRuntime();
    metrics.durationMs = Math.max(0, nowMs() - startedAt);
    return {
      status: "ok",
      provider: request.provider,
      sourceAttestationSha256: sha256(
        `${request.provider}\0${request.sourceAttestation.sourceLabel}`,
      ),
      evidence,
      metrics,
      ...(truncationReason
        ? { truncated: true, truncationReason }
        : { truncated: false }),
    };
  } catch (error) {
    if (error instanceof EvidenceLimitError) {
      return makeLimited(
        error.code,
        request.provider,
        metrics,
        startedAt,
        nowMs,
      );
    }
    if (error?.code === "ELOOP" || error?.code === "ENOTDIR") {
      return makeLimited(
        "unsafe_source",
        request.provider,
        metrics,
        startedAt,
        nowMs,
      );
    }
    if (error?.code === "ENOENT") {
      return makeLimited(
        "source_not_found",
        request.provider,
        metrics,
        startedAt,
        nowMs,
      );
    }
    return makeLimited(
      "source_read_failed",
      request.provider,
      metrics,
      startedAt,
      nowMs,
    );
  }
}

async function readStdin() {
  const chunks = [];
  let bytes = 0;
  for await (const chunk of process.stdin) {
    bytes += chunk.length;
    if (bytes > MAX_REQUEST_BYTES) throw new Error("request_too_large");
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

async function main() {
  if (process.argv.length !== 2) throw new Error("unexpected_cli_argument");
  const raw = await readStdin();
  const result = await acquireLocalEvidence(JSON.parse(raw));
  process.stdout.write(`${JSON.stringify(result)}\n`);
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : null;
if (
  invokedPath &&
  pathToFileURL(invokedPath).href === import.meta.url &&
  fileURLToPath(import.meta.url) === invokedPath
) {
  main().catch((error) => {
    process.stdout.write(
      `${JSON.stringify({ status: "invalid_request", code: error.message })}\n`,
    );
    process.exitCode = 2;
  });
}
