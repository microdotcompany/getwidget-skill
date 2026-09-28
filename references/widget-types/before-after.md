# Before & After (`before-after`)

Showcase transformations with before-after comparisons.

- **Collects:** nothing (display only)
- **Content fetched by GetWidget:** no

> Generated from `GET /v1/widget-types/before-after`. The live endpoint is the source of truth.

## Rules

- labelPosition must lie on the divider axis: top, center or bottom when dividerDirection is vertical; left, center or right when horizontal.

## A new widget still needs

- `config.imageSets` — Add at least one before/after pair. **(blocks publishing)**

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `schemaVersion` | 1 | `1` | Config contract version. Always 1; omit it and it is filled in. |
| `fontSize` | "small" \| "medium" \| "large" | `"medium"` | Base text size for the widget: small (14px), medium (16px) or large (18px). |
| `customCss` | string | `""` | Extra CSS scoped to this widget instance. Target the widget type's documented hook classes (cssHooks). Colours set in the config are inline styles, so overriding them needs !important. Up to 20,000 characters. |
| `layout` | "list" \| "carousel" | `"list"` | Stack comparisons or show one at a time. |
| `imageSets` | array of object | `[]` | Before/after pairs, in display order. |
| `imageSets[].id` | string |  | Stable item id. Omit it when adding a comparison and one is assigned. |
| `imageSets[].beforeImage` | string | `""` | "Before" image URL. |
| `imageSets[].beforeLabel` | string | `""` | Label on the before image; "" hides it. |
| `imageSets[].afterImage` | string | `""` | "After" image URL. |
| `imageSets[].afterLabel` | string | `""` | Label on the after image; "" hides it. |
| `width` | string | `"100%"` | Up to four CSS lengths, e.g. "8px", "0", "100%", "1.5rem", "30px 20px". |
| `dividerDirection` | "horizontal" \| "vertical" | `"vertical"` | vertical: a left/right slider; horizontal: a top/bottom slider. |
| `imageRatio` | "square" \| "16:9" \| "4:3" \| "3:2" | `"16:9"` |  |
| `interactionBehavior` | "drag" \| "hover" | `"drag"` | Move the divider by dragging or by hovering. |
| `labelPosition` | "top" \| "center" \| "bottom" \| "left" \| "right" | `"center"` | Along the divider: top/center/bottom for vertical, left/center/right for horizontal. |
| `labelBackgroundColor` | string | `"#000000"` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `dividerColor` | string | `"#ffffff"` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `dividerOffset` | number | `50` | Starting divider position, 0–100 %. |
| `dividerWidth` | string | `"4px"` | Up to four CSS lengths, e.g. "8px", "0", "100%", "1.5rem", "30px 20px". |
| `hideArrows` | boolean | `false` | Hide the arrows on the divider handle. |

## Starting point

What a new widget gets besides the defaults (ids are assigned on create):

```json
{}
```

## CSS hooks for `customCss`

- `.gw-before-after` — widget root
- `.gw-before-after__item` — one comparison
- `.gw-before-after__label` — the Before/After labels
- `.gw-before-after__divider` — the drag divider line
- `.gw-before-after__handle` — the divider handle
- `.gw-before-after__nav-button` — carousel prev/next buttons
- `.gw-before-after__dot` — one carousel dot
