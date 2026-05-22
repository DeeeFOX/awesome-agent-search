# Claude Code 安装后的生命周期

## 目标

说明 Claude Code 通过 MCP 接入 SearXNG 之后，这个能力会保留多久，重启 Claude Code 或切换文件夹后是否还能使用，以及应该如何验证。

完成 [Claude Code self-bootstrap](../integrations/claude-code-self-bootstrap.md) 后阅读本页。

## 心智模型

Claude Code 能使用 SearXNG 搜索，需要同时满足两个条件：

1. Claude Code 在当前生效的 scope 里有 MCP server 配置。
2. 配置的 SearXNG endpoint 可访问，并且能返回可用搜索结果。

MCP 配置和 SearXNG 服务是两个不同生命周期。重启 Claude Code 通常不会删除 MCP 配置；但如果本地 SearXNG 服务停止，搜索仍然会不可用。

## 哪些内容会保留

| 组件 | 重启 Claude Code 后是否保留 | 切换文件夹后是否保留 | 说明 |
| --- | --- | --- | --- |
| `local` MCP scope | 是 | 否 | 只对添加它的项目可用。 |
| `user` MCP scope | 是 | 是 | 对同一台机器、同一用户下的 Claude Code 可用。 |
| `project` MCP scope | 是 | 仅在包含项目配置的目录中可用 | 共享前必须审查提交的配置。 |
| 托管 SearXNG endpoint | 取决于 operator | 可访问即可 | 可用性不由 Claude Code 决定。 |
| 本地 SearXNG 容器或服务 | 取决于运行时 | 运行中即可 | 它不绑定当前 shell 所在目录。 |

## 如果在另一个文件夹重启

按下面判断：

| 当前 MCP scope | 另一个文件夹能否使用搜索 | 应该怎么做 |
| --- | --- | --- |
| `user` | 可以 | 正常启动 Claude Code，然后用 `/mcp` 或 `claude mcp get searxng` 验证。 |
| `local` | 不可以 | 在新项目里重新添加同一个 MCP server；如果确实需要跨项目使用，改用 `user` scope。 |
| `project` | 只有包含已审查项目 MCP 配置的目录可以 | 打开拥有该配置的项目，或在新目录添加 local/user scope 配置。 |

不要因为某个目录能用搜索，就直接判断所有目录都能用。应先让 Claude Code 检查实际 MCP scope。

## 主机重启后的行为

电脑或主机重启后，检查两层：

1. 如果 SearXNG 是本地部署，容器运行时或服务运行时是否已启动。
2. SearXNG endpoint 是否能通过公开安全的 JSON 查询返回结果。

本地容器的重启行为取决于 Docker、Podman、服务管理器或部署平台。本仓库不应发布机器特定的开机启动文件、本机绝对路径或私有主机信息。

如果使用托管 endpoint，应由 operator 说明 uptime、维护窗口和故障沟通方式。

## 不同地区的搜索引擎可用性

搜索引擎的可达性会受到地区和网络策略影响。如果某个搜索引擎超时或结果不稳定，应选择部署地区合法且可达的搜索引擎，并用公开安全的查询验证。

不要在文档中提供绕过地区限制、私有代理细节，或规避网络策略的操作步骤。

## 验证命令

检查 Claude Code 配置：

```sh
claude mcp list
claude mcp get searxng
```

在 Claude Code 内部检查：

```text
/mcp
```

用脱敏查询检查 SearXNG JSON endpoint：

```sh
curl -sS "https://search.example.org/search?q=SearXNG%20Search%20API&format=json"
```

不要把真实私有 endpoint 粘贴到公开 issue、PR 或文档里。

## Agent 自测 Prompt

安装完成后，可以让 Claude Code 执行：

```text
在不暴露私有 endpoint、本机绝对路径、用户名、账号标识或原始命令输出的前提下，验证当前 Claude Code 会话是否已经具备 SearXNG MCP 搜索能力。请说明 MCP scope、SearXNG endpoint 是否可访问、重启 Claude Code 后是否仍应可用、换到另一个项目目录后是否仍应可用。如果当前是 local scope，请说明另一个目录需要自己的 local 配置，或者需要改用 user scope。
```

验收标准：

- Claude Code 能说明 MCP scope。
- Claude Code 能区分 MCP 配置生命周期和 SearXNG 服务生命周期。
- Claude Code 基于真实 scope 解释重启和换目录后的行为。
- Claude Code 不暴露私有 endpoint、本机路径、用户名、邮箱或原始环境细节。
- Claude Code 不建议绕过地区搜索引擎限制。

## 给用户的确认问题

当用户想确认行为时，可以问：

```text
如果我关闭 Claude Code，并在另一个文件夹重新打开，SearXNG 搜索是否还能使用？请基于实际 MCP scope 和服务状态回答，不要输出私有 endpoint 或本机路径。
```

## 验收标准

- `claude mcp list` 和 `/mcp` 能看到已安装的 MCP server。
- 配置的 SearXNG endpoint 能对公开安全查询返回 JSON。
- 在判断跨目录是否可用前，已经确认当前 MCP scope。
- operator 知道主机重启后 SearXNG 服务如何启动。
- 公开文档和支持回复保持脱敏。
