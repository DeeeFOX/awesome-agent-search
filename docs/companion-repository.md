# Companion Repository Boundary

## Recommendation

Keep this repository as `awesome-agent-search`.

Use [oh-my-agent-search](https://github.com/DeeeFOX/oh-my-agent-search) as the installable companion for runnable Claude Code setup, local SearXNG bootstrapping, post-install checks, and uninstall flow.

## Why Split The Repositories

`awesome-agent-search` should remain a curated knowledge base:

- best practices
- comparisons
- research notes
- integration guides
- hardening checklists
- machine-readable registry
- contribution governance

`oh-my-agent-search` is the installable starter:

- pinned MCP adapter choices
- dry-run install scripts
- doctor checks
- SearXNG JSON verification
- Claude Code MCP status checks
- reusable instruction templates
- minimal examples that actually run

Combining both scopes makes the repository harder to trust. Curated guidance changes slowly; installation scripts need tighter versioning, smoke tests, and failure handling.

## Use The Research Report As Seed Material

The raw research report should not be copied into a public installable repository.

Use it as seed material for:

- adapter comparison
- endpoint requirements
- MCP setup workflow
- privacy rules
- failure modes
- smoke tests
- security review checklist

Every extracted claim should be rewritten as public-safe, dated, and verifiable guidance.

## Companion Readiness Criteria

Keep `oh-my-agent-search` listed as the installable companion only while these conditions remain true:

- one MCP adapter has been selected as the initial default
- Claude Code setup has been verified with a trusted SearXNG endpoint
- JSON output verification is automated
- `claude mcp list`, `claude mcp get`, and `/mcp` verification steps are documented
- private-context negative tests are documented
- installer defaults to dry-run or explicit confirmation
- no private endpoints, credentials, local absolute paths, or account identifiers appear in examples

## Starter Shape

```text
oh-my-agent-search/
  README.md
  AGENTS.md
  SECURITY.md
  docs/
    claude-code.md
    searxng.md
    security.md
  templates/
    claude-code-instruction.md
    mcp-server.json
  scripts/
    doctor.mjs
    verify-searxng-json.mjs
    install-claude-code.mjs
```

Starter scope:

- Claude Code only
- SearXNG only
- one verified MCP adapter
- no public-instance random fallback
- no credentials in committed templates
- no automatic project-scope `.mcp.json` writes without user confirmation

## README Promise

The companion README should make one concrete promise:

> Add a privacy-aware SearXNG search tool to Claude Code through MCP, then verify it before use.

Avoid promising universal agent search until Codex, OpenClaw, and generic agent paths have equivalent verification.

## Cross-Linking

- this repository should list it as an installable starter
- the companion should link back to this repository for research, comparisons, and privacy rules
- both repositories should share compatible `AGENTS.md` safety language
- this repository should avoid duplicating the companion's runnable commands

## Maintenance Rule

Do not let the installable companion become the only source of truth.

If an implementation decision has broader relevance, document the decision in `awesome-agent-search` first, then implement it in `oh-my-agent-search`.
