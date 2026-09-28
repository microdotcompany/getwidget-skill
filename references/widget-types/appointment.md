# Appointment (`appointment`)

Enable customers to book appointments online.

- **Collects:** bookings
- **Content fetched by GetWidget:** no

> Generated from `GET /v1/widget-types/appointment`. The live endpoint is the source of truth.

## Rules

- Set `timezone` to the business's IANA zone; `availability`, `dateOverrides` and booked times are wall time in it.
- At least one service is needed. Bookable start times step by the chosen service's duration.
- An interval's end must be later than its start; a day's intervals must not overlap.
- A date override needs endDate on or after startDate, and at least one interval when available is true. When overrides overlap, the shortest range covering a date wins.
- minAdvanceBooking is in hours, maxAdvanceBooking in days.
- Include an email field in customerFormConfig.fields so the business can reach the customer.
- select, radio and checkbox fields need a non-empty `options` list.
- Answers are stored under each field label, so keep labels unique within a form.

## A new widget still needs

- `config.services` — Add at least one service to book. **(blocks publishing)**
- `config.timezone` — timezone is UTC. If the business is not on UTC, set its IANA zone, e.g. "America/New_York".

## Written by GetWidget (never send)

- `config.integrations.googleCalendar.connected`
- `config.integrations.googleCalendar.calendarId`
- `config.integrations.googleCalendar.calendarName`
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
| `title` | string | `"Book an Appointment"` | Heading of the booking panel. |
| `subtitle` | string | (see defaults) | Line under the heading. |
| `displayMode` | "floating" \| "inline" | `"floating"` | floating: a button in a page corner opens the booking panel; inline: the panel renders where the embed div is. |
| `buttonText` | string | `"Book Now"` | Label of the floating button. |
| `position` | "bottom-right" \| "bottom-left" \| "top-right" \| "top-left" | `"bottom-right"` | Corner of the floating button (floating mode only). |
| `primaryColor` | string | `"#007AFF"` | Accent colour: selected dates, time slots and buttons. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `backgroundColor` | string | `"#FFFFFF"` | Panel background. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `textColor` | string | `"#111827"` | Main text colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `borderRadius` | string | `"12px"` | Corner radius of the panel, its fields and buttons. Up to four CSS lengths, e.g. "8px", "0", "100%", "1.5rem", "30px 20px". |
| `services` | array of object | `[]` | What can be booked. At least one is needed; with one, visitors skip the service step. |
| `services[].id` | string |  | Stable service id. Omit it when adding a service and one is assigned. |
| `services[].name` | string | `""` | Service name shown to visitors, e.g. "Initial consultation". |
| `services[].duration` | integer | `30` | Length in minutes (5–480). Bookable start times step by this duration. |
| `services[].price` | string |  | Price as free text, e.g. "$50", "€40", "Free". Blank or zero shows no price. |
| `services[].description` | string |  | One or two lines about the service. |
| `services[].imageUrl` | string |  | Image for the service card. A link: "" (none), "#", a root-relative path like "/pricing", a mailto: address, or an http(s) URL. |
| `availability` | object | (see defaults) | Weekly opening hours, keyed monday–sunday, as wall time in `timezone`. |
| `availability.sunday` | object |  |  |
| `availability.sunday.available` | boolean | `true` | Open for bookings on this weekday. |
| `availability.sunday.intervals` | array of object | `[]` | Bookable stretches of the day; two intervals express a lunch break. Must not overlap. |
| `availability.sunday.intervals[].start` | string | `"09:00"` | Opening time, "HH:MM" in the widget timezone. |
| `availability.sunday.intervals[].end` | string or "24:00" | `"17:00"` | Closing time, "HH:MM" (or "24:00" for midnight), later than start. |
| `availability.monday` | object |  |  |
| `availability.monday.available` | boolean | `true` | Open for bookings on this weekday. |
| `availability.monday.intervals` | array of object | `[]` | Bookable stretches of the day; two intervals express a lunch break. Must not overlap. |
| `availability.monday.intervals[].start` | string | `"09:00"` | Opening time, "HH:MM" in the widget timezone. |
| `availability.monday.intervals[].end` | string or "24:00" | `"17:00"` | Closing time, "HH:MM" (or "24:00" for midnight), later than start. |
| `availability.tuesday` | object |  |  |
| `availability.tuesday.available` | boolean | `true` | Open for bookings on this weekday. |
| `availability.tuesday.intervals` | array of object | `[]` | Bookable stretches of the day; two intervals express a lunch break. Must not overlap. |
| `availability.tuesday.intervals[].start` | string | `"09:00"` | Opening time, "HH:MM" in the widget timezone. |
| `availability.tuesday.intervals[].end` | string or "24:00" | `"17:00"` | Closing time, "HH:MM" (or "24:00" for midnight), later than start. |
| `availability.wednesday` | object |  |  |
| `availability.wednesday.available` | boolean | `true` | Open for bookings on this weekday. |
| `availability.wednesday.intervals` | array of object | `[]` | Bookable stretches of the day; two intervals express a lunch break. Must not overlap. |
| `availability.wednesday.intervals[].start` | string | `"09:00"` | Opening time, "HH:MM" in the widget timezone. |
| `availability.wednesday.intervals[].end` | string or "24:00" | `"17:00"` | Closing time, "HH:MM" (or "24:00" for midnight), later than start. |
| `availability.thursday` | object |  |  |
| `availability.thursday.available` | boolean | `true` | Open for bookings on this weekday. |
| `availability.thursday.intervals` | array of object | `[]` | Bookable stretches of the day; two intervals express a lunch break. Must not overlap. |
| `availability.thursday.intervals[].start` | string | `"09:00"` | Opening time, "HH:MM" in the widget timezone. |
| `availability.thursday.intervals[].end` | string or "24:00" | `"17:00"` | Closing time, "HH:MM" (or "24:00" for midnight), later than start. |
| `availability.friday` | object |  |  |
| `availability.friday.available` | boolean | `true` | Open for bookings on this weekday. |
| `availability.friday.intervals` | array of object | `[]` | Bookable stretches of the day; two intervals express a lunch break. Must not overlap. |
| `availability.friday.intervals[].start` | string | `"09:00"` | Opening time, "HH:MM" in the widget timezone. |
| `availability.friday.intervals[].end` | string or "24:00" | `"17:00"` | Closing time, "HH:MM" (or "24:00" for midnight), later than start. |
| `availability.saturday` | object |  |  |
| `availability.saturday.available` | boolean | `true` | Open for bookings on this weekday. |
| `availability.saturday.intervals` | array of object | `[]` | Bookable stretches of the day; two intervals express a lunch break. Must not overlap. |
| `availability.saturday.intervals[].start` | string | `"09:00"` | Opening time, "HH:MM" in the widget timezone. |
| `availability.saturday.intervals[].end` | string or "24:00" | `"17:00"` | Closing time, "HH:MM" (or "24:00" for midnight), later than start. |
| `dateOverrides` | array of object | `[]` | Dated exceptions to the weekly hours: closures or different hours. The shortest range covering a date wins. |
| `dateOverrides[].id` | string |  | Stable override id. Omit it when adding an override and one is assigned. |
| `dateOverrides[].startDate` | string |  | First date of the exception, "YYYY-MM-DD". |
| `dateOverrides[].endDate` | string |  | Last date of the exception (inclusive); equal to startDate for one day. |
| `dateOverrides[].available` | boolean | `false` | false closes these dates; true opens them on `intervals` instead of the weekly hours. |
| `dateOverrides[].intervals` | array of object | `[]` | Custom hours when available is true. |
| `dateOverrides[].intervals[].start` | string | `"09:00"` | Opening time, "HH:MM" in the widget timezone. |
| `dateOverrides[].intervals[].end` | string or "24:00" | `"17:00"` | Closing time, "HH:MM" (or "24:00" for midnight), later than start. |
| `dateOverrides[].description` | string | `""` | Owner note shown to visitors on a closed date, e.g. "Public holiday". |
| `minAdvanceBooking` | number | `1` | Notice period in hours: the earliest bookable slot is this far from now. |
| `maxAdvanceBooking` | integer | `60` | How many days ahead visitors can book. |
| `timezone` | string | `"UTC"` | The business's IANA timezone, e.g. "Europe/Berlin". Every hour and date in this config is wall time in it; visitors see times converted to their own zone. |
| `customerFormConfig` | object | `{}` | The details form a visitor fills in to confirm a booking, and the confirmation shown after. |
| `customerFormConfig.fields` | array of object | `[]` | Form fields, in display order. |
| `customerFormConfig.fields[].id` | string |  | Stable field id. Omit it when adding a field and one is assigned; keep it when editing. |
| `customerFormConfig.fields[].type` | "text" \| "textarea" \| "email" \| "number" \| "select" \| "checkbox" \| "radio" \| "date" | `"text"` | Input type. select, radio and checkbox fields need `options`. |
| `customerFormConfig.fields[].label` | string | `""` | Label shown to visitors. Answers are stored under the label, so keep labels unique. |
| `customerFormConfig.fields[].placeholder` | string | `""` | Placeholder text inside the input. |
| `customerFormConfig.fields[].required` | boolean | `false` | Visitors must fill this field before submitting. |
| `customerFormConfig.fields[].options` | array of string |  | The choices, for select, radio and checkbox fields. |
| `customerFormConfig.fields[].defaultValue` | string |  | Value the field starts with. |
| `customerFormConfig.fields[].columnWidth` | "full" \| "half" \| "oneThird" |  | Width in the form grid. Omit for full width. |
| `customerFormConfig.fields[].dateFormat` | string |  | Date fields only: how the answer is written — "YYYY-MM-DD" (default), "MM/DD/YYYY", "DD/MM/YYYY" or "Month DD, YYYY". |
| `customerFormConfig.primaryColor` | string | `"#3B82F6"` | Accent colour of the form: fills the submit button and tints focus rings. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". |
| `customerFormConfig.buttonTextColor` | string or null | `null` | Submit button text colour. Hex ("#1a2b3c", "#fff", "#1a2b3c80"), rgb()/hsl(), or "transparent". null lets the widget derive a readable colour. |
| `customerFormConfig.submitButtonText` | string | `"Confirm Booking"` | Submit button label. |
| `customerFormConfig.successMessage` | object | `{}` |  |
| `customerFormConfig.successMessage.title` | string | `"Booking Confirmed!"` | Heading of the confirmation screen. |
| `customerFormConfig.successMessage.message` | string | (see defaults) | Text of the confirmation screen. |
| `providerInfo` | object | `{}` | Business identity shown above the booking flow when enabled. |
| `providerInfo.enabled` | boolean | `false` | Show the business block above the booking flow. |
| `providerInfo.name` | string |  | Business name; also names the owner's booking emails. |
| `providerInfo.description` | string |  | Short line about the business. |
| `providerInfo.logoUrl` | string |  | Logo image URL. A link: "" (none), "#", a root-relative path like "/pricing", a mailto: address, or an http(s) URL. |
| `providerInfo.headerImageUrl` | string |  | Header image URL. A link: "" (none), "#", a root-relative path like "/pricing", a mailto: address, or an http(s) URL. |
| `providerInfo.phone` | string |  | Contact phone number. |
| `providerInfo.whatsapp` | string |  | WhatsApp number. |
| `providerInfo.instagram` | string |  | Instagram handle. |
| `providerInfo.email` | string |  | Contact email address. |
| `providerInfo.address` | string |  | Street address. |
| `integrations` | object | `{}` |  |
| `integrations.emailNotifications` | object | `{}` |  |
| `integrations.emailNotifications.enabled` | boolean | `false` | Email the workspace owner each booking. |
| `integrations.googleCalendar` | object | `{}` | Google Calendar sync. Connecting happens in the dashboard; only `enabled` is writable. |
| `integrations.googleCalendar.enabled` | boolean | `false` | Check the calendar for clashes and add each booking to it. No effect until the owner connects Google Calendar in the dashboard. |
| `integrations.googleCalendar.connected` | boolean | `false` | Set by GetWidget when the owner connects Google Calendar. Read-only. |
| `integrations.googleCalendar.calendarId` | string or null | `null` | Chosen calendar; null means the primary one. Read-only. |
| `integrations.googleCalendar.calendarName` | string or null | `null` | Name of that calendar. Read-only. |
| `integrations.googleSheets` | object | `{}` | Google Sheets sync. Connecting happens in the dashboard; only `enabled` is writable. |
| `integrations.googleSheets.enabled` | boolean | `false` | Append each entry to the connected Google Sheet. No effect until the owner connects Google Sheets in the dashboard. |
| `integrations.googleSheets.connected` | boolean | `false` | Set by GetWidget when the owner connects Google Sheets. Read-only. |
| `integrations.googleSheets.spreadsheetId` | string or null | `null` | The spreadsheet entries go to. Set by GetWidget; read-only. |
| `integrations.googleSheets.spreadsheetName` | string or null | `null` | Name of that spreadsheet. Read-only. |
| `integrations.googleSheets.sheetName` | string | `"Sheet1"` | Tab within that spreadsheet. Read-only. |

## Starting point

What a new widget gets besides the defaults (ids are assigned on create):

```json
{
  "availability": {
    "sunday": {
      "available": false,
      "intervals": [
        {
          "start": "09:00",
          "end": "12:00"
        },
        {
          "start": "13:00",
          "end": "17:00"
        }
      ]
    },
    "monday": {
      "available": true,
      "intervals": [
        {
          "start": "09:00",
          "end": "12:00"
        },
        {
          "start": "13:00",
          "end": "17:00"
        }
      ]
    },
    "tuesday": {
      "available": true,
      "intervals": [
        {
          "start": "09:00",
          "end": "12:00"
        },
        {
          "start": "13:00",
          "end": "17:00"
        }
      ]
    },
    "wednesday": {
      "available": true,
      "intervals": [
        {
          "start": "09:00",
          "end": "12:00"
        },
        {
          "start": "13:00",
          "end": "17:00"
        }
      ]
    },
    "thursday": {
      "available": true,
      "intervals": [
        {
          "start": "09:00",
          "end": "12:00"
        },
        {
          "start": "13:00",
          "end": "17:00"
        }
      ]
    },
    "friday": {
      "available": true,
      "intervals": [
        {
          "start": "09:00",
          "end": "12:00"
        },
        {
          "start": "13:00",
          "end": "17:00"
        }
      ]
    },
    "saturday": {
      "available": false,
      "intervals": [
        {
          "start": "09:00",
          "end": "12:00"
        },
        {
          "start": "13:00",
          "end": "17:00"
        }
      ]
    }
  },
  "customerFormConfig": {
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
        "required": true
      },
      {
        "id": "example-id-4",
        "type": "textarea",
        "label": "Additional Notes",
        "placeholder": "Any special requests or requirements?",
        "required": false
      }
    ],
    "primaryColor": "#3B82F6",
    "buttonTextColor": null,
    "submitButtonText": "Confirm Booking",
    "successMessage": {
      "title": "Booking Confirmed!",
      "message": "Your appointment has been scheduled. We look forward to seeing you."
    }
  }
}
```

## CSS hooks for `customCss`

- `.gw-appointment` — the booking panel
- `.gw-appointment__launcher` — the floating trigger button
- `.gw-appointment__title` — the header title
- `.gw-appointment__subtitle` — the header subtitle
- `.gw-appointment__service-card` — one service in the picker
- `.gw-appointment__service-name` — a service name
- `.gw-appointment__service-description` — a service description
- `.gw-appointment__calendar` — the month calendar
- `.gw-appointment__day-cell` — one day button in the calendar
- `.gw-appointment__slot-button` — one time-slot button
- `.gw-appointment__label` — a booking-form field label
- `.gw-appointment__input` — a booking-form input
- `.gw-appointment__submit-button` — the confirm-booking button
- `.gw-appointment__success-title` — the confirmation title
- `.gw-appointment__success-message` — the confirmation message
