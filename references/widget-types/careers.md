# Careers (`careers`)

Showcase job openings and accept applications.

- **Collects:** submissions
- **Content fetched by GetWidget:** no

> Generated from `GET /v1/widget-types/careers`. The live endpoint is the source of truth.

## Rules

- applyFormJobFieldId, when set, must be the id of a field in applyFormConfig.fields.
- With applyMode "external", every job needs an applyUrl; with "form", applyFormConfig.fields must not be empty.
- select, radio and checkbox fields need a non-empty `options` list.
- Answers are stored under each field label, so keep labels unique within a form.

## A new widget still needs

- `config.jobs` — No jobs listed; visitors will see emptyStateMessage.

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
| `title` | string | `"Join our team"` |  |
| `subtitle` | string | (see defaults) |  |
| `layout` | "cards" \| "list" | `"cards"` | How jobs are listed. |
| `backgroundColor` | string | `"#F9FAFB"` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `cardBackgroundColor` | string | `"#FFFFFF"` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `modalBackgroundColor` | string | `"#FFFFFF"` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `primaryColor` | string | `"#6366F1"` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `borderRadius` | string | `"18px"` | Up to four CSS lengths, e.g. "8px", "0", "100%", "1.5rem", "30px 20px". |
| `showSearch` | boolean | `true` | Show a search box over the jobs. |
| `showFilters` | boolean | `true` | Show filter chips built from `filterBy`. |
| `filterBy` | "department" \| "location" \| "employmentType" | `"department"` | Job field the filter chips group by. |
| `jobs` | array of object | `[]` | Open roles, in display order. |
| `jobs[].id` | string |  | Stable job id. Omit it when adding a job and one is assigned. |
| `jobs[].title` | string | `""` | Job title. |
| `jobs[].location` | string |  |  |
| `jobs[].department` | string |  |  |
| `jobs[].employmentType` | string |  | e.g. "Full-time", "Contract". |
| `jobs[].salaryRange` | string |  | Free text, e.g. "$120k – $150k". |
| `jobs[].description` | string |  | Job description; line breaks are kept. |
| `jobs[].applyUrl` | string |  | Where Apply goes when applyMode is external. |
| `jobs[].tags` | array of string |  | Skill or topic chips. |
| `jobs[].experience` | string |  | e.g. "3+ years". |
| `applyMode` | "form" \| "external" | `"form"` | form opens the built-in application form; external links each job to its applyUrl. |
| `applyButtonLabel` | string | `"Apply now"` | Label of each job's apply button. |
| `applyFormConfig` | object | `{}` |  |
| `applyFormConfig.fields` | array of object | `[]` | Form fields, in display order. |
| `applyFormConfig.fields[].id` | string |  | Stable field id. Omit it when adding a field and one is assigned; keep it when editing. |
| `applyFormConfig.fields[].type` | "text" \| "textarea" \| "email" \| "number" \| "select" \| "checkbox" \| "radio" \| "date" | `"text"` | Input type. select, radio and checkbox fields need `options`. |
| `applyFormConfig.fields[].label` | string | `""` | Label shown to visitors. Answers are stored under the label, so keep labels unique. |
| `applyFormConfig.fields[].placeholder` | string | `""` | Placeholder text inside the input. |
| `applyFormConfig.fields[].required` | boolean | `false` | Visitors must fill this field before submitting. |
| `applyFormConfig.fields[].options` | array of string |  | The choices, for select, radio and checkbox fields. |
| `applyFormConfig.fields[].defaultValue` | string |  | Value the field starts with. |
| `applyFormConfig.fields[].columnWidth` | "full" \| "half" \| "oneThird" |  | Width in the form grid. Omit for full width. |
| `applyFormConfig.fields[].dateFormat` | string |  | Date fields only: how the answer is written — "YYYY-MM-DD" (default), "MM/DD/YYYY", "DD/MM/YYYY" or "Month DD, YYYY". |
| `applyFormConfig.primaryColor` | string | `"#3B82F6"` | Accent colour of the form: fills the submit button and tints focus rings. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `applyFormConfig.buttonTextColor` | string or null | `null` | Submit button text colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". null lets the widget derive a readable colour. |
| `applyFormConfig.submitButtonText` | string | `"Submit Application"` | Submit button label. |
| `applyFormConfig.successMessage` | object | `{}` |  |
| `applyFormConfig.successMessage.type` | "message" \| "redirect" | `"message"` | message shows the confirmation screen; redirect sends the visitor to redirectUrl. |
| `applyFormConfig.successMessage.title` | string | `"Application Submitted!"` | Heading of the confirmation screen. |
| `applyFormConfig.successMessage.message` | string | (see defaults) | Text of the confirmation screen. |
| `applyFormConfig.successMessage.redirectUrl` | string |  | Where a redirect sends the visitor (used when type is redirect). A link: "" (none), "#", a root-relative path like "/pricing", a mailto: address, or an http(s) URL. |
| `applyFormJobFieldId` | string |  | Id of an applyFormConfig field to pre-fill with the job title. |
| `integrations` | object | `{}` |  |
| `integrations.googleSheets` | object | `{}` | Google Sheets sync. Connecting happens in the dashboard; only `enabled` is writable. |
| `integrations.googleSheets.enabled` | boolean | `false` | Append each entry to the connected Google Sheet. No effect until the owner connects Google Sheets in the dashboard. |
| `integrations.googleSheets.connected` | boolean | `false` | Set by GetWidget when the owner connects Google Sheets. Read-only. |
| `integrations.googleSheets.spreadsheetId` | string or null | `null` | The spreadsheet entries go to. Set by GetWidget; read-only. |
| `integrations.googleSheets.spreadsheetName` | string or null | `null` | Name of that spreadsheet. Read-only. |
| `integrations.googleSheets.sheetName` | string | `"Sheet1"` | Tab within that spreadsheet. Read-only. |
| `integrations.emailNotifications` | object | `{}` |  |
| `integrations.emailNotifications.enabled` | boolean | `true` |  |
| `emptyStateMessage` | string | (see defaults) | Shown when there are no jobs. |

## Starting point

What a new widget gets besides the defaults (ids are assigned on create):

```json
{
  "applyFormConfig": {
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
        "type": "text",
        "label": "Phone Number",
        "placeholder": "Enter your phone number",
        "required": false
      },
      {
        "id": "example-id-4",
        "type": "textarea",
        "label": "Cover Letter",
        "placeholder": "Tell us why you are a great fit",
        "required": false
      }
    ],
    "primaryColor": "#3B82F6",
    "buttonTextColor": null,
    "submitButtonText": "Submit Application",
    "successMessage": {
      "type": "message",
      "title": "Application Submitted!",
      "message": "Thank you for your interest. We will review your application and get back to you soon."
    }
  }
}
```

## CSS hooks for `customCss`

- `.gw-careers` — widget root
- `.gw-careers__title` — the section title
- `.gw-careers__subtitle` — the section subtitle
- `.gw-careers__search-input` — the search field
- `.gw-careers__filter-select` — the filter dropdown
- `.gw-careers__card` — one job card
- `.gw-careers__job-title` — a job title
- `.gw-careers__meta-chip` — a department/location/type chip
- `.gw-careers__description` — a job description
- `.gw-careers__tag` — a job tag
- `.gw-careers__salary` — the salary line
- `.gw-careers__apply-button` — the Apply button
- `.gw-careers__modal` — the application modal
