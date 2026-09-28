# LINE (`line`)

Add LINE chat widget for customer support.

- **Collects:** nothing (display only)
- **Content fetched by GetWidget:** no

> Generated from `GET /v1/widget-types/line`. The live endpoint is the source of truth.

## Rules

- lineId defaults to the placeholder "@lineid"; set the real LINE ID.
- welcomeMessage writes a line break as the two characters \n.
- name and avatar default to placeholders ("John Doe" and a stock photo); set the real ones.

## A new widget still needs

- `config.lineId` — Set the LINE ID visitors should reach. **(blocks publishing)**
- `config.name` — name is still the placeholder "John Doe".
- `config.avatar` — avatar is still the stock placeholder photo.

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `schemaVersion` | 1 | `1` | Config contract version. Always 1; omit it and it is filled in. |
| `fontSize` | "small" \| "medium" \| "large" | `"medium"` | Base text size for the widget: small (14px), medium (16px) or large (18px). |
| `customCss` | string | `""` | Extra CSS scoped to this widget instance. Target the widget type's documented hook classes (cssHooks). Colours set in the config are inline styles, so overriding them needs !important. Up to 20,000 characters. |
| `lineId` | string | `"@lineid"` | LINE ID ("@acme") or a full https://line.me/… link. "@lineid" is a placeholder. |
| `name` | string | `"John Doe"` | Name on the chat card: a person or the business. "John Doe" is a placeholder. |
| `status` | "" \| "Online" \| "Offline" | `""` | Presence label under the name; "" shows none. |
| `avatar` | string | (see defaults) | Avatar image URL. The default is a stock photo placeholder. A link: "" (none), "#", a root-relative path like "/pricing", a mailto: address, or an http(s) URL. |
| `welcomeMessage` | string | `"Hi there 👋\\nHow can I help you?"` | Greeting on the chat card. Write a line break as the two characters \n. |
| `buttonText` | string | `"Chat on LINE"` | Label of the button that opens the chat app. |
| `position` | "right" \| "left" | `"right"` | Bottom corner the floating button sits in. |
| `autoOpen` | boolean | `true` | Open the chat card by itself after `delay` milliseconds. |
| `delay` | integer | `1000` | Milliseconds before the chat card opens by itself. |
| `enableAnimation` | boolean | `true` | Pulsing ring around the floating button. |

## Starting point

What a new widget gets besides the defaults (ids are assigned on create):

```json
{}
```

## CSS hooks for `customCss`

- `.gw-line` — widget root
- `.gw-line__launcher` — the floating chat button
- `.gw-line__panel` — the chat window
- `.gw-line__header` — the chat header
- `.gw-line__avatar` — the profile avatar
- `.gw-line__name` — the profile name
- `.gw-line__status` — the status line
- `.gw-line__message-bubble` — the welcome bubble
- `.gw-line__cta-button` — the open-chat CTA
