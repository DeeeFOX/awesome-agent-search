# Known Issues And Decisions

## Known Issues

### Public examples must stay generic

Some high-value integration details cannot be published safely if they depend on private infrastructure or credentials.

### Search quality is environment-sensitive

Search quality, ranking behavior, rate limits, and availability vary by backend, runtime, deployment, account settings, region, and usage pattern.

## Deliberate Decisions

### The registry is the canonical machine-readable index

Agents should treat `registry/resources.json` as the primary structured map of repository resources.

### SearXNG is a baseline, not the whole scope

SearXNG remains a priority baseline because it is public, self-hostable, and operator-controlled. The repository should still compare native search, MCP adapters, hosted APIs, browser retrieval, and local documentation search.

### Extra private term lists stay local

Any organization-specific privacy term list should stay outside the repository.

### Concise governance beats decorative prose

This repository prioritizes low ambiguity and portability over style-heavy documentation.
