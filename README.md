# Superpowered Professional by aibility

Superpowered Professional gives Claude practical, private coaching for the work in front of you, helps you understand your Superpowered report, and prepares a review-before-save assessment.

The plugin contains three skills and an OAuth-capable remote MCP connection to Aimee. It contains no API key, hook, local credential, or proprietary server implementation.

## Connect from Claude or ChatGPT

Use this remote connection URL:

```text
https://sp.aimee.coach/api/mcp/plugin
```

- **Claude web or desktop:** open Settings → Connectors → Add custom connector, paste the URL, and complete OAuth.
- **ChatGPT:** enable Developer mode, add a custom remote MCP plugin, paste the URL, and complete OAuth. Your ChatGPT plan or workspace must allow the required read and write tools.

After connecting, ask your AI to load your current Superpowered state. The connection is ready only after real account data is returned.

## Install in Claude Code

Run these commands inside Claude Code:

```text
/plugin marketplace add aibilitycz/Superpowered-professional-by-aibility
/plugin install superpowered-professional@aibility-superpowered
```

## Install in Codex

Run:

```shell
codex plugin marketplace add aibilitycz/Superpowered-professional-by-aibility
```

Then open `/plugins` and install **Superpowered Professional** from **aibility-superpowered**.

## Direct development fallback

If marketplace installation is unavailable, run this repository directly:

```shell
git clone https://github.com/aibilitycz/Superpowered-professional-by-aibility.git
claude --plugin-dir ./Superpowered-professional-by-aibility
```

Sign in with your Aimee account when Claude opens the OAuth authorization flow. Existing connections may need to reconnect when a new permission is added.

## What it does

- `coach-current-work` loads Aibility's versioned AI-first methodology, uses only the current interaction and artifacts to choose direction, and gives one to three concrete recommendations. Earlier coaching may only prevent repetition.
- `understand-my-report` explains your current Superpowered state and report.
- `take-superpowered-assessment` prepares a structured assessment, shows the derived result for review, and saves only after explicit confirmation.

## Permissions and privacy

The plugin requests only the scopes needed by its three skills:

- `aimee.self.read` reads your own Superpowered state and report.
- `aimee.coaching.offers.write` records bounded coaching-method offers for continuity and auditing.
- `aimee.assessments.write` saves an assessment only after your confirmation.
- `offline_access` lets the OAuth connection refresh without repeated sign-in.

Raw work evidence stays in the host. Only bounded MCP inputs and explicitly confirmed derived assessment results are sent to Aimee. `fullLocalSessionClaim=false` limits the completeness claim; it does not disable bounded local evidence on supported Codex or Claude Code hosts. The host verifies the exact packaged helper checksum and asks you to confirm the current local profile or workspace immediately before the read. No external certificate, token, or installation approval is required.

Read the [privacy policy](https://sp.aimee.coach/en/privacy) and [terms of service](https://sp.aimee.coach/en/terms).

## Support and security

- Product support: [aibility contact](https://aibility.org/kontakt) or `podpora@aibility.cz`
- Security reports: see [SECURITY.md](SECURITY.md)
- Source license: [MIT](LICENSE)

Directory availability does not imply endorsement or verified status by Anthropic or OpenAI.
