# Claude Code MCP 指南

[English canonical source](../integrations/claude-code-mcp.md) | [中文文档索引](README.md)

## 问题

Claude Code 可以使用外部工具，但当联网检索被隐藏在宽泛 prompt 里，或者私有项目上下文被发送给搜索后端时，搜索质量和安全边界都会下降。

## 方案

使用 MCP server 作为 Claude Code 和 SearXNG 之间的显式边界。SearXNG endpoint、认证和网络设置应保存在本地配置中，不写入本仓库。

推荐形态：

```text
Claude Code -> MCP search server -> SearXNG -> selected public search engines
```

## 预期收益

- 搜索以 tool call 形式可见
- endpoint 配置保留在提交文件之外
- source URLs 可以被打开和引用
- URL-reading 行为可以与 search 分开治理
- 非 MCP agents 的 fallback 路径更清晰

## 公开安全配置模式

共享文档和示例使用占位符。

```json
{
  "mcpServers": {
    "searxng": {
      "command": "npx",
      "args": ["-y", "mcp-searxng"],
      "env": {
        "SEARXNG_URL": "https://search.example.org"
      }
    }
  }
}
```

如果 endpoint 是私有的，真实值只能放在本地配置中。

## 推荐 Agent 指令

```text
Use the configured SearXNG MCP tools only when repository context is insufficient or current public information is required. Do not include secrets, credentials, cookies, session data, private hostnames, local absolute paths, private issue text, or private source excerpts in search queries. Prefer official sources. Cite opened URLs when external facts affect the answer.
```

## 搜索流程

1. 先检查本地仓库上下文。
2. 判断是否需要最新信息或有来源支撑的公开信息。
3. 将任务改写成狭窄、公开安全的 query。
4. 使用 MCP search tool，并限制结果数量。
5. 只打开相关来源。
6. 优先官方文档、release notes、主仓库、标准、公告或 vendor pages。
7. 总结时给出引用，并说明不确定性。

## URL Reading 边界

URL reading 很有用，但风险高于搜索。应把它视为单独能力。

推荐默认值：

- 默认阻止 private-network targets，除非 operator 明确启用
- 限制 page length，或使用 pagination
- 避免读取需要认证 session 的页面
- 记录打开过的 public URLs
- 不要用 URL reading 检查私有服务

## 非 MCP Agents 的 Fallback

如果当前模型或 runtime 不能可靠调用 MCP tools，可以使用 local wrapper 或 skill：

- 只接受脱敏后的 query text
- 限制结果数量
- 返回 title、URL、source domain 和短 snippet
- synthesis 前要求打开来源
- 记录脱敏后的 query intent，而不是原始私有上下文

不要把 fallback 描述成和 MCP 等价。它更易移植，但在权限和结构化 tool 行为方面更弱。

## 隐私注意事项

- 公开示例使用 `https://search.example.org`。
- 不发布真实私有 endpoint 或账号标识。
- authentication 和 proxy 值保留在本地。
- 避免把私有仓库文本复制进 query。
- 区域可用性和延迟声明应视为有日期的观察，除非重新验证。
- 如果某个搜索引擎在部署地区不可用，应选择该地区合法且可达的搜索引擎；不要发布绕过步骤、proxy 细节或规避策略。

## 安装型 Companion

本仓库定义模式和验收标准。可运行安装命令、本地 SearXNG 设置、生命周期检查和卸载步骤属于 [oh-my-agent-search](https://github.com/DeeeFOX/oh-my-agent-search)。

## 验收标准

- Claude Code 有清晰 MCP search path。
- Search 只在本地上下文不足后使用。
- Query text 公开安全。
- 引用前已经打开来源。
- 私有 endpoint 和 credentials 不进入提交文件。
- 任何长期有效改进都写入 `registry/resources.json`。
