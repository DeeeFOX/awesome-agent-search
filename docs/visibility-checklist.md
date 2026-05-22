# Repository Visibility Checklist

Use this checklist to make Awesome Agent Search easier to discover on GitHub, search engines, and AI-agent crawlers without turning the repository into keyword spam.

## Goal

Increase qualified discovery from people and agents who search for:

- SearXNG search for coding agents
- Claude Code MCP web search
- Codex web search best practices
- OpenClaw search integration
- privacy-aware agent search
- AI agent search evaluation and hardening

There is no guaranteed GitHub homepage placement. Treat visibility as a result of clear positioning, accurate metadata, useful content, safe contribution flow, and repeated external references.

## GitHub Metadata

Set the repository metadata from the GitHub repository page.

Recommended description:

```text
Research and best practices for bringing web search into Codex, Claude Code, OpenClaw, and AI coding agents.
```

Recommended website:

```text
https://deeefox.github.io/awesome-agent-search/
```

Use the website field only after GitHub Pages exists. Until then, keep it empty or point to the repository.

Recommended topics:

```text
awesome-list
awesome
agents
ai-agents
coding-agents
agent-search
agent-tools
searxng
mcp
model-context-protocol
claude-code
codex
openclaw
web-search
search
privacy
retrieval
llm
llm-tools
developer-tools
```

GitHub currently allows up to 20 topics. Keep topic names lowercase, use hyphens, and avoid private or organization-specific terms.

Topic audit reminder:

- prefer exact high-intent topics such as `searxng`, `mcp`, `model-context-protocol`, `claude-code`, `codex`, `openclaw`, and `privacy`
- avoid replacing exact ecosystem terms with near-synonyms such as `*-skill`, `*-engine`, or singular/plural variants unless those are deliberately targeted
- re-check topics after every major positioning change or public launch post

## Search Surface

GitHub repository search can target name, description, topics, and README content. This means the first screen of the README should naturally contain the core terms:

- `awesome-agent-search`
- `SearXNG`
- `MCP search`
- `Brave Search API`
- `Tavily`
- `Codex`
- `Claude Code`
- `OpenClaw`
- `coding agents`
- `MCP`
- `Model Context Protocol`
- `web search`
- `privacy-aware search`

Do not repeat keyword blocks that make the README hard to read. Prefer concise sections, tables, and natural language.

## README Shape

The README should preserve an awesome-list first impression:

- one-line value proposition in the first screen
- quick entry table for humans, AI agents, integrators, operators, researchers, and maintainers
- curated sections for best practices, integrations, hardening, research, bilingual docs, and machine-readable resources
- explicit boundary between this curated list and the installable companion
- clear contribution and privacy rules

Avoid:

- long runnable install walkthroughs
- private local troubleshooting transcripts
- unverified claims about search quality
- instructions that bypass local network, legal, or regional restrictions

## Companion Placement

Mention `oh-my-agent-search` as an installable companion, but keep the runnable setup details there.

Good placement:

- README featured resource
- dedicated `Installable Companion` section
- `docs/companion-repository.md`
- launch post

Avoid turning this repository into a mixed awesome list plus installer manual.

## Social Preview

Use [assets/social-preview.png](../assets/social-preview.png) in GitHub repository settings.

Recommended properties:

- PNG, JPG, or GIF
- under 1 MB
- at least `640x320`
- `1280x640` for best display
- solid background unless transparency is deliberate

Keep the image focused on public repository identity. Do not include personal email addresses, private endpoints, local paths, credentials, or deployment details.

## Release Strategy

Create a GitHub release after the content baseline passes validation.

For the next broad-scope positioning release, use:

```text
v0.2.0
```

Recommended title:

```text
v0.2.0 - Search integration research for coding agents
```

Release notes should summarize:

- why the repository exists
- the supported ecosystems
- the most useful docs
- the machine-readable registry
- bilingual entry points
- the `oh-my-agent-search` companion boundary

Keep release notes short enough to share directly.

## External Discovery

Prioritize high-signal links over broad posting.

Good channels:

- GitHub profile pinned repository
- relevant awesome-list PRs
- discussions in agent, MCP, SearXNG, and developer-tool communities
- short technical launch posts
- bilingual sharing on English and Chinese developer channels
- follow-up posts after adding substantial comparisons or evaluations

Avoid:

- reposting the same message everywhere
- claiming official support from Codex, Claude Code, OpenClaw, or SearXNG unless it is true
- using private benchmark data
- sharing local setup screenshots that expose paths or endpoints

## AI-Agent Discovery

Keep the machine-readable layer current:

- `AGENTS.md` for rules
- `registry/resources.json` for durable resources
- `docs/registry-index.md` generated from the registry
- `docs/zh-CN/` for Chinese discovery and reading
- `templates/` for repeatable contributions

When adding a durable page, update the registry and regenerate the index.

## Maintenance Signals

GitHub users and agents both infer quality from maintenance signals.

Recommended signals:

- passing validation workflow
- recent commits that improve docs or registry quality
- issue labels for `research`, `integration`, `translation`, `privacy`, and `good first issue`
- scoped contribution rules
- clear privacy/security policy
- public roadmap issues for comparison and evaluation gaps

## Sources

- [GitHub Docs: Classifying your repository with topics](https://docs.github.com/articles/about-topics)
- [GitHub Docs: Searching for repositories](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories)
- [GitHub Docs: Customizing your repository's social media preview](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview)
- [GitHub Docs: Finding ways to contribute to open source](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)

## Acceptance Criteria

- repository metadata matches the recommended positioning
- README first screen contains the core discovery terms naturally
- social preview is configured
- latest release reflects the current multi-backend search-integration scope
- launch post avoids private environment details
- durable visibility docs are indexed in `registry/resources.json`
