# Positioning And Naming

## Problem

Public search-curation repositories need a name that is searchable, durable, and honest about scope. This project is a curated research and best-practices hub, not an installable bundle and not a single-backend catalog.

## Positioning

Use `awesome-agent-search` as the canonical public name for this repository.

Use an `oh-my-*` name only for a separate companion repository that ships installable defaults, wrappers, or automation.

Scope the repository around the problem of bringing search into coding agents. SearXNG remains a priority option because it is privacy-aware and operator-controlled, but the repository should also compare native agent search, MCP adapters, hosted search APIs, browser-based retrieval, and local/private documentation search.

## Why This Name

- `awesome-*` signals a curated list or pattern library.
- `agent-search` keeps the focus broad enough for Codex, Claude Code, OpenClaw, and future agent runtimes.
- The name does not bind the project to SearXNG, Brave Search, Tavily, browser tooling, or any single vendor path.
- A single ecosystem name in the title makes the project feel narrower than it is.
- Searchability comes from the topic set, README copy, examples, and registry entries, not from stuffing names into the repo title.

## Reference Models

- `sindresorhus/awesome` for curation, list hygiene, and contribution rules.
- `ohmyzsh/ohmyzsh` for community maintenance, onboarding, and docs structure.
- `subinium/awesome-claude-code` for agent-focused taxonomy.
- `searxng/searx-instances` for structured submission and review flow.

## AI Workflow

1. Read `AGENTS.md`.
2. Read `registry/resources.json`.
3. Read `docs/best-practices.md` and the closest example or template.
4. Keep all paths, hosts, and identities public-safe.
5. When adding a durable resource, update the registry and any affected template.
6. When publishing research, include the question, method, findings, limitations, privacy notes, and a clear recommendation or acceptance criterion.

## Privacy Considerations

- Do not publish secrets, cookies, session material, or private endpoints.
- Sanitize local paths, personal identifiers, and deployment-specific hostnames.
- Keep private term lists and internal tuning notes outside the repository.

## Acceptance Criteria

- The repo clearly reads as a curated `awesome-*` project.
- AI contributors can find the entry point without guessing.
- The maintenance model stays public-safe and reviewable.
- The naming decision remains documented for future contributors.
