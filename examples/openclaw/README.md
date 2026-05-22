# OpenClaw Search Example

## Scenario

Use this pattern when OpenClaw needs operator-approved search during an automated workflow.

This is useful for:

- refreshing public documentation references
- checking public tool behavior before a run
- collecting source links for a report
- routing uncertain findings into a review queue

## Search Flow

1. Define the search purpose before the run starts.
2. Generate a sanitized query from public-safe task fields.
3. Send the query through the configured SearXNG hook.
4. Store only public-safe metadata in run artifacts.
5. Require review before using weak or conflicting sources.
6. Write findings into a report or issue using the research template.

## Configuration Pattern

Keep operator-specific values outside the repository.

```sh
SEARXNG_BASE_URL="https://search.example.org"
OPENCLAW_SEARCH_RESULT_LIMIT="5"
OPENCLAW_SEARCH_REVIEW_REQUIRED="true"
```

Use placeholders in examples and documentation. Real endpoints, credentials, and deployment names belong in local configuration only.

## Operator Guardrails

- define allowed search categories before enabling the hook
- block queries containing private hostnames, tokens, cookies, or local paths
- cap result count and retry count
- log selected source domains, not raw private context
- send low-confidence findings to review instead of publishing them automatically

## Privacy Boundary

Allowed artifacts:

- sanitized query intent
- selected public URLs
- source title and domain
- result count
- review outcome

Disallowed artifacts:

- private endpoint URLs
- credentials or session material
- raw internal prompts
- private object IDs
- local absolute paths

## Acceptance Criteria

- search purpose is explicit before execution
- query generation removes private context
- run artifacts contain only public-safe metadata
- conflicting results require review
- final reports cite opened sources and state limitations
