# Known Issues And Decisions

## Known Issues

### Public examples must stay generic

Some high-value integration details cannot be published safely if they depend on private infrastructure or credentials.

### Search quality is environment-sensitive

Instance quality, ranking behavior, and rate limits vary by deployment and usage pattern.

## Deliberate Decisions

### The registry is the canonical machine-readable index

Agents should treat `registry/resources.json` as the primary structured map of repository resources.

### Extra private term lists stay local

Any organization-specific privacy term list should stay outside the repository.

### Concise governance beats decorative prose

This repository prioritizes low ambiguity and portability over style-heavy documentation.
