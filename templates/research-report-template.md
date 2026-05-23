# Research Report Template

## Question

What decision should this report help an agent builder make?

## Method

Include:

- `observedAt` date
- official sources checked
- public query set or public examples used
- agent ecosystems in scope
- what was not tested

## Inputs

List only public-safe inputs. Do not include private paths, private endpoints, account identifiers, screenshots with private state, tokens, cookies, or private source excerpts.

## Official Sources

Use primary sources first. Mark volatile details such as pricing, quota, availability, and product scope with `observedAt`.

## Findings

Separate:

- official claims
- observed behavior
- inference from the evidence
- unknowns

## Limitations

State gaps that would change the recommendation.

## Visual Evidence

Add at least one public-safe visual artifact when useful:

- Mermaid architecture or sequence diagram
- decision table
- scorecard
- sanitized screenshot
- redacted example result shape

Do not include screenshots or transcripts that expose accounts, workspaces, local paths, private endpoints, cookies, sessions, or credentials.

## Matrix Impact

State how this report should update the README option matrix:

- Solution row
- Best Practice cell
- Research Report cell
- Strengths
- Limitations
- Agent Support Matrix

## Recommendation

Keep the recommendation scoped. Say when the option should not be used.

## Privacy Notes

Explain how private context, logs, credentials, screenshots, and prompt-injection risks were handled.
