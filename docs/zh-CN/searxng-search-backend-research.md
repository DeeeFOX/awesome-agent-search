# SearXNG 搜索后端调研

[English canonical source](../research/searxng-search-backend-research.md) | [中文文档索引](README.md)

## 问题

Agent 搜索工作流什么时候应该使用 SearXNG？应该选择哪一种 SearXNG 部署形态？

## 来源材料

本文融合并脱敏了两份本地输入：

- 本地中文调研草稿 `研究报告.md`
- 本仓库之前的后端比较笔记

原始草稿不公开发布，因为其中包含本机路径、环境特定设置说明、地区网络可达性处理步骤、命令记录，以及不适合放在 awesome-list 仓库里的值。

## 范围

本文是调研和对比说明，不是安装指南。

可运行的 Claude Code 设置、本地 SearXNG 启动、MCP adapter 选择、安装后 lifecycle 检查和卸载流程，应放在安装型 companion：[oh-my-agent-search](https://github.com/DeeeFOX/oh-my-agent-search)。

## 结论

### SearXNG 是 operator 可控的搜索后端

当团队需要控制搜索引擎、响应格式、日志策略、rate limits 和部署归属时，SearXNG 很有价值。它更适合需要可复现公开 web-search 路径、且不希望依赖随机公共实例的 agent workflows。

### JSON 输出是面向 agent 的关键要求

Agent 集成需要结构化结果。SearXNG 的 HTML UI 可用，并不代表它已经适合 agent 使用。endpoint 必须支持 search request 的 JSON 输出，并且工作流应在 agent 依赖它之前，用公开安全 query 完成验证。

### 搜索引擎可用性受环境影响

搜索引擎可达性会受地区、网络、上游 rate limits 和 anti-abuse 行为影响。公开文档不应发布访问不可用服务的处理步骤。Operator 应验证自己环境中哪些引擎可以合法可达，并选择在该环境中有效的 engine profile。

### 公共实例只适合试用

Public SearXNG instances 适合快速试验和低风险公开查询。它们不适合作为 coding-agent workflows 的长期默认值，因为 availability、logging policy、result quality 和 rate limits 都不受用户控制。

### MCP 是接入路径，不是搜索后端本身

MCP 可以通过可见工具边界把 SearXNG search 暴露给 agent，从而提升可审计性。但它也带来 lifecycle、scope、schema、URL reading 和 uninstall 问题。这些操作细节应由安装型 companion 负责。

### 浏览器检索和 hosted APIs 解决的是不同问题

当需要渲染后页面状态、交互、截图或 UI 验证时，browser retrieval 更合适。Hosted search APIs 可能更适合产品集成速度。这些方案应该单独调研，不应复用本文作为证据。

## SearXNG 部署形态矩阵

| 形态 | 最适合 | 优势 | 不足 |
| --- | --- | --- | --- |
| 本地自托管 SearXNG | 个人开发和私有实验 | operator 可控配置；endpoint 容易保持本地；适合验证 agent integration | 依赖本地容器或 runtime；不是团队治理模型 |
| 团队托管 SearXNG | 共享 coding-agent workflows | engine policy、logging policy 和配置更一致、更可审查 | 需要明确 operator 和服务维护责任 |
| 可信托管 SearXNG | 希望共享控制、但不想每个用户自托管的团队 | 降低单用户设置成本，同时保留已知 trust boundary | 仍然需要清晰 operator policy 和 availability 预期 |
| 公共 SearXNG instance | 快速公开试验 | 无需设置；适合探索性检查 | logging 未知、availability 变化、rate limits 不可控、可复现性弱 |
| 通过 MCP companion 使用 SearXNG | 需要显式工具的 Claude Code 或 MCP-capable agents | 工具边界可见；调用结构化；安装后检查可自动化 | adapter lifecycle、scope、权限和 URL-reading 行为必须在 awesome list 之外治理 |

## 决策指南

适合选择 SearXNG 的情况：

- operator 控制力比最快接入更重要
- agent 需要结构化公开搜索结果
- 团队可以定义 logging、rate limits 和 engine policy
- public-instance uncertainty 不可接受
- workflow 可以在使用前验证 JSON 输出

不适合默认选择 SearXNG 的情况：

- 用户只需要内置 provider search feature
- 没有人可以运行或监控 endpoint
- 工作流需要渲染后页面状态，而不是搜索结果
- hosted API 已经过评估，并且符合 trust、quota 和 cost 模型

## 公开安全的 Agent 规则

使用任何 SearXNG-backed route 的 agents 应该：

- 先检查本地仓库上下文
- 使用窄范围、公开安全的 query
- 避免私有代码、本机路径、私有 hostnames、credentials、客户数据和未公开 issue 文本
- 优先引用官方文档、release notes、主仓库、标准和安全公告
- 引用打开过的公开 URL，而不是只引用 snippet
- 当结果稀疏、重复、过期或冲突时，说明 backend limitations

## 调研缺口

本文不覆盖：

- Brave Search API 在 coding agents 中的证据
- Tavily 在 coding agents 中的证据
- 除 `eze-is/web-access` 独立笔记以外的 browser/CDP retrieval 质量
- 当前 Codex 或 Claude Code 环境中的 native/provider-managed search 质量
- latency、relevance、cost 和 citation quality 的定量 benchmark

这些方案在网格中应继续标记为 `调研中`，直到存在独立调研报告。

## 脱敏说明

- 已移除本机路径和用户名。
- 已排除环境特定命令记录。
- 已排除地区服务可达性处理步骤。
- Secrets、tokens、cookies、private endpoints、account identifiers 和 session material 不得出现在示例中。
- 安装步骤保留给安装型 companion 仓库。
