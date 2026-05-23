# Comparison Issue Backlog

Use this page as a local staging area before publishing GitHub issues. The goal is to complete a first research batch, fill the README option matrix with evidence-backed reports, and only then promote the repository more widely.

## Publication Gate

Publish an issue only when it has:

- a concrete matrix row or comparison gap to fill
- official source links that can be re-checked
- a public-safe method
- expected visual evidence, such as a decision table, Mermaid diagram, sanitized screenshot, or scorecard
- acceptance criteria that say exactly how the README matrix should change

Do not publish screenshots, command transcripts, local paths, private endpoints, account identifiers, plan details, cookies, tokens, or private search queries.

## Standard Research Output

Each research issue should produce:

- a research report under `docs/research/`
- a Chinese translation under `docs/zh-CN/` when the report becomes durable
- a README matrix update for `Best Practice`, `Research Report`, `Strengths`, `Limitations`, and `Agent Support Matrix`
- registry updates when a new durable internal document is added
- one visual artifact or visualizable table that can be rendered publicly
- a dated list of official sources and observed limitations

Use [templates/research-report-template.md](../../templates/research-report-template.md) for the report.

## Issue Batch 1: Fill Current Matrix Gaps

### Issue 1: OpenAI Web Search As A Native Baseline

Suggested title:
`[Research] OpenAI Web Search as a coding-agent search route`

Matrix row:
[OpenAI Web Search](https://developers.openai.com/api/docs/guides/tools-web-search)

Research question:
When is OpenAI-managed web search enough for a coding agent, and when should a project use an explicit external search route instead?

Official sources to verify:

- [OpenAI Web Search tool](https://developers.openai.com/api/docs/guides/tools-web-search)
- [OpenAI Codex cloud docs](https://developers.openai.com/codex/cloud)

Research tasks:

- document available search surfaces for OpenAI API and Codex workflows
- separate API web search behavior from Codex product behavior
- identify visibility, citation, logging, sandbox, and network-control boundaries
- compare native search against explicit MCP or hosted API routes
- record dated unknowns instead of inferring unavailable product behavior

Visual evidence:

- sequence diagram showing `agent -> OpenAI runtime -> web search -> cited source`
- decision table for `native search` vs `explicit external route`
- optional sanitized UI screenshot only if it contains no account, workspace, path, or endpoint data

Matrix backfill:

- replace `Seeking` only if a stable official best-practice entry exists
- link the new research report
- update strengths and limitations with evidence-backed language

Acceptance criteria:

- official docs are cited with `observedAt`
- Codex and API capabilities are not conflated
- privacy and network-control boundaries are explicit
- README matrix update is included

### Issue 2: Claude MCP Web Search As A Provider-Managed Route

Suggested title:
`[Research] Claude MCP Web Search as a provider-managed search route`

Matrix row:
[Claude MCP Web Search](https://support.claude.com/en/articles/14503775-mcp-web-search)

Research question:
When should Claude users rely on Claude's managed MCP Web Search connector, and when should they use a self-managed MCP adapter or search backend?

Official sources to verify:

- [Claude MCP Web Search](https://support.claude.com/en/articles/14503775-mcp-web-search)
- [Claude Code docs](https://code.claude.com/docs/)

Research tasks:

- document product, workspace, account, and region availability constraints
- identify what users can and cannot configure
- compare managed connector behavior with user-installed MCP search adapters
- record the expected verification path for Claude Code users
- separate Claude product behavior from third-party MCP server behavior

Visual evidence:

- capability matrix for `managed connector`, `local MCP adapter`, and `self-hosted backend`
- lifecycle diagram for workspace-managed vs user-installed search
- sanitized `/mcp` or settings screenshot only if no account or workspace identifiers are visible

Matrix backfill:

- replace `Seeking` only if a stable official setup or best-practice page exists
- link the new research report
- update limitations around availability and operator control

Acceptance criteria:

- no private workspace behavior is pasted
- plan or region details are dated and sourced
- Claude Code support is stated only where the docs support it

### Issue 3: Brave Search API For Coding Agents

Suggested title:
`[Research] Brave Search API for coding-agent search`

Matrix row:
[Brave Search API](https://brave.com/search/api/)

Research question:
Is Brave Search API a strong hosted search backend for coding agents, and what are its trust, quota, cost, and result-shape tradeoffs?

Official sources to verify:

- [Brave Search API](https://brave.com/search/api/)
- Brave Search API documentation linked from the official Brave API page

Research tasks:

- document API shape, authentication, result fields, freshness controls, and source URLs
- compare web, news, image, or other endpoint categories only where official docs support them
- evaluate credential handling and MCP-wrapper suitability
- define a public-safe query set for coding-agent tasks
- compare against SearXNG as an operator-controlled baseline

Visual evidence:

- API result-shape diagram
- scorecard for `source URLs`, `freshness`, `quota/cost`, `privacy`, and `adapter readiness`
- sanitized example response with all keys or credentials removed

Matrix backfill:

- replace `Researching` with a Brave-specific report link
- replace `Seeking` only when a stable install or deployment practice exists
- update strengths and limitations using dated evidence

Acceptance criteria:

- pricing and quota statements are dated
- vendor claims and observed behavior are separated
- no API key, account data, or dashboard screenshot is published

### Issue 4: Tavily API For Agent Retrieval

Suggested title:
`[Research] Tavily API for coding-agent retrieval`

Matrix row:
[Tavily API](https://docs.tavily.com/api-reference/introduction)

Research question:
Where does Tavily fit as an agent-oriented hosted retrieval API compared with general web search APIs and self-hosted search?

Official sources to verify:

- [Tavily API introduction](https://docs.tavily.com/api-reference/introduction)
- [Tavily Search endpoint](https://docs.tavily.com/documentation/api-reference/endpoint/search)

Research tasks:

- document search, extract, crawl, map, answer, include/exclude domains, and content options only where official docs support them
- evaluate how answer abstraction affects citation transparency
- compare developer experience with Brave Search API and SearXNG
- define a public-safe query set for docs, release notes, issues, and standards
- identify suitable MCP or wrapper integration patterns without endorsing unreviewed adapters

Visual evidence:

- flow diagram for `query -> Tavily retrieval -> content extraction -> agent answer`
- table comparing raw source result access vs synthesized answer behavior
- cost/quota scorecard with dated source references

Matrix backfill:

- replace `Researching` with a Tavily-specific report link
- replace `Seeking` only when a stable best-practice entry exists
- update limitations around hosted dependency, data policy, quota, and abstraction

Acceptance criteria:

- official docs are cited with `observedAt`
- answer abstraction and citation quality are evaluated separately
- no account-specific quota, token, or dashboard data is published

### Issue 5: DuckDuckGo Instant Answer API As A Lightweight Fallback

Suggested title:
`[Research] DuckDuckGo Instant Answer API as an agent fallback`

Matrix row:
[DuckDuckGo Instant Answer API](https://duckduckgo.com/api)

Research question:
Can DuckDuckGo Instant Answer API serve as a lightweight fallback signal for agents, and what makes it unsuitable as a full primary web-search backend?

Official sources to verify:

- [DuckDuckGo Instant Answer API](https://duckduckgo.com/api)
- [DuckDuckGo API endpoint documentation](https://api.duckduckgo.com/api)

Research tasks:

- document endpoint behavior, parameters, JSON fields, and rate/usage statements from official docs
- evaluate entity, definition, and factual lookup use cases
- identify gaps for coding-agent work, such as full result ranking, freshness, source coverage, and deep documentation lookup
- compare against Brave Search API, Tavily, and SearXNG

Visual evidence:

- result-shape diagram for instant-answer JSON
- decision table for `fallback signal` vs `primary search backend`
- small public query set with dated observations

Matrix backfill:

- replace `Researching` with a DuckDuckGo-specific report link
- keep `Seeking` unless a durable best-practice integration path exists
- refine strengths and limitations around instant-answer scope

Acceptance criteria:

- the report does not overstate DuckDuckGo as a full web-search API
- all observations use public-safe queries
- limitations are concrete enough to guide agent routing

### Issue 6: Browser Retrieval With eze-is/web-access

Suggested title:
`[Research] Browser/CDP retrieval for coding agents using eze-is/web-access`

Matrix row:
[eze-is/web-access](https://github.com/eze-is/web-access)

Research question:
When should a coding agent use browser/CDP retrieval instead of search APIs, and what evidence should it collect from rendered pages?

Official or primary sources to verify:

- [eze-is/web-access](https://github.com/eze-is/web-access)
- Claude Code MCP and skill documentation when used as the host context

Research tasks:

- identify which tasks require rendered-page state, navigation, interaction, screenshot evidence, or DOM evidence
- compare browser retrieval with direct HTTP fetch and search APIs
- document cookie, profile, session, prompt-injection, and screenshot privacy risks
- define a public-safe visual evidence standard
- update the existing browser retrieval note if the research changes its conclusions

Visual evidence:

- browser retrieval threat model diagram
- screenshot redaction checklist
- decision table for `search API`, `HTTP fetch`, and `browser/CDP`

Matrix backfill:

- update the existing research report link if expanded
- replace `Seeking` only if a durable setup or best-practice entry exists
- refine limitations around session state, latency, and brittleness

Acceptance criteria:

- no private browser profile, cookie, session, or local path is shown
- screenshot examples are public, minimal, and redacted when needed
- the report states when browser retrieval should not be used

## Issue Batch 2: Cross-Option Evaluation

### Issue 7: Hybrid Search Routing Policy

Suggested title:
`[Research] Hybrid routing policy for agent search`

Research question:
How should an agent choose between local context, local docs, native web search, MCP tools, self-hosted SearXNG, hosted APIs, and browser retrieval?

Prerequisite:
Complete at least three Batch 1 reports first.

Research tasks:

- define a route-selection decision table
- add fallback behavior for stale, sparse, blocked, duplicated, or conflicting results
- define when user confirmation is required
- define when external search should be avoided entirely

Visual evidence:

- route decision tree
- privacy/freshness/cost matrix
- example task-to-route table

Acceptance criteria:

- private context never goes to external routes by default
- every route has an explicit fallback
- recommendations cite the completed option-specific reports

### Issue 8: Search Quality Benchmark For Agent Tasks

Suggested title:
`[Benchmark] Agent search quality across native search, hosted APIs, SearXNG, and browser retrieval`

Prerequisite:
Complete at least four option-specific reports first.

Research tasks:

- create a small public query set for docs, release notes, security advisories, issues, and standards
- measure source URL quality, relevance, freshness, citation quality, latency, and reproducibility
- separate qualitative notes from quantitative observations
- publish charts only from public-safe data

Visual evidence:

- scorecard chart
- latency distribution chart
- source-authority breakdown

Acceptance criteria:

- query set contains no private context
- methodology is reproducible
- charts and raw observations are publishable
