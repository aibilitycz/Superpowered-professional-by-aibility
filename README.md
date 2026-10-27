# Superpowered Professional for Claude Code

This package contains three Superpowered Professional skills and one OAuth-capable remote MCP connection. It contains no API key, operator configuration, hook, UI, or local credential.

Assessment methodology, decision rules, output contract, coaching principles and workout guidance are installed, versioned package content. Shared MCP prompt and guidance fields are inert data for this provider; a version or content mismatch stops the workflow until the package is updated and revalidated.

Raw work evidence remains inside the host and its configured model-provider boundary; only bounded MCP inputs and explicitly confirmed derived assessment results reach Aimee. `fullLocalSessionClaim` is always false: the accepted checksum-pinned helper provides bounded evidence, without claiming complete access to local history. Directory availability does not imply Anthropic endorsement or verified status.

Source: https://github.com/aibilitycz/Superpowered-professional-by-aibility

Privacy: https://sp.aimee.coach/en/privacy

Support: https://aibility.org/kontakt or `podpora@aibility.cz`

License: MIT

# Anthropic reviewer disclosure: user-requested local history assessment

Superpowered Professional includes an assessment that the user explicitly starts. In Claude Code, it can use the user's own local session logs as evidence. This capability is part of the requested product; we are asking for manual interpretation of Directory Policy section 1.G for this exact disclosed workflow. We do not represent that an exception has already been granted.

## Flow and boundaries

1. The user requests an assessment. State/eligibility is checked before evidence acquisition. The user confirms the exact current local workspace/profile before the checksum-pinned helper runs.
2. The helper reads bounded owned `.jsonl` files in the selected Claude Code workspace under `~/.claude/projects`. It has no network calls, credential-store or environment-variable reads, or subprocess execution. It rejects unsafe paths and links. The helper returns evidence only to the current host through stdout.
3. Claude Code applies the complete static, human-readable V15 instructions installed in the skill package. It ignores any behavior instructions returned in shared MCP responses. The methodology, decision rules, output contract, and review-before-save flow are versioned package content.
4. Raw session records, paths, prompts and traces are not sent to the Superpowered MCP or Aibility servers by this workflow. The selected host/model provider can process the evidence in its context under that host's terms; this is not a claim that raw evidence never leaves the device.
5. The user sees the complete derived report, including privacy-safe evidence examples. The skill requires a later-turn explicit confirmation of that exact preview before saving. Only the confirmed derived assessment, bounded provenance and aggregate coverage go to Aibility through the authenticated self-only MCP.

The helper is invoked on request, not as background logging. The workflow does not create a hidden profile or modify Claude's cross-session instructions. The saved assessment is a disclosed, user-reviewed product result. Existing report/account retention and deletion rules are documented in the published privacy policy linked from this package.

## Request for manual review

Please confirm whether section 1.G permits this explicitly user-requested, bounded local Claude Code assessment with host-side processing and confirmed derived-result persistence. If it does not, please identify the specific boundary and whether an approved user-initiated flow is available. We will follow the review decision and will not treat the automatic technical checks as policy approval.

The separate scanner hold about a credential on the user's machine does not match the helper's behavior: it reads session evidence, not credential stores. Authentication to the declared MCP uses the host-managed OAuth flow.
