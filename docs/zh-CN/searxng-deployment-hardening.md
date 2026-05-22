# SearXNG 部署加固

[English canonical source](../hardening/searxng-deployment.md) | [中文文档索引](README.md)

## 问题

SearXNG 对 agent search 很有用，但薄弱的部署默认值可能泄漏 query intent、暴露私有 endpoint、通过 URL-reading tools 产生 SSRF 风险，或让自动化在 rate limit 下变得不可靠。

## 方案

在把 coding agent 连接到 SearXNG instance 之前，使用本清单检查部署。

## 预期收益

- 更安全的搜索配置
- 更清晰的 trust boundaries
- 降低 query 或 log 中出现私有数据的风险
- 更可预测的 agent 行为
- 更容易 review 公开示例和贡献

## Instance Scope

- 判断 instance 是 local、team-managed 还是 public
- 对长期 agent workflow，优先使用 operator-managed instances
- 记录谁可以访问该 instance
- 避免把任意公共实例用于敏感工作
- 私有 endpoint URLs 不写入提交文件

## API Readiness

- 当 agents 需要程序化搜索时，启用结构化输出
- 默认保持较小 result limits
- 设置 request timeouts
- 记录允许的 search categories 或 engines
- 只使用脱敏 query 测试 API
- 在 `docs/known-issues.md` 记录已知限制

## 搜索引擎选择

- 按任务领域和地区选择 engines
- coding tasks 优先官方来源和主仓库
- 环境敏感的可用性说明应标注日期
- 禁用经常触发 rate limits 或 CAPTCHA 的 engines
- 避免 broad fan-out，除非 workflow 说明如何过滤结果
- 不记录不可用搜索引擎的绕过步骤；应选择合法且可达的 engines

## Rate Limits 和可靠性

- 限制 agent 并发搜索
- 增加 retry limits 和 backoff
- 把 rate-limit failures 暴露给 agent
- 避免短时间内重复相同 query
- 只缓存公开安全 metadata
- 审查日志中的 noisy 或低价值 query patterns

## 隐私安全日志

可以记录：

- 脱敏后的 query intent
- 选中的 public URLs
- source domains
- result count
- error class
- run id 或 timestamp

不要记录：

- 原始私有 prompts
- 私有 hostnames
- credentials 或 session material
- 本机绝对路径
- 账号标识
- 带有私有上下文的完整内部错误报告

## Network 和 Proxy 边界

- proxy settings 保存在 operator-managed configuration 中
- 记录哪一层负责 outbound routing
- 避免发布 proxy hosts、ports 或 provider details
- 验证 SearXNG outbound routing 是否匹配预期 search-engine reachability
- 不要假设 agent-side proxy settings 会影响 SearXNG outbound search

## URL Reading 控制

如果搜索集成可以读取 URLs：

- 默认阻止 private-network targets
- 内部 URLs 需要显式 operator approval
- 限制 response size
- 支持 pagination 或 section reads
- 避免 authenticated pages
- 记录选中的 public URLs，而不是包含私有数据的页面内容

## 公开示例规则

公开示例应：

- 使用 `https://search.example.org`
- 使用通用 engine names 和 categories
- 展示配置形态，但不包含真实 endpoint values
- 避免本机绝对路径
- 避免个人标识
- 避免 install scripts，除非项目 scope 已变成 `oh-my-*` style bundle

## 验收标准

- endpoint scope 和 trust model 已记录
- 需要时已启用结构化输出
- logs 从设计上公开安全
- result limits 和 retry limits 存在
- URL reading 默认不能访问 private networks
- 私有部署细节没有进入提交
- 长期有效 hardening docs 已更新 registry entries
