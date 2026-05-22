# Awesome Agent Search

[English](README.md) | 中文

> 面向 Codex、Claude Code、OpenClaw 和其他 coding agents 的搜索能力接入调研与最佳实践。

一个精选、公开安全、AI 可读的 coding-agent 搜索指南：覆盖原生联网搜索、MCP 搜索适配、SearXNG、hosted search API、浏览器检索、查询设计、加固、评估方法和研究笔记。

## 目录

- [为什么需要它](#为什么需要它)
- [快速入口](#快速入口)
- [精选资源](#精选资源)
- [生态入口](#生态入口)
- [可安装 Companion](#可安装-companion)
- [内容分类](#内容分类)
- [给 AI Agents](#给-ai-agents)
- [为什么是 Awesome，不是 Oh My](#为什么是-awesome不是-oh-my)
- [参考项目](#参考项目)
- [贡献](#贡献)

## 为什么需要它

Coding agents 的质量很大程度取决于它们能否安全地获取外部信息。搜索一旦处理不好，就容易把私有上下文发到公网、信任弱来源、对外部服务过度请求，或者把检索行为藏在宽泛 prompt 里。

本仓库比较将搜索能力引入 agents 的不同路径。SearXNG 是重要的隐私友好方案，但它只是其中一种策略；其他策略还包括 agent 原生联网搜索、MCP 搜索适配器、hosted search API、浏览器检索和本地文档搜索。

## 快速入口

| 读者 | 入口 | 用途 |
| --- | --- | --- |
| 人类读者 | [最佳实践](docs/zh-CN/best-practices.md) | 理解隐私友好的 agent 搜索模式。 |
| 英文读者 | [English README](README.md) | 阅读 canonical source。 |
| AI agents | [AGENTS.md](AGENTS.md) | 遵守编辑、验证和隐私规则。 |
| 集成者 | [集成指南](docs/integrations/README.md) | 将 agent 接入搜索工具、后端和适配器。 |
| 部署者 | [部署加固](docs/hardening/searxng-deployment.md) | 加固面向 agent 的自托管或托管搜索服务。 |
| 研究者 | [研究笔记](docs/research/README.md) | 阅读和贡献公开安全的研究结果。 |
| 维护者 | [提交指南](docs/submission-guide.md) | 审核 issue、PR 和 registry entries。 |

## 精选资源

- [中文最佳实践](docs/zh-CN/best-practices.md) - 查询设计、fallback、rate limit、日志和来源处理。
- [Best practices](docs/best-practices.md) - 英文 canonical version。
- [搜索能力接入方案对比](docs/zh-CN/search-integration-strategies.md) - 原生搜索、MCP、SearXNG、hosted API、浏览器检索和混合路由。
- [Claude Code MCP guide](docs/integrations/claude-code-mcp.md) - 安全边界清晰的 MCP 搜索流程。
- [Claude Code MCP 指南](docs/zh-CN/claude-code-mcp.md) - Claude Code + SearXNG + MCP 的中文对照说明。
- [Claude Code bootstrap requirements](docs/integrations/claude-code-bootstrap-requirements.md) - 安全 Claude Code starter 应满足的要求。
- [oh-my-agent-search](https://github.com/DeeeFOX/oh-my-agent-search) - 可安装 companion，负责可运行设置、检查和生命周期文档。
- [SearXNG deployment hardening](docs/hardening/searxng-deployment.md) - 面向部署者的加固清单。
- [SearXNG 部署加固](docs/zh-CN/searxng-deployment-hardening.md) - 部署加固中文对照清单。
- [SearXNG MCP research note](docs/research/searxng-claude-code-mcp.md) - 从本地研究脱敏整理出的公开笔记。
- [Search backend comparison](docs/comparisons/search-backends.md) - 原生搜索、SearXNG、hosted API、浏览器检索和 direct search 的取舍。
- [MCP SearXNG server comparison](docs/comparisons/mcp-searxng-servers.md) - 面向 Claude Code 和安装型 starter 的 adapter 对比。
- [对比调研 issue backlog](docs/zh-CN/comparison-issues.md) - 用于后续发布 GitHub issues 的调研任务草案。
- [Companion repository boundary](docs/companion-repository.md) - 当前 awesome 仓库和 `oh-my-agent-search` 的边界。
- [中文搜索发现](docs/zh-CN/discovery.md) - 面向中文 GitHub 搜索和 AI 检索的关键词与入口。
- [Machine-readable registry](registry/resources.json) - 面向人和 AI 的结构化资源目录。
- [Registry index](docs/registry-index.md) - 从机器 registry 生成的人类可读资源目录。

## 生态入口

| 生态 | 资源 | 重点 |
| --- | --- | --- |
| Codex | [Codex example](examples/codex/README.md) | 显式、可审计的搜索路径。 |
| Claude Code | [Claude Code MCP guide](docs/integrations/claude-code-mcp.md) | 基于 MCP 的搜索接入和项目边界。 |
| OpenClaw | [OpenClaw example](examples/openclaw/README.md) | 操作员管理的搜索 hook 和 review gate。 |
| 通用 agents | [Generic example](examples/generic/README.md) | 不绑定具体 runtime 的通用模式。 |

## 可安装 Companion

本仓库是 awesome list：负责对比、要求、研究笔记、加固建议和 AI 可读索引。

可运行安装请使用 [oh-my-agent-search](https://github.com/DeeeFOX/oh-my-agent-search)。该 companion 负责安装命令、Claude Code 自助接入流程、安装后检查、生命周期说明和卸载指引。

## 内容分类

### 最佳实践

- [中文最佳实践](docs/zh-CN/best-practices.md)
- [Core best practices](docs/best-practices.md)
- [Known issues and decisions](docs/known-issues.md)
- [Evaluation dimensions](docs/evaluation.md)

### 集成

- [Integration guide index](docs/integrations/README.md)
- [Claude Code MCP guide](docs/integrations/claude-code-mcp.md)
- [Claude Code MCP 指南](docs/zh-CN/claude-code-mcp.md)
- [Claude Code bootstrap requirements](docs/integrations/claude-code-bootstrap-requirements.md)
- [Claude Code Bootstrap 要求](docs/zh-CN/claude-code-bootstrap-requirements.md)
- [Codex example](examples/codex/README.md)
- [Claude Code example](examples/claude-code/README.md)
- [OpenClaw example](examples/openclaw/README.md)
- [Generic example](examples/generic/README.md)

### 加固

- [Hardening checklist index](docs/hardening/README.md)
- [SearXNG deployment hardening](docs/hardening/searxng-deployment.md)
- [SearXNG 部署加固](docs/zh-CN/searxng-deployment-hardening.md)
- [Security policy](SECURITY.md)

### 研究和评估

- [Companion repository boundary](docs/companion-repository.md)
- [Research note index](docs/research/README.md)
- [SearXNG MCP integration for Claude Code](docs/research/searxng-claude-code-mcp.md)
- [SearXNG MCP 与 Claude Code 集成研究](docs/zh-CN/searxng-claude-code-mcp.md)
- [搜索能力接入方案对比](docs/zh-CN/search-integration-strategies.md)
- [Search backend comparison](docs/comparisons/search-backends.md)
- [MCP SearXNG server comparison](docs/comparisons/mcp-searxng-servers.md)
- [对比调研 issue backlog](docs/zh-CN/comparison-issues.md)
- [Research report template](templates/research-report-template.md)

### 双语文档

- [中文文档索引](docs/zh-CN/README.md)
- [中文搜索发现](docs/zh-CN/discovery.md)
- [中文最佳实践](docs/zh-CN/best-practices.md)
- [搜索能力接入方案对比](docs/zh-CN/search-integration-strategies.md)
- [搜索后端对比](docs/zh-CN/search-backends.md)
- [MCP SearXNG server 对比](docs/zh-CN/mcp-searxng-servers.md)
- [Claude Code MCP 指南](docs/zh-CN/claude-code-mcp.md)
- [Claude Code Bootstrap 要求](docs/zh-CN/claude-code-bootstrap-requirements.md)
- [SearXNG 部署加固](docs/zh-CN/searxng-deployment-hardening.md)
- [SearXNG MCP 与 Claude Code 集成研究](docs/zh-CN/searxng-claude-code-mcp.md)
- [对比调研 Issue Backlog](docs/zh-CN/comparison-issues.md)
- [Internationalization policy](docs/i18n.md)

### 机器可读层

- [Agent guide](AGENTS.md)
- [Resource registry](registry/resources.json)
- [Registry index](docs/registry-index.md)
- [Resource schema](schemas/resource.schema.json)
- [Registry validator](scripts/validate-registry.mjs)

### 发布和传播

- [Social preview guide](docs/social-preview.md)
- [Social preview PNG](assets/social-preview.png)
- [Launch post](docs/launch-post.md)
- [Launch checklist](docs/launch-checklist.md)
- [仓库曝光清单](docs/zh-CN/visibility-checklist.md)
- [v0.1.0 release notes 草案](docs/zh-CN/release-v0.1.0.md)
- [v0.2.0 release notes 草案](docs/zh-CN/release-v0.2.0.md)

## 给 AI Agents

本仓库不只写给人看，也写给 AI agents 读。

AI agents 应该：

1. 读取 [AGENTS.md](AGENTS.md)。
2. 读取 [registry/resources.json](registry/resources.json)。
3. 选择最接近的 guide、example 或 template。
4. 保持 query、endpoint、path 和 example 公开安全。
5. 可运行安装命令应放在安装型 companion，而不是放在这个 awesome list。
6. 提交前运行 `make review`。

长期可用资源必须写入 `registry/resources.json`。翻译资源应使用 `language` 和 `translationOf` 元数据。

## 为什么是 Awesome，不是 Oh My

这个仓库叫 `awesome-agent-search`，因为它是精选最佳实践和集成 hub。

`oh-my-*` 更像安装包、插件框架或一键增强工具。可运行设置应放在独立 companion：[oh-my-agent-search](https://github.com/DeeeFOX/oh-my-agent-search)。

## 参考项目

- [sindresorhus/awesome](https://github.com/sindresorhus/awesome) - curated list 规范。
- [ohmyzsh/ohmyzsh](https://github.com/ohmyzsh/ohmyzsh) - 社区文档和 onboarding 结构。
- [subinium/awesome-claude-code](https://github.com/subinium/awesome-claude-code) - AI coding-agent 生态分类。
- [searxng/searx-instances](https://github.com/searxng/searx-instances) - 结构化提交和 review workflow。
- [SearXNG docs](https://docs.searxng.org/) - SearXNG 行为、配置和运维。

## 仓库结构

- [docs/](docs): 定位、架构、集成、加固、i18n、研究、评估、发布和提交指南。
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
