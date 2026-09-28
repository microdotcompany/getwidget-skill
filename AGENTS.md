# AGENTS.md

Guidelines for AI agents working in this repository.

## Repository overview

This repository contains an **Agent Skill** following the [Agent Skills specification](https://agentskills.io/specification.md).

- **Name**: GetWidget Skill
- **GitHub**: [microdotcompany/getwidget-skill](https://github.com/microdotcompany/getwidget-skill)
- **Creator**: Microdot Company
- **License**: MIT

## Repository structure

```
getwidget-skill/
├── .claude-plugin/
│   └── marketplace.json         # Claude Code plugin manifest
├── .cursor-plugin/
│   └── plugin.json              # Cursor plugin manifest
├── SKILL.md                     # Skill definition and API reference
├── references/
│   ├── widget-types/            # GENERATED — do not hand-edit
│   ├── install.md
│   └── errors.md
├── scripts/generate-references.mjs
├── AGENTS.md
├── LICENSE
└── README.md
```

## Where the truth lives

The widget config contract is `@getwidget/schemas` (the `getwidget-schemas` repo), served by the API at `GET /v1/widget-types/:type`.

- `references/widget-types/` is generated from that endpoint: `GW_API_BASE=… node scripts/generate-references.mjs`. Never edit those files by hand. If a description is wrong, fix the `.describe()` text or `configs/catalog.js` in the schemas repo, then regenerate.
- SKILL.md tells agents to read the live schema rather than trust the references, so a stale install degrades gracefully.

## Agent Skills specification

### Required frontmatter

```yaml
---
name: skill-name
description: What this skill does and when to use it. Include trigger phrases.
metadata:
  version: 1.0.0
---
```

| Field         | Required | Constraints                                                     |
|---------------|----------|-----------------------------------------------------------------|
| `name`        | Yes      | 1-64 chars, lowercase `a-z`, numbers, hyphens. Must match dir. |
| `description` | Yes      | 1-1024 chars. Describe what it does and when to use it.         |
| `metadata`    | No       | Key-value pairs (author, version, etc.)                         |

## Writing style

- Keep `SKILL.md` under 500 lines; put detail in `references/`.
- H2 (`##`) for main sections, H3 (`###`) for subsections.
- Direct and instructional; code blocks for requests; tables for reference data.
- The API is v1: document only what `/v1` actually serves.

## Releasing

Bump `metadata.version` in SKILL.md and `version` in both plugin manifests together.

## Git workflow

- `feat: add booking write endpoints`
- `fix: correct availability example`
- `docs: regenerate widget-type references`
