# Contributing

This repository is the public, auditable distribution of Superpowered
Professional for Claude. It is not the primary development repository.

## Where changes belong

The executable package is built and validated from Aibility's private platform
source. Maintainers must make functional changes there, increment the package
version, build a new Anthropic provider package, and export that package here
as a new immutable release.

Do not make standalone functional edits to:

- `.claude-plugin/plugin.json`;
- `.mcp.json`, `mcp.json`, or `plugin.json`;
- `assets/`;
- `skills/`.

A direct edit to one of those paths would diverge from the validated source and
would be overwritten by the next release export.

Public-only documentation changes may be proposed here for:

- `README.md`;
- `CONTRIBUTING.md`;
- `SECURITY.md`;
- `SUPPORT.md`.

Changes to `LICENSE` require Aibility approval. `CHECKSUMS.md` is updated only
when a new release is produced. If a documentation change alters a product
claim, permission, endpoint, support contact, policy URL, or version, the
maintainer must reconcile the same value in the private package/submission
source before publishing it.

## External contributions

For a bug in plugin behavior, open an issue with the plugin version, Claude
Code version, operating system, and a minimal reproduction with private work
content and credentials removed. Aibility will implement the fix in the
canonical private source and publish a new version here.

For a security vulnerability, do not open a public issue. Follow
[`SECURITY.md`](SECURITY.md).

## Release invariants

- Existing version tags are immutable and are never moved or recreated.
- A new functional release receives a new semantic version and annotated tag.
- Exported package files must match the private build artifact inventory and
  helper checksum.
- `claude plugin validate .` must pass on the exact public candidate.
- The public tree must not contain credentials, private app IDs, staging
  endpoints, local absolute paths, private monorepo history, or internal plans.
- A public tag does not itself mean Anthropic or OpenAI has approved or
  published the plugin.
