# Notification (`notification`)

Show social proof notifications to visitors.

- **Collects:** nothing (display only)
- **Content fetched by GetWidget:** no

> Generated from `GET /v1/widget-types/notification`. The live endpoint is the source of truth.

## Rules

- Notifications should describe things that really happened.

## A new widget still needs

- `config.notifications` — Add at least one notification. **(blocks publishing)**

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `schemaVersion` | 1 | `1` | Config contract version. Always 1; omit it and it is filled in. |
| `fontSize` | "small" \| "medium" \| "large" | `"medium"` | Base text size for the widget: small (14px), medium (16px) or large (18px). |
| `customCss` | string | `""` | Extra CSS scoped to this widget instance. Target the widget type's documented hook classes (cssHooks). Colours set in the config are inline styles, so overriding them needs !important. Up to 20,000 characters. |
| `notifications` | array of object | `[]` | Toasts, shown in order. |
| `notifications[].id` | string |  | Stable item id. Omit it when adding a notification and one is assigned. |
| `notifications[].message` | string | `""` | Toast text. Describe something that really happened. |
| `notifications[].notificationTime` | string | `""` | Free-text time label, e.g. "2 hours ago". |
| `notifications[].imageUrl` | string | `""` | Image on the toast. |
| `notifications[].notificationLink` | string | `""` | Where clicking the toast goes. |
| `notifications[].ctaButtonText` | string | `""` | Button label; "" shows no button. |
| `notifications[].ctaButtonLink` | string | `""` | Where the button goes. |
| `notifications[].badge` | string | `""` | Small badge text. |
| `notifications[].badgeIcon` | "" \| "star" \| "bell" \| "heart" \| "zap" \| "gift" \| "trophy" \| "crown" \| "diamond" | `""` |  |
| `position` | "top-left" \| "top-right" \| "top-center" \| "bottom-left" \| "bottom-right" \| "bottom-center" | `"bottom-right"` |  |
| `mobilePosition` | "top-center" \| "bottom-center" | `"bottom-center"` |  |
| `animation` | "slide" \| "fade" \| "bounce" \| "none" | `"slide"` |  |
| `backgroundColor` | string | `"#ffffff"` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `textColor` | string or null | `null` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". null lets the widget derive a readable colour. |
| `badgeColor` | string | `"#3b82f6"` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `buttonColor` | string | `"#3b82f6"` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `borderRadius` | string | `"8px"` | Up to four CSS lengths, e.g. "8px", "0", "100%", "1.5rem", "30px 20px". |
| `imageRadius` | "none" \| "sm" \| "md" \| "lg" \| "xl" \| "full" or string | `"9999px"` | A radius token (none, sm, md, lg, xl, full) or a CSS length such as "12px" or "9999px". |
| `showCloseButton` | boolean | `true` |  |
| `showCloseButtonOnHover` | boolean | `false` |  |
| `swipeToCloseOnMobile` | boolean | `true` |  |
| `delayBetweenNotifications` | integer | `1000` | Milliseconds between one toast and the next. |
| `autoCloseDelay` | integer | `0` | Milliseconds before a toast closes itself; 0 never. |

## Starting point

What a new widget gets besides the defaults (ids are assigned on create):

```json
{}
```

## CSS hooks for `customCss`

- `.gw-notification` — widget root (position wrapper)
- `.gw-notification__card` — one notification card
- `.gw-notification__image` — the card image
- `.gw-notification__badge` — the badge chip
- `.gw-notification__message` — the notification text
- `.gw-notification__time` — the time-ago line
- `.gw-notification__cta-button` — the action link
- `.gw-notification__close-button` — the dismiss ✕
