# Integration Guides

This directory contains public-safe integration guides for connecting coding agents to search tools, backends, and adapters.

## Rules

- Keep configuration examples generic.
- Use placeholders such as `https://search.example.org`.
- Do not publish private endpoints, credentials, proxy hosts, local paths, or account identifiers.
- Prefer explicit search flows over prompt-only behavior.
- Treat SearXNG as one supported backend, not the only integration route.
- Add durable guides to `registry/resources.json`.

## Current Guides

- [Claude Code bootstrap requirements](claude-code-bootstrap-requirements.md)
- [Claude Code MCP guide](claude-code-mcp.md)
