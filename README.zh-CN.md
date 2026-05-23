# Awesome Agent Search

[English](README.md) | 中文

> 面向 Codex、Claude Code、OpenClaw 和其他 coding agents 的外部搜索能力接入调研与最佳实践。

一个精选、公开安全、AI 可读的 agent 搜索接入研究 hub：覆盖原生联网搜索、MCP 适配器、自托管搜索、hosted search API、浏览器/CDP 检索、本地文档搜索、混合路由、评估方法和实现参考。

## 目录

- [为什么需要它](#为什么需要它)
- [可选方案](#可选方案)
- [给 AI Agents](#给-ai-agents)
- [为什么是 Awesome，不是 Oh My](#为什么是-awesome不是-oh-my)
- [资源和参考](#资源和参考)
- [附录：仓库导航](#附录仓库导航)
- [贡献](#贡献)

## 为什么需要它

Coding agents 面对的是不断变化的外部世界：文档、API、SDK、release notes、包行为、安全公告、产品策略、issue threads、benchmark、示例代码和渲染后的网页。仅靠本地仓库上下文是不够的，因为它无法覆盖 agent 在真实任务中需要引用和验证的所有公开资料。

本仓库重点回答一个实际问题：

> Agent 在当前任务中应该使用哪一种搜索路径，以及它的取舍是什么？

这里整理被调研过的可选方案、官方入口、最佳实践说明、对比标准和可发布成 issue 的调研任务，帮助 agent builders 在原生搜索、MCP 工具、自托管搜索、hosted API、浏览器检索、本地文档搜索和混合路由之间做出有依据的选择。

## 可选方案

这张矩阵优先收录有明确公开入口的具体方案。`寻找中` 表示本仓库还没有确认可长期维护的安装或部署最佳实践入口；`调研中` 表示还没有独立调研报告。

| 方案 | 最佳实践 | 调研报告 | 优势 | 不足 | Agent 支持矩阵 |
| --- | --- | --- | --- | --- | --- |
| [OpenAI Web Search](https://developers.openai.com/api/docs/guides/tools-web-search) | 寻找中 | [搜索能力接入方案对比](docs/zh-CN/search-integration-strategies.md) | 所选 OpenAI runtime 已暴露 web search 时，接入成本低，检索路径集成度高。 | 对 backend choice、ranking、logs、routing 和可复现性的 operator 控制较弱。 | <a href="https://developers.openai.com/codex/cloud"><code>Codex</code></a> |
| [Claude MCP Web Search](https://support.claude.com/en/articles/14503775-mcp-web-search) | 寻找中 | [搜索能力接入方案对比](docs/zh-CN/search-integration-strategies.md) | 产品或 workspace 支持时，可用 Claude 侧托管路径，减少自建基础设施。 | 可用性受 Claude 产品、workspace、账号和地区影响；backend policy 由 provider 管理。 | <a href="https://code.claude.com/docs/"><code>Claude Code</code></a> |
| [SearXNG](https://docs.searxng.org/) | [oh-my-agent-search](https://github.com/DeeeFOX/oh-my-agent-search) | [SearXNG 搜索后端调研](docs/zh-CN/searxng-search-backend-research.md) | operator 可控引擎、JSON 输出、日志、留存和部署策略。 | 需要运维；engine availability 和结果质量受环境影响；API-style access 需要启用 JSON。 | <a href="https://code.claude.com/docs/"><code>Claude Code</code></a> <a href="https://developers.openai.com/codex/cloud"><code>Codex</code></a> <a href="https://openclaw.ai/"><code>OpenClaw</code></a> |
| [Brave Search API](https://brave.com/search/api/) | 寻找中 | [Brave Search API 调研](docs/zh-CN/brave-search-api.md) | Hosted independent-index web search，提供 structured source URLs、freshness controls、country/language targeting、extra snippets 和 reranking options。 | 需要管理 subscription token；cost/quota 条款易变；primary use 前应审查 privacy、retention、storage rights 和 live result quality。 | <a href="https://developers.openai.com/codex/cloud"><code>Codex</code></a> <a href="https://code.claude.com/docs/"><code>Claude Code</code></a> <a href="https://openclaw.ai/"><code>OpenClaw</code></a> <a href="https://modelcontextprotocol.io/"><code>MCP agents</code></a> |
| [Tavily API](https://docs.tavily.com/api-reference/introduction) | 寻找中 | 调研中 | API 形态更贴近 agent retrieval，适合结构化检索和产品化搜索工作流。 | 托管依赖；cost、quota、data policy 和 answer abstraction 可能降低透明度。 | <a href="https://developers.openai.com/codex/cloud"><code>Codex</code></a> <a href="https://code.claude.com/docs/"><code>Claude Code</code></a> <a href="https://openclaw.ai/"><code>OpenClaw</code></a> <a href="https://modelcontextprotocol.io/"><code>MCP agents</code></a> |
| [DuckDuckGo Instant Answer API](https://duckduckgo.com/api) | 寻找中 | [DuckDuckGo Instant Answer API 调研](docs/zh-CN/duckduckgo-instant-answer-api.md) | No-key instant-answer JSON 可支持轻量事实、实体查询、定义和 fallback routing signal。 | 不是完整 web search results API；官方文档可见性有限；language、freshness、coverage 和 schema stability 仍需更强验证。 | <a href="https://developers.openai.com/codex/cloud"><code>Codex</code></a> <a href="https://code.claude.com/docs/"><code>Claude Code</code></a> <a href="https://openclaw.ai/"><code>OpenClaw</code></a> <a href="https://modelcontextprotocol.io/"><code>MCP agents</code></a> |
| [eze-is/web-access](https://github.com/eze-is/web-access) | 寻找中 | [eze-is/web-access 与浏览器检索](docs/zh-CN/web-access-browser-retrieval.md) | 支持渲染页面、导航、交互、截图和页面状态证据。 | 比 search API 更慢且更脆弱；browser profile、cookie、session 和 prompt injection 需要严格处理。 | <a href="https://code.claude.com/docs/"><code>Claude Code</code></a> |

## 给 AI Agents

本仓库不只写给人看，也写给 AI agents 读。

AI agents 应该：

1. 读取 [AGENTS.md](AGENTS.md)。
2. 读取 [registry/resources.json](registry/resources.json)。
3. 选择最接近的 guide、comparison、research note 或 template。
4. 保持 query、endpoint、path 和 example 公开安全。
5. 可运行安装命令应放在安装型 companion，而不是放在这个 awesome list。
6. 提交前运行 `make review`。

长期可用资源必须写入 `registry/resources.json`。翻译资源应使用 `language` 和 `translationOf` 元数据。

## 为什么是 Awesome，不是 Oh My

这个仓库叫 `awesome-agent-search`，因为它是精选调研和最佳实践 hub。

`oh-my-*` 更像安装包、插件框架或一键增强工具。可运行设置应放在 companion 仓库，例如 [oh-my-agent-search](https://github.com/DeeeFOX/oh-my-agent-search)。

当前 awesome 仓库和可安装 companion 的边界见 [Companion repository boundary](docs/companion-repository.md)。

## 资源和参考

| 分类 | 资源 | 用途 |
| --- | --- | --- |
| 核心实践 | [最佳实践](docs/zh-CN/best-practices.md) | query design、fallback、logging、citation 和安全贡献规则。 |
| 策略对比 | [搜索能力接入方案对比](docs/zh-CN/search-integration-strategies.md) | 在原生搜索、MCP、SearXNG、hosted APIs、浏览器检索、本地文档和混合路由之间做选择。 |
| SearXNG 调研 | [SearXNG 搜索后端调研](docs/zh-CN/searxng-search-backend-research.md) | 理解 SearXNG 何时适合 agent search，以及应该选择哪种部署形态。 |
| Hosted API 调研 | [Brave Search API 调研](docs/zh-CN/brave-search-api.md) | 理解 Brave Search API 作为 hosted independent-index search candidate 的适用边界。 |
| Fallback 调研 | [DuckDuckGo Instant Answer API 调研](docs/zh-CN/duckduckgo-instant-answer-api.md) | 理解 DuckDuckGo Instant Answer API 作为轻量 fallback，而不是主搜索后端。 |
| 浏览器路线 | [eze-is/web-access 笔记](docs/zh-CN/web-access-browser-retrieval.md) | 理解 browser/CDP retrieval 作为 Claude Code 代表路径的价值和限制。 |
| MCP 路线 | [Claude Code MCP guide](docs/integrations/claude-code-mcp.md) | 通过显式 MCP tools 为 Claude Code 接入搜索。 |
| 调研队列 | [对比调研 issue backlog](docs/zh-CN/comparison-issues.md) | 将聚焦的对比任务发布成 GitHub issues。 |
| Registry | [Machine-readable registry](registry/resources.json) 和 [registry index](docs/registry-index.md) | 帮助人和 agents 发现长期资源。 |
| 英文文档 | [English README](README.md) | 英文 canonical source。 |
| 参考项目 | [sindresorhus/awesome](https://github.com/sindresorhus/awesome) | curated-list 规范。 |
| 参考项目 | [ohmyzsh/ohmyzsh](https://github.com/ohmyzsh/ohmyzsh) | 社区文档和 onboarding 结构。 |
| 参考项目 | [subinium/awesome-claude-code](https://github.com/subinium/awesome-claude-code) | AI coding-agent 生态分类。 |
| 参考项目 | [searxng/searx-instances](https://github.com/searxng/searx-instances) | 结构化提交和 review workflow。 |

## 附录：仓库导航

| 读者 | 入口 | 用途 |
| --- | --- | --- |
| 人类读者 | [最佳实践](docs/zh-CN/best-practices.md) | 理解核心 agent 搜索实践。 |
| AI agents | [AGENTS.md](AGENTS.md) | 遵守编辑、验证和隐私规则。 |
| 集成者 | [集成指南](docs/integrations/README.md) | 将 agent 接入搜索工具、后端和适配器。 |
| 研究者 | [研究笔记](docs/research/README.md) | 阅读和贡献公开安全的研究结果。 |
| 维护者 | [提交指南](docs/submission-guide.md) | 审核 issue、PR 和 registry entries。 |

仓库结构：

- [docs/](docs): 定位、架构、对比、集成、i18n、研究、评估、roadmap、发布和提交指南。
- [examples/](examples): 按生态划分的最小集成模式。
- [registry/resources.json](registry/resources.json): 机器可读资源目录。
- [templates/](templates): 可复用的集成和研究模板。
- [schemas/](schemas): registry 数据结构 schema。

## 贡献

提交前阅读 [CONTRIBUTING.md](CONTRIBUTING.md)、[SECURITY.md](SECURITY.md) 和 [AGENTS.md](AGENTS.md)。

运行：

```sh
make review
```

重要贡献应说明 problem、approach、expected benefit、privacy considerations 和 acceptance criteria。

## License

MIT. See [LICENSE](LICENSE).
