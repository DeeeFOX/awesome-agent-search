# Claude Code Search Example

For the fuller MCP pattern, see [../../docs/integrations/claude-code-mcp.md](../../docs/integrations/claude-code-mcp.md).

## Scenario

Use this pattern when a Claude Code workflow needs a controlled search route for public documentation, release notes, or source-grounded comparisons.

The goal is to keep search separate from private project context.

## Search Flow

1. Ask whether the answer should come from the repository first.
2. Build a public-safe query from the task.
3. Route the query through a SearXNG wrapper, MCP server, or approved project command.
4. Limit results before opening sources.
5. Prefer official documentation, primary repositories, and release notes.
6. Report findings with URLs and known limitations.

## Configuration Pattern

Keep endpoint configuration outside committed files.

```sh
SEARXNG_BASE_URL="https://search.example.org"
SEARXNG_TIMEOUT_MS="8000"
SEARXNG_RESULT_LIMIT="5"
```

Project-level guidance can point Claude Code to the wrapper without naming a private endpoint.

```text
Use the configured search wrapper for public web lookup. Do not include private repository content, internal hostnames, credentials, cookies, session data, or local absolute paths in queries. Prefer official sources and record uncertainty.
```

## Safe Query Examples

- `SearXNG JSON format documentation`
- `Node.js fetch timeout AbortController docs`
- `Claude Code project instructions public examples`

## Unsafe Query Examples

- queries containing private hostnames
- queries containing copied internal code
- queries containing account names or personal email addresses
- queries containing tokens, cookies, or session identifiers

## Privacy Boundary

Search is retrieval, not memory. Do not use it to store project context or operational details. If a useful query requires private terms, rewrite it with public equivalents or skip search.

## Acceptance Criteria

- the workflow keeps endpoint configuration outside the repository
- search queries are public-safe
- official or primary sources are preferred
- limitations are stated when results are weak or unstable
- durable guidance is added to `registry/resources.json` when appropriate
