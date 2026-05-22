# Search Backend Comparison

## Problem

Coding agents need web search, but different search backends create different tradeoffs for privacy, cost, control, latency, relevance, and operational burden.

This page compares backend patterns after the integration strategy is chosen. For the higher-level route comparison, start with [Search integration strategies](search-integration-strategies.md).

## Summary

| Backend pattern | Best for | Strengths | Tradeoffs |
| --- | --- | --- | --- |
| Native/provider-managed search | users who already have search inside the agent runtime | no extra backend setup, integrated experience | limited control over routing, logging, backend choice, and reproducibility |
| Self-hosted SearXNG | privacy-aware agent workflows | operator control, engine choice, public-safe logging, no single vendor lock-in | requires deployment and maintenance |
| Trusted managed SearXNG | teams that want control without every user self-hosting | shared governance, consistent configuration, reusable hardening | still needs an accountable operator |
| Public SearXNG instance | quick trials and non-sensitive lookup | no setup, easy to test | unknown logging, unstable availability, rate limits outside your control |
| Hosted search API | fast product integration | simple API shape, often optimized for agent consumption | external provider trust, policy changes, quota or cost constraints |
| Browser-based retrieval | rendered pages, docs UIs, and interactive verification | can inspect page state beyond search snippets | slower, brittle, and sensitive to browser session privacy |
| Direct web search tool | general current-info lookup | convenient and broad | less control over routing, logging, and repeatable configuration |

## Recommended Default

Use native/provider-managed search when:

- the runtime already exposes search clearly
- setup speed matters more than backend control
- the user accepts the provider trust boundary
- citations and query visibility are sufficient for the task

Use self-hosted or trusted managed SearXNG when:

- search queries may reveal project intent
- operators need control over engines and logging
- agents need repeatable behavior
- the workflow should avoid private context leakage
- search configuration must be reviewable

Use hosted search APIs such as Brave Search API or Tavily when:

- the workflow values speed of integration over control
- the provider's data policy fits the task
- quotas and costs are acceptable
- result quality has been evaluated for the target domain

Use browser-based retrieval when:

- rendered page state matters
- the task needs screenshots, DOM evidence, or interaction
- normal search results and HTTP fetches are insufficient

Use public SearXNG instances only for:

- quick experiments
- non-sensitive public queries
- backup discovery when no trusted instance is available

## Comparison Dimensions

### Privacy

Self-hosted SearXNG gives strong operator control because search traffic, logging policy, and engine selection are controlled by the deployer.

Native/provider-managed search, public instances, hosted APIs, and browser plugins require trust in their respective providers or runtime boundaries. They may still be appropriate for public, low-risk queries, but should not receive private code excerpts, internal hostnames, credentials, local paths, or customer data.

### Control

SearXNG lets operators choose engines, categories, safe-search settings, proxy behavior, and response formats.

Hosted APIs are easier to adopt but expose fewer controls. Native search and direct web search tools are convenient but often harder to make reproducible across agents. Browser retrieval gives page-state control but adds session and automation complexity.

### Relevance

Hosted search APIs may return cleaner agent-oriented summaries. SearXNG can provide broad coverage across engines, but agents must filter, open, and cite sources carefully. Browser retrieval can verify rendered content, but it should not replace source-quality checks.

For coding-agent work, prefer official documentation, release notes, primary repositories, standards, and security advisories regardless of backend.

### Reliability

Self-hosted services require operational ownership. Public instances can disappear, throttle, block automation, or change behavior without notice.

For durable workflows, document fallback behavior and rate-limit handling.

### Cost

Self-hosted SearXNG shifts cost to infrastructure and maintenance. Hosted APIs shift cost to provider pricing and quota policy.

Avoid hardcoding public pricing or quota numbers in this repository unless they are dated and sourced.

## Decision Guide

Choose native/provider-managed search when:

- low setup matters most
- provider trust is acceptable
- query visibility and citation behavior are sufficient

Choose self-hosted SearXNG when:

- privacy and control matter most
- operators can maintain a small service
- agent behavior must be auditable

Choose trusted managed SearXNG when:

- a team wants shared governance
- individual self-hosting is too much overhead
- the operator can publish a clear usage policy

Choose a hosted search API when:

- product integration speed matters most
- external provider trust is acceptable
- cost and quota behavior fit the workload

Choose a public SearXNG instance when:

- the query is public and low-risk
- the result is only exploratory
- the agent records uncertainty and avoids relying on a single source

Choose browser retrieval when:

- rendered content or interaction is required
- browser state can be isolated
- the agent records screenshot, DOM, or source evidence without leaking private session data

## Agent Rules

Agents should:

- check local repository context before external search
- avoid sending private context to any backend
- prefer official and primary sources
- cite opened URLs
- state uncertainty when sources conflict
- record backend-specific limitations in research notes

## Acceptance Criteria

- backend choice is documented
- privacy tradeoffs are explicit
- fallback behavior is known
- agents do not send secrets, private endpoints, local paths, or private source excerpts to search
- evaluation notes separate observation from recommendation
