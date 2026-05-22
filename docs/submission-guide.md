# Submission Guide

## What To Submit

- a best practice
- an integration example
- a research note
- a validation improvement

## Minimum Requirements

- clear scope
- public-safe content
- reproducible explanation
- acceptance criteria
- registry entry when adding a new durable resource

## Required Shape

Substantial submissions should state:

- problem
- approach
- expected benefit
- privacy considerations
- acceptance criteria

Research submissions should also state:

- question
- method
- findings
- limitations

## Research Drafts

Raw local reports should stay out of the public repository when they contain local paths, private endpoints, proxy details, credentials, or environment-specific identifiers.

Publish a sanitized note under `docs/research/` instead. Keep dated facts, version numbers, availability claims, and benchmark results clearly scoped to the research date unless they have been revalidated.

## Translations

English is canonical. Chinese translations may be added under `README.zh-CN.md` and `docs/zh-CN/`.

When adding a translated durable resource:

- keep the translation faithful to the English source
- add `language` and `translationOf` metadata in `registry/resources.json`
- do not add private deployment details that are absent from the English source
- update the translation in the same PR when the source changes, or mark it as needing refresh

## What To Avoid

- private infrastructure details
- screenshots with sensitive data
- vague claims without examples
- ecosystem-specific advice presented as universal guidance
