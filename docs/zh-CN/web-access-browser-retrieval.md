# eze-is/web-access 与浏览器检索

## 问题

`eze-is/web-access` 是否应被视为 coding agents 的搜索接入参考？

## 方法

在 2026-05-22 查看该仓库的公开 GitHub metadata 和 README，然后把它映射到本仓库的搜索接入分类中。

## 输入

- [eze-is/web-access](https://github.com/eze-is/web-access)
- 公开仓库 metadata 和 README
- 本仓库的搜索接入策略矩阵

## 发现

- 该项目是面向 Claude Code 的 skill，不是 SearXNG 意义上的 search backend。
- 它更适合归类为 browser-based retrieval，因为核心是浏览器/CDP 驱动的 web access，而不是单纯的 query routing。
- 其浏览器动作适合需要渲染后页面、导航、交互、截图或其他页面状态证据的任务。
- 在对比 browser routes、MCP search adapters 和 hosted search APIs 时，它可以作为代表性样本。
- 不应把它描述成原生搜索或 search API 的通用替代品。

## 局限

- 浏览器/CDP 检索通常比普通搜索更慢、更脆弱。
- browser state、cookie 和 profile 处理会带来隐私和清理问题。
- 该项目是 skill-specific，可能快速演进。
- 在广泛推荐前，应先与其他 browser routes 继续对比。

## 建议

在对比文档和 issue backlog 中，把 `eze-is/web-access` 作为浏览器检索的代表性参考。

可用它来评估：

- rendered-page fidelity
- session isolation
- prompt-injection exposure
- screenshot 和 DOM evidence 支持
- cleanup 行为

不要把它作为本仓库的默认叙事。它只是 native search、MCP adapters、自托管搜索、hosted APIs、本地文档搜索和混合路由中的一种路径。

## 隐私说明

浏览器检索可能暴露 cookie、session 和本地浏览器状态。公开示例应避免账号相关配置、私有 profile、本机路径或私有页面内容。
