# Awesome Agent Search

[English](README.md) | 中文

> 面向 Codex、Claude Code、OpenClaw 和其他 coding agents 的 SearXNG 联网搜索最佳实践。

一个精选、公开安全、AI 可读的 coding-agent 搜索指南：覆盖查询设计、SearXNG 集成、MCP 模式、部署加固、评估方法和研究笔记。

## 目录

- [为什么需要它](#为什么需要它)
- [快速入口](#快速入口)
- [精选资源](#精选资源)
- [生态入口](#生态入口)
- [内容分类](#内容分类)
- [给 AI Agents](#给-ai-agents)
- [为什么是 Awesome，不是 Oh My](#为什么是-awesome不是-oh-my)
- [参考项目](#参考项目)
- [贡献](#贡献)

## 为什么需要它

Coding agents 的质量很大程度取决于它们能否安全地获取外部信息。搜索一旦处理不好，就容易把私有上下文发到公网、信任弱来源、对公共实例过度请求，或者把检索行为藏在宽泛 prompt 里。

本仓库收集使用 SearXNG 作为隐私友好搜索层的实用模式。

## 快速入口

| 读者 | 入口 | 用途 |
| --- | --- | --- |
| 人类读者 | [最佳实践](docs/zh-CN/best-practices.md) | 理解隐私友好的 agent 搜索模式。 |
| 英文读者 | [English README](README.md) | 阅读 canonical source。 |
| AI agents | [AGENTS.md](AGENTS.md) | 遵守编辑、验证和隐私规则。 |
| 集成者 | [集成指南](docs/integrations/README.md) | 将 agent 接入 SearXNG 搜索。 |
| 部署者 | [部署加固](docs/hardening/searxng-deployment.md) | 加固面向 agent 的 SearXNG 搜索。 |
| 研究者 | [研究笔记](docs/research/README.md) | 阅读和贡献公开安全的研究结果。 |
| 维护者 | [提交指南](docs/submission-guide.md) | 审核 issue、PR 和 registry entries。 |

## 精选资源

- [中文最佳实践](docs/zh-CN/best-practices.md) - 查询设计、fallback、rate limit、日志和来源处理。
- [Best practices](docs/best-practices.md) - 英文 canonical version。
- [Claude Code MCP guide](docs/integrations/claude-code-mcp.md) - 安全边界清晰的 MCP 搜索流程。
- [SearXNG deployment hardening](docs/hardening/searxng-deployment.md) - 面向部署者的加固清单。
- [SearXNG MCP research note](docs/research/searxng-claude-code-mcp.md) - 从本地研究脱敏整理出的公开笔记。
- [Search backend comparison](docs/comparisons/search-backends.md) - SearXNG、公共实例、hosted API 和 direct search 的取舍。
- [Machine-readable registry](registry/resources.json) - 面向人和 AI 的结构化资源目录。
- [Registry index](docs/registry-index.md) - 从机器 registry 生成的人类可读资源目录。

## 生态入口

| 生态 | 资源 | 重点 |
| --- | --- | --- |
| Codex | [Codex example](examples/codex/README.md) | 显式、可审计的搜索路径。 |
| Claude Code | [Claude Code MCP guide](docs/integrations/claude-code-mcp.md) | 基于 MCP 的搜索接入和项目边界。 |
| OpenClaw | [OpenClaw example](examples/openclaw/README.md) | 操作员管理的搜索 hook 和 review gate。 |
| 通用 agents | [Generic example](examples/generic/README.md) | 不绑定具体 runtime 的通用模式。 |

## 内容分类

### 最佳实践

- [中文最佳实践](docs/zh-CN/best-practices.md)
- [Core best practices](docs/best-practices.md)
- [Known issues and decisions](docs/known-issues.md)
- [Evaluation dimensions](docs/evaluation.md)

### 集成

- [Integration guide index](docs/integrations/README.md)
- [Claude Code MCP guide](docs/integrations/claude-code-mcp.md)
- [Codex example](examples/codex/README.md)
- [Claude Code example](examples/claude-code/README.md)
- [OpenClaw example](examples/openclaw/README.md)
- [Generic example](examples/generic/README.md)

### 加固

- [Hardening checklist index](docs/hardening/README.md)
- [SearXNG deployment hardening](docs/hardening/searxng-deployment.md)
- [Security policy](SECURITY.md)

### 研究和评估

- [Research note index](docs/research/README.md)
- [SearXNG MCP integration for Claude Code](docs/research/searxng-claude-code-mcp.md)
- [Search backend comparison](docs/comparisons/search-backends.md)
- [Research report template](templates/research-report-template.md)

### 双语文档

- [中文文档索引](docs/zh-CN/README.md)
- [中文最佳实践](docs/zh-CN/best-practices.md)
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

## 给 AI Agents

本仓库不只写给人看，也写给 AI agents 读。

AI agents 应该：

1. 读取 [AGENTS.md](AGENTS.md)。
2. 读取 [registry/resources.json](registry/resources.json)。
3. 选择最接近的 guide、example 或 template。
4. 保持 query、endpoint、path 和 example 公开安全。
5. 提交前运行 `make review`。

长期可用资源必须写入 `registry/resources.json`。翻译资源应使用 `language` 和 `translationOf` 元数据。

## 为什么是 Awesome，不是 Oh My

这个仓库叫 `awesome-agent-search`，因为它是精选最佳实践和集成 hub。

`oh-my-*` 更像安装包、插件框架或一键增强工具。如果后续要提供可安装默认配置，应拆成独立 companion project，例如 `agent-search-starter`。

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

## 建议 GitHub Topics

`awesome-list`, `agents`, `coding-agents`, `searxng`, `codex`, `claude-code`, `openclaw`, `search`, `privacy`, `agent-tools`

中文搜索发现主要依赖真实 Markdown 内容和 README 互链。

## 贡献

提交前阅读 [CONTRIBUTING.md](CONTRIBUTING.md)、[SECURITY.md](SECURITY.md) 和 [AGENTS.md](AGENTS.md)。

运行：

```sh
make review
```

重要贡献应说明 problem、approach、expected benefit、privacy considerations 和 acceptance criteria。

## License

MIT. See [LICENSE](LICENSE).
