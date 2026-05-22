# Hardening Checklists

This directory contains public-safe hardening guidance for SearXNG-backed agent search.

## Rules

- Keep deployment details generic.
- Separate operator decisions from repository defaults.
- Do not publish private endpoints, proxy hosts, credentials, local paths, or internal network details.
- Mark environment-sensitive observations clearly.
- Add durable checklists to `registry/resources.json`.

## Current Checklists

- [SearXNG deployment hardening](searxng-deployment.md)
