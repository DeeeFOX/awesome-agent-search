# 最佳实践

[English](../best-practices.md) | 中文

英文版本是 canonical source。本文是中文对照翻译，用于阅读和搜索发现。

## 问题

Coding agents 常见的问题是搜索过宽、信任弱来源、泄露环境细节，或者把搜索行为隐藏在不透明 prompt 里。通过明确、隐私友好、可审计的模式使用 SearXNG，可以提升搜索质量。

## 核心原则

- 只在需要新鲜信息、外部信息或有来源支撑的信息时搜索。
- 搜索请求应窄、任务导向、易检查。
- 将检索和综合分开。
- 使用公开安全的配置和示例。
- 当搜索结果不完整、不稳定或依赖环境时记录限制。
- 搜索路径应易于关闭、替换和审计。

## 何时搜索

适合搜索的情况：

- 某个事实可能最近发生变化
- agent 需要 source URL 或引用
- 本地仓库上下文不足
- 依赖、工具或公开 API 可能已经变化
- 任务要求比较、发现或确认当前可用性

避免搜索的情况：

- 答案应该来自本地文件
- 查询会暴露私有代码、主机名、客户数据或凭据
- agent 可以用现有仓库上下文解决任务
- 搜索结果没有经过验证就会被使用

## SearXNG 实例选择

只有当实例符合任务的信任模型时才使用。

建议检查：

- 是否理解实例所有权和运营策略
- 响应格式是否足够稳定，适合自动化
- rate limit 是否适合 agent 使用
- 结果质量是否适合目标领域
- 日志和隐私行为是否可接受
- fallback 行为是否已记录

不要在本仓库发布私有实例 URL。公开示例使用 `https://search.example.org` 这样的占位符。

## 查询设计

好的 agent 查询应该短、明确、范围清晰。

优先使用：

- 精确的项目、工具、API 或错误名
- 每次查询只表达一个意图
- `docs`、`release notes`、`security advisory`、`schema` 等面向来源的词
- 只在相关时加入日期或版本约束

避免：

- 把内部 prompt 直接丢进搜索
- 包含完整本机路径、私有主机名、token 或用户标识符
- 大量宽泛改写造成噪声
- 在一个查询里混合事实查找、计划和综合

## 检索流程

先使用小而明确的流程，再增加复杂路由。

1. 从任务构造一个窄查询。
2. 获取少量结果。
3. 按来源质量和相关性过滤。
4. 只打开验证所需的结果。
5. 综合时附链接和限制。
6. 记录应进入 known issue 或 research note 的缺口。

## Fallback 策略

Fallback 应明确且有边界。

推荐顺序：

1. 本地仓库文件
2. 官方文档或 primary sources
3. SearXNG web results
4. 带明确不确定性的 secondary sources
5. 当行为仍需调查时，先提 issue

不要默认自动 fan-out 到多个搜索引擎，除非 agent 记录了为什么需要，以及如何过滤重复或低质量结果。

## Rate Limit 和重试

Agents 应像谨慎的客户端一样工作。

- 默认结果数保持较小
- 对短暂失败使用指数退避
- 限制每个查询的重试次数
- 避免对公共实例并发突发请求
- 明确暴露 rate-limit 失败，不要静默降级质量
- 只缓存公开安全的搜索元数据

## 隐私安全日志

日志应帮助审查搜索行为，同时不暴露敏感数据。

安全字段：

- 已脱敏的查询意图
- 时间戳或 run id
- 结果数量
- 选中的来源域名
- 最终引用的 URL
- 错误类别

不安全字段：

- 凭据、cookie 或 session header
- 私有 endpoint URL
- 包含私有上下文的原始 prompt
- 本机绝对路径
- 个人邮箱或账号标识符

## 结果总结

把搜索结果视为线索，不要直接视为事实。

- 优先使用 primary sources
- 当结论依赖外部信息时引用 source URLs
- 区分来源内容和 agent 推断
- 当时效性重要时写明日期
- 不要基于 snippet 过度断言
- 当来源冲突时保留不确定性

## Agent 贡献

向本仓库贡献的 AI agents 应：

- 编辑前阅读 `AGENTS.md`
- 为长期可用资源更新 `registry/resources.json`
- 使用 `templates/integration-template.md` 或 `templates/research-report-template.md`
- 包含 problem、approach、expected benefit、privacy considerations、acceptance criteria
- 运行 `make review`

当贡献会改变信任模型、依赖外部服务行为，或引入新的隐私权衡时，应先开 issue。
