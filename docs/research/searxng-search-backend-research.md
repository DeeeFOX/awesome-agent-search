# SearXNG Search Backend Research

## Question

When should an agent-search workflow use SearXNG, and which SearXNG deployment pattern is appropriate?

## Source Material

This report merges and sanitizes two local inputs:

- a local Chinese research draft named `研究报告.md`
- the previous search-backend comparison note in this repository

The raw draft is not published because it contained local machine paths, environment-specific setup notes, regional connectivity workarounds, command transcripts, and values that are not appropriate for an awesome-list repository.

## Scope

This is a research and comparison note. It is not an installation guide.

Runnable Claude Code setup, local SearXNG bootstrapping, MCP adapter selection, post-install lifecycle checks, and uninstall flows belong in the installable companion: [oh-my-agent-search](https://github.com/DeeeFOX/oh-my-agent-search).

## Findings

### SearXNG is an operator-controlled search backend

SearXNG is useful when a team wants control over search engines, response formats, logging policy, rate limits, and deployment ownership. It is most relevant when agents need a repeatable public web-search route and the operator does not want to depend on arbitrary public instances.

### JSON output is the critical agent-facing requirement

Agent integrations need structured results. A SearXNG endpoint is not automatically suitable for agents just because the HTML UI works. The endpoint must support JSON output for search requests, and the workflow should verify that with a public-safe query before the agent relies on it.

### Engine availability is environment-specific

Search-engine reachability varies by region, network, upstream rate limits, and anti-abuse behavior. Public documentation should not publish workarounds for reaching unavailable services. Instead, operators should validate which engines are lawfully reachable in their own environment and choose the engine profile that works there.

### Public instances are only a trial path

Public SearXNG instances are useful for quick experiments and low-risk public lookups. They are not a durable default for coding-agent workflows because availability, logging policy, result quality, and rate limits are outside the user's control.

### MCP is an integration route, not the backend itself

MCP can expose SearXNG search to an agent through a visible tool boundary. That improves auditability, but it also introduces lifecycle, scope, schema, URL-reading, and uninstall questions. The installable companion owns those operational details.

### Browser retrieval and hosted APIs solve different problems

Browser retrieval helps when rendered page state, interaction, screenshots, or UI verification matter. Hosted search APIs may be faster to integrate in products. They should be researched separately and should not reuse this SearXNG-specific report as their evidence base.

## SearXNG Deployment Pattern Matrix

| Pattern | Best for | Strengths | Limitations |
| --- | --- | --- | --- |
| Local self-hosted SearXNG | individual development and private experiments | operator controls config; easy to keep endpoint local; good for validating agent integration | depends on local container/runtime availability; not a team governance model |
| Team-managed SearXNG | shared coding-agent workflows | consistent engine policy, logging policy, and reviewable configuration | requires an accountable operator and service maintenance |
| Trusted managed SearXNG | teams that want shared control without each user self-hosting | reduces per-user setup while keeping a known trust boundary | still requires a clear operator policy and availability expectations |
| Public SearXNG instance | quick public trials | no setup; useful for exploratory checks | unknown logging, changing availability, uncontrolled rate limits, and weak reproducibility |
| SearXNG through an MCP companion | Claude Code or MCP-capable agents that need explicit tools | visible tool boundary, structured calls, post-install checks can be automated | adapter lifecycle, scope, permissions, and URL-reading behavior must be governed outside this awesome list |

## Decision Guide

Choose SearXNG when:

- operator control matters more than fastest setup
- the agent needs structured public search results
- the team can define logging, rate limits, and engine policy
- public-instance uncertainty is unacceptable
- the workflow can validate JSON output before use

Avoid SearXNG as the default when:

- the user only needs a built-in provider search feature
- no one can operate or monitor the endpoint
- the workflow needs rendered page state rather than search results
- a hosted API has already been evaluated and fits the trust, quota, and cost model

## Public-Safe Agent Rules

Agents using any SearXNG-backed route should:

- check local repository context first
- use narrow public-safe queries
- avoid private code, local paths, private hostnames, credentials, customer data, and unpublished issue text
- prefer official documentation, release notes, primary repositories, standards, and security advisories
- cite opened public URLs, not only snippets
- state backend limitations when results are sparse, duplicated, stale, or conflicting

## Research Gaps

This report does not cover:

- Brave Search API evidence for coding agents
- Tavily evidence for coding agents
- browser/CDP retrieval quality beyond the separate `eze-is/web-access` note
- native/provider-managed search quality in current Codex or Claude Code environments
- quantitative benchmarks across latency, relevance, cost, and citation quality

Rows for those options should remain marked as `调研中` until dedicated reports exist.

## Sanitization Notes

- Local paths and usernames were removed.
- Environment-specific command transcripts were excluded.
- Regional service workarounds were excluded.
- Secrets, tokens, cookies, private endpoints, account identifiers, and session material must not appear in examples.
- Installation steps were left to the installable companion repository.
