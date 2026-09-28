# Google Review (`google-review`)

Display Google Reviews to build trust.

- **Collects:** nothing (display only)
- **Content fetched by GetWidget:** yes — see rules

> Generated from `GET /v1/widget-types/google-review`. The live endpoint is the source of truth.

## Rules

- googleReviews is fetched by GetWidget from placeUrl, never written directly. Until content sync reaches the API, fetch reviews from the widget's page in the dashboard.

## A new widget still needs

- `config.placeUrl` — Set placeUrl to the business's Google Maps URL. **(blocks publishing)**
- `config.googleReviews` — No reviews fetched yet. Fetch them from the widget's page in the dashboard. **(blocks publishing)**

## Written by GetWidget (never send)

- `config.googleReviews`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `schemaVersion` | 1 | `1` | Config contract version. Always 1; omit it and it is filled in. |
| `fontSize` | "small" \| "medium" \| "large" | `"medium"` | Base text size for the widget: small (14px), medium (16px) or large (18px). |
| `customCss` | string | `""` | Extra CSS scoped to this widget instance. Target the widget type's documented hook classes (cssHooks). Colours set in the config are inline styles, so overriding them needs !important. Up to 20,000 characters. |
| `layout` | "grid" \| "slider" \| "list" \| "masonry" | `"grid"` | How the review cards are arranged. |
| `appearance` | "light" \| "dark" | `"light"` | Card palette for a light or a dark page. |
| `borderRadius` | string | `"8px"` | Up to four CSS lengths, e.g. "8px", "0", "100%", "1.5rem", "30px 20px". |
| `showAvatar` | boolean | `true` | Show reviewer photos. |
| `showRating` | boolean | `true` | Show star ratings. |
| `placeUrl` | string | `""` | Google Maps URL of the business, used when reviews are fetched. |
| `maxReviews` | number | `9` | How many reviews to fetch and show (1–9). |
| `reviewsSort` | "newest" \| "mostRelevant" \| "highestRanking" \| "lowestRanking" | `"mostRelevant"` | Which reviews to fetch first. |
| `personalData` | boolean | `true` | Fetch reviewer names and photos. |
| `googleReviews` | array of object | `[]` | Fetched review content. Written by GetWidget when reviews are fetched; read-only. |

## Starting point

What a new widget gets besides the defaults (ids are assigned on create):

```json
{}
```

## CSS hooks for `customCss`

- `.gw-google-review` — widget root
- `.gw-google-review__card` — one review card
- `.gw-google-review__avatar` — a reviewer photo
- `.gw-google-review__name` — a reviewer name
- `.gw-google-review__badge` — the Local Guide chip
- `.gw-google-review__meta` — the stars + date row
- `.gw-google-review__text` — the review text
- `.gw-google-review__show-more` — the Show more toggle
