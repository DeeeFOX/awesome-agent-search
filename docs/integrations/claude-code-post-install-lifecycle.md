# Claude Code Post-Install Lifecycle

## Goal

Explain what remains after Claude Code has been connected to SearXNG through MCP, how long the capability lasts, and how to verify it after restarting Claude Code or switching folders.

Use this guide after completing [Claude Code self-bootstrap](claude-code-self-bootstrap.md).

## Mental Model

Claude Code can use SearXNG search when both conditions are true:

1. Claude Code has an MCP server configuration in an active scope.
2. The configured SearXNG endpoint is reachable and returns usable search results.

The MCP configuration and the SearXNG service have separate lifecycles. Restarting Claude Code usually does not remove the MCP configuration. Stopping a local SearXNG service can still make search unavailable.

## What Persists

| Component | Persists after Claude Code restart | Persists across folders | Notes |
| --- | --- | --- | --- |
| `local` MCP scope | yes | no | Available only for the project where it was added. |
| `user` MCP scope | yes | yes | Available to Claude Code on the same user account and machine. |
| `project` MCP scope | yes | only where the project config exists | Review committed config carefully before sharing. |
| Managed SearXNG endpoint | depends on operator | yes, if reachable | Availability is outside Claude Code. |
| Local SearXNG container or service | depends on runtime | yes, if running | It is not tied to the current shell folder. |

## If You Restart In Another Folder

Use this decision table:

| Current MCP scope | Another folder can use search? | What to do |
| --- | --- | --- |
| `user` | yes | Start Claude Code normally, then verify `/mcp` or `claude mcp get searxng`. |
| `local` | no | Add the same MCP server in the new project, or reinstall with `user` scope if cross-project search is intended. |
| `project` | only if that folder contains the reviewed project MCP config | Open the project that owns the config, or add a local/user-scoped server for the new folder. |

Do not assume a working search tool in one folder means every other folder has the same scope. Ask Claude Code to inspect the MCP scope before making that claim.

## Host Restart Behavior

After a machine restart, check two layers:

1. Container or service runtime is running, if SearXNG is local.
2. The SearXNG endpoint responds to a public-safe JSON query.

For local containers, restart behavior depends on Docker, Podman, a service manager, or the operator's deployment platform. This repository should not publish machine-specific startup files or private host paths.

For managed endpoints, ask the operator for the expected uptime, maintenance window, and incident channel.

## Regional Search Engine Availability

Search-engine reachability varies by region and network policy. If one engine times out or returns unreliable results, choose lawful, reachable engines for the deployment region and verify them with public-safe queries.

Do not document bypass steps, private proxy details, or instructions intended to evade regional restrictions.

## Verification Commands

Check Claude Code configuration:

```sh
claude mcp list
claude mcp get searxng
```

Inside Claude Code:

```text
/mcp
```

Check the SearXNG JSON endpoint with a sanitized query:

```sh
curl -sS "https://search.example.org/search?q=SearXNG%20Search%20API&format=json"
```

Do not paste real private endpoints into shared issues, PRs, or public docs.

## Agent Self-Test Prompt

After installation, ask Claude Code:

```text
Without revealing private endpoints, local absolute paths, usernames, account identifiers, or raw command output, verify whether SearXNG MCP search is available in this Claude Code session. State the MCP scope, whether the SearXNG endpoint is reachable, whether search should still work after restarting Claude Code, and whether it should work from another project folder. If the current scope is local, explain that another folder needs its own local config or a user-scoped install.
```

Acceptance criteria:

- Claude Code reports the MCP scope.
- Claude Code separates MCP configuration lifecycle from SearXNG service lifecycle.
- Claude Code explains restart and cross-folder behavior from the actual scope.
- Claude Code does not reveal private endpoints, local paths, usernames, emails, or raw environment details.
- Claude Code does not recommend bypassing regional search-engine restrictions.

## User-Facing Confirmation Prompt

Use this short prompt when a human wants to confirm the behavior:

```text
If I close Claude Code and reopen it in another folder, will SearXNG search still work? Please answer based on the actual MCP scope and service status. Do not print private endpoints or local paths.
```

## Acceptance Criteria

- The installed MCP server is visible in `claude mcp list` and `/mcp`.
- The configured SearXNG endpoint returns JSON for a public-safe query.
- The current MCP scope is known before claiming cross-folder availability.
- The operator knows how the SearXNG service is started after host restart.
- Public docs and support answers remain sanitized.
