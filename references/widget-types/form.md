# Form (`form`)

Add contact form for lead generation.

- **Collects:** submissions
- **Content fetched by GetWidget:** no

> Generated from `GET /v1/widget-types/form`. The live endpoint is the source of truth.

## Rules

- select, radio and checkbox fields need a non-empty `options` list.
- Answers are stored under each field label, so keep labels unique within a form.
- successMessage.type "redirect" sends visitors to successMessage.redirectUrl after submitting.

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
| `fields` | array of object | `[]` | The form fields, in display order. |
| `fields[].id` | string |  | Stable field id. Omit it when adding a field and one is assigned; keep it when editing. |
| `fields[].type` | "text" \| "textarea" \| "email" \| "number" \| "select" \| "checkbox" \| "radio" \| "date" | `"text"` | Input type. select, radio and checkbox fields need `options`. |
| `fields[].label` | string | `""` | Label shown to visitors. Answers are stored under the label, so keep labels unique. |
| `fields[].placeholder` | string | `""` | Placeholder text inside the input. |
| `fields[].required` | boolean | `false` | Visitors must fill this field before submitting. |
| `fields[].options` | array of string |  | The choices, for select, radio and checkbox fields. |
| `fields[].defaultValue` | string |  | Value the field starts with. |
| `fields[].columnWidth` | "full" \| "half" \| "oneThird" |  | Width in the form grid. Omit for full width. |
| `fields[].dateFormat` | string |  | Date fields only: how the answer is written — "YYYY-MM-DD" (default), "MM/DD/YYYY", "DD/MM/YYYY" or "Month DD, YYYY". |
| `primaryColor` | string | `"#3B82F6"` | The form's accent: fills the submit button and tints focus rings and checkmarks. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `buttonTextColor` | string or null | `null` | Submit button text colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". null lets the widget derive a readable colour. |
| `borderRadius` | string | `"8px"` | Corner radius of the form, its inputs and its button. Up to four CSS lengths, e.g. "8px", "0", "100%", "1.5rem", "30px 20px". |
| `backgroundColor` | string | `"#ffffff"` | Form background. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `textColor` | string | `"#1f2937"` | Text colour inside inputs. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `labelColor` | string | `"#374151"` | Field label colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `inputBorderColor` | string | `"#e5e7eb"` | Input border colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `inputBackgroundColor` | string or null | `null` | Input background. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". null lets the widget derive a readable colour. |
| `fieldStyle` | "default" \| "underline" \| "floating" \| "filled" \| "minimal" | `"default"` | How inputs are drawn. |
| `submitButtonText` | string | `"Submit"` | Submit button label. |
| `successMessage` | object | `{}` | What the visitor sees after submitting. |
| `successMessage.type` | "message" \| "redirect" | `"message"` | message shows the confirmation screen; redirect sends the visitor to redirectUrl. |
| `successMessage.title` | string | `"Thank you!"` | Heading of the confirmation screen. |
| `successMessage.message` | string | (see defaults) | Text of the confirmation screen. |
| `successMessage.redirectUrl` | string |  | Where a redirect sends the visitor (used when type is redirect). A link: "" (none), "#", a root-relative path like "/pricing", a mailto: address, or an http(s) URL. |
| `integrations` | object | `{}` | Where submissions go besides the GetWidget inbox. |
| `integrations.googleSheets` | object | `{}` | Google Sheets sync. Connecting happens in the dashboard; only `enabled` is writable. |
| `integrations.googleSheets.enabled` | boolean | `false` | Append each entry to the connected Google Sheet. No effect until the owner connects Google Sheets in the dashboard. |
| `integrations.googleSheets.connected` | boolean | `false` | Set by GetWidget when the owner connects Google Sheets. Read-only. |
| `integrations.googleSheets.spreadsheetId` | string or null | `null` | The spreadsheet entries go to. Set by GetWidget; read-only. |
| `integrations.googleSheets.spreadsheetName` | string or null | `null` | Name of that spreadsheet. Read-only. |
| `integrations.googleSheets.sheetName` | string | `"Sheet1"` | Tab within that spreadsheet. Read-only. |
| `integrations.emailNotifications` | object | `{}` |  |
| `integrations.emailNotifications.enabled` | boolean | `true` | Email the workspace owner each submission. |

## Starting point

What a new widget gets besides the defaults (ids are assigned on create):

```json
{
  "fields": [
    {
      "id": "example-id-1",
      "type": "text",
      "label": "Full Name",
      "placeholder": "Enter your full name",
      "required": true
    },
    {
      "id": "example-id-2",
      "type": "email",
      "label": "Email Address",
      "placeholder": "Enter your email address",
      "required": true
    },
    {
      "id": "example-id-3",
      "type": "textarea",
      "label": "Message",
      "placeholder": "Enter your message",
      "required": false
    },
    {
      "id": "example-id-4",
      "type": "select",
      "label": "How did you hear about us?",
      "placeholder": "Select an option",
      "required": false,
      "options": [
        "Search Engine",
        "Social Media",
        "Friend",
        "Advertisement",
        "Other"
      ]
    }
  ]
}
```

## CSS hooks for `customCss`

- `.gw-form` — widget root
- `.gw-form__field` — one field wrapper
- `.gw-form__label` — a field label
- `.gw-form__input` — a text-like input
- `.gw-form__textarea` — a multi-line input
- `.gw-form__select` — a dropdown
- `.gw-form__submit-button` — the submit button
- `.gw-form__success-title` — the success title
- `.gw-form__success-message` — the success message
