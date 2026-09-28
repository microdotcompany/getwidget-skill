# Consent (`consent`)

Add cookie banner to your website.

- **Collects:** nothing (display only)
- **Content fetched by GetWidget:** no

> Generated from `GET /v1/widget-types/consent`. The live endpoint is the source of truth.

## Rules

- complianceType "opt-in" always shows the accept button (showAcceptButton is forced to true).
- policyUrl defaults to "/privacy-policy"; point it at a page that exists.

## A new widget still needs

- `config.policyUrl` — policyUrl is the default "/privacy-policy"; make sure that page exists on the site.

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `schemaVersion` | 1 | `1` | Config contract version. Always 1; omit it and it is filled in. |
| `fontSize` | "small" \| "medium" \| "large" | `"medium"` | Base text size for the widget: small (14px), medium (16px) or large (18px). |
| `customCss` | string | `""` | Extra CSS scoped to this widget instance. Target the widget type's documented hook classes (cssHooks). Colours set in the config are inline styles, so overriding them needs !important. Up to 20,000 characters. |
| `position` | "top-banner" \| "bottom-banner" \| "bottom-left" \| "bottom-right" \| "bottom-center" | `"bottom-banner"` | Full-width banner at top/bottom, or a card in a bottom corner/centre. |
| `complianceType` | "inform" \| "opt-in" | `"inform"` | inform only notifies; opt-in asks for a decision and always shows the accept button. |
| `title` | string | `"We value your privacy"` | Heading; "" hides it. |
| `message` | string | (see defaults) |  |
| `policyText` | string | `"Learn more"` | Text of the privacy-policy link. |
| `policyUrl` | string | `"/privacy-policy"` | Privacy-policy link; make sure it exists on the site. |
| `confirmationButtonText` | string | `"Accept"` | Accept button label. |
| `showAcceptButton` | boolean | `false` | Show accept/reject buttons. Without them the banner gets a close ✕ instead. |
| `rejectButtonText` | string | `"Reject"` | Reject button label. |
| `backgroundColor` | string | `"#2D3748"` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `textColor` | string or null | `null` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". null lets the widget derive a readable colour. |
| `buttonColor` | string | `"#4299E1"` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `buttonTextColor` | string or null | `null` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". null lets the widget derive a readable colour. |
| `borderRadius` | string | `"8px"` | Up to four CSS lengths, e.g. "8px", "0", "100%", "1.5rem", "30px 20px". |

## Starting point

What a new widget gets besides the defaults (ids are assigned on create):

```json
{}
```

## CSS hooks for `customCss`

- `.gw-consent` — widget root
- `.gw-consent__panel` — the banner/panel surface
- `.gw-consent__title` — the title
- `.gw-consent__message` — the consent message
- `.gw-consent__policy-link` — the policy link
- `.gw-consent__accept-button` — the accept button
- `.gw-consent__reject-button` — the reject button
- `.gw-consent__dismiss-button` — the dismiss ✕
