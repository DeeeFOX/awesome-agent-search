# SearXNG MCP Integration For Claude Code

## Question

Can SearXNG provide a practical, privacy-aware search backend for Claude Code and adjacent coding-agent workflows?

## Method

This note is derived from a local research draft produced on 2026-05-21 with Claude Code and GLM-5.1. The raw draft remains outside the public contribution set because it includes local paths and environment-specific deployment details.

The source draft reviewed:

- SearXNG architecture and JSON search behavior
- MCP-based integration through an SearXNG bridge
- skill-style fallback integration for non-MCP agents
- self-hosted deployment patterns
- regional search-engine availability observations
- security, privacy, and operational tradeoffs

Specific package versions, star counts, latency numbers, and regional engine availability should be treated as dated observations unless revalidated.

## Inputs

- SearXNG public documentation and runtime behavior
- MCP search bridge behavior
- local Docker-based SearXNG deployment notes
- Claude Code MCP workflow notes
- comparison notes for hosted search APIs and public SearXNG access

## Findings

### Self-hosted SearXNG fits agent search when privacy is important

Self-hosting gives operators control over engine selection, logging, rate limits, and network routing. This is a better default for coding-agent workflows than sending raw search traffic to arbitrary public instances.

Public SearXNG instances are useful for quick trials, but they should not be the default recommendation for durable agent workflows because availability, logging policy, result quality, and rate limits are outside the operator's control.

### MCP is the strongest Claude Code integration path

For Claude Code, an MCP server that exposes search and URL-reading tools is the cleanest integration shape.

Expected benefits:

- explicit tool calls
- structured search results
- reusable URL-reading workflow
- clearer permission boundaries
- easier auditing than prompt-only search instructions

The MCP server should be configured through local environment values. Public examples should use placeholders such as `https://search.example.org`.

### Skill or shell-wrapper patterns are useful fallbacks

For agents that cannot call MCP tools reliably, a skill or shell wrapper can still expose SearXNG search through a controlled command.

This fallback is more portable, but it is weaker than MCP because result parsing, pagination, source opening, and error handling often become ad hoc.

Use this path when:

- the agent runtime does not support MCP
- the operator wants a transparent command wrapper
- the workflow needs a minimal dependency surface

### Keep proxy behavior explicit

Proxy configuration can exist at more than one layer:

- agent or MCP client
- MCP bridge
- SearXNG outbound search requests
- host or container network

For search-engine reachability, the SearXNG outbound layer is usually the important control point. Public docs should explain the layer distinction without publishing private proxy hosts, local ports, or network-provider details.

### JSON output must be enabled deliberately

Programmatic agent search depends on SearXNG returning structured output. Deployment examples should remind operators to enable JSON output in SearXNG configuration when they expect API-style access.

### Guard URL-reading features carefully

URL-reading tools improve agent usefulness, but they also introduce SSRF and private-network risks. If an integration exposes URL reading, it should default to blocking private network targets and require an explicit operator decision before allowing internal URLs.

### Search results need bounded output

Agents should not pass unbounded search results directly into synthesis. Recommended controls include:

- small result limits
- source filtering before opening pages
- truncation or pagination for page reads
- clear citation requirements
- explicit uncertainty notes when results conflict

## Integration Pattern

Recommended default:

1. Self-host SearXNG or use a trusted operator-managed instance.
2. Enable structured search output.
3. Expose search through MCP when the agent runtime supports MCP.
4. Use a skill or wrapper only as a fallback.
5. Keep endpoint, proxy, and credential values outside committed files.
6. Log sanitized query intent and selected public URLs, not raw private context.
7. Cite opened sources when external information affects the answer.

## Limitations

- The source draft included local environment details that are intentionally excluded here.
- Version numbers, package metadata, and search-engine availability can change and need revalidation before being used as current facts.
- Regional availability observations are environment-sensitive and should not be generalized without repeated testing.
- This note does not publish a runnable deployment script because installable automation would change the repository scope from curated guidance toward an `oh-my-*` style bundle.

## Recommendation

Keep this repository focused on public-safe guidance and examples.

Use the research report as seed material for:

- [a Claude Code MCP integration guide](../integrations/claude-code-mcp.md)
- a generic MCP search adapter checklist
- [a SearXNG deployment hardening checklist](../hardening/searxng-deployment.md)
- an evaluation rubric for search quality, latency, reliability, and privacy cost

Do not commit the raw draft unless it is fully sanitized, translated to the repository language style, and split into smaller durable resources.

## Privacy Notes

- Raw local paths were removed.
- Private endpoint and proxy details were omitted.
- Placeholder endpoints should use `https://search.example.org`.
- Credentials, tokens, cookies, and session material must not appear in examples.
- Environment-specific findings should be summarized as observations, not universal claims.

## Acceptance Criteria

- the raw report remains ignored
- this public note is indexed in `registry/resources.json`
- dated findings are marked as needing revalidation
- no local absolute paths or private endpoints are published
- future detailed guides are split by audience and integration mode
