# Evaluation

Use evaluation notes to compare search approaches by:

- relevance
- source authority
- citation/source URL quality
- freshness
- latency
- robustness
- privacy cost
- operator complexity
- cost and quota behavior
- reproducibility
- tool lifecycle

Compare strategies before comparing vendors:

- native/provider-managed search
- MCP search adapters
- self-hosted SearXNG
- hosted search APIs
- browser-based retrieval
- local or private documentation search
- hybrid routing policies

When publishing findings:

- state the scenario
- describe the method
- list official docs and dated source references
- record limitations
- separate observation from recommendation

Visual evidence is part of the evaluation surface. Prefer public-safe artifacts that help readers compare options quickly:

- Mermaid diagrams for architecture, lifecycle, and routing
- scorecards for quality, privacy, cost, and operator control
- decision tables for route selection
- sanitized screenshots only when rendered-page evidence matters
- redacted result-shape examples when an API response structure is central to the finding

Do not publish visuals that expose account names, workspace names, local paths, private endpoints, cookies, tokens, private queries, or private source excerpts.
