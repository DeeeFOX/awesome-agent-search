# Architecture

## Overview

This repository has two audiences:

- humans looking for search best practices
- AI agents that need structured, machine-readable integration guidance

## Content Layers

### Human-readable layer

- `README.md`
- `docs/positioning.md`
- `docs/`
- `examples/`
- `templates/`

This layer explains concepts, practices, and usage patterns.

### Machine-readable layer

- `registry/resources.json`
- `schemas/resource.schema.json`
- `AGENTS.md`

This layer helps AI systems discover repository structure, entry points, and contribution rules with low ambiguity.

## Repository Roles

- `docs/`: architectural context, best practices, evaluation, and known constraints
- `docs/zh-CN/`: Chinese translations for selected high-value docs
- `docs/comparisons/`: backend and approach comparisons for search strategy decisions
- `docs/integrations/`: public-safe agent integration guides
- `docs/companion-repository.md`: boundary for the installable `oh-my-agent-search` companion
- `docs/research/`: sanitized research notes derived from public-safe experiments and drafts
- `docs/roadmap/`: local staging notes for issue-ready comparison tasks
- `examples/`: ecosystem-specific integration patterns
- `registry/`: canonical structured catalog of repository resources
- `docs/registry-index.md`: generated human-readable view of the registry
- `schemas/`: validation contract for registry structure
- `templates/`: reusable contribution templates
- `.github/`: contribution workflow and automation

## Agent Onboarding Order

AI contributors should start with:

1. `AGENTS.md`
2. `registry/resources.json`
3. `docs/positioning.md`
4. `docs/best-practices.md`
5. the closest example or template

## Validation Model

Registry validation checks:

- the registry file shape
- required fields
- path existence for referenced resources
- optional language and translation metadata

This keeps the repository safe for autonomous updates and low-noise submissions.
