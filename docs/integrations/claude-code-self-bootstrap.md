# Claude Code Self-Bootstrap Guide

## Goal

Give Claude Code a public-safe path to add SearXNG-backed web search through MCP, then verify that search works before using it in project work.

This guide is written so a human can follow it manually, or ask Claude Code to follow it step by step with approval at each boundary.

## Safety Model

Use SearXNG search only for public information.

Do not send:

- secrets
- credentials
- cookies
- session material
- customer data
- private issue text
- private source excerpts
- private hostnames
- local absolute paths
- unreleased project names when they reveal intent

Prefer local or user MCP scope. Use project scope only after reviewing `.mcp.json` and confirming the endpoint policy is safe to share.

## Prerequisites

- Claude Code is installed and authenticated.
- A trusted SearXNG endpoint is available.
- SearXNG supports JSON output.
- Node.js is available if using an npm-based MCP server.
- The operator has reviewed the selected MCP adapter.

Use placeholders in shared docs:

```text
https://search.example.org
```

Keep real endpoints in local configuration only.

## Step 1: Verify SearXNG JSON Output

Run a public-safe test query against the trusted endpoint:

```sh
curl -sS "https://search.example.org/search?q=SearXNG%20Search%20API&format=json"
```

Expected result:

- HTTP success
- JSON response
- a `results` collection or equivalent search payload

If the endpoint returns `403 Forbidden`, JSON output is likely not enabled in SearXNG.

Operator-side SearXNG setting:

```yaml
search:
  formats:
    - html
    - json
```

Restart SearXNG after changing settings, then repeat the JSON check.

## Step 2: Choose An MCP Adapter

Read [MCP SearXNG server comparison](../comparisons/mcp-searxng-servers.md).

For a first Claude Code smoke test, use a local stdio server. It keeps the server process attached to Claude Code and avoids exposing a separate network service.

Candidate command shape:

```sh
claude mcp add -s local -e SEARXNG_URL=https://search.example.org -t stdio searxng -- npx -y mcp-searxng
```

Notes:

- options must come before the server name
- `--` separates Claude Code options from the MCP server command
- `-s local` keeps the configuration private to the current project
- use `-s user` only when the same trusted search setup should be available across projects
- avoid `-s project` until the team agrees to commit `.mcp.json`
- run `claude mcp add --help` first if your Claude Code version uses different option names

## Step 3: Confirm Claude Code Sees The Server

List configured servers:

```sh
claude mcp list
```

Inspect the server:

```sh
claude mcp get searxng
```

Inside Claude Code, open:

```text
/mcp
```

Expected result:

- server status is connected or available
- at least one search tool is visible
- no authentication, endpoint, or timeout error is shown

## Step 4: Add A Search Instruction

Add this to the local project instructions or session prompt:

```text
Use the configured SearXNG MCP search tool only when local repository context is insufficient or current public information is required. Rewrite requests into narrow public-safe queries. Do not include secrets, credentials, cookies, session data, private hostnames, local absolute paths, private issue text, private source excerpts, or customer data in search queries. Prefer official sources. Open relevant public URLs before citing external facts. State uncertainty when sources conflict.
```

Do not commit real endpoint values or credentials with this instruction.

## Step 5: Run A Smoke Test

Ask Claude Code:

```text
Search for the official SearXNG Search API documentation. Open the most relevant official result and summarize only the public requirements for JSON output. Cite the URL.
```

Acceptance criteria:

- Claude Code uses the configured MCP server
- the query is public-safe
- it opens an official SearXNG documentation URL
- it explains that JSON format must be enabled for API-style access
- it cites the opened URL

## Step 6: Run A Negative Test

Ask Claude Code:

```text
Before searching, explain whether you would include private repository code, local file paths, credentials, or private hostnames in a web search query.
```

Expected answer:

- it refuses to include private context in search
- it proposes a sanitized public query instead
- it asks for operator approval when a query may reveal private intent

## Step 7: Confirm Lifecycle And Scope

Read [Claude Code post-install lifecycle](claude-code-post-install-lifecycle.md), then ask Claude Code:

```text
If I close Claude Code and reopen it in another folder, will SearXNG search still work? Please answer based on the actual MCP scope and service status. Do not print private endpoints or local paths.
```

Acceptance criteria:

- the answer names the actual MCP scope
- it explains whether the scope is current-project only, user-wide, or project-config based
- it separates Claude Code restart behavior from SearXNG service uptime
- it does not expose private endpoints, local paths, usernames, emails, or raw command output
- it does not recommend bypassing regional search-engine restrictions

## Troubleshooting

### `403 Forbidden` From SearXNG

Enable JSON output in SearXNG `search.formats`, restart the service, and retry the direct JSON check.

### Claude Code Shows No Tools

Check:

- `claude mcp list`
- `claude mcp get searxng`
- `/mcp`
- whether Node.js can run the selected adapter
- whether the endpoint is reachable from the machine running Claude Code

### Search Works But URL Reading Is Too Broad

Treat URL reading as a separate capability. If the adapter exposes a page-reading tool, configure agent instructions to open only public URLs, avoid authenticated pages, and cap retrieved content.

### Public Instances Fail Or Rate Limit

Do not treat public SearXNG instances as durable infrastructure. Use self-hosted or trusted managed SearXNG for repeatable coding-agent workflows.

## Companion Repository Boundary

This guide belongs in `awesome-agent-search` because it defines the public-safe integration pattern.

An `oh-my-agent-search` companion repository should only be created after this flow is verified end to end. That installable repository should provide:

- a pinned adapter path
- a dry-run installer
- a doctor command
- an endpoint JSON check
- a Claude Code MCP status check
- privacy-safe default instructions
- versioned templates

## Source Links

- [Claude Code MCP documentation](https://code.claude.com/docs/en/mcp)
- [SearXNG Search API documentation](https://docs.searxng.org/dev/search_api.html)
- [MCP SearXNG server comparison](../comparisons/mcp-searxng-servers.md)
