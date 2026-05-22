# Search Integration Strategies

## Problem

Coding agents need current external information, but "add web search" is not one implementation choice. Search can enter an agent through native product features, MCP tools, self-hosted search services, hosted search APIs, browser automation, or local documentation indexes.

This page compares integration strategies before choosing a backend. Use it to define research issues, acceptance criteria, and follow-up comparisons.

## Strategy Matrix

| Strategy | Best for | Strengths | Tradeoffs |
| --- | --- | --- | --- |
| Native or provider-managed web search | fast adoption when the agent runtime already provides search | low setup, integrated UX, fewer moving parts | less control over routing, logging, backend choice, policy, and reproducibility |
| MCP search adapter | agent runtimes that can call external tools through MCP or similar protocols | explicit tool boundary, portable pattern, backend can be swapped | requires lifecycle, permissions, prompt-injection, and tool-surface management |
| Self-hosted search aggregator | teams that need privacy, policy control, and repeatable configuration | operator control, reviewable configuration, customizable engine mix | deployment and maintenance burden |
| Hosted search API | products that need fast API integration and predictable response shape | simple integration, managed availability, often agent-friendly outputs | provider trust, quota, cost, data-policy, and vendor-lock-in concerns |
| Browser-based retrieval | pages that require rendering, interaction, or visual verification | sees rendered pages, can validate UI state, can support screenshots | slower, brittle, higher prompt-injection risk, browser profile privacy concerns |
| Local or private documentation search | repositories, docs mirrors, internal knowledge bases, and offline-first workflows | avoids external leakage, fast, reproducible | limited freshness unless indexes are updated |
| Hybrid router | mature workflows with multiple search needs | can choose the lowest-risk route per query | more policy, evaluation, and observability required |

## Research Questions

Use these questions before recommending a strategy:

- What information is missing from local context?
- Does the query require live web freshness, official docs, rendered browser state, or local/private docs?
- Which trust boundary receives the query?
- Can the agent show the query, selected sources, and limitations?
- Can the search route be disabled, audited, and replaced?
- What is the fallback when the route fails, times out, or returns weak sources?
- What must be cited from opened sources instead of snippets?

## Strategy Notes

### Native Or Provider-Managed Web Search

Native search is attractive when the runtime already supports it and users want minimal setup. It is a good comparison baseline because many users will first ask whether they can rely on the agent's built-in search.

Evaluate:

- availability by product, plan, model, workspace, and region
- whether the agent exposes queries and citations clearly
- whether routing, source filtering, and logging can be configured
- whether results are reproducible enough for team workflows
- whether users can disable or override it with explicit tools

### MCP Search Adapter

MCP is useful when the agent should call a visible search tool rather than hiding retrieval inside a broad prompt. The backend may be SearXNG, Brave Search API, Tavily, a custom crawler, or a team-owned service.

Evaluate:

- install scope and lifecycle
- environment-variable and credential handling
- tool names and schema clarity
- query sanitization
- prompt-injection resistance
- post-install self-test and uninstall path

### Self-Hosted Search Aggregator

SearXNG is the main self-hosted aggregator currently covered in this repository. It is valuable because operators can control engine choice, formats, logging, and deployment policy.

Evaluate:

- engine availability in the user's region
- JSON/API stability for agents
- rate limits and abuse protections
- logs and retention policy
- operational ownership
- fallback strategy when engines block, timeout, or return sparse results

### Hosted Search API

Hosted APIs such as Brave Search API and Tavily are useful when integration speed and managed availability matter more than full operator control.

Evaluate:

- data policy and query retention
- source coverage and ranking behavior
- citation/source URL quality
- freshness and domain filtering
- cost, quota, and rate-limit behavior
- SDK or MCP server maturity

Do not hardcode pricing, quotas, or vendor claims unless the note is dated and sourced.

### Browser-Based Retrieval

Browser tools and browser plugins can help when search results are not enough and the agent must inspect a rendered page, documentation UI, or workflow state.

Evaluate:

- whether a normal HTTP fetch is enough before using a browser
- cookie/session isolation
- prompt-injection exposure from page content
- screenshot or DOM evidence requirements
- latency and reliability under automation
- cleanup of browser state after the run

Representative project:

- [eze-is/web-access](https://github.com/eze-is/web-access) - a Claude Code-oriented browser/CDP skill that can be used to study browser-driven retrieval and page-state evidence.

### Local Or Private Documentation Search

Local search should remain the first route when the answer can be found in repository files, vendored docs, docs mirrors, or internal indexes.

Evaluate:

- index freshness
- source-of-truth ownership
- whether results can be cited with file paths or public URLs
- how private snippets are kept out of public reports

## Issue Backlog Candidates

Publish these as GitHub issues only after the repository positioning has been updated and each issue has clear acceptance criteria.

- Compare native/provider-managed web search in Codex and Claude Code.
- Compare SearXNG, Brave Search API, Tavily, and other hosted search routes for coding agents.
- Compare MCP search adapter patterns across Claude Code, Codex, OpenClaw, and generic agents.
- Compare browser-based retrieval with search APIs for documentation-heavy coding tasks.
- Build a public query evaluation set for agent search quality.
- Define a privacy and logging matrix for search integration routes.
- Define a hybrid routing policy for local docs, native search, MCP search, hosted APIs, and browser retrieval.

## Official Reference Starting Points

- [OpenAI Web Search tool](https://developers.openai.com/api/docs/guides/tools-web-search)
- [OpenAI Codex docs](https://developers.openai.com/codex/cloud)
- [Claude Code MCP docs](https://code.claude.com/docs/en/mcp)
- [Claude MCP Web Search connector](https://support.claude.com/en/articles/14503775-mcp-web-search)
- [Brave Search API](https://brave.com/search/api/)
- [Tavily API docs](https://docs.tavily.com/api-reference/introduction)
- [SearXNG docs](https://docs.searxng.org/)

## Acceptance Criteria

- the chosen route is documented as a strategy, not just a tool name
- privacy, control, reliability, cost, and evaluation tradeoffs are explicit
- SearXNG is treated as one important route, not the whole scope
- issues created from this page compare strategies using the same criteria
