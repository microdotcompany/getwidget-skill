# Announcement (`announcement`)

Add announcement bar to your website.

- **Collects:** submissions
- **Content fetched by GetWidget:** no

> Generated from `GET /v1/widget-types/announcement`. The live endpoint is the source of truth.

## Rules

- actionType "email" turns the bar into an email-capture form; each address arrives as a submission.
- With position "static-top", use width "100%" and borderRadius "0".
- actionUrl "#" is a placeholder; set a real link for actionType "link" or "button".

## Written by GetWidget (never send)

- `config.integrations.googleSheets.connected`
- `config.integrations.googleSheets.spreadsheetId`
- `config.integrations.googleSheets.spreadsheetName`
- `config.integrations.googleSheets.sheetName`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `schemaVersion` | 1 | `1` | Config contract version. Always 1; omit it and it is filled in. |
| `fontSize` | "small" \| "medium" \| "large" | `"medium"` | Base text size for the widget: small (14px), medium (16px) or large (18px). |
| `customCss` | string | `""` | Extra CSS scoped to this widget instance. Target the widget type's documented hook classes (cssHooks). Colours set in the config are inline styles, so overriding them needs !important. Up to 20,000 characters. |
| `message` | string | `"Check out our latest update!"` | The announcement text. |
| `actionType` | "none" \| "link" \| "button" \| "email" | `"none"` | none, a text link, a button, or an email-capture form (collects subscribers). |
| `actionLabel` | string | `"Learn more"` | Text of the link or button. |
| `actionUrl` | string | `"#"` | Where the link or button goes. "#" is a placeholder. |
| `openInNewTab` | boolean | `true` | Open the link or button in a new tab. |
| `emailPlaceholder` | string | `"Enter your email"` | Email-capture input placeholder. |
| `emailButtonText` | string | `"Subscribe"` | Email-capture submit label. |
| `emailSuccessMessage` | string | `"Thanks! You're subscribed."` | Shown in the bar after someone subscribes. |
| `visualType` | "none" \| "badge" \| "image" | `"none"` | Optional badge or image before the text. |
| `badgeText` | string | `"NEW"` | Badge text, when visualType is badge. |
| `badgeColor` | string | `"#EF4444"` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `imageUrl` | string | `""` | Image, when visualType is image. |
| `position` | "static-top" \| "floating-top" \| "floating-bottom" \| "inline" | `"static-top"` | static-top pushes the page down; floating-top/bottom overlay it; inline renders where the embed div is. static-top should use width "100%" and borderRadius "0". |
| `backgroundColor` | string | `"#000000"` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `messageColor` | string or null | `"#FFFFFF"` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". null lets the widget derive a readable colour. |
| `buttonColor` | string | `"#22C55E"` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `borderRadius` | string | `"12px"` | Up to four CSS lengths, e.g. "8px", "0", "100%", "1.5rem", "30px 20px". |
| `buttonBorderRadius` | string | `"8px"` | Up to four CSS lengths, e.g. "8px", "0", "100%", "1.5rem", "30px 20px". |
| `showCloseButton` | boolean | `true` | Let visitors dismiss the bar. |
| `width` | string | `"100%"` | Bar width, e.g. "100%" or "600px". |
| `integrations` | object | `{}` |  |
| `integrations.googleSheets` | object | `{}` | Google Sheets sync. Connecting happens in the dashboard; only `enabled` is writable. |
| `integrations.googleSheets.enabled` | boolean | `false` | Append each entry to the connected Google Sheet. No effect until the owner connects Google Sheets in the dashboard. |
| `integrations.googleSheets.connected` | boolean | `false` | Set by GetWidget when the owner connects Google Sheets. Read-only. |
| `integrations.googleSheets.spreadsheetId` | string or null | `null` | The spreadsheet entries go to. Set by GetWidget; read-only. |
| `integrations.googleSheets.spreadsheetName` | string or null | `null` | Name of that spreadsheet. Read-only. |
| `integrations.googleSheets.sheetName` | string | `"Sheet1"` | Tab within that spreadsheet. Read-only. |
| `integrations.emailNotifications` | object | `{}` |  |
| `integrations.emailNotifications.enabled` | boolean | `true` |  |

## Starting point

What a new widget gets besides the defaults (ids are assigned on create):

```json
{}
```

## CSS hooks for `customCss`

- `.gw-announcement` — widget root (position wrapper)
- `.gw-announcement__bar` — the announcement bar itself
- `.gw-announcement__badge` — the SALE-style badge
- `.gw-announcement__image` — the visual image, when set
- `.gw-announcement__message` — the announcement text
- `.gw-announcement__cta-link` — the link-style action
- `.gw-announcement__cta-button` — the button-style action
- `.gw-announcement__email-input` — the email-capture input
- `.gw-announcement__email-submit` — the email-capture submit button
- `.gw-announcement__close-button` — the dismiss ✕
