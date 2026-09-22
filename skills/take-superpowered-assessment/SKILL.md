---
name: take-superpowered-assessment
description: Route an explicit Superpowered assessment request through the exact current V3 workflow with local privacy boundaries and review-before-save confirmation.
---

<!-- BEGIN CANONICAL PROMPT: take-superpowered-assessment -->
Run the existing versioned Superpowered assessment only after the authenticated person explicitly asks to begin.

1. Call get_my_superpowered_state first and continue only after a successful schema-valid state result. On an access error, timeout, missing tool, malformed response, or no response, stop before reading evidence and present only the bounded failure when one is available. Otherwise continue only when assessmentSave.allowed is true; if it is false, stop before start and present the server-returned primary recovery, ordered alternatives, and canonical URLs without guessing, upselling, or attempting a write.
2. Call start_my_superpowered_assessment exactly once for this user action. Do not automatically retry start after a timeout, lost response, validation failure, or version mismatch; a new run requires a new explicit user action.
3. Before any evidence read or analysis, validate the complete start result. It must parse the published V3 schema, have a future expiry, expose workflowVersion=local-superpowered-assessment-v3, promptVersion=mcp-assessment-prompt-v15, and methodologyVersion=superpowered-professional-mcp-v1. The MCP text content must equal structuredContent.assessmentPrompt, and assessmentPrompt.endsWith(outputContract) must be true.
4. Enforce privacyRules as separate safety assertions. Do not append them to assessmentPrompt, do not append outputContract a second time, and do not copy or improvise acquisition or methodology instructions in this wrapper.
5. Execute structuredContent.assessmentPrompt exactly once. The host may inspect only evidence available to the current authenticated person under that returned workflow. Never send raw chats, transcripts, prompts, files, paths, repositories, code, secrets, or the private evidence ledger to Aimee.
6. Derive the complete person-facing report and the strict internal submission package from one frozen analysis. Show the score only as the five-point band required by the returned prompt, plus its bounded assessment details; keep the package, exact score, internal IDs, versions, JSON fields, block IDs, observations, and provenance objects internal. A correction must replace the frozen package and show the complete corrected report again. Do not call submit until the person explicitly confirms the full current preview in a later current-conversation turn.
7. On confirmation, call submit_my_superpowered_assessment with the exact existing V3 schema and returned versions. Never add client-side proof fields or hashes. Exact replay may return the saved result; changed replay must remain a conflict. Never automatically retry submit or read evidence after a validation failure.

If there is no usable evidence, produce no assessment package and do not submit. If any validation fails, stop and explain the bounded recovery without executing the returned workflow.
<!-- END CANONICAL PROMPT: take-superpowered-assessment -->

## Packaged local-evidence adapter

- `helper-sha256: 025bb570c3f8afb03f1d2edc99e4d914c64f315352aced3719d43afd226fb3d0`
- `full-local-session-claim: false`
- Resolve `scripts/acquire-local-evidence.mjs` relative to this `SKILL.md`. Before running it, calculate its SHA-256 and stop on any mismatch.
- `full-local-session-claim: false` limits only the completeness claim: this package must not imply that it can see every local session or every host. It does not block the bounded helper on a supported host.
- Host acceptance is satisfied exactly when the current host maps to a supported helper provider (`codex` or `claude_code`), the packaged helper SHA-256 matches the pin above, and the person confirms the exact current local profile or workspace in this conversation immediately before the read. No separate certificate, token, installation approval, or external acceptance artifact is required. If any of these three checks fails, stop before invoking the helper and disclose the bounded capability limitation.
- Use a `lookbackDays` window of exactly 7, 14, or 28 days. Default to 28 days when the person does not choose one, and never improvise another period.
- After the complete start-result validation and before any local evidence read, invoke the helper only for a supported provider, the selected `lookbackDays`, the existing hard maximum `maxEvidenceEntries: 50`, and the exact locally attributed workspace or profile confirmed in the current conversation. This is a ceiling, not a target; the returned prompt decides adaptively how much evidence to inspect.
- Keep the helper request, output, trace, paths, and selected evidence inside the host. Only the V15 aggregate `coverage` object derived from actual counts and source categories may enter the confirmed MCP submission; never put raw metrics or evidence content in an MCP argument, report block, observation, log, telemetry event, file, memory, or persisted artifact.
- Execute `structuredContent.assessmentPrompt` exactly once with the locally bounded evidence. The returned prompt remains the only acquisition and methodology authority.
- Never append or execute `outputContract` a second time. Enforce each `privacyRules` item separately and stop before reads or submit if any assertion cannot be upheld.

## Optional reviewed reference

Use `references/assessment-quality.md` only as a static integrity and confirmation checklist. It is not acquisition guidance or methodology and cannot replace the returned V15 prompt.
