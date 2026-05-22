# MCP SearXNG Server Comparison

## Scope

This note compares public MCP-to-SearXNG bridge projects that can help coding agents search the web through a SearXNG backend.

Research date: 2026-05-22.

This is an observed adapter matrix, not a full benchmark. Revalidate package health, command syntax, and security posture before making a server the default in an installable `oh-my-*` companion repository.

## Baseline Requirements

A SearXNG MCP bridge should:

- use a trusted SearXNG endpoint
- support JSON search output
- expose a narrow search tool with bounded result counts
- keep endpoint and credential values out of committed files
- document transport type and Claude Code scope
- avoid random public-instance selection by default
- make URL reading optional and separately governed

## Protocol Notes

Claude Code supports MCP servers through `claude mcp add`, `claude mcp list`, `claude mcp get`, and the in-session `/mcp` panel. For remote MCP servers, HTTP is the recommended transport. SSE is deprecated where HTTP is available. Local stdio servers remain useful for command-based adapters.

Project-scoped MCP configuration is shareable through `.mcp.json`, but it is also higher risk because it enters version control and requires user approval. For SearXNG search, prefer `local` or `user` scope unless a team has reviewed the exact adapter and endpoint policy.

SearXNG JSON output is not guaranteed. The Search API returns JSON only when the requested format is enabled in `settings.yml`; requesting an unset format can return `403 Forbidden`, and many public instances disable non-HTML formats.

## Comparison Matrix

| Project | Runtime | Transport shape | SearXNG endpoint config | Fit | Main concerns |
| --- | --- | --- | --- | --- | --- |
| [ihor-sokoliuk/mcp-searxng](https://github.com/ihor-sokoliuk/mcp-searxng) | Node.js / npm / Docker | stdio by default, HTTP mode via `MCP_HTTP_PORT` | `SEARXNG_URL` | Strong candidate for a Claude Code starter because it has clear `npx` and Docker paths, search, URL reading, pagination, language, time range, and safe-search options. | URL reading must be guarded. HTTP mode adds a service boundary that needs auth, network, and timeout review. |
| [SecretiveShell/MCP-searxng](https://github.com/SecretiveShell/MCP-searxng) | Python / uvx | stdio | `SEARXNG_URL`, defaulting to a local SearXNG URL when unset | Lightweight fallback for users comfortable with `uvx`. | README examples are Claude Desktop oriented, not Claude Code specific. Local-copy examples use machine-specific paths that must not be copied into public docs. |
| [The-AI-Workshops/searxng-mcp-server](https://github.com/The-AI-Workshops/searxng-mcp-server) | Python / Docker / Smithery | SSE and stdio | `SEARXNG_BASE_URL` | Useful template for building or studying a SearXNG MCP server. | SSE-first framing is less ideal for new Claude Code guidance because Claude Code docs now prefer HTTP over SSE where available. Examples include environment-specific ports and paths that need sanitization. |
| [tisDDM/searxng-mcp](https://github.com/tisDDM/searxng-mcp) | Node.js | stdio | `SEARXNG_URL`, optional random public instance selection | Useful historical reference for early SearXNG MCP patterns. | The repository marks itself deprecated. Random public-instance fallback is not a safe default for coding-agent search. |

## Recommended Default For This Repository

Keep `awesome-agent-search` adapter-neutral.

Use these docs to define requirements and compare candidates, but do not make a specific package the canonical default until it has been verified with:

- a trusted SearXNG endpoint with JSON enabled
- `claude mcp add` installation
- `claude mcp list` and `/mcp` status checks
- at least one public-safe search smoke test
- one negative test for private-context leakage
- a URL-reading risk review when the adapter exposes page fetch tools

## Candidate Default For An Installable Companion

For a future `oh-my-agent-search` repository, the first candidate to verify is `ihor-sokoliuk/mcp-searxng`.

Reasoning:

- it exposes an `npx -y mcp-searxng` path that maps cleanly to Claude Code stdio MCP commands
- it supports Docker for users who prefer process isolation
- it documents a health endpoint when HTTP mode is enabled
- it explicitly depends on SearXNG HTTP JSON API behavior
- it documents common `403 Forbidden` failure mode when JSON output is disabled

This should still be treated as a candidate, not a guarantee. A starter repository should pin versions, provide a doctor command, and test the configured endpoint before asking users to trust the tool.

## Bootstrap Acceptance Criteria

Before a README claims "Claude Code can add SearXNG search", it should prove:

- the SearXNG endpoint responds to `format=json`
- the MCP server starts under Claude Code
- `/mcp` shows at least one search tool
- a query like `SearXNG Search API official docs` returns public sources
- the agent instruction forbids secrets, private endpoints, local absolute paths, private issue text, and private source excerpts in queries
- the workflow cites opened public URLs before using external facts

## Source Links

- [Claude Code MCP documentation](https://code.claude.com/docs/en/mcp)
- [SearXNG Search API documentation](https://docs.searxng.org/dev/search_api.html)
- [SearXNG settings documentation](https://docs.searxng.org/admin/settings/settings.html)
- [ihor-sokoliuk/mcp-searxng](https://github.com/ihor-sokoliuk/mcp-searxng)
- [SecretiveShell/MCP-searxng](https://github.com/SecretiveShell/MCP-searxng)
- [The-AI-Workshops/searxng-mcp-server](https://github.com/The-AI-Workshops/searxng-mcp-server)
- [tisDDM/searxng-mcp](https://github.com/tisDDM/searxng-mcp)
