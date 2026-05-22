# Registry Index

This file is generated from `registry/resources.json`.

Run:

```sh
make generate-registry-index
```

## Best Practices

| Resource | Type | Ecosystem | Maturity | Language | Summary |
| --- | --- | --- | --- | --- | --- |
| [Best practices](../docs/best-practices.md) | `best-practice` | `multi-agent` | `recommended` | `en` | Core privacy-aware practices for query design, retrieval, fallback, logging, and agent contributions. |
| [Best practices zh-CN](../docs/zh-CN/best-practices.md) | `best-practice` | `multi-agent` | `starter` | `zh-CN` -> `best-practices` | Chinese translation of the core privacy-aware search best practices. |
| [SearXNG deployment hardening](../docs/hardening/searxng-deployment.md) | `best-practice` | `multi-agent` | `recommended` | `en` | Checklist for hardening SearXNG instances used by coding-agent search workflows. |
| [SearXNG 部署加固](../docs/zh-CN/searxng-deployment-hardening.md) | `best-practice` | `multi-agent` | `starter` | `zh-CN` -> `searxng-deployment-hardening` | 面向 coding-agent 搜索工作流的 SearXNG 部署加固中文对照清单。 |

## Integrations

| Resource | Type | Ecosystem | Maturity | Language | Summary |
| --- | --- | --- | --- | --- | --- |
| [Claude Code bootstrap requirements](../docs/integrations/claude-code-bootstrap-requirements.md) | `integration` | `claude-code` | `starter` | `en` | Requirements and acceptance criteria for safe Claude Code SearXNG MCP bootstrap flows. |
| [Claude Code Bootstrap 要求](../docs/zh-CN/claude-code-bootstrap-requirements.md) | `integration` | `claude-code` | `starter` | `zh-CN` -> `claude-code-bootstrap-requirements` | Claude Code SearXNG MCP bootstrap flow 应满足要求的中文对照说明。 |
| [Claude Code example](../examples/claude-code/README.md) | `integration` | `claude-code` | `starter` | `en` | Claude Code-oriented pattern for controlled search routing and project boundary hygiene. |
| [Claude Code MCP guide](../docs/integrations/claude-code-mcp.md) | `integration` | `claude-code` | `starter` | `en` | Public-safe guide for routing Claude Code search through an MCP server backed by SearXNG. |
| [Claude Code MCP 指南](../docs/zh-CN/claude-code-mcp.md) | `integration` | `claude-code` | `starter` | `zh-CN` -> `claude-code-mcp-guide` | Claude Code 通过 MCP 使用 SearXNG 搜索的中文对照指南。 |
| [Codex example](../examples/codex/README.md) | `integration` | `codex` | `starter` | `en` | Codex-oriented pattern for explicit search flow, prompt boundaries, and public-safe configuration. |
| [Generic example](../examples/generic/README.md) | `integration` | `generic` | `starter` | `en` | Minimal public-safe example entry point for cross-agent patterns. |
| [OpenClaw example](../examples/openclaw/README.md) | `integration` | `openclaw` | `starter` | `en` | OpenClaw-oriented pattern for operator-approved search hooks, artifacts, and review gates. |

## Research

| Resource | Type | Ecosystem | Maturity | Language | Summary |
| --- | --- | --- | --- | --- | --- |
| [Evaluation](../docs/evaluation.md) | `research` | `multi-agent` | `starter` | `en` | Evaluation dimensions for comparing agent search approaches. |
| [MCP SearXNG server comparison](../docs/comparisons/mcp-searxng-servers.md) | `research` | `claude-code` | `experimental` | `en` | Adapter matrix for SearXNG MCP bridge projects and Claude Code bootstrap readiness. |
| [MCP SearXNG server 对比](../docs/zh-CN/mcp-searxng-servers.md) | `research` | `claude-code` | `experimental` | `zh-CN` -> `mcp-searxng-server-comparison` | 面向 Claude Code 和安装型 starter 的 MCP-to-SearXNG bridge 对比中文翻译。 |
| [Research notes](../docs/research/README.md) | `research` | `multi-agent` | `starter` | `en` | Index of sanitized public research notes derived from experiments, comparisons, and integration studies. |
| [Search backend comparison](../docs/comparisons/search-backends.md) | `research` | `multi-agent` | `starter` | `en` | Comparison of SearXNG, public instances, hosted search APIs, and direct web search for coding agents. |
| [搜索后端对比](../docs/zh-CN/search-backends.md) | `research` | `multi-agent` | `starter` | `zh-CN` -> `search-backend-comparison` | SearXNG、公共实例、hosted API 和 direct search 取舍的中文对照翻译。 |
| [SearXNG MCP integration for Claude Code](../docs/research/searxng-claude-code-mcp.md) | `research` | `claude-code` | `starter` | `en` | Sanitized research note on using SearXNG through MCP for Claude Code and adjacent agent workflows. |
| [SearXNG MCP 与 Claude Code 集成研究](../docs/zh-CN/searxng-claude-code-mcp.md) | `research` | `claude-code` | `starter` | `zh-CN` -> `searxng-claude-code-mcp-research` | SearXNG 通过 MCP 用于 Claude Code 和相邻 agent workflows 的中文研究笔记。 |

## References

| Resource | Type | Ecosystem | Maturity | Language | Summary |
| --- | --- | --- | --- | --- | --- |
| [Agent guide](../AGENTS.md) | `reference` | `multi-agent` | `recommended` | `en` | Repository-level operating rules for autonomous agent contributors. |
| [Architecture](../docs/architecture.md) | `reference` | `multi-agent` | `recommended` | `en` | Repository structure and content-layer model for humans and AI agents. |
| [Companion repository boundary](../docs/companion-repository.md) | `reference` | `multi-agent` | `starter` | `en` | Boundary between the awesome-agent-search knowledge base and the oh-my-agent-search installable companion. |
| [Hardening checklists](../docs/hardening/README.md) | `reference` | `multi-agent` | `starter` | `en` | Index of deployment and operational hardening checklists for SearXNG-backed agent search. |
| [Internationalization policy](../docs/i18n.md) | `reference` | `multi-agent` | `recommended` | `en` | Bilingual documentation policy for English canonical docs and selected Chinese translations. |
| [Integration guides](../docs/integrations/README.md) | `reference` | `multi-agent` | `starter` | `en` | Index of public-safe integration guides for connecting coding agents to SearXNG-backed search. |
| [Integration template](../templates/integration-template.md) | `reference` | `generic` | `starter` | `en` | Reusable template for public-safe search integration examples. |
| [Known issues](../docs/known-issues.md) | `reference` | `multi-agent` | `recommended` | `en` | Known constraints and deliberate repository decisions. |
| [Launch checklist](../docs/launch-checklist.md) | `reference` | `multi-agent` | `recommended` | `en` | Pre-launch checklist for metadata, content baseline, privacy review, AI readiness, and validation. |
| [Launch post](../docs/launch-post.md) | `reference` | `multi-agent` | `starter` | `en` | Reusable English and Chinese launch copy for sharing the repository publicly. |
| [License](../LICENSE) | `reference` | `multi-agent` | `recommended` | `en` | MIT license for repository content and supporting scripts. |
| [Positioning and naming](../docs/positioning.md) | `reference` | `multi-agent` | `recommended` | `en` | Rationale for using an awesome-style name and maintenance model. |
| [Registry index](../docs/registry-index.md) | `reference` | `multi-agent` | `recommended` | `en` | Human-readable resource index generated from the machine-readable registry. |
| [Repository overview](../README.md) | `reference` | `multi-agent` | `recommended` | `en` | Human-readable entry point for the repository scope, quick start, and layout. |
| [Repository overview zh-CN](../README.zh-CN.md) | `reference` | `multi-agent` | `starter` | `zh-CN` -> `repository-overview` | Chinese entry point for repository scope, quick start, and bilingual navigation. |
| [Research report template](../templates/research-report-template.md) | `reference` | `generic` | `starter` | `en` | Reusable template for publishing research findings and limitations. |
| [Social preview guide](../docs/social-preview.md) | `reference` | `multi-agent` | `starter` | `en` | Setup notes for using the repository social preview artwork on GitHub. |
| [Social preview PNG](../assets/social-preview.png) | `reference` | `multi-agent` | `starter` | `en` | Public repository social preview image for link sharing and launch posts. |
| [Social preview SVG](../assets/social-preview.svg) | `reference` | `multi-agent` | `starter` | `en` | Editable source artwork for the repository social preview image. |
| [Submission guide](../docs/submission-guide.md) | `reference` | `multi-agent` | `recommended` | `en` | Contribution requirements for public-safe docs, examples, and research notes. |
| [中文搜索发现](../docs/zh-CN/discovery.md) | `reference` | `multi-agent` | `starter` | `zh-CN` | Chinese keyword and entry-point page for GitHub search discovery and AI-agent navigation. |
| [Chinese documentation index](../docs/zh-CN/README.md) | `reference` | `multi-agent` | `starter` | `zh-CN` | Chinese-language index for translated docs and bilingual navigation. |

## Tools

| Resource | Type | Ecosystem | Maturity | Language | Summary |
| --- | --- | --- | --- | --- | --- |
| [Registry index generator](../scripts/generate-registry-index.mjs) | `tool` | `multi-agent` | `recommended` | `en` | Node.js script that generates the human-readable registry index from registry/resources.json. |
