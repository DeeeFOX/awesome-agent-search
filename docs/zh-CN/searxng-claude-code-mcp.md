# SearXNG MCP 与 Claude Code 集成研究

[English canonical source](../research/searxng-claude-code-mcp.md) | [中文文档索引](README.md)

## 问题

SearXNG 能否为 Claude Code 以及相邻 coding-agent 工作流提供实用、隐私友好的搜索后端？

## 方法

本文来自 2026-05-21 使用 Claude Code 和 GLM-5.1 产出的本地研究草稿。原始草稿不进入公开贡献集，因为其中包含本机路径和环境特定部署细节。

源草稿审查了：

- SearXNG 架构和 JSON 搜索行为
- 通过 SearXNG bridge 进行 MCP-based integration
- 面向非 MCP agents 的 skill-style fallback integration
- self-hosted deployment patterns
- 区域 search-engine availability observations
- security、privacy 和 operational tradeoffs

具体 package versions、star counts、latency numbers 和区域 engine availability 都应视为带日期的观察，除非重新验证。

## 输入

- SearXNG 公开文档和 runtime behavior
- MCP search bridge 行为
- 本地 Docker-based SearXNG deployment notes
- Claude Code MCP workflow notes
- hosted search APIs 和 public SearXNG access 的对比笔记

## 发现

### 隐私重要时，自托管 SearXNG 适合 agent search

Self-hosting 让 operators 能控制 engine selection、logging、rate limits 和 network routing。对于 coding-agent 工作流，这比把原始 search traffic 发送到任意 public instances 更适合作为默认选择。

Public SearXNG instances 适合快速试验，但不应作为长期 agent workflows 的默认推荐，因为 availability、logging policy、result quality 和 rate limits 都不受 operator 控制。

### MCP 是 Claude Code 最强的集成路径

对 Claude Code 而言，暴露 search 和 URL-reading tools 的 MCP server 是最清晰的 integration shape。

预期收益：

- 显式 tool calls
- 结构化 search results
- 可复用 URL-reading workflow
- 更清晰 permission boundaries
- 比 prompt-only search instructions 更容易审计

MCP server 应通过本地环境值配置。公开示例使用 `https://search.example.org` 这样的占位符。

### Skill 或 shell-wrapper 模式适合作为 fallback

对于不能可靠调用 MCP tools 的 agents，skill 或 shell wrapper 仍然可以通过受控命令暴露 SearXNG search。

这个 fallback 更易移植，但弱于 MCP，因为 result parsing、pagination、source opening 和 error handling 往往会变得临时和不一致。

适用场景：

- agent runtime 不支持 MCP
- operator 想要透明 command wrapper
- workflow 需要最小 dependency surface

### Proxy 行为必须显式说明

Proxy configuration 可能存在于多个层：

- agent 或 MCP client
- MCP bridge
- SearXNG outbound search requests
- host 或 container network

对 search-engine reachability 而言，SearXNG outbound layer 通常是关键控制点。公开文档应解释层次区别，但不发布私有 proxy hosts、本地 ports 或 network-provider details。

### JSON output 必须有意启用

Programmatic agent search 依赖 SearXNG 返回结构化输出。部署示例应提醒 operators：当需要 API-style access 时，应在 SearXNG configuration 中启用 JSON output。

### URL-reading features 需要谨慎治理

URL-reading tools 能提升 agent 实用性，但也会带来 SSRF 和 private-network 风险。如果 integration 暴露 URL reading，应默认阻止 private network targets，并在允许 internal URLs 前要求明确 operator decision。

### 搜索结果需要有界输出

Agents 不应把无限制 search results 直接送入 synthesis。推荐控制包括：

- 较小 result limits
- 打开页面前过滤 sources
- page reads 使用 truncation 或 pagination
- 明确 citation requirements
- 结果冲突时说明 uncertainty

## 集成模式

推荐默认模式：

1. 自托管 SearXNG，或使用可信 operator-managed instance。
2. 启用结构化 search output。
3. 当 agent runtime 支持 MCP 时，通过 MCP 暴露 search。
4. 仅将 skill 或 wrapper 作为 fallback。
5. endpoint、proxy 和 credential values 保留在提交文件之外。
6. 记录脱敏后的 query intent 和选中的 public URLs，而不是原始私有上下文。
7. 当外部信息影响答案时，引用打开过的来源。

## 限制

- 源草稿包含本地环境细节，已在本文中排除。
- Version numbers、package metadata 和 search-engine availability 会变化；作为当前事实使用前需要重新验证。
- 区域可用性观察对环境敏感，不应在没有重复测试的情况下泛化。
- 本文不发布可运行 deployment script，因为安装型自动化会把仓库 scope 从 curated guidance 推向 `oh-my-*` style bundle。

## 建议

保持本仓库专注于公开安全 guidance 和 examples。

将研究报告作为以下内容的种子材料：

- [Claude Code MCP integration guide](../integrations/claude-code-mcp.md)
- generic MCP search adapter checklist
- [SearXNG deployment hardening checklist](../hardening/searxng-deployment.md)
- 面向 search quality、latency、reliability 和 privacy cost 的 evaluation rubric

除非原始草稿已经完全脱敏、改写为仓库语言风格，并拆分成更小的长期资源，否则不要提交原始草稿。

## 隐私笔记

- 原始本机路径已删除。
- 私有 endpoint 和 proxy details 已省略。
- Placeholder endpoints 应使用 `https://search.example.org`。
- Credentials、tokens、cookies 和 session material 不得出现在示例中。
- 环境特定 findings 应总结为 observations，而不是 universal claims。

## 验收标准

- 原始报告保持 ignored
- 本公开笔记已写入 `registry/resources.json`
- 带日期 findings 标记为需要重新验证
- 不发布本机绝对路径或私有 endpoints
- 未来详细 guides 按 audience 和 integration mode 拆分
