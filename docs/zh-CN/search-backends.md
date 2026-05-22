# 搜索后端对比

[English canonical source](../comparisons/search-backends.md) | [中文文档索引](README.md)

## 问题

Coding agents 需要联网搜索，但不同搜索后端会带来不同的隐私、成本、控制力、延迟、相关性和运维负担。

本文比较常见搜索后端模式，不依赖容易变化的价格、配额或厂商宣传。

## 摘要

| 后端模式 | 最适合 | 优势 | 取舍 |
| --- | --- | --- | --- |
| 自托管 SearXNG | 隐私友好的 agent 工作流 | operator 控制、可选择搜索引擎、公开安全日志、避免单一厂商锁定 | 需要部署和维护 |
| 可信托管 SearXNG | 希望统一治理但不想每人自托管的团队 | 共享治理、一致配置、可复用加固策略 | 仍需要明确负责的 operator |
| 公共 SearXNG 实例 | 快速试验和非敏感查询 | 无需设置、易于测试 | 日志未知、可用性不稳定、rate limit 不受控制 |
| Hosted AI search API | 快速产品集成 | API 形态简单，通常更适合 agent 消费 | 需要信任外部 provider，可能有策略变化、配额或成本限制 |
| Direct web search tool | 通用最新信息查询 | 方便且覆盖广 | 对 routing、logging 和可复现配置的控制较弱 |

## 推荐默认选择

当满足以下条件时，使用自托管或可信托管 SearXNG：

- 搜索 query 可能暴露项目意图
- operator 需要控制搜索引擎和日志
- agent 需要可复现行为
- 工作流应降低私有上下文泄漏风险
- 搜索配置需要可审查

当满足以下条件时，使用 hosted search API：

- 工作流更重视集成速度而不是控制力
- provider 数据政策适合当前任务
- 配额和成本可接受
- 已经针对目标领域评估结果质量

只在以下场景使用公共 SearXNG 实例：

- 快速实验
- 非敏感公开查询
- 没有可信实例时的备用发现路径

## 对比维度

### 隐私

自托管 SearXNG 提供最强的 operator 控制，因为搜索流量、日志策略和搜索引擎选择都由部署者控制。

公共实例和 hosted API 需要信任第三方。它们可以用于公开、低风险查询，但不应接收私有代码片段、内部 hostname、凭据、本机路径或客户数据。

### 控制力

SearXNG 允许 operator 选择搜索引擎、类别、safe-search 设置、proxy 行为和响应格式。

Hosted API 更容易接入，但可控项更少。Direct web search tool 很方便，但通常更难在不同 agents 之间复现配置。

### 相关性

Hosted AI search API 可能返回更适合 agent 消费的摘要。SearXNG 可以跨多个搜索引擎提供覆盖面，但 agent 必须过滤结果、打开来源并引用来源。

对 coding-agent 工作而言，无论后端是什么，都应优先使用官方文档、release notes、主仓库、标准规范和安全公告。

### 可靠性

自托管服务需要运维责任。公共实例可能消失、限流、阻止自动化，或在不通知的情况下改变行为。

对长期工作流，应记录 fallback 行为和 rate-limit 处理方式。

### 成本

自托管 SearXNG 把成本转移到基础设施和维护。Hosted API 把成本转移到 provider 定价和配额政策。

除非有日期和来源，否则不要在本仓库硬编码公开价格或配额数字。

## 决策指南

选择自托管 SearXNG，当：

- 隐私和控制最重要
- operator 能维护一个小服务
- agent 行为必须可审计

选择可信托管 SearXNG，当：

- 团队希望共享治理
- 每个用户自托管成本太高
- operator 能发布清晰使用政策

选择 hosted AI search API，当：

- 产品集成速度最重要
- 可以接受外部 provider 信任边界
- 成本和配额适合 workload

选择公共 SearXNG 实例，当：

- query 是公开且低风险的
- 结果只用于探索
- agent 会记录不确定性，并避免依赖单一来源

## Agent 规则

Agents 应该：

- 先检查本地仓库上下文，再进行外部搜索
- 避免把私有上下文发送到任何后端
- 优先官方和 primary sources
- 引用打开过的 URL
- 来源冲突时说明不确定性
- 在研究笔记中记录后端特定限制

## 验收标准

- 后端选择已记录
- 隐私取舍明确
- fallback 行为已知
- agents 不会把 secrets、私有 endpoint、本机路径或私有源码片段发送给搜索后端
- 评估笔记区分 observation 和 recommendation
