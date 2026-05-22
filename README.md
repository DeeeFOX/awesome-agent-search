# Awesome Agent Search

English | [中文](README.zh-CN.md)

[![Registry](https://img.shields.io/github/actions/workflow/status/DeeeFOX/awesome-agent-search/validate-registry.yml?branch=main&label=registry)](https://github.com/DeeeFOX/awesome-agent-search/actions/workflows/validate-registry.yml)
![Scope](https://img.shields.io/badge/focus-agent%20search-0b7285)
![Methods](https://img.shields.io/badge/methods-multi--backend-5c940d)
![Style](https://img.shields.io/badge/style-awesome--list-7950f2)

> Research and best practices for bringing external search into Codex, Claude Code, OpenClaw, and other coding agents.

A curated, public-safe, AI-readable research hub for agent search integration: native web search, MCP adapters, self-hosted search, hosted search APIs, browser/CDP retrieval, local documentation search, hybrid routing, evaluation, and implementation references.

## Contents

- [Why This Exists](#why-this-exists)
- [Search Options](#search-options)
- [For AI Agents](#for-ai-agents)
- [Why Awesome, Not Oh My](#why-awesome-not-oh-my)
- [Resources And References](#resources-and-references)
- [Appendix: Repository Navigation](#appendix-repository-navigation)
- [Contributing](#contributing)

## Why This Exists

Coding agents increasingly work against a changing external world: documentation, APIs, SDKs, release notes, package behavior, security advisories, product policies, issue threads, benchmarks, examples, and rendered web pages. Local repository context is necessary, but it ages quickly and cannot cover every public source an agent may need.

This repository helps answer a practical question:

> Which search route should an agent use for this task, and what are the tradeoffs?

It collects researched options, official entry points, best-practice notes, comparison criteria, and issue-ready research tasks so agent builders can choose between native search, MCP tools, self-hosted search, hosted APIs, browser retrieval, local documentation search, or hybrid routing without starting from a blank page.

## Search Options

| Option | Researched case / official entry | Best-practice entry | Strengths | Tradeoffs | Agent fit |
| --- | --- | --- | --- | --- | --- |
| Native or provider-managed web search | [OpenAI Web Search](https://developers.openai.com/api/docs/guides/tools-web-search), [Claude MCP Web Search](https://support.claude.com/en/articles/14503775-mcp-web-search) | [Search integration strategies](docs/comparisons/search-integration-strategies.md) | Fastest path when the runtime already provides search; integrated user experience. | Less control over backend choice, routing, logging, and reproducibility. | Codex and Claude Code when supported by runtime or workspace settings. |
| MCP search adapters | [Claude Code MCP docs](https://code.claude.com/docs/en/mcp) | [Claude Code MCP guide](docs/integrations/claude-code-mcp.md), [Comparison issue backlog](docs/roadmap/comparison-issues.md) | Explicit tool boundary; backend can be swapped; agent behavior is easier to audit. | Requires install scope, lifecycle, permissions, credentials, and schema management. | Claude Code, MCP-capable agents, and custom Codex/OpenClaw adapters. |
| Self-hosted SearXNG | [SearXNG docs](https://docs.searxng.org/) | [SearXNG deployment hardening](docs/hardening/searxng-deployment.md), [SearXNG MCP research note](docs/research/searxng-claude-code-mcp.md), [oh-my-agent-search](https://github.com/DeeeFOX/oh-my-agent-search) | Strong operator control over engines, formats, logs, and deployment policy. | Requires operations; engine availability and result quality vary by environment. | Claude Code verified through the companion; other agents through MCP or custom adapters. |
| Hosted search APIs | [Brave Search API](https://brave.com/search/api/), [Tavily API](https://docs.tavily.com/api-reference/introduction) | [Search backend comparison](docs/comparisons/search-backends.md), [Hosted API backlog](docs/roadmap/comparison-issues.md) | Managed availability; simple API shape; useful for product integrations. | Provider trust, data policy, quota, cost, and vendor-lock-in tradeoffs. | Any agent that can call tools, MCP servers, SDKs, or HTTP wrappers. |
| Browser/CDP retrieval | [eze-is/web-access](https://github.com/eze-is/web-access) | [web-access browser retrieval note](docs/research/web-access-browser-retrieval.md), [Browser retrieval backlog](docs/roadmap/comparison-issues.md) | Handles rendered pages, interaction, screenshots, and page-state evidence. | Slower and more brittle; browser profiles, cookies, sessions, and prompt injection need care. | Claude Code today through skill-style workflows; any browser-capable agent in principle. |
| Local or private documentation search | Repository search, docs mirrors, private indexes | [Best practices](docs/best-practices.md), [Evaluation](docs/evaluation.md) | Fast, reproducible, and avoids sending private context to external services. | Freshness depends on index maintenance and mirrored source coverage. | All agents; should usually be tried before external search. |
| Hybrid routing | Local docs + native search + MCP + APIs + browser retrieval | [Search integration strategies](docs/comparisons/search-integration-strategies.md), [Hybrid routing backlog](docs/roadmap/comparison-issues.md) | Chooses the lowest-risk route per query and task. | Needs clear policy, observability, fallback, and evaluation discipline. | Mature multi-tool agents and team-managed workflows. |

## For AI Agents

This repository is designed to be read by agents, not only humans.

AI agents should:

1. Read [AGENTS.md](AGENTS.md).
2. Read [registry/resources.json](registry/resources.json).
3. Pick the closest guide, comparison, research note, or template.
4. Keep every query, endpoint, path, and example public-safe.
5. Keep runnable install commands in the installable companion, not in this awesome list.
6. Run `make review` before submitting changes.

Durable resources must be registered in `registry/resources.json`. Translations should use `language` and `translationOf` metadata.

## Why Awesome, Not Oh My

Use `awesome-agent-search` for this repository because it is a curated research and best-practices hub.

An `oh-my-*` name implies an installable package, plugin framework, or one-command enhancement bundle. Runnable setup belongs in companion repositories such as [oh-my-agent-search](https://github.com/DeeeFOX/oh-my-agent-search).

See [Companion repository boundary](docs/companion-repository.md) for the split between curated guidance and runnable setup.

## Resources And References

| Category | Resource | Use it for |
| --- | --- | --- |
| Core practice | [Best practices](docs/best-practices.md) | Query design, fallback, logging, citation, and safe contribution rules. |
| Strategy comparison | [Search integration strategies](docs/comparisons/search-integration-strategies.md) | Choosing between native search, MCP, SearXNG, hosted APIs, browser retrieval, local docs, and hybrid routing. |
| Backend comparison | [Search backend comparison](docs/comparisons/search-backends.md) | Comparing native search, SearXNG, hosted APIs, browser retrieval, and direct search tradeoffs. |
| Browser route | [eze-is/web-access note](docs/research/web-access-browser-retrieval.md) | Understanding browser/CDP retrieval as a representative Claude Code path. |
| SearXNG route | [SearXNG deployment hardening](docs/hardening/searxng-deployment.md) | Hardening self-hosted or managed SearXNG for agent workflows. |
| MCP route | [Claude Code MCP guide](docs/integrations/claude-code-mcp.md) | Routing Claude Code search through explicit MCP tools. |
| Research queue | [Comparison issue backlog](docs/roadmap/comparison-issues.md) | Publishing focused comparison tasks as GitHub issues. |
| Registry | [Machine-readable registry](registry/resources.json) and [registry index](docs/registry-index.md) | Letting humans and agents discover durable resources. |
| Chinese docs | [中文 README](README.zh-CN.md) and [中文文档索引](docs/zh-CN/README.md) | Reading and searching the repository in Chinese. |
| Reference model | [sindresorhus/awesome](https://github.com/sindresorhus/awesome) | Curated-list conventions. |
| Reference model | [ohmyzsh/ohmyzsh](https://github.com/ohmyzsh/ohmyzsh) | Community docs and onboarding structure. |
| Reference model | [subinium/awesome-claude-code](https://github.com/subinium/awesome-claude-code) | AI coding-agent ecosystem taxonomy. |
| Reference model | [searxng/searx-instances](https://github.com/searxng/searx-instances) | Structured submission and review workflow. |

## Appendix: Repository Navigation

| Audience | Entry point | Use it for |
| --- | --- | --- |
| Humans | [Best practices](docs/best-practices.md) | Learn core agent search practices. |
| AI agents | [AGENTS.md](AGENTS.md) | Follow editing, validation, and privacy rules. |
| Integrators | [Integration guides](docs/integrations/README.md) | Connect agents to search tools, backends, and adapters. |
| Researchers | [Research notes](docs/research/README.md) | Read and contribute public-safe findings. |
| Maintainers | [Submission guide](docs/submission-guide.md) | Review issues, PRs, and registry entries. |

Repository layout:

- [docs/](docs): positioning, architecture, comparisons, integrations, hardening, i18n, research, evaluation, roadmap, launch, and submission guidance.
- [examples/](examples): minimal integration patterns by ecosystem.
- [registry/resources.json](registry/resources.json): machine-readable catalog.
- [templates/](templates): reusable integration and research templates.
- [schemas/](schemas): schema for structured registry data.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md), and [AGENTS.md](AGENTS.md) before opening a PR.

Run:

```sh
make review
```

Substantial contributions should state the problem, approach, expected benefit, privacy considerations, and acceptance criteria.

## License

MIT. See [LICENSE](LICENSE).
