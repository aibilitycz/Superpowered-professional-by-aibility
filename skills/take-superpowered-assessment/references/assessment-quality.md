# Assessment router checklist

This checklist verifies the static package boundary. It does not contain acquisition instructions, methodology, a submission schema, or a substitute assessment prompt.

Before local analysis:

- explicit current user intent exists;
- state permits save, or the server-provided recovery is shown and the flow stops;
- start was called exactly once for this user action;
- the complete result parses the published schema, expires in the future, and matches all three frozen versions;
- MCP text equals `structuredContent.assessmentPrompt`;
- `assessmentPrompt.endsWith(outputContract)` is true;
- every privacy rule can be enforced separately;
- the package helper SHA and current host acceptance are valid.
- one current goal is explicit, either from the initiating message or the
  single question required by the returned prompt;
- prior Aimee/Superpowered reports, scores, levels, and recommendations are
  excluded from the scoring evidence ledger.

Before submit:

- the same frozen analysis produced the complete report and internal package;
- the person saw the complete current report;
- the person-facing score uses only the returned five-point band rule; the
  exact score remains in the frozen internal package;
- model, client, and evidence coverage are bounded provenance with no raw
  content, titles, paths, account, workspace, or device data;
- every correction produced a full replacement preview;
- explicit save confirmation arrived in a later current-conversation turn;
- submit uses only the exact existing V3 fields and returned versions;
- success is reported only from persisted server readback and its `reportUrl`.

Any mismatch, lost start response, unknown version, helper mismatch, unavailable capability, ambiguous confirmation, or validation error stops without automatic start, submit, or evidence-read retry.
