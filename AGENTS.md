# Agent Guide

## Mission

Improve coding-agent search quality with public-safe, privacy-aware search integration practices.

SearXNG is a priority research path, not the only supported approach. Contributions may compare native agent search, MCP search adapters, self-hosted search, hosted search APIs, browser-based retrieval, and local documentation search.

## Allowed Contributions

Agents may add or update:

- documentation
- best practices
- examples
- structured registry entries
- validation scripts
- workflows

Agents must not add:

- secrets
- tokens
- cookies
- session material
- personal email addresses
- private endpoints
- local machine paths unless sanitized and strictly necessary

## Required Checks Before Commit

Run:

- `make check`
- `make validate-registry`
- `make review`

## Recommended Reading Order

Agents should read:

1. `README.md`
2. `docs/positioning.md`
3. `docs/architecture.md`
4. `registry/resources.json`
5. the closest example or template for the target ecosystem

## Language Rules

- governance, process, and repository-maintenance text: modern English, concise
- examples and best-practice guidance: modern English, concise
- Chinese translations may live in `README.zh-CN.md` and `docs/zh-CN/`
- English remains canonical when translations differ
- avoid decorative prose

## Submission Rules

Every substantial contribution should clarify:

- problem
- approach
- expected benefit
- privacy considerations
- acceptance criteria

When adding a durable resource, also update `registry/resources.json`.

When changing `registry/resources.json`, run `make generate-registry-index` or `make review` so `docs/registry-index.md` stays current.

Use `templates/research-report-template.md` for research notes and `templates/integration-template.md` for new integration examples.

## Issue vs Patch

Patch directly when the scope is local and validation is straightforward.

Prefer an issue first when the change:

- needs design judgment
- changes ecosystem-wide structure
- introduces a new trust or privacy tradeoff
- depends on external service behavior that is still under investigation
