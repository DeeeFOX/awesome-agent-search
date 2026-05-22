# 搜索能力接入方案对比

[English canonical source](../comparisons/search-integration-strategies.md) | [中文文档索引](README.md)

## 问题

Coding agents 需要最新外部信息，但“加联网搜索”不是单一实现选择。搜索能力可以通过 agent 原生功能、MCP 工具、自托管搜索服务、hosted search API、浏览器自动化或本地文档索引进入 agent。

本文先比较接入策略，再选择具体后端。它适合用于定义 research issues、验收标准和后续对比任务。

## 策略矩阵

| 策略 | 最适合 | 优势 | 取舍 |
| --- | --- | --- | --- |
| 原生或 provider-managed web search | agent runtime 已提供搜索能力、希望低成本启用 | 设置少、体验集成、组件少 | 对 routing、logging、backend choice、policy 和可复现性的控制较弱 |
| MCP 搜索适配器 | 能通过 MCP 或类似协议调用外部工具的 agent runtime | 工具边界明确、模式可移植、后端可替换 | 需要管理 lifecycle、权限、prompt injection 和 tool surface |
| 自托管搜索聚合器 | 需要隐私、策略控制和可复现配置的团队 | operator 可控、配置可审查、engine mix 可定制 | 有部署和维护成本 |
| Hosted search API | 需要快速 API 集成和稳定响应形态的产品 | 集成简单、托管可用性、通常更适合 agent 消费 | 需要考虑 provider trust、配额、成本、数据政策和 vendor lock-in |
| 浏览器检索 | 需要页面渲染、交互或视觉验证的页面 | 能看到渲染后页面，可验证 UI 状态，可支持截图 | 更慢、更脆弱，prompt injection 风险更高，browser profile 隐私更复杂 |
| 本地或私有文档搜索 | 仓库、docs mirror、内部知识库和 offline-first 工作流 | 避免外部泄漏、快速、可复现 | 除非索引持续更新，否则 freshness 有限 |
| 混合路由 | 成熟工作流中存在多种搜索需求 | 可按 query 选择最低风险路径 | 需要更多 policy、评估和 observability |

## 研究问题

推荐在选择策略前先回答这些问题：

- 本地上下文缺少什么信息？
- query 需要 live web freshness、官方文档、渲染后页面状态，还是本地/私有文档？
- query 会进入哪个 trust boundary？
- agent 能否展示 query、选中的来源和限制？
- 搜索路径是否可禁用、可审计、可替换？
- 当路径失败、超时或返回弱来源时，fallback 是什么？
- 哪些结论必须来自打开过的来源，而不是 snippet？

## 策略说明

### 原生或 Provider-Managed Web Search

当 runtime 已经支持搜索、用户又希望最小设置时，原生搜索很有吸引力。它也是重要的 baseline，因为很多用户会先问自己是否能依赖 agent 自带搜索。

评估点：

- 是否受产品、plan、model、workspace 和地区限制
- agent 是否清晰展示 query 和 citations
- 是否能配置 routing、source filtering 和 logging
- 结果是否足够可复现，能用于团队流程
- 用户是否可以禁用它，或用显式工具覆盖它

### MCP 搜索适配器

当 agent 应调用可见搜索工具，而不是把检索藏在宽泛 prompt 中时，MCP 很有价值。后端可以是 SearXNG、Brave Search API、Tavily、自定义 crawler 或团队自有服务。

评估点：

- install scope 和 lifecycle
- 环境变量与凭据处理
- tool names 和 schema 是否清晰
- query sanitization
- prompt-injection resistance
- post-install self-test 和 uninstall path

### 自托管搜索聚合器

SearXNG 是本仓库当前覆盖最多的自托管聚合器。它有价值，因为 operator 可以控制引擎选择、格式、日志和部署策略。

评估点：

- 用户地区的 engine availability
- 面向 agents 的 JSON/API 稳定性
- rate limits 和 abuse protections
- logs 和 retention policy
- operational ownership
- 当 engines 阻塞、超时或结果稀疏时的 fallback strategy

### Hosted Search API

Brave Search API、Tavily 等 hosted APIs 适合集成速度和托管可用性比完全 operator 控制更重要的场景。

评估点：

- data policy 和 query retention
- source coverage 和 ranking behavior
- citation/source URL quality
- freshness 和 domain filtering
- cost、quota 和 rate-limit behavior
- SDK 或 MCP server maturity

除非标注日期和来源，否则不要在本仓库硬编码价格、配额或厂商宣传。

### 浏览器检索

当搜索结果不够，agent 必须检查渲染后的页面、文档 UI 或工作流状态时，浏览器工具和浏览器插件会有帮助。

评估点：

- 使用浏览器前，普通 HTTP fetch 是否已经足够
- cookie/session isolation
- 页面内容带来的 prompt-injection exposure
- 是否需要 screenshot 或 DOM evidence
- 自动化下的 latency 和 reliability
- 运行后的 browser state cleanup

代表性项目：

- [eze-is/web-access](https://github.com/eze-is/web-access) - 一个面向 Claude Code 的 browser/CDP skill，可用于研究浏览器驱动的检索和页面状态证据。

### 本地或私有文档搜索

如果答案可以从仓库文件、vendored docs、docs mirror 或内部索引获得，本地搜索应保持第一路径。

评估点：

- index freshness
- source-of-truth ownership
- 结果能否用 file path 或 public URL 引用
- 如何避免把 private snippets 写入公开报告

## Issue Backlog Candidates

只有在仓库定位完成更新、并且每个 issue 都有清晰验收标准后，再把这些条目发布成 GitHub issues。

- 对比 Codex 和 Claude Code 的原生或 provider-managed web search。
- 对比 SearXNG、Brave Search API、Tavily 和其他 hosted search routes 在 coding agents 中的表现。
- 对比 Claude Code、Codex、OpenClaw 和 generic agents 中的 MCP search adapter 模式。
- 对比浏览器检索和 search APIs 在文档密集型 coding tasks 中的表现。
- 构建公开 query evaluation set，用于评估 agent search quality。
- 定义搜索接入路径的 privacy 和 logging matrix。
- 定义 local docs、native search、MCP search、hosted APIs 和 browser retrieval 的混合路由策略。

## 官方参考入口

- [OpenAI Web Search tool](https://developers.openai.com/api/docs/guides/tools-web-search)
- [OpenAI Codex docs](https://developers.openai.com/codex/cloud)
- [Claude Code MCP docs](https://code.claude.com/docs/en/mcp)
- [Claude MCP Web Search connector](https://support.claude.com/en/articles/14503775-mcp-web-search)
- [Brave Search API](https://brave.com/search/api/)
- [Tavily API docs](https://docs.tavily.com/api-reference/introduction)
- [SearXNG docs](https://docs.searxng.org/)

## 验收标准

- 选择的路径被记录为 strategy，而不只是 tool name
- 隐私、控制力、可靠性、成本和评估取舍明确
- SearXNG 被视为一个重要路径，而不是整个 scope
- 从本文创建的 issues 使用一致标准对比不同策略
