# MCP SearXNG Server 对比

[English canonical source](../comparisons/mcp-searxng-servers.md) | [中文文档索引](README.md)

## 范围

本文比较公开的 MCP-to-SearXNG bridge 项目。这些项目可以帮助 coding agents 通过 SearXNG backend 进行联网搜索。

研究日期：2026-05-22。

这是一份观察型 adapter matrix，不是完整 benchmark。在把某个 server 作为安装型 `oh-my-*` companion 的默认选择前，应重新验证 package health、命令语法和安全状态。

## 基线要求

一个 SearXNG MCP bridge 应该：

- 使用可信 SearXNG endpoint
- 支持 JSON 搜索输出
- 暴露窄范围搜索工具，并限制结果数量
- 避免把 endpoint 和 credential 写入提交文件
- 说明 transport 类型和 Claude Code scope
- 默认避免随机公共实例选择
- 将 URL reading 设为可选能力，并单独治理

## 协议笔记

Claude Code 通过 `claude mcp add`、`claude mcp list`、`claude mcp get` 和 session 内 `/mcp` 面板支持 MCP servers。对于 remote MCP servers，在 HTTP 可用时推荐 HTTP transport。SSE 在 HTTP 可用时已经不再是优先选择。Local stdio servers 对命令型 adapters 仍然有用。

Project-scoped MCP 配置可以通过 `.mcp.json` 共享，但风险更高，因为它会进入版本控制，并需要用户批准。对 SearXNG 搜索而言，除非团队已经审查具体 adapter 和 endpoint policy，否则优先使用 `local` 或 `user` scope。

SearXNG JSON 输出不是天然保证的。Search API 只有在 `settings.yml` 中启用目标 format 时才返回 JSON；请求未启用的 format 可能返回 `403 Forbidden`，很多公共实例会禁用非 HTML format。

## 对比矩阵

| 项目 | Runtime | Transport 形态 | SearXNG endpoint 配置 | 适配性 | 主要风险 |
| --- | --- | --- | --- | --- | --- |
| [ihor-sokoliuk/mcp-searxng](https://github.com/ihor-sokoliuk/mcp-searxng) | Node.js / npm / Docker | 默认 stdio，也支持通过 `MCP_HTTP_PORT` 使用 HTTP mode | `SEARXNG_URL` | Claude Code starter 的强候选：有清晰 `npx` 和 Docker 路径，支持 search、URL reading、pagination、language、time range 和 safe-search options。 | URL reading 必须治理。HTTP mode 会增加 service boundary，需要 auth、network 和 timeout review。 |
| [SecretiveShell/MCP-searxng](https://github.com/SecretiveShell/MCP-searxng) | Python / uvx | stdio | `SEARXNG_URL`，未设置时默认 local SearXNG URL | 适合熟悉 `uvx` 的用户作为轻量 fallback。 | README 示例更偏 Claude Desktop，不是 Claude Code 专用。本地复制示例包含机器相关路径，不能复制进公开文档。 |
| [The-AI-Workshops/searxng-mcp-server](https://github.com/The-AI-Workshops/searxng-mcp-server) | Python / Docker / Smithery | SSE 和 stdio | `SEARXNG_BASE_URL` | 可作为构建或研究 SearXNG MCP server 的模板。 | SSE-first 叙述不太适合新的 Claude Code 指引，因为 Claude Code docs 在 HTTP 可用时更推荐 HTTP。示例包含需要脱敏的环境特定端口和路径。 |
| [tisDDM/searxng-mcp](https://github.com/tisDDM/searxng-mcp) | Node.js | stdio | `SEARXNG_URL`，可选随机公共实例选择 | 可作为早期 SearXNG MCP 模式的历史参考。 | 仓库标记为 deprecated。随机公共实例 fallback 不是 coding-agent 搜索的安全默认值。 |

## 本仓库的推荐默认值

`awesome-agent-search` 应保持 adapter-neutral。

可以用这些文档定义要求和比较候选，但在完成以下验证前，不应把某个 package 设为 canonical default：

- 可信 SearXNG endpoint 已启用 JSON
- `claude mcp add` 安装验证
- `claude mcp list` 和 `/mcp` 状态检查
- 至少一个公开安全的搜索 smoke test
- 一个 private-context leakage negative test
- 当 adapter 暴露 page fetch tools 时，完成 URL-reading risk review

## Companion Starter 默认候选

对 [oh-my-agent-search](https://github.com/DeeeFOX/oh-my-agent-search)，第一个应验证的候选是 `ihor-sokoliuk/mcp-searxng`。

理由：

- 它暴露 `npx -y mcp-searxng` 路径，能自然映射到 Claude Code stdio MCP 命令
- 它支持 Docker，适合偏好进程隔离的用户
- 当 HTTP mode 启用时，它记录了 health endpoint
- 它明确依赖 SearXNG HTTP JSON API 行为
- 它记录了 JSON 输出未启用时常见的 `403 Forbidden` failure mode

这仍应被视为候选，而不是保证。Starter 仓库应该 pin versions，提供 doctor command，并在要求用户信任工具前测试配置的 endpoint。

## Bootstrap 验收标准

在 README 声称 "Claude Code can add SearXNG search" 之前，应证明：

- SearXNG endpoint 对 `format=json` 有响应
- MCP server 能在 Claude Code 下启动
- `/mcp` 至少显示一个 search tool
- 类似 `SearXNG Search API official docs` 的 query 能返回公开来源
- agent instruction 禁止把 secrets、私有 endpoint、本机绝对路径、私有 issue 文本和私有源码片段放入 query
- workflow 在使用外部事实前引用打开过的公开 URL

## 来源链接

- [Claude Code MCP documentation](https://code.claude.com/docs/en/mcp)
- [SearXNG Search API documentation](https://docs.searxng.org/dev/search_api.html)
- [SearXNG settings documentation](https://docs.searxng.org/admin/settings/settings.html)
- [ihor-sokoliuk/mcp-searxng](https://github.com/ihor-sokoliuk/mcp-searxng)
- [SecretiveShell/MCP-searxng](https://github.com/SecretiveShell/MCP-searxng)
- [The-AI-Workshops/searxng-mcp-server](https://github.com/The-AI-Workshops/searxng-mcp-server)
- [tisDDM/searxng-mcp](https://github.com/tisDDM/searxng-mcp)
