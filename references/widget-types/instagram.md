# Instagram (`instagram`)

Showcase your Instagram feed.

- **Collects:** nothing (display only)
- **Content fetched by GetWidget:** yes — see rules

> Generated from `GET /v1/widget-types/instagram`. The live endpoint is the source of truth.

## Rules

- searchTerm is an Instagram username without the @ (letters, digits, "." and "_", up to 30).
- posts is fetched by GetWidget, never written directly. Until content sync reaches the API, fetch the feed from the widget's page in the dashboard.

## A new widget still needs

- `config.searchTerm` — Set searchTerm to the Instagram username. **(blocks publishing)**
- `config.posts` — No posts fetched yet. Fetch the feed from the widget's page in the dashboard. **(blocks publishing)**

## Written by GetWidget (never send)

- `config.posts`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `schemaVersion` | 1 | `1` | Config contract version. Always 1; omit it and it is filled in. |
| `fontSize` | "small" \| "medium" \| "large" | `"medium"` | Base text size for the widget: small (14px), medium (16px) or large (18px). |
| `customCss` | string | `""` | Extra CSS scoped to this widget instance. Target the widget type's documented hook classes (cssHooks). Colours set in the config are inline styles, so overriding them needs !important. Up to 20,000 characters. |
| `searchTerm` | string | `""` | Instagram username to show, without the @. |
| `maxWidth` | string | `"935px"` | Up to four CSS lengths, e.g. "8px", "0", "100%", "1.5rem", "30px 20px". |
| `padding` | string | `"30px 20px"` | Up to four CSS lengths, e.g. "8px", "0", "100%", "1.5rem", "30px 20px". |
| `appearance` | "light" \| "dark" | `"light"` | Palette for a light or a dark page. |
| `postSize` | string | `"280px"` | Up to four CSS lengths, e.g. "8px", "0", "100%", "1.5rem", "30px 20px". |
| `posts` | array of object | `[]` | Fetched profile and posts. Written by GetWidget when the feed is fetched; read-only. |

## Starting point

What a new widget gets besides the defaults (ids are assigned on create):

```json
{}
```

## CSS hooks for `customCss`

- `.gw-instagram` — widget root
- `.gw-instagram__header` — the profile header
- `.gw-instagram__avatar` — the profile avatar
- `.gw-instagram__name` — the profile name
- `.gw-instagram__handle` — the @handle
- `.gw-instagram__follow-button` — the Follow button
- `.gw-instagram__grid` — the posts grid
- `.gw-instagram__post` — one post tile
