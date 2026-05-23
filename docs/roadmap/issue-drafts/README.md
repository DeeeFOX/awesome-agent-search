# Batch 1 Research Issue Drafts

These drafts are the source bodies for the first matrix-filling research batch.

Published on 2026-05-23:

- [#5 OpenAI Web Search as a coding-agent search route](https://github.com/DeeeFOX/awesome-agent-search/issues/5)
- [#3 Claude MCP Web Search as a provider-managed search route](https://github.com/DeeeFOX/awesome-agent-search/issues/3)
- [#4 Brave Search API for coding-agent search](https://github.com/DeeeFOX/awesome-agent-search/issues/4)
- [#2 Tavily API for coding-agent retrieval](https://github.com/DeeeFOX/awesome-agent-search/issues/2)
- [#1 DuckDuckGo Instant Answer API as an agent fallback](https://github.com/DeeeFOX/awesome-agent-search/issues/1)

If the issue scope changes later, update the corresponding draft and issue together.

## Recreate Commands

Use these only when recreating the batch in another repository or after intentionally closing and replacing the published issues.

```sh
gh issue create --title "[Research] OpenAI Web Search as a coding-agent search route" --label research --body-file docs/roadmap/issue-drafts/openai-web-search.md
gh issue create --title "[Research] Claude MCP Web Search as a provider-managed search route" --label research --body-file docs/roadmap/issue-drafts/claude-mcp-web-search.md
gh issue create --title "[Research] Brave Search API for coding-agent search" --label research --body-file docs/roadmap/issue-drafts/brave-search-api.md
gh issue create --title "[Research] Tavily API for coding-agent retrieval" --label research --body-file docs/roadmap/issue-drafts/tavily-api.md
gh issue create --title "[Research] DuckDuckGo Instant Answer API as an agent fallback" --label research --body-file docs/roadmap/issue-drafts/duckduckgo-instant-answer-api.md
```

If the `research` label does not exist yet, create it in GitHub first or omit `--label research`.

After each issue is completed:

- add a research report under `docs/research/`
- add a Chinese translation under `docs/zh-CN/` when durable
- update the README option matrix
- update `registry/resources.json` for new durable internal docs
- run `make review`
