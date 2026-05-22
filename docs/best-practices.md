# Best Practices

## Problem

Coding agents often search too broadly, trust weak sources, leak environment details, or hide search behavior inside opaque prompts. Search quality improves when retrieval is explicit, privacy-aware, reviewable, and matched to the task instead of being tied to a single backend.

## Core Principles

- Search only when fresh, external, or source-grounded information is needed.
- Keep search requests narrow, task-oriented, and easy to inspect.
- Separate retrieval from synthesis.
- Prefer public-safe configuration and examples.
- Record limitations when search results are incomplete, unstable, or environment-dependent.
- Make the search path easy to disable, replace, and audit.

## When To Search

Search is appropriate when:

- a fact may have changed recently
- the agent needs source URLs or citations
- local repository context is insufficient
- a dependency, tool, or public API may have changed
- the task asks for comparison, discovery, or current availability

Avoid search when:

- the answer should come from local files
- the query would expose private code, hostnames, customer data, or credentials
- the agent can solve the task with existing repository context
- the search result would be used without verification

## Search Backend Selection

Use a backend only when it fits the trust model for the task. The backend may be native agent search, an MCP adapter, a self-hosted SearXNG instance, a hosted search API, a browser-based retriever, or a local documentation index.

Recommended checks:

- ownership and operating policy are understood
- response format is stable enough for automation
- rate limits are compatible with agent usage
- result quality is acceptable for the target domain
- logging and privacy behavior are acceptable
- fallback behavior is documented

Do not publish private instance URLs, API keys, browser profiles, or account-specific settings in this repository. Use placeholders such as `https://search.example.org` in public examples.

## Query Design

Good agent queries are short, explicit, and scoped.

Prefer:

- exact project, tool, API, or error names
- one intent per query
- source-oriented terms such as `docs`, `release notes`, `security advisory`, or `schema`
- date or version constraints only when they are relevant

Avoid:

- dumping internal prompts into search
- including full local paths, private hostnames, tokens, or user identifiers
- broad paraphrase storms that create noisy results
- mixing fact lookup, planning, and synthesis in one query

## Retrieval Flow

Use a small staged flow before adding complex routing.

1. Build one narrow query from the task.
2. Fetch a small result set.
3. Filter by source quality and relevance.
4. Open only the results needed for verification.
5. Synthesize with links and limitations.
6. Record any gap that should become a known issue or research note.

## Fallback Strategy

Fallbacks should be explicit and bounded.

Recommended order:

1. local repository files
2. official documentation or primary sources
3. the approved external search backend
4. secondary sources with clear uncertainty
5. issue-first proposal when behavior is still under investigation

Avoid automatic multi-engine fan-out unless the agent records why it was needed and how duplicate or low-quality results were filtered.

## Rate Limits And Retries

Agents should behave like careful clients.

- keep default result counts small
- use exponential backoff for transient failures
- cap retries per query
- avoid concurrent bursts against public instances
- surface rate-limit failures instead of silently degrading quality
- cache only public-safe search metadata

## Privacy-Safe Logging

Logs should help review search behavior without exposing sensitive data.

Safe fields:

- sanitized query intent
- timestamp or run id
- result count
- selected source domains
- final cited URLs
- error class

Unsafe fields:

- credentials, cookies, or session headers
- private endpoint URLs
- raw prompts containing private context
- local absolute paths
- personal email addresses or account identifiers

## Result Summarization

Treat search results as leads, not facts.

- prefer primary sources
- cite source URLs when claims depend on external information
- distinguish source content from agent inference
- state dates when recency matters
- avoid overclaiming from snippets
- preserve uncertainty when sources disagree

## Agent Contributions

AI agents contributing to this repository should:

- read `AGENTS.md` before editing
- update `registry/resources.json` for durable resources
- use `templates/integration-template.md` or `templates/research-report-template.md`
- include problem, approach, expected benefit, privacy considerations, and acceptance criteria
- run `make review`

Open an issue first when the contribution changes the trust model, depends on external service behavior, or introduces a new privacy tradeoff.
