# Translate (`translate`)

Translate your website to any language.

- **Collects:** nothing (display only)
- **Content fetched by GetWidget:** no
- **Not available for new widgets.** Existing ones can still be edited.

> Generated from `GET /v1/widget-types/translate`. The live endpoint is the source of truth.

## Rules

- defaultLanguage must be the code of one of selectedLanguages.

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `schemaVersion` | 1 | `1` | Config contract version. Always 1; omit it and it is filled in. |
| `fontSize` | "small" \| "medium" \| "large" | `"medium"` | Base text size for the widget: small (14px), medium (16px) or large (18px). |
| `customCss` | string | `""` | Extra CSS scoped to this widget instance. Target the widget type's documented hook classes (cssHooks). Colours set in the config are inline styles, so overriding them needs !important. Up to 20,000 characters. |
| `selectedLanguages` | array of object | (see defaults) |  |
| `selectedLanguages[].code` | string |  | Language code, e.g. "en", "es", "de". |
| `selectedLanguages[].name` | string |  | Name shown in the picker, e.g. "Español". |
| `selectedLanguages[].flag` | string |  | 2-letter country code for the flag, e.g. "ES". |
| `defaultLanguage` | string | `"en"` | Code of the page's original language; must be in selectedLanguages. |
| `displayMode` | "floating" \| "inline" | `"floating"` |  |
| `position` | "top-left" \| "top-right" \| "bottom-left" \| "bottom-right" | `"top-right"` |  |
| `showFlags` | boolean | `true` |  |
| `dropdownStyle` | "compact" \| "expanded" | `"compact"` |  |
| `backgroundColor` | string | `"#ffffff"` | A colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `borderRadius` | string | `"8px"` | Up to four CSS lengths, e.g. "8px", "0", "100%", "1.5rem", "30px 20px". |
| `widgetSize` | "small" \| "medium" \| "large" | `"medium"` |  |

## Starting point

What a new widget gets besides the defaults (ids are assigned on create):

```json
{}
```

## CSS hooks for `customCss`

- `.gw-translate` — widget root
- `.gw-translate__trigger` — the language button
- `.gw-translate__dropdown` — the language dropdown
- `.gw-translate__option` — one language option
