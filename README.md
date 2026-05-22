# Awesome Agent Search

English | [中文](README.zh-CN.md)

[![Registry](https://img.shields.io/github/actions/workflow/status/DeeeFOX/awesome-agent-search/validate-registry.yml?branch=main&label=registry)](https://github.com/DeeeFOX/awesome-agent-search/actions/workflows/validate-registry.yml)
![Scope](https://img.shields.io/badge/focus-agent%20search-0b7285)
![Engine](https://img.shields.io/badge/powered%20by-SearXNG-5c940d)
![Style](https://img.shields.io/badge/style-awesome--list-7950f2)

> SearXNG-powered search best practices for Codex, Claude Code, OpenClaw, and other coding agents.

A curated, public-safe, AI-readable guide to better coding-agent search: query design, SearXNG integration, MCP patterns, deployment hardening, evaluation, and research notes.

## Contents

- [Why This Exists](#why-this-exists)
- [Start Here](#start-here)
- [Featured Resources](#featured-resources)
- [Ecosystem Entrypoints](#ecosystem-entrypoints)
- [Curated Sections](#curated-sections)
- [For AI Agents](#for-ai-agents)
- [Why Awesome, Not Oh My](#why-awesome-not-oh-my)
- [Inspired By](#inspired-by)
- [Contributing](#contributing)

## Why This Exists

Coding agents are only as good as the information they can safely retrieve. Search becomes risky when agents send private context to the web, trust weak sources, over-query public instances, or hide retrieval inside broad prompts.

This repository collects practical patterns for using SearXNG as a privacy-aware search layer for coding agents.

## Start Here

| Audience | Entry point | Use it for |
| --- | --- | --- |
| Humans | [Best practices](docs/best-practices.md) | Learn privacy-aware agent search patterns. |
| Chinese readers | [中文 README](README.zh-CN.md) | Read the Chinese entry point and translated core docs. |
| AI agents | [AGENTS.md](AGENTS.md) | Follow editing, validation, and privacy rules. |
| Integrators | [Integration guides](docs/integrations/README.md) | Connect agents to SearXNG-backed search. |
| Operators | [Deployment hardening](docs/hardening/searxng-deployment.md) | Harden SearXNG for agent workflows. |
| Researchers | [Research notes](docs/research/README.md) | Read and contribute public-safe findings. |
| Maintainers | [Submission guide](docs/submission-guide.md) | Review issues, PRs, and registry entries. |

## Featured Resources

- [Best practices](docs/best-practices.md) - query design, fallback, rate limits, logging, and source handling.
- [Claude Code MCP guide](docs/integrations/claude-code-mcp.md) - explicit MCP search flow with safe boundaries.
- [Claude Code bootstrap requirements](docs/integrations/claude-code-bootstrap-requirements.md) - requirements that a safe Claude Code starter must satisfy.
- [oh-my-agent-search](https://github.com/DeeeFOX/oh-my-agent-search) - installable companion for runnable Claude Code setup, checks, and lifecycle docs.
- [SearXNG deployment hardening](docs/hardening/searxng-deployment.md) - operator checklist for safer agent search.
- [SearXNG MCP research note](docs/research/searxng-claude-code-mcp.md) - sanitized findings derived from local research.
- [Search backend comparison](docs/comparisons/search-backends.md) - SearXNG, public instances, hosted APIs, and direct search tradeoffs.
- [MCP SearXNG server comparison](docs/comparisons/mcp-searxng-servers.md) - adapter matrix for Claude Code and installable starters.
- [Companion repository boundary](docs/companion-repository.md) - boundary between this awesome list and `oh-my-agent-search`.
- [Machine-readable registry](registry/resources.json) - structured resource map for humans and AI agents.
- [Chinese best practices](docs/zh-CN/best-practices.md) - Chinese translation of the core guide.
- [Registry index](docs/registry-index.md) - human-readable view generated from the machine registry.

## Ecosystem Entrypoints

| Ecosystem | Resource | Focus |
| --- | --- | --- |
| Codex | [Codex example](examples/codex/README.md) | Search as an explicit, auditable tool path. |
| Claude Code | [Claude Code MCP guide](docs/integrations/claude-code-mcp.md) | MCP-backed search with project-boundary hygiene. |
| OpenClaw | [OpenClaw example](examples/openclaw/README.md) | Operator-managed search hooks and review gates. |
| Generic agents | [Generic example](examples/generic/README.md) | Cross-agent patterns without runtime-specific assumptions. |

## Curated Sections

### Best Practices

- [Core best practices](docs/best-practices.md)
- [Known issues and decisions](docs/known-issues.md)
- [Evaluation dimensions](docs/evaluation.md)

### Integrations

- [Integration guide index](docs/integrations/README.md)
- [Claude Code MCP guide](docs/integrations/claude-code-mcp.md)
- [Claude Code bootstrap requirements](docs/integrations/claude-code-bootstrap-requirements.md)
- [Codex example](examples/codex/README.md)
- [Claude Code example](examples/claude-code/README.md)
- [OpenClaw example](examples/openclaw/README.md)
- [Generic example](examples/generic/README.md)

### Hardening

- [Hardening checklist index](docs/hardening/README.md)
- [SearXNG deployment hardening](docs/hardening/searxng-deployment.md)
- [Security policy](SECURITY.md)

### Research And Evaluation

- [Companion repository boundary](docs/companion-repository.md)
- [Research note index](docs/research/README.md)
- [SearXNG MCP integration for Claude Code](docs/research/searxng-claude-code-mcp.md)
- [Search backend comparison](docs/comparisons/search-backends.md)
- [MCP SearXNG server comparison](docs/comparisons/mcp-searxng-servers.md)
- [Research report template](templates/research-report-template.md)

### Bilingual Docs

- [Chinese README](README.zh-CN.md)
- [Chinese docs index](docs/zh-CN/README.md)
- [Chinese discovery keywords](docs/zh-CN/discovery.md)
- [Chinese best practices](docs/zh-CN/best-practices.md)
- [Chinese search backend comparison](docs/zh-CN/search-backends.md)
- [Chinese MCP SearXNG server comparison](docs/zh-CN/mcp-searxng-servers.md)
- [Chinese Claude Code MCP guide](docs/zh-CN/claude-code-mcp.md)
- [Chinese SearXNG deployment hardening](docs/zh-CN/searxng-deployment-hardening.md)
- [Chinese SearXNG Claude Code MCP research note](docs/zh-CN/searxng-claude-code-mcp.md)
- [Internationalization policy](docs/i18n.md)

### Machine-Readable Layer

- [Agent guide](AGENTS.md)
- [Resource registry](registry/resources.json)
- [Registry index](docs/registry-index.md)
- [Resource schema](schemas/resource.schema.json)
- [Registry validator](scripts/validate-registry.mjs)

### Launch And Sharing

- [Social preview guide](docs/social-preview.md)
- [Social preview PNG](assets/social-preview.png)
- [Launch post](docs/launch-post.md)
- [Launch checklist](docs/launch-checklist.md)

## For AI Agents

This repository is designed to be read by agents, not only humans.

AI agents should:

1. Read [AGENTS.md](AGENTS.md).
2. Read [registry/resources.json](registry/resources.json).
3. Pick the closest guide, example, or template.
4. Keep every query, endpoint, path, and example public-safe.
5. Keep runnable install commands in the installable companion, not in this awesome list.
6. Run `make review` before submitting changes.

Durable resources must be registered in `registry/resources.json`. Translations should use `language` and `translationOf` metadata.

## Why Awesome, Not Oh My

Use `awesome-agent-search` for this repository because it is a curated best-practices and integration hub.

An `oh-my-*` name implies an installable package, plugin framework, or one-command enhancement bundle. Runnable setup belongs in the separate [oh-my-agent-search](https://github.com/DeeeFOX/oh-my-agent-search) companion.

See [Companion repository boundary](docs/companion-repository.md) for the split between curated guidance and runnable setup.

## Inspired By

- [sindresorhus/awesome](https://github.com/sindresorhus/awesome) - curated-list conventions.
- [ohmyzsh/ohmyzsh](https://github.com/ohmyzsh/ohmyzsh) - community docs and onboarding structure.
- [subinium/awesome-claude-code](https://github.com/subinium/awesome-claude-code) - AI coding-agent ecosystem taxonomy.
- [searxng/searx-instances](https://github.com/searxng/searx-instances) - structured submission and review workflow.
- [SearXNG docs](https://docs.searxng.org/) - SearXNG behavior, configuration, and operations.

## Repository Layout

- [docs/](docs): positioning, architecture, integrations, hardening, i18n, research, evaluation, launch, and submission guidance.
- [examples/](examples): minimal integration patterns by ecosystem.
- [registry/resources.json](registry/resources.json): machine-readable catalog.
- [templates/](templates): reusable integration and research templates.
- [schemas/](schemas): schema for structured registry data.

## Suggested GitHub Topics

`awesome-list`, `agents`, `coding-agents`, `searxng`, `codex`, `claude-code`, `openclaw`, `search`, `privacy`, `agent-tools`

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md), and [AGENTS.md](AGENTS.md) before opening a PR.

Run:

```sh
make review
```

Substantial contributions should state the problem, approach, expected benefit, privacy considerations, and acceptance criteria.

## License

MIT. See [LICENSE](LICENSE).
