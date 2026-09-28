# Logo Showcase (`logo-showcase`)

Showcase your partner & client logos.

- **Collects:** nothing (display only)
- **Content fetched by GetWidget:** no

> Generated from `GET /v1/widget-types/logo-showcase`. The live endpoint is the source of truth.

## Rules

- Every logo needs an imageUrl. Only show logos the business has permission to use.

## A new widget still needs

- `config.logos` — Add at least one logo. **(blocks publishing)**

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `schemaVersion` | 1 | `1` | Config contract version. Always 1; omit it and it is filled in. |
| `fontSize` | "small" \| "medium" \| "large" | `"medium"` | Base text size for the widget: small (14px), medium (16px) or large (18px). |
| `customCss` | string | `""` | Extra CSS scoped to this widget instance. Target the widget type's documented hook classes (cssHooks). Colours set in the config are inline styles, so overriding them needs !important. Up to 20,000 characters. |
| `layout` | "ticker" \| "grid" | `"ticker"` | ticker scrolls the logos; grid wraps them. |
| `logos` | array of object | `[]` | Logos, in display order. Use only logos you have permission to show. |
| `logos[].id` | string |  | Stable item id. Omit it when adding a logo and one is assigned. |
| `logos[].imageUrl` | string | `""` | Logo image URL (SVG or PNG work best). |
| `logos[].alt` | string | `""` | Company name, used as alt text. |
| `logoSize` | string | `"120px"` | Logo width, e.g. "120px". |
| `tickerSpeed` | number | `5` | Ticker speed, 1 (slow) to 10 (fast). |
| `pauseOnHover` | boolean | `true` | Pause the ticker under the pointer. |
| `colorScheme` | "original" \| "grayscale" | `"grayscale"` | Show logos in their own colours or greyscale. |
| `backgroundColor` | string | `"#ffffff"` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |

## Starting point

What a new widget gets besides the defaults (ids are assigned on create):

```json
{}
```

## CSS hooks for `customCss`

- `.gw-logo-showcase` — widget root
- `.gw-logo-showcase__ticker` — the scrolling ticker viewport
- `.gw-logo-showcase__grid` — the static grid
- `.gw-logo-showcase__logo` — one logo image
