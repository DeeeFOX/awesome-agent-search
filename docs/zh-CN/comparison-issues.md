# 对比调研 Issue Backlog

这份文档用于在发布 GitHub issues 之前先在本地整理任务。目标是先完成第一批调研，把 README 方案矩阵补成有证据链的版本，然后再做更大范围曝光。

## 发布门槛

只有当一个 issue 具备以下内容时，才适合发布：

- 明确要补齐的矩阵行或对比缺口
- 可以重新核验的官方来源链接
- 公开安全的调研方法
- 预期视觉证据，例如 decision table、Mermaid diagram、脱敏截图或 scorecard
- 明确说明 README 矩阵应如何更新的 acceptance criteria

不要发布 screenshots、命令记录、本机路径、私有 endpoint、账号标识、套餐细节、cookies、tokens 或私有搜索 query。

## 标准调研产出

每个 research issue 应产出：

- `docs/research/` 下的一篇 research report
- 当报告稳定后，在 `docs/zh-CN/` 下补中文对照
- README 矩阵中 `最佳实践`、`调研报告`、`优势`、`不足`、`Agent 支持矩阵` 的更新建议
- 新增长期内部文档时同步 registry
- 一个可公开渲染的图表或视觉化表格
- 带日期的官方来源和已观察限制清单

报告使用 [templates/research-report-template.md](../../templates/research-report-template.md)。

## Issue Batch 1：补齐当前矩阵缺口

### Issue 1：OpenAI Web Search 作为原生搜索基线

建议标题：
`[Research] OpenAI Web Search as a coding-agent search route`

矩阵行：
[OpenAI Web Search](https://developers.openai.com/api/docs/guides/tools-web-search)

调研问题：
什么时候 OpenAI-managed web search 已经足够，什么时候项目应该使用显式外部搜索路径？

需要核验的官方来源：

- [OpenAI Web Search tool](https://developers.openai.com/api/docs/guides/tools-web-search)
- [OpenAI Codex cloud docs](https://developers.openai.com/codex/cloud)

调研任务：

- 记录 OpenAI API 和 Codex workflows 中可用的搜索入口
- 区分 API web search 行为和 Codex 产品行为
- 识别 visibility、citation、logging、sandbox 和 network-control 边界
- 对比原生搜索和显式 MCP 或 hosted API 路径
- 对不可确认的产品行为用 dated unknowns 记录，不做推断

视觉证据：

- `agent -> OpenAI runtime -> web search -> cited source` sequence diagram
- `native search` vs `explicit external route` decision table
- 可选脱敏 UI 截图，但不得包含账号、workspace、path 或 endpoint 信息

矩阵回填：

- 只有存在稳定官方最佳实践入口时，才替换 `寻找中`
- 链接新的调研报告
- 用证据支撑的语言更新优势和不足

验收标准：

- 官方文档带 `observedAt`
- 不混淆 Codex 和 API 能力
- 隐私和 network-control 边界清晰
- 包含 README 矩阵更新

### Issue 2：Claude MCP Web Search 作为 provider-managed 路径

建议标题：
`[Research] Claude MCP Web Search as a provider-managed search route`

矩阵行：
[Claude MCP Web Search](https://support.claude.com/en/articles/14503775-mcp-web-search)

调研问题：
Claude 用户什么时候应该依赖 Claude managed MCP Web Search connector，什么时候应该使用自管理 MCP adapter 或搜索后端？

需要核验的官方来源：

- [Claude MCP Web Search](https://support.claude.com/en/articles/14503775-mcp-web-search)
- [Claude Code docs](https://code.claude.com/docs/)

调研任务：

- 记录 product、workspace、account 和 region availability 约束
- 识别用户可配置和不可配置的内容
- 对比 managed connector 和用户安装的 MCP search adapters
- 记录 Claude Code 用户可执行的验证路径
- 区分 Claude 产品行为和第三方 MCP server 行为

视觉证据：

- `managed connector`、`local MCP adapter`、`self-hosted backend` capability matrix
- workspace-managed 和 user-installed search 的 lifecycle diagram
- 可选脱敏 `/mcp` 或设置截图，但不得暴露账号或 workspace 标识

矩阵回填：

- 只有存在稳定官方设置或最佳实践页面时，才替换 `寻找中`
- 链接新的调研报告
- 更新 availability 和 operator control 相关不足

验收标准：

- 不粘贴私有 workspace 行为
- plan 或 region 细节有日期和来源
- 只有官方文档支持时才说明 Claude Code 支持范围

### Issue 3：Brave Search API 用于 Coding Agents

建议标题：
`[Research] Brave Search API for coding-agent search`

矩阵行：
[Brave Search API](https://brave.com/search/api/)

调研问题：
Brave Search API 是否适合作为 coding agents 的 hosted search backend？它在 trust、quota、cost 和 result shape 上有什么取舍？

需要核验的官方来源：

- [Brave Search API](https://brave.com/search/api/)
- 官方 Brave API 页面链接到的 Brave Search API documentation

调研任务：

- 记录 API shape、authentication、result fields、freshness controls 和 source URLs
- 只在官方文档支持时比较 web、news、image 或其他 endpoint categories
- 评估 credential handling 和 MCP-wrapper suitability
- 定义面向 coding-agent tasks 的公开安全 query set
- 和 SearXNG 这个 operator-controlled baseline 对比

视觉证据：

- API result-shape diagram
- `source URLs`、`freshness`、`quota/cost`、`privacy`、`adapter readiness` scorecard
- 已移除 key 和凭据的脱敏示例 response

矩阵回填：

- 用 Brave-specific report link 替换 `调研中`
- 只有存在稳定安装或部署实践时，才替换 `寻找中`
- 用带日期的证据更新优势和不足

验收标准：

- pricing 和 quota 说明带日期
- vendor claims 和 observed behavior 分开
- 不发布 API key、账号数据或 dashboard 截图

### Issue 4：Tavily API 用于 Agent Retrieval

建议标题：
`[Research] Tavily API for coding-agent retrieval`

矩阵行：
[Tavily API](https://docs.tavily.com/api-reference/introduction)

调研问题：
Tavily 作为 agent-oriented hosted retrieval API，相比通用 web search API 和自托管搜索适合放在哪里？

需要核验的官方来源：

- [Tavily API introduction](https://docs.tavily.com/api-reference/introduction)
- [Tavily Search endpoint](https://docs.tavily.com/documentation/api-reference/endpoint/search)

调研任务：

- 只在官方文档支持时记录 search、extract、crawl、map、answer、include/exclude domains 和 content options
- 评估 answer abstraction 对 citation transparency 的影响
- 和 Brave Search API、SearXNG 对比 developer experience
- 为 docs、release notes、issues 和 standards 定义公开安全 query set
- 识别合适 MCP 或 wrapper integration patterns，但不背书未审查 adapter

视觉证据：

- `query -> Tavily retrieval -> content extraction -> agent answer` flow diagram
- raw source result access 和 synthesized answer behavior 对比表
- 带日期来源的 cost/quota scorecard

矩阵回填：

- 用 Tavily-specific report link 替换 `调研中`
- 只有存在稳定最佳实践入口时，才替换 `寻找中`
- 更新 hosted dependency、data policy、quota 和 abstraction 相关不足

验收标准：

- 官方文档带 `observedAt`
- answer abstraction 和 citation quality 分开评估
- 不发布账号相关 quota、token 或 dashboard 数据

### Issue 5：DuckDuckGo Instant Answer API 作为轻量 fallback

建议标题：
`[Research] DuckDuckGo Instant Answer API as an agent fallback`

矩阵行：
[DuckDuckGo Instant Answer API](https://duckduckgo.com/api)

调研问题：
DuckDuckGo Instant Answer API 能否作为 agent 的轻量 fallback signal？为什么它不适合作为完整主搜索后端？

需要核验的官方来源：

- [DuckDuckGo Instant Answer API](https://duckduckgo.com/api)
- [DuckDuckGo API endpoint documentation](https://api.duckduckgo.com/api)

调研任务：

- 从官方文档记录 endpoint behavior、parameters、JSON fields 和 rate/usage statements
- 评估 entity、definition 和 factual lookup 使用场景
- 识别 coding-agent 工作中的缺口，例如 full result ranking、freshness、source coverage 和 deep documentation lookup
- 和 Brave Search API、Tavily、SearXNG 对比

视觉证据：

- instant-answer JSON result-shape diagram
- `fallback signal` vs `primary search backend` decision table
- 小型公开 query set 和带日期观察

矩阵回填：

- 用 DuckDuckGo-specific report link 替换 `调研中`
- 除非存在长期最佳实践集成路径，否则保留 `寻找中`
- 围绕 instant-answer scope 优化优势和不足

验收标准：

- 不夸大 DuckDuckGo 为完整 web-search API
- 所有观察都使用公开安全 query
- limitations 足够具体，可指导 agent routing

### Issue 6：基于 eze-is/web-access 的 Browser Retrieval

建议标题：
`[Research] Browser/CDP retrieval for coding agents using eze-is/web-access`

矩阵行：
[eze-is/web-access](https://github.com/eze-is/web-access)

调研问题：
Coding agent 什么时候应该使用 browser/CDP retrieval 而不是 search APIs？应该从渲染页面收集什么证据？

需要核验的官方或 primary sources：

- [eze-is/web-access](https://github.com/eze-is/web-access)
- 用作 host context 时的 Claude Code MCP 和 skill 文档

调研任务：

- 识别哪些任务需要 rendered-page state、navigation、interaction、screenshot evidence 或 DOM evidence
- 对比 browser retrieval、direct HTTP fetch 和 search APIs
- 记录 cookie、profile、session、prompt-injection 和 screenshot privacy 风险
- 定义公开安全的视觉证据标准
- 如果结论变化，更新已有 browser retrieval note

视觉证据：

- browser retrieval threat model diagram
- screenshot redaction checklist
- `search API`、`HTTP fetch`、`browser/CDP` decision table

矩阵回填：

- 如果扩展已有报告，则更新现有调研链接
- 只有存在长期 setup 或最佳实践入口时，才替换 `寻找中`
- 优化 session state、latency 和 brittleness 相关不足

验收标准：

- 不展示私有 browser profile、cookie、session 或本机路径
- screenshot 示例公开、最小化，必要时已脱敏
- 报告说明什么时候不应使用 browser retrieval

## Issue Batch 2：跨方案评估

### Issue 7：混合搜索路由策略

建议标题：
`[Research] Hybrid routing policy for agent search`

调研问题：
Agent 应如何在 local context、local docs、native web search、MCP tools、自托管 SearXNG、hosted APIs 和 browser retrieval 之间选择？

前置条件：
先完成至少三个 Batch 1 报告。

调研任务：

- 定义 route-selection decision table
- 为 stale、sparse、blocked、duplicated 或 conflicting results 增加 fallback behavior
- 定义什么时候需要用户确认
- 定义什么时候应该完全避免 external search

视觉证据：

- route decision tree
- privacy/freshness/cost matrix
- example task-to-route table

验收标准：

- 默认不把 private context 发送到 external routes
- 每条 route 都有显式 fallback
- recommendations 引用已完成的 option-specific reports

### Issue 8：Agent Search Quality Benchmark

建议标题：
`[Benchmark] Agent search quality across native search, hosted APIs, SearXNG, and browser retrieval`

前置条件：
先完成至少四个 option-specific reports。

调研任务：

- 为 docs、release notes、security advisories、issues 和 standards 创建小型公开 query set
- 衡量 source URL quality、relevance、freshness、citation quality、latency 和 reproducibility
- 区分 qualitative notes 和 quantitative observations
- 只用公开安全数据发布图表

视觉证据：

- scorecard chart
- latency distribution chart
- source-authority breakdown

验收标准：

- query set 不包含 private context
- methodology 可复现
- charts 和 raw observations 可公开发布
