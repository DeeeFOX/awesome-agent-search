# Claude Code Bootstrap Requirements

## Scope

This page defines the requirements a Claude Code SearXNG bootstrap flow should satisfy. It is not an installation guide.

For a runnable starter with commands, local SearXNG setup, post-install status checks, and uninstall flow, use [oh-my-agent-search](https://github.com/DeeeFOX/oh-my-agent-search).

## What Belongs Here

`awesome-agent-search` should document:

- integration architecture
- adapter selection criteria
- privacy and trust boundaries
- smoke-test requirements
- negative-test requirements
- research findings and limitations

`oh-my-agent-search` should document:

- exact install commands
- local container setup
- `claude mcp` command syntax
- post-install lifecycle checks
- uninstall commands
- troubleshooting from field runs

## Bootstrap Requirements

A Claude Code SearXNG bootstrap flow should prove:

- a trusted SearXNG endpoint exists
- JSON output is enabled for programmatic search
- the MCP adapter starts under Claude Code
- Claude Code can see the server in its MCP status surface
- at least one public-safe search query returns useful public sources
- the agent instruction forbids secrets, credentials, private endpoints, local absolute paths, private issue text, and private source excerpts in queries
- URL-reading tools, if present, are governed separately from search

## Recommended Scope Policy

- Prefer local scope for first-project trials.
- Use user scope only when the same trusted endpoint and privacy policy should apply across projects.
- Use project scope only after reviewing the shared config and endpoint policy with collaborators.

Do not claim cross-project availability until the actual MCP scope is known.

## Lifecycle Requirements

Installation success should not be described as permanent. Search remains available only when:

- the Claude Code MCP configuration still exists in an active scope
- the configured SearXNG endpoint or service is reachable
- the selected search engines are lawful and reachable from the deployment region

Operational lifecycle prompts and commands belong in the installable companion.

## Privacy Requirements

Public docs and examples must not include:

- private endpoints
- private proxy hosts or ports
- credentials, cookies, tokens, or session material
- account identifiers or personal emails
- local absolute paths
- raw command output from private machines
- project names that reveal unreleased work

Use placeholders such as `https://search.example.org`.

## Acceptance Criteria

- This repository explains what a safe bootstrap must prove.
- Runnable commands live in the companion starter, not in this awesome list.
- Any adapter recommendation is backed by a comparison or dated research note.
- Any operational detail extracted from field testing is sanitized before publication.
