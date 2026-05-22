# eze-is/web-access and Browser Retrieval

## Question

Should `eze-is/web-access` be treated as a useful search-integration reference for coding agents?

## Method

Reviewed the public GitHub repository metadata and README on 2026-05-22, then mapped the project to the repository's search-integration taxonomy.

## Inputs

- [eze-is/web-access](https://github.com/eze-is/web-access)
- public repository metadata and README
- this repository's search-integration strategy matrix

## Findings

- The project is a Claude Code-oriented skill, not a search backend in the SearXNG sense.
- It belongs in the browser-based retrieval category because it centers on browser/CDP-driven web access rather than simple query routing.
- Its browser actions make it relevant for tasks that need rendered pages, navigation, interaction, screenshots, or other page-state evidence.
- It is useful as a representative example when comparing browser routes against MCP search adapters and hosted search APIs.
- It should not be described as a general replacement for native search or search APIs.

## Limitations

- Browser/CDP retrieval is slower and more brittle than plain search.
- Browser state, cookies, and profile handling introduce privacy and cleanup concerns.
- The project is skill-specific and may evolve quickly.
- It should be compared with other browser routes before being recommended broadly.

## Recommendation

Include `eze-is/web-access` as a representative browser retrieval reference in comparison docs and issue backlogs.

Use it to evaluate:

- rendered-page fidelity
- session isolation
- prompt-injection exposure
- screenshot and DOM evidence support
- cleanup behavior

Do not use it as the default framing for the repository. Keep it one route among native search, MCP adapters, self-hosted search, hosted APIs, local docs, and hybrid routing.

## Privacy Notes

Browser retrieval can expose cookies, sessions, and local browser state. Public examples should avoid account-specific setup, private profiles, local paths, or private page content.
