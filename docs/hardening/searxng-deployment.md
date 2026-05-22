# SearXNG Deployment Hardening

## Problem

SearXNG is useful for agent search, but weak deployment defaults can leak query intent, expose private endpoints, create SSRF risk through URL-reading tools, or make automation unreliable under rate limits.

## Approach

Use this checklist before connecting a coding agent to a SearXNG instance.

## Expected Benefit

- safer search configuration
- clearer trust boundaries
- lower risk of private data in queries or logs
- more predictable agent behavior
- easier review of public examples and contributions

## Instance Scope

- decide whether the instance is local, team-managed, or public
- prefer operator-managed instances for durable agent workflows
- document who can access the instance
- avoid using arbitrary public instances for sensitive work
- keep private endpoint URLs out of committed files

## API Readiness

- enable structured output when agents need programmatic search
- keep result limits small by default
- set request timeouts
- document allowed search categories or engines
- test the API with sanitized queries only
- record known limitations in `docs/known-issues.md`

## Search Engine Selection

- choose engines by task domain and region
- prefer official sources and primary repositories for coding tasks
- keep environment-sensitive availability notes dated
- disable engines that frequently trigger rate limits or CAPTCHA
- avoid broad fan-out unless the workflow explains how results are filtered

## Rate Limits And Reliability

- cap concurrent agent searches
- add retry limits and backoff
- surface rate-limit failures to the agent
- avoid repeated identical queries in short windows
- cache only public-safe metadata
- review logs for noisy or low-value query patterns

## Privacy-Safe Logging

Safe to log:

- sanitized query intent
- selected public URLs
- source domains
- result count
- error class
- run id or timestamp

Do not log:

- raw private prompts
- private hostnames
- credentials or session material
- local absolute paths
- account identifiers
- full internal error reports with private context

## Network And Proxy Boundaries

- keep proxy settings in operator-managed configuration
- document which layer owns outbound routing
- avoid publishing proxy hosts, ports, or provider details
- verify that SearXNG outbound routing matches the intended search-engine reachability
- do not assume agent-side proxy settings affect SearXNG outbound search

## URL Reading Controls

If a search integration can read URLs:

- block private-network targets by default
- require explicit operator approval for internal URLs
- cap response size
- support pagination or section reads
- avoid authenticated pages
- log selected public URLs, not page contents with private data

## Public Example Rules

Public examples should:

- use `https://search.example.org`
- use generic engine names and categories
- show configuration shape without real endpoint values
- avoid local absolute paths
- avoid personal identifiers
- avoid install scripts that create an `oh-my-*` style bundle unless the project scope changes

## Acceptance Criteria

- endpoint scope and trust model are documented
- structured output is enabled when required
- logs are public-safe by design
- result limits and retry limits exist
- URL reading cannot reach private networks by default
- private deployment details are not committed
- registry entries are updated for durable hardening docs
