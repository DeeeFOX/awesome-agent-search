# awesome-agent-search

English | [中文](README.zh-CN.md)

[![Registry](https://img.shields.io/github/actions/workflow/status/DeeeFOX/awesome-agent-search/validate-registry.yml?branch=main&label=registry)](https://github.com/DeeeFOX/awesome-agent-search/actions/workflows/validate-registry.yml)
![Scope](https://img.shields.io/badge/focus-agent%20search-0b7285)
![Engine](https://img.shields.io/badge/powered%20by-SearXNG-5c940d)

A curated, AI-readable hub for improving coding-agent search with SearXNG.

It collects public-safe best practices, integration patterns, evaluation methods, and research templates for Codex, Claude Code, OpenClaw, and other coding agents.

## Start Here

| Audience | Entry point | Use it for |
| --- | --- | --- |
| Humans | [docs/best-practices.md](docs/best-practices.md) | Understand privacy-aware search patterns. |
| Chinese readers | [README.zh-CN.md](README.zh-CN.md) | Read the Chinese entry point and translated core docs. |
| AI agents | [AGENTS.md](AGENTS.md) | Follow repository rules before editing. |
| Maintainers | [docs/submission-guide.md](docs/submission-guide.md) | Review issues, PRs, and research notes. |
| Researchers | [docs/research/README.md](docs/research/README.md) | Read public-safe research notes and add new findings. |
| Integrators | [examples/](examples) | Adapt a minimal pattern for an agent runtime. |
| Operators | [docs/hardening/searxng-deployment.md](docs/hardening/searxng-deployment.md) | Harden SearXNG-backed agent search. |
| Launch reviewers | [docs/launch-checklist.md](docs/launch-checklist.md) | Verify public-readiness before announcing. |

## Ecosystem Entrypoints

| Ecosystem | Example | Focus |
| --- | --- | --- |
| Codex | [examples/codex/README.md](examples/codex/README.md) | Search as an explicit, auditable tool path. |
| Claude Code | [docs/integrations/claude-code-mcp.md](docs/integrations/claude-code-mcp.md) | MCP search integration with safe project boundaries. |
| OpenClaw | [examples/openclaw/README.md](examples/openclaw/README.md) | Operator-managed search hooks and review gates. |
| Generic agents | [examples/generic/README.md](examples/generic/README.md) | Cross-agent patterns that avoid runtime-specific assumptions. |

## Positioning

This repository is intentionally an `awesome-*` style project: curated guidance, examples, and registry data.

It is not an `oh-my-*` installation bundle. If this work later needs installable defaults or automation, that should live in a separate companion project.

See [docs/positioning.md](docs/positioning.md) for the naming and maintenance rationale.

## What This Repository Contains

- privacy-aware search patterns
- integration guides
- deployment hardening checklists
- bilingual entry points for English and Chinese readers
- agent-specific integration examples
- structured machine-readable resources
- research and evaluation templates
- public-safe research notes
- contribution workflows for humans and AI agents

## Quick Start

1. Read [docs/positioning.md](docs/positioning.md).
2. Read [docs/best-practices.md](docs/best-practices.md).
3. Review [registry/resources.json](registry/resources.json).
4. Pick the closest example under [examples/](examples).
5. Use [templates/](templates) for new integration or research submissions.
6. Run `make review` before opening a PR.

## Design Principles

- privacy first
- reproducible guidance
- small, composable patterns
- machine-readable structure
- public-safe examples only

## Repository Layout

- [docs/](docs): positioning, architecture, integrations, hardening, i18n, research, evaluation, launch, and submission guidance
- [examples/](examples): minimal integration patterns by ecosystem
- [registry/resources.json](registry/resources.json): machine-readable catalog
- [templates/](templates): reusable authoring templates
- [schemas/](schemas): schema for structured registry data

## Suggested GitHub Topics

`awesome-list`, `agents`, `coding-agents`, `searxng`, `codex`, `claude-code`, `openclaw`, `search`, `privacy`, `agent-tools`

## v0.1 Roadmap

- publish the core best-practice guide
- keep the registry complete for durable docs and examples
- add one minimal integration pattern per supported ecosystem
- add repeatable evaluation notes for relevance, latency, and privacy cost
- keep public examples free of secrets, session material, private endpoints, and personal identifiers

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md) before opening a PR.

## License

MIT. See [LICENSE](LICENSE).
