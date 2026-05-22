# Codex Search Example

## Scenario

Use this pattern when Codex needs current or source-grounded information that is not available in the local workspace.

Typical cases:

- checking current dependency behavior
- finding official documentation
- comparing public implementation patterns
- collecting citations for a research note

## Search Flow

1. Inspect local files first.
2. Decide whether external search is necessary.
3. Convert the task into one narrow query.
4. Send the query through an approved SearXNG endpoint or wrapper.
5. Open only the most relevant results.
6. Summarize with source links and uncertainty notes.

## Configuration Pattern

Use environment variables or a local wrapper so public examples do not expose deployment details.

```sh
SEARXNG_BASE_URL="https://search.example.org"
SEARXNG_RESULT_LIMIT="5"
SEARXNG_SAFE_SEARCH="1"
```

Do not commit the real value if the endpoint is private.

## Prompt Boundary

Recommended instruction for a Codex project:

```text
Search only when repository context is insufficient or current public information is required. Never send secrets, tokens, cookies, private hostnames, local absolute paths, or private code excerpts to search. Prefer official sources and cite URLs when external facts affect the answer.
```

## Privacy Boundary

Allowed in search queries:

- public package names
- public API names
- public error messages after sanitization
- public documentation topics

Not allowed:

- raw private source code
- credentials or headers
- private issue text
- personal identifiers
- local machine paths

## Acceptance Criteria

- local context is checked before external search
- query text is sanitized
- result count is bounded
- cited results are opened before use
- final output separates source facts from agent inference
