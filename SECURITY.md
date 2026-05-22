# Security Policy

## Reporting

Do not open a public issue with exploit details, private credentials, or sensitive deployment data.

Share:

- a short summary
- the affected area
- a safe reproduction outline
- the expected impact

Until a dedicated private intake channel is defined, contact the repository owner through a trusted private path.

## Sensitive Data Rules

- never commit secrets, cookies, tokens, or session material
- never commit private SearXNG endpoints unless they are intentionally public
- never commit personal email addresses
- sanitize all local paths, internal hostnames, and environment-specific values
