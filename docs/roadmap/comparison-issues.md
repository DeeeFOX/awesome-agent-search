# Comparison Issue Backlog

Use this page as a local staging area before publishing GitHub issues. Each issue should compare search-integration strategies for coding agents with consistent criteria.

Do not publish these as issues until the repository positioning clearly states that SearXNG is one option among several search-integration paths.

## Issue Template

Each comparison issue should include:

- problem
- strategies or tools being compared
- agent ecosystems in scope
- evaluation dimensions
- required official sources
- privacy considerations
- acceptance criteria

## Candidate Issues

### Compare Native Agent Web Search

Problem:
Users need to know when built-in or provider-managed web search is enough, and when explicit external tooling is safer or more controllable.

Compare:

- Codex native/provider-managed web search paths
- Claude Code native/provider-managed web search paths
- explicit MCP search tools as a control group

Evaluation dimensions:

- availability by product, plan, runtime, and region
- query visibility
- citation/source quality
- configurability
- privacy and logging boundary
- fallback and disable path

Acceptance criteria:

- official docs are cited
- behavior is dated
- unknowns are listed explicitly
- no private account behavior or local transcripts are pasted

### Compare Hosted Search APIs For Agents

Problem:
Hosted search APIs can be easier to integrate than self-hosted search, but the trust, cost, and quality tradeoffs need a stable comparison.

Compare:

- Brave Search API
- Tavily
- other hosted search APIs only when an official public doc exists
- SearXNG as a self-hosted baseline

Evaluation dimensions:

- API shape
- source URL quality
- freshness
- domain filtering
- cost and quota policy
- data retention and privacy policy
- SDK and MCP adapter maturity

Acceptance criteria:

- pricing or quota details are dated if included
- vendor claims are separated from observed behavior
- a small public query set is proposed

### Compare MCP Search Adapter Patterns

Problem:
MCP search can make retrieval explicit, but implementations differ in installation scope, schema clarity, credentials, and lifecycle behavior.

Compare:

- SearXNG-backed MCP servers
- Brave Search MCP servers
- Tavily MCP servers
- custom wrapper pattern

Evaluation dimensions:

- install scope
- environment variable handling
- tool schema clarity
- query sanitization
- result shape
- post-install self-test
- uninstall path

Acceptance criteria:

- no tokens or private endpoints are included
- examples use placeholders
- agent-facing instructions are testable

### Compare Browser Retrieval With Search APIs

Problem:
Browser retrieval can inspect rendered pages, but it is slower and exposes different privacy and prompt-injection risks.

Compare:

- browser automation
- browser plugin/extension routes
- direct HTTP fetch
- search API result retrieval
- representative browser/CDP skills such as [eze-is/web-access](https://github.com/eze-is/web-access)

Evaluation dimensions:

- rendered-page fidelity
- latency
- brittleness
- session and cookie isolation
- prompt-injection exposure
- screenshot or DOM evidence support

Acceptance criteria:

- browser profiles and local paths are sanitized
- no private session data is published
- the issue states when browser retrieval should not be used

### Define A Hybrid Search Routing Policy

Problem:
Mature agents should not send every query to the same route. They need a routing policy that picks the lowest-risk search path for each task.

Compare routes:

- local repository search
- local/private documentation index
- native agent web search
- MCP search adapter
- self-hosted SearXNG
- hosted search API
- browser retrieval

Evaluation dimensions:

- privacy risk
- freshness need
- source authority
- reproducibility
- cost
- latency
- user consent and auditability

Acceptance criteria:

- routing rules are stated as a decision table
- fallback behavior is explicit
- private context is never sent to external routes by default
