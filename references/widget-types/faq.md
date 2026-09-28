# FAQ (`faq`)

Create beautiful FAQ sections for your website.

- **Collects:** nothing (display only)
- **Content fetched by GetWidget:** no

> Generated from `GET /v1/widget-types/faq`. The live endpoint is the source of truth.

## Rules

- Every item needs both a question and an answer.

## A new widget still needs

- `config.faqs` — Add at least one question and answer. **(blocks publishing)**

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `schemaVersion` | 1 | `1` | Config contract version. Always 1; omit it and it is filled in. |
| `fontSize` | "small" \| "medium" \| "large" | `"medium"` | Base text size for the widget: small (14px), medium (16px) or large (18px). |
| `customCss` | string | `""` | Extra CSS scoped to this widget instance. Target the widget type's documented hook classes (cssHooks). Colours set in the config are inline styles, so overriding them needs !important. Up to 20,000 characters. |
| `layout` | "accordion" \| "grid" \| "list" | `"accordion"` | accordion (click a question to open it), grid (cards), or list (every answer shown). |
| `sectionTitle` | string | `"Frequently Asked Questions"` | Heading above the questions; "" hides it. |
| `faqs` | array of object | `[]` | The questions and answers, in display order. |
| `faqs[].id` | string |  | Stable item id. Omit it when adding an item and one is assigned. |
| `faqs[].question` | string | `""` | The question, phrased the way a visitor would ask it. |
| `faqs[].answer` | string | `""` | The answer, as plain text. |
| `backgroundColor` | string | `"#ffffff"` | Background of the FAQ cards; their text, border and icon colours derive from it. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `borderRadius` | string | `"8px"` | Corner radius of the cards. Up to four CSS lengths, e.g. "8px", "0", "100%", "1.5rem", "30px 20px". |

## Starting point

What a new widget gets besides the defaults (ids are assigned on create):

```json
{}
```

## CSS hooks for `customCss`

- `.gw-faq` — widget root
- `.gw-faq__section-title` — the heading above the items
- `.gw-faq__list` — the items container
- `.gw-faq__item` — one FAQ card (accordion, grid and list)
- `.gw-faq__question` — a question (accordion button and static heading)
- `.gw-faq__answer` — an answer
