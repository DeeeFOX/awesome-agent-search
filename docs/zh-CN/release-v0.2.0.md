# v0.2.0 Release Notes

标题：

```text
v0.2.0 - Search integration research for coding agents
```

## 概要

Awesome Agent Search 现在聚焦于一个更宽的问题：如何将搜索能力带入 coding agents。

SearXNG 仍然是重要的隐私友好 baseline，但它不再被定义为唯一方案。本仓库现在会对比原生或 provider-managed web search、MCP search adapters、自托管搜索、hosted search APIs、浏览器检索、本地文档搜索和混合路由策略。

## 新增内容

- 将 README、中文 README、AGENTS guide 和 positioning docs 调整为 multi-backend search integration 定位。
- 新增 [搜索能力接入方案对比](search-integration-strategies.md)。
- 新增 [对比调研 Issue Backlog](comparison-issues.md)，用于整理可发布成 issues 的调研任务。
- 新增 [SearXNG 搜索后端调研](searxng-search-backend-research.md)，作为脱敏后的 SearXNG-specific evidence base。
- 新增策略和 issue backlog 的中文对照文档。
- 更新 machine-readable registry 和生成的 registry index。
- 更新 social preview artwork，使其反映更宽的研究范围。
- 更新 GitHub repository metadata 和 topics。

## 研究范围

下一步对比工作应覆盖：

- coding-agent runtimes 中的原生或 provider-managed web search
- MCP search adapters
- 自托管 SearXNG
- Brave Search API
- Tavily
- 浏览器自动化和浏览器插件路径
- 本地或私有文档搜索
- 混合路由策略

## 隐私说明

本次 release 不包含私有 endpoint、凭据、cookie、session material、本机路径、个人邮箱或原始本地 transcript。

搜索对比应引用官方文档，为易变观察标注日期，并避免把私有账号行为写入公开报告。

## 下一步

- 将部分 comparison backlog 条目发布成 GitHub issues。
- 构建公开 query evaluation set。
- 增加原生搜索、hosted APIs 和浏览器检索的带日期对比笔记。
- 在 GitHub repository settings 中重新上传更新后的 social preview image。
