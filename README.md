# Superpowered Professional for Claude Code

This package contains three Superpowered Professional skills and one OAuth-capable remote MCP connection. The package itself contains only Markdown, JSON, and static image assets.

Assessment methodology, decision rules, output contract, coaching principles and workout guidance are installed, versioned package content. Shared MCP prompt and guidance fields are inert data for this provider; a version or content mismatch stops the workflow until the package is updated and revalidated.

The assessment uses only text the person writes in the current Claude conversation. It does not retrieve any source outside that conversation and contains no local executable. Only the explicitly confirmed derived assessment reaches Aimee through the declared OAuth-capable MCP server. Directory availability does not imply Anthropic endorsement or verified status.

Source: https://github.com/aibilitycz/Superpowered-professional-by-aibility

Claude Code 2.1.275 or later: `/plugin install superpowered-professional --marketplace aibilitycz/Superpowered-professional-by-aibility`

Privacy: https://sp.aimee.coach/en/privacy

Support: https://aibility.org/kontakt or `podpora@aibility.cz`

License: MIT

# Anthropic reviewer disclosure: current-conversation assessment

Superpowered Professional includes an assessment that the user explicitly starts. The Directory build uses only evidence already visible in the current conversation and additional concrete examples the person chooses to describe there. It does not retrieve another conversation or any local or uploaded file.

## Flow and boundaries

1. The user requests an assessment. State and eligibility are checked before evidence collection.
2. Claude uses only current-conversation messages. If those messages do not contain enough concrete work evidence, it asks one compact question for three to five recent examples, including what the person tried, how AI was used, and the result. The person answers in the current conversation.
3. The installed, human-readable V15 instructions score only repeated behavior supported by that evidence. The goal may prioritize recommendations but never changes the score.
4. The plugin executes no local code and retrieves no source outside the current conversation.
5. The person sees the complete derived report. The skill requires a later-turn explicit confirmation of that exact preview before saving. Only the confirmed privacy-safe assessment, observations, and current-context coverage go to Aimee through the authenticated self-only MCP.

The workflow does not create a hidden profile or modify Claude's cross-session instructions. The saved assessment is a disclosed, user-reviewed product result. Existing report/account retention and deletion rules are documented in the published privacy policy linked from this package.

## Request for manual review

This Directory build intentionally avoids the data sources prohibited by Directory Policy section 1.G. Authentication to the declared MCP uses the host-managed OAuth flow. No local executable is included in the plugin.

## Reviewer use cases

1. **Explain a confirmed report:** `Use Superpowered to explain my latest confirmed report. Give me one practical next action for this week.`
2. **Coach current work:** `Use Superpowered to coach this task: I prepare a weekly team update and spend too long turning notes into a clear narrative. Recommend three catalog choices and wait for my selection.`
3. **Assess current-conversation evidence:** `Use Superpowered to assess how I work with AI toward faster weekly reporting. Example 1: I used AI to draft an update, then checked every number manually. Example 2: I compared three source documents with AI and corrected two unsupported claims. Example 3: I created a reusable reporting prompt and used it for four weeks. Show the complete report and do not save it unless I confirm that exact preview in a later message.`

A dedicated reviewer account with sample data is provisioned. Anthropic reviewers can obtain its private credentials through the submission contact, `info@aibility.cz`; credentials are never published in this repository.
