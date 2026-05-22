# Claude Code Bootstrap 要求

[English canonical source](../integrations/claude-code-bootstrap-requirements.md) | [中文文档索引](README.md)

## 范围

本页定义 Claude Code SearXNG bootstrap flow 应满足的要求。它不是安装指南。

可运行 starter、命令、本地 SearXNG 设置、安装后状态检查和卸载流程，请使用 [oh-my-agent-search](https://github.com/DeeeFOX/oh-my-agent-search)。

## 本仓库应该放什么

`awesome-agent-search` 应记录：

- integration architecture
- adapter 选择标准
- privacy 和 trust boundaries
- smoke-test 要求
- negative-test 要求
- 研究发现和限制

`oh-my-agent-search` 应记录：

- 精确安装命令
- 本地容器设置
- `claude mcp` 命令语法
- post-install lifecycle checks
- 卸载命令
- 来自实战的 troubleshooting

## Bootstrap 要求

Claude Code SearXNG bootstrap flow 应证明：

- 存在可信 SearXNG endpoint
- 已启用用于程序化搜索的 JSON output
- MCP adapter 能在 Claude Code 下启动
- Claude Code 能在 MCP 状态界面看到 server
- 至少一个公开安全搜索 query 能返回有用公开来源
- agent instruction 禁止把 secrets、credentials、私有 endpoint、本机绝对路径、私有 issue 文本和私有源码片段放进 query
- 如果存在 URL-reading tools，应与 search 分开治理

## 推荐 Scope 策略

- 首个项目试验优先使用 local scope。
- 只有当同一个可信 endpoint 和隐私政策应跨项目适用时，才使用 user scope。
- 只有在与协作者审查过 shared config 和 endpoint policy 后，才使用 project scope。

在确认实际 MCP scope 之前，不要声称跨项目可用。

## 生命周期要求

不要把安装成功描述成永久可用。搜索保持可用只在以下条件同时成立时：

- Claude Code MCP configuration 仍存在于 active scope 中
- 配置的 SearXNG endpoint 或 service 可达
- 选择的搜索引擎在部署地区合法且可达

操作型 lifecycle prompts 和命令属于安装型 companion。

## 隐私要求

公开文档和示例不得包含：

- 私有 endpoints
- 私有 proxy hosts 或 ports
- credentials、cookies、tokens 或 session material
- 账号标识或个人邮箱
- 本机绝对路径
- 来自私有机器的原始命令输出
- 会暴露未发布工作的项目名

使用 `https://search.example.org` 这样的占位符。

## 验收标准

- 本仓库说明安全 bootstrap 必须证明什么。
- 可运行命令放在 companion starter，而不是这个 awesome list。
- 任何 adapter 推荐都有对比或带日期的研究笔记支撑。
- 任何从实战提取的操作细节在发布前都已脱敏。
