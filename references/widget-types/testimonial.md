# Testimonial (`testimonial`)

Create beautiful testimonials for your website.

- **Collects:** nothing (display only)
- **Content fetched by GetWidget:** no

> Generated from `GET /v1/widget-types/testimonial`. The live endpoint is the source of truth.

## Rules

- Use only real testimonials from real customers, quoted as given. Never invent names or quotes.

## A new widget still needs

- `config.testimonials` — Add at least one real testimonial. **(blocks publishing)**

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `schemaVersion` | 1 | `1` | Config contract version. Always 1; omit it and it is filled in. |
| `fontSize` | "small" \| "medium" \| "large" | `"medium"` | Base text size for the widget: small (14px), medium (16px) or large (18px). |
| `customCss` | string | `""` | Extra CSS scoped to this widget instance. Target the widget type's documented hook classes (cssHooks). Colours set in the config are inline styles, so overriding them needs !important. Up to 20,000 characters. |
| `layout` | "grid" \| "slider" \| "list" \| "masonry" | `"grid"` | How the cards are arranged. |
| `testimonials` | array of object | `[]` | Real testimonials from real customers, in display order. Never invent them. |
| `testimonials[].id` | string |  | Stable item id. Omit it when adding a testimonial and one is assigned. |
| `testimonials[].name` | string | `""` | Name of the real person quoted. |
| `testimonials[].position` | string |  | Their role or company, e.g. "CTO, Acme". Omit to hide. |
| `testimonials[].comment` | string | `""` | What they said, verbatim. |
| `testimonials[].avatarUrl` | string |  | Photo of the person. Omit to hide. A link: "" (none), "#", a root-relative path like "/pricing", a mailto: address, or an http(s) URL. |
| `testimonials[].rating` | number | `5` | Star rating, 1–5. |
| `backgroundColor` | string | `"#ffffff"` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `textColor` | string or null | `null` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". null lets the widget derive a readable colour. |
| `reviewerNameColor` | string or null | `null` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". null lets the widget derive a readable colour. |
| `captionColor` | string or null | `null` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". null lets the widget derive a readable colour. |
| `ratingColor` | string | `"#fbbf24"` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `outlineColor` | string or null | `null` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". null lets the widget derive a readable colour. |
| `borderRadius` | string | `"8px"` | Up to four CSS lengths, e.g. "8px", "0", "100%", "1.5rem", "30px 20px". |
| `showRating` | boolean | `true` | Show each testimonial's stars. |

## Starting point

What a new widget gets besides the defaults (ids are assigned on create):

```json
{}
```

## CSS hooks for `customCss`

- `.gw-testimonial` — widget root
- `.gw-testimonial__card` — one testimonial card
- `.gw-testimonial__avatar` — an author avatar
- `.gw-testimonial__name` — an author name
- `.gw-testimonial__position` — an author role/company
- `.gw-testimonial__rating` — the stars row
- `.gw-testimonial__comment` — the testimonial text
