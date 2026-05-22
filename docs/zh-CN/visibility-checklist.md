# 仓库曝光清单

这份清单用于提升 Awesome Agent Search 在 GitHub、搜索引擎和 AI-agent 检索中的可发现性，同时避免把仓库做成关键词堆砌。

## 目标

让以下搜索意图更容易找到本仓库：

- SearXNG search for coding agents
- Claude Code MCP web search
- Codex web search best practices
- OpenClaw search integration
- privacy-aware agent search
- AI agent search evaluation and hardening
- Claude Code 联网搜索
- SearXNG MCP 接入
- coding agent 搜索最佳实践

GitHub 首页推荐没有确定公式。曝光应来自清晰定位、准确 metadata、有用内容、安全贡献流程和持续的外部引用。

## GitHub Metadata

在 GitHub 仓库页面设置 repository metadata。

推荐 description：

```text
Research and best practices for bringing web search into Codex, Claude Code, OpenClaw, and AI coding agents.
```

推荐 website：

```text
https://deeefox.github.io/awesome-agent-search/
```

只有在 GitHub Pages 已经可用后再填写 website。否则可以留空，或者指向仓库本身。

推荐 topics：

```text
awesome-list
awesome
agents
ai-agents
coding-agents
agent-search
agent-tools
searxng
mcp
model-context-protocol
claude-code
codex
openclaw
web-search
search
privacy
retrieval
llm
llm-tools
developer-tools
```

GitHub 当前最多支持 20 个 topics。topic 应使用小写字母和连字符，不要包含私有组织名或私有业务词。

Topic audit reminder：

- 优先使用精准高意图 topics，例如 `searxng`、`mcp`、`model-context-protocol`、`claude-code`、`codex`、`openclaw`、`privacy`
- 除非刻意面向对应受众，否则不要用 `*-skill`、`*-engine` 或单复数近义词替代精准生态词
- 每次重大定位调整或公开发布后，都应重新检查 topics

## 搜索入口

GitHub repository search 可以检索仓库名、description、topics 和 README 内容。因此 README 首屏应自然包含这些核心词：

- `awesome-agent-search`
- `SearXNG`
- `MCP search`
- `Brave Search API`
- `Tavily`
- `Codex`
- `Claude Code`
- `OpenClaw`
- `coding agents`
- `MCP`
- `Model Context Protocol`
- `web search`
- `privacy-aware search`

不要为了 SEO 重复堆关键词。优先用简洁 section、表格和自然语言。

## README 编排

README 应保持 awesome-list 的第一印象：

- 首屏有一句话价值定位
- 用 quick entry table 指向人类读者、AI agents、集成者、部署者、研究者和维护者
- 按 best practices、integrations、hardening、research、bilingual docs、machine-readable resources 分区
- 明确当前 curated list 和 installable companion 的边界
- 明确贡献和隐私规则

避免：

- 大段可运行安装步骤
- 私有本地排障 transcript
- 未验证的搜索质量承诺
- 任何绕过本地网络、法律或地区限制的建议

## Companion 放置方式

可以把 `oh-my-agent-search` 作为可安装 companion 提到醒目位置，但可运行 setup 细节应留在 companion 仓库。

合适位置：

- README 精选资源
- 独立 `Installable Companion` section
- `docs/companion-repository.md`
- launch post

不要把这个仓库混成 awesome list 加安装手册。

## Social Preview

在 GitHub repository settings 中使用 [assets/social-preview.png](../../assets/social-preview.png)。

推荐属性：

- PNG、JPG 或 GIF
- 小于 1 MB
- 至少 `640x320`
- `1280x640` 展示效果更好
- 除非有明确理由，否则使用实底背景

图片只应展示公开仓库身份。不要包含个人邮箱、私有 endpoint、本机路径、凭证或部署细节。

## Release 策略

内容基线验证通过后，创建 GitHub release。

下一次 broad-scope positioning release 建议使用：

```text
v0.2.0
```

推荐 title：

```text
v0.2.0 - Search integration research for coding agents
```

Release notes 应概括：

- 仓库为什么存在
- 支持哪些生态
- 最重要的文档入口
- machine-readable registry
- 中英文入口
- 与 `oh-my-agent-search` 的 companion 边界

Release notes 应足够短，便于直接转发。

## 外部发现

优先选择高信号链接，不做广撒网式刷屏。

推荐渠道：

- GitHub profile pinned repository
- 相关 awesome-list PR
- agent、MCP、SearXNG、developer tools 社区讨论
- 简短技术 launch posts
- 英文和中文开发者社区的双语分享
- 新增重要对比或评估后再发布 follow-up

避免：

- 到处重复同一段推广文案
- 在未确认时声称得到 Codex、Claude Code、OpenClaw 或 SearXNG 官方支持
- 使用私有 benchmark 数据
- 分享会暴露路径或 endpoint 的本地截图

## AI-Agent 发现

持续维护机器可读层：

- `AGENTS.md` 说明规则
- `registry/resources.json` 索引长期资源
- `docs/registry-index.md` 由 registry 生成
- `docs/zh-CN/` 支持中文检索和阅读
- `templates/` 支持可复用贡献

新增长期文档时，同步更新 registry 并重新生成 index。

## 维护信号

GitHub 用户和 agents 都会从维护信号判断项目质量。

推荐信号：

- validation workflow 通过
- 持续改进 docs 或 registry 的近期提交
- issue labels 覆盖 `research`、`integration`、`translation`、`privacy`、`good first issue`
- 贡献规则范围明确
- 隐私和安全策略清楚
- 用公开 roadmap issues 记录对比和评估缺口

## 参考来源

- [GitHub Docs: Classifying your repository with topics](https://docs.github.com/articles/about-topics)
- [GitHub Docs: Searching for repositories](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories)
- [GitHub Docs: Customizing your repository's social media preview](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview)
- [GitHub Docs: Finding ways to contribute to open source](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)

## 验收标准

- repository metadata 与推荐定位一致
- README 首屏自然包含核心搜索词
- social preview 已设置
- 最新 release 反映当前 multi-backend search-integration scope
- launch post 不包含私有环境细节
- 长期曝光文档已写入 `registry/resources.json`
