# Launch Checklist

## Problem

A public best-practices repository can attract low-quality submissions, sensitive data leaks, and unclear maintenance expectations if the first release is not explicit.

## Approach

Use this checklist before announcing the repository or asking agents to contribute.

## Repository Metadata

- repository name is `awesome-agent-search`
- description mentions SearXNG, coding agents, Codex, Claude Code, and OpenClaw
- topics include `awesome-list`, `agents`, `coding-agents`, `searxng`, `codex`, `claude-code`, `openclaw`, `search`, `privacy`, and `agent-tools`
- README first screen explains the audience and entry points
- license is present
- social preview is configured with `assets/social-preview.png`
- first release plan is ready for `v0.1.0`
- release notes draft exists at `docs/release-notes/v0.1.0.md`
- [Repository visibility checklist](visibility-checklist.md) is reviewed before public launch

## Content Baseline

- README links to human, AI, maintainer, and integrator entry points
- `README.zh-CN.md` links back to the English README
- `docs/zh-CN/` exists for selected Chinese translations
- `AGENTS.md` defines allowed and forbidden agent behavior
- `docs/best-practices.md` contains actionable search guidance
- `docs/integrations/` contains public-safe integration guides
- `docs/hardening/` contains deployment hardening checklists
- `docs/research/` contains only sanitized public notes
- examples exist for Codex, Claude Code, OpenClaw, and generic agents
- templates exist for integration examples and research reports
- `registry/resources.json` indexes durable resources
- `docs/launch-post.md` exists for public sharing
- `docs/visibility-checklist.md` covers GitHub metadata, topics, release, social preview, and external discovery

## Privacy Review

- no secrets, tokens, cookies, or session material are present
- no personal email addresses are present
- no private SearXNG endpoints are present
- no local absolute paths are present in public examples
- raw local research drafts with private environment details are ignored
- placeholders use public-safe values such as `https://search.example.org`

## AI Readiness

- AI agents can find `AGENTS.md` from the README
- registry entries point to real files
- registry entries can mark language and translation relationships
- contribution templates request problem, approach, expected benefit, privacy notes, and acceptance criteria
- issue templates separate best practices, integrations, research, and bugs
- validation can run without network access

## Validation

Run:

```sh
make check
make validate-registry
make review
```

All commands must pass before launch.

## First Announcement Criteria

- v0.1 content baseline is complete
- required checks pass
- GitHub metadata is set
- social preview is set
- release notes are ready or the `v0.1.0` release exists
- the first three public contribution ideas are listed as issues or roadmap notes
- maintainers know whether to accept direct patches or ask for an issue first

## Acceptance Criteria

- a new visitor understands the repository within one minute
- an AI agent can identify the correct editing rules without guessing
- examples are useful but do not expose private infrastructure
- maintainers have a clear pre-launch review path
