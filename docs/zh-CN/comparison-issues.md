# 对比调研 Issue Backlog

这份文档用于在发布 GitHub issues 之前先在本地整理任务。每个 issue 都应使用一致标准，对比 coding agents 的搜索能力接入策略。

只有在仓库定位已经明确说明 SearXNG 只是多种搜索接入路径之一后，才应把这些条目发布成公开 issues。

## Issue 模板

每个对比 issue 应包含：

- problem
- 被对比的 strategies 或 tools
- 涉及的 agent ecosystems
- evaluation dimensions
- required official sources
- privacy considerations
- acceptance criteria

## 候选 Issues

### 对比 Agent 原生联网搜索

Problem：
用户需要知道什么时候内置或 provider-managed web search 已经足够，什么时候显式外部工具更安全或更可控。

Compare：

- Codex native/provider-managed web search paths
- Claude Code native/provider-managed web search paths
- explicit MCP search tools as a control group

Evaluation dimensions：

- 是否受 product、plan、runtime 和 region 限制
- query visibility
- citation/source quality
- configurability
- privacy 和 logging boundary
- fallback 和 disable path

Acceptance criteria：

- 引用官方文档
- 行为带日期
- 明确列出 unknowns
- 不粘贴私有账号行为或本地 transcript

### 对比 Hosted Search APIs

Problem：
Hosted search API 比自托管搜索更容易集成，但 trust、cost 和 quality 取舍需要稳定对比。

Compare：

- Brave Search API
- Tavily
- 只有存在官方公开文档时才加入其他 hosted search APIs
- SearXNG 作为自托管 baseline

Evaluation dimensions：

- API shape
- source URL quality
- freshness
- domain filtering
- cost 和 quota policy
- data retention 和 privacy policy
- SDK 和 MCP adapter maturity

Acceptance criteria：

- 如果包含 pricing 或 quota，需要标注日期
- vendor claims 和 observed behavior 分开
- 提出小型公开 query set

### 对比 MCP Search Adapter 模式

Problem：
MCP search 能让 retrieval 显式化，但不同实现的 install scope、schema clarity、凭据处理和 lifecycle 行为差异很大。

Compare：

- SearXNG-backed MCP servers
- Brave Search MCP servers
- Tavily MCP servers
- custom wrapper pattern

Evaluation dimensions：

- install scope
- environment variable handling
- tool schema clarity
- query sanitization
- result shape
- post-install self-test
- uninstall path

Acceptance criteria：

- 不包含 token 或私有 endpoint
- examples 使用 placeholders
- agent-facing instructions 可测试

### 对比浏览器检索和 Search APIs

Problem：
浏览器检索能检查渲染后页面，但更慢，并带来不同的隐私和 prompt-injection 风险。

Compare：

- browser automation
- browser plugin/extension routes
- direct HTTP fetch
- search API result retrieval
- 代表性 browser/CDP skills，例如 [eze-is/web-access](https://github.com/eze-is/web-access)

Evaluation dimensions：

- rendered-page fidelity
- latency
- brittleness
- session 和 cookie isolation
- prompt-injection exposure
- screenshot 或 DOM evidence support

Acceptance criteria：

- browser profiles 和本机路径已脱敏
- 不发布私有 session data
- issue 明确说明什么时候不应使用 browser retrieval

### 定义混合搜索路由策略

Problem：
成熟 agent 不应把所有 query 发送到同一路径。它需要一个按任务选择最低风险搜索路径的 routing policy。

Compare routes：

- local repository search
- local/private documentation index
- native agent web search
- MCP search adapter
- self-hosted SearXNG
- hosted search API
- browser retrieval

Evaluation dimensions：

- privacy risk
- freshness need
- source authority
- reproducibility
- cost
- latency
- user consent and auditability

Acceptance criteria：

- routing rules 以 decision table 表达
- fallback behavior 明确
- 默认不把 private context 发送给 external routes
