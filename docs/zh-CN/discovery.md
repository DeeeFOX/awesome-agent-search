# 中文搜索发现

[English README](../../README.md) | [中文 README](../../README.zh-CN.md)

本页用于提升中文读者、GitHub 搜索和 AI agents 对本仓库的发现能力。英文文档仍是 canonical source；本页提供中文关键词、入口和主题映射。

## 一句话定位

`awesome-agent-search` 是一个面向 Codex、Claude Code、OpenClaw 和其他 coding agents 的搜索能力接入最佳实践、对比调研和集成入口仓库。

SearXNG 是本仓库重点研究方案之一，但不是唯一方案。可运行安装、Claude Code MCP 接入、本地 SearXNG 启动和安装后自测，请使用安装型 companion：[oh-my-agent-search](https://github.com/DeeeFOX/oh-my-agent-search)。

## 中文关键词

适合用来搜索本仓库或引用本仓库的中文关键词：

- SearXNG 联网搜索
- SearXNG MCP
- Brave Search API
- Tavily 搜索
- 浏览器检索
- 原生联网搜索
- provider-managed web search
- Claude Code 联网搜索
- Claude Code MCP 搜索
- Claude Code SearXNG
- Codex 联网搜索
- OpenClaw 搜索增强
- coding agent 搜索能力
- AI agent 搜索最佳实践
- 编码智能体联网搜索
- agent search best practices
- MCP 搜索适配器
- SearXNG adapter 对比
- 搜索后端对比
- 隐私友好的联网搜索
- 本地 SearXNG
- 自托管 SearXNG
- agent 搜索隐私
- agent 搜索评估
- AI 可读 registry

## 推荐入口

| 目标 | 中文入口 | 英文 canonical source |
| --- | --- | --- |
| 理解整体定位 | [中文 README](../../README.zh-CN.md) | [README](../../README.md) |
| 学习核心原则 | [最佳实践](best-practices.md) | [Best practices](../best-practices.md) |
| 比较搜索接入策略 | [搜索能力接入方案对比](search-integration-strategies.md) | [Search integration strategies](../comparisons/search-integration-strategies.md) |
| 比较搜索后端 | [搜索后端对比](search-backends.md) | [Search backend comparison](../comparisons/search-backends.md) |
| 比较 MCP adapter | [MCP SearXNG server 对比](mcp-searxng-servers.md) | [MCP SearXNG server comparison](../comparisons/mcp-searxng-servers.md) |
| 了解 Claude Code 模式 | 暂无全文翻译 | [Claude Code MCP guide](../integrations/claude-code-mcp.md) |
| 了解安装型 companion 边界 | 暂无全文翻译 | [Companion repository boundary](../companion-repository.md) |
| 查找机器可读资源 | [Registry index](../registry-index.md) | [Resource registry](../../registry/resources.json) |

## 主题映射

### 对比调研

- [搜索能力接入方案对比](search-integration-strategies.md)：比较原生搜索、MCP、SearXNG、hosted APIs、浏览器检索、本地文档搜索和混合路由。
- [搜索后端对比](search-backends.md)：比较原生搜索、自托管 SearXNG、可信托管 SearXNG、公共 SearXNG 实例、hosted search API、浏览器检索和 direct web search。
- [MCP SearXNG server 对比](mcp-searxng-servers.md)：比较公开 MCP-to-SearXNG bridge 项目的 runtime、transport、配置方式、适配性和风险。

### Claude Code

- 本仓库提供 Claude Code + SearXNG + MCP 的架构、要求和对比入口。
- 安装、验证、卸载、本地 SearXNG 和 post-install lifecycle 由 [oh-my-agent-search](https://github.com/DeeeFOX/oh-my-agent-search) 负责。

### Codex 和 OpenClaw

- [Codex example](../../examples/codex/README.md)：Codex 使用显式搜索路径的示例。
- [OpenClaw example](../../examples/openclaw/README.md)：OpenClaw 使用 operator-approved 搜索 hook 的示例。

### 隐私和安全

本仓库所有公开示例都应避免：

- secrets、tokens、cookies、session material
- 私有 endpoint
- 私有 proxy host 或 port
- 本机绝对路径
- 个人邮箱或账号标识
- 私有源码、私有 issue、客户数据
- 会暴露未发布项目意图的项目名

## 给 AI Agents 的中文指令

当 AI agent 用中文阅读本仓库时，应遵守：

1. 先读 [AGENTS.md](../../AGENTS.md) 和 [registry/resources.json](../../registry/resources.json)。
2. 把英文文档视为 canonical source。
3. 优先使用本页定位资源，再打开对应英文 canonical source。
4. 不要把私有 endpoint、本机路径、凭据、cookie、session、私有项目名或原始命令输出写进公开文档。
5. 不要把 `awesome-agent-search` 写成安装脚本仓库；具体安装步骤属于 `oh-my-agent-search`。

## 维护规则

- 新增高价值中文翻译时，同步更新 [中文文档索引](README.md) 和 [registry/resources.json](../../registry/resources.json)。
- 翻译条目应使用 `language: "zh-CN"` 和 `translationOf`。
- 中文内容可以增加检索关键词，但不能增加英文原文没有的私有部署细节。
