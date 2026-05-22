# awesome-agent-search

[English](README.md) | 中文

一个面向人类和 AI 的精选实践仓库，用于通过 SearXNG 提升 coding agent 的联网搜索能力。

本仓库收集面向 Codex、Claude Code、OpenClaw 和其他 coding agents 的公开安全最佳实践、集成模式、评估方法和研究模板。

## 快速入口

| 读者 | 入口 | 用途 |
| --- | --- | --- |
| 人类读者 | [docs/zh-CN/best-practices.md](docs/zh-CN/best-practices.md) | 理解隐私友好的搜索实践。 |
| AI agents | [AGENTS.md](AGENTS.md) | 编辑仓库前读取规则。 |
| 维护者 | [docs/submission-guide.md](docs/submission-guide.md) | 审核 issue、PR 和研究笔记。 |
| 研究者 | [docs/research/README.md](docs/research/README.md) | 阅读公开安全的研究笔记。 |
| 集成者 | [docs/integrations/README.md](docs/integrations/README.md) | 接入 SearXNG 搜索能力。 |
| 部署者 | [docs/hardening/searxng-deployment.md](docs/hardening/searxng-deployment.md) | 加固 SearXNG 搜索部署。 |

## 中文文档

- [中文文档索引](docs/zh-CN/README.md)
- [最佳实践](docs/zh-CN/best-practices.md)
- [双语维护策略](docs/i18n.md)

英文文档是 canonical source。中文文档用于阅读和搜索发现；如果中英文有差异，以英文版本为准。

## 核心定位

本仓库是 `awesome-*` 风格项目：精选指南、示例和机器可读 registry。

它不是 `oh-my-*` 安装包。如果后续需要一键安装、默认配置或自动化，应拆到独立 companion project。

## 内容范围

- 隐私友好的搜索模式
- agent 集成指南
- 部署加固清单
- Codex、Claude Code、OpenClaw 示例
- 机器可读资源目录
- 公开安全研究笔记
- 人类和 AI 都能遵守的贡献流程

## 建议 GitHub Topics

`awesome-list`, `agents`, `coding-agents`, `searxng`, `codex`, `claude-code`, `openclaw`, `search`, `privacy`, `agent-tools`, `搜索`, `联网搜索`

## 贡献

提交前阅读 [CONTRIBUTING.md](CONTRIBUTING.md)、[SECURITY.md](SECURITY.md) 和 [AGENTS.md](AGENTS.md)。

提交前运行：

```sh
make review
```

## License

MIT. See [LICENSE](LICENSE).
