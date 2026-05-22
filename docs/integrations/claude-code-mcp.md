# Claude Code MCP Guide

## Problem

Claude Code can use external tools, but search quality drops when web lookup is hidden inside broad prompts or when private project context is sent to search backends.

## Approach

Use an MCP server as the explicit boundary between Claude Code and SearXNG. Keep SearXNG endpoint, authentication, and network settings in local configuration, not in this repository.

Recommended shape:

```text
Claude Code -> MCP search server -> SearXNG -> selected public search engines
```

## Expected Benefit

- search is visible as a tool call
- endpoint configuration stays outside committed files
- source URLs can be opened and cited
- URL-reading behavior can be governed separately from search
- fallback paths remain clear for non-MCP agents

## Public-Safe Configuration Pattern

Use placeholders in shared docs and examples.

```json
{
  "mcpServers": {
    "searxng": {
      "command": "npx",
      "args": ["-y", "mcp-searxng"],
      "env": {
        "SEARXNG_URL": "https://search.example.org"
      }
    }
  }
}
```

If the endpoint is private, keep the real value in local configuration only.

## Recommended Agent Instruction

```text
Use the configured SearXNG MCP tools only when repository context is insufficient or current public information is required. Do not include secrets, credentials, cookies, session data, private hostnames, local absolute paths, private issue text, or private source excerpts in search queries. Prefer official sources. Cite opened URLs when external facts affect the answer.
```

## Search Flow

1. Inspect local repository context first.
2. Decide whether fresh or source-grounded public information is needed.
3. Rewrite the task into a narrow public-safe query.
4. Call the MCP search tool with a small result limit.
5. Open only relevant sources.
6. Prefer official docs, release notes, primary repositories, standards, advisories, or vendor pages.
7. Summarize with citations and uncertainty notes.

## URL Reading Boundary

URL reading is useful but higher risk than search. Treat it as a separate capability.

Recommended defaults:

- block private-network targets unless an operator explicitly enables them
- cap page length or use pagination
- avoid reading pages that require authenticated sessions
- record which public URLs were opened
- do not use URL reading as a way to inspect private services

## Fallback For Non-MCP Agents

If the active model or runtime cannot call MCP tools, use a local wrapper or skill that:

- accepts only sanitized query text
- limits result count
- returns title, URL, source domain, and short snippet
- requires source opening before synthesis
- logs sanitized query intent instead of raw private context

Do not present the fallback as equivalent to MCP. It is more portable, but weaker for permissioning and structured tool behavior.

## Privacy Considerations

- Use `https://search.example.org` in public examples.
- Never publish real private endpoints or account identifiers.
- Keep authentication and proxy values local.
- Avoid copying private repository text into queries.
- Treat regional availability and latency claims as dated observations unless revalidated.

## Acceptance Criteria

- Claude Code has a clear MCP search path.
- Search is used only after local context is checked.
- Query text is public-safe.
- Sources are opened before citation.
- Private endpoints and credentials stay outside committed files.
- Any durable improvement is added to `registry/resources.json`.
