# Errors

Every error has the same shape:

```json
{
  "error": {
    "type": "invalid_request_error",
    "code": "validation_error",
    "message": "The faq config is not valid. config.faqs.0.question: Expected string, received number",
    "param": "config.faqs.0.question",
    "details": { "issues": [{ "path": "config.faqs.0.question", "message": "Expected string, received number", "code": "invalid_type" }] },
    "requestId": "req_3f2a…"
  }
}
```

Branch on `code`. It is stable across API versions; `message` is for people and may change. Quote `requestId` when reporting a problem to GetWidget support.

| HTTP | `code` | What to do |
| --- | --- | --- |
| 400 | `validation_error` | Fix every entry in `details.issues` (each has a `path`), then retry once. |
| 400 | `unknown_config_key` | A key isn't in the schema. `details.unknownKeys[].suggestion` often names the intended key. |
| 400 | `managed_field` | You sent a field only GetWidget writes (Google connection state, fetched reviews/posts). Leave it out. |
| 400 | `duplicate_id` | Two list items share an `id`. Keep ids unique, or omit them on new items. |
| 400 | `widget_not_ready` | Publishing was refused: `details.issues` lists what's missing. Fix it, or with the user's agreement send `"force": true`. |
| 400 | `widget_type_unavailable` | That type can't be created any more. Existing ones still work. |
| 400 | `not_published` | The call needs a live widget (availability, `/published`). Publish first, with the user's agreement. |
| 400 | `never_published` | Nothing live to restore the draft from. |
| 400 | `wrong_widget_type` | E.g. asking for bookings of a form widget. |
| 400 | `invalid_json`, `invalid_if_match`, `invalid_idempotency_key` | Fix the request. |
| 401 | `api_key_missing` / `api_key_invalid` / `api_key_expired` | Ask the user for a valid key (Dashboard → avatar menu → API keys). `api_key_invalid` also means the key was revoked, its creator left or was removed from the workspace, or the workspace was deleted. |
| 403 | `key_suspended` | The key's creator is now a Viewer. An owner must make them an Editor again, or create a new key. |
| 403 | `insufficient_scope` | The key lacks `details.requiredScope`. Permissions can't be added to an existing key: ask the user to create a new key with that switch on (e.g. **Publish widgets** for `widgets.publish`) and revoke the old one. |
| 403 | `plan_limit_reached` | The publish limit is used up. `details` lists the widgets published in this workspace and gives `upgradeUrl`. Offer to unpublish one, or to upgrade. |
| 404 | `workspace_not_found` | The path names another workspace. Use the id from `GET /v1/key`. |
| 404 | `widget_not_found`, `booking_not_found`, `submission_not_found`, `service_not_found`, `widget_type_not_found` | The id isn't in this workspace. List to find the right one. |
| 404 | `invalid_cursor` | `startingAfter` / `endingBefore` must be an id from the same list. |
| 404 | `endpoint_not_found` | Check the method and path against the quick reference. |
| 409 | `idempotency_key_reused` | That `Idempotency-Key` was used for a different request. Use a fresh key. |
| 409 | `idempotency_in_progress` | The first request with that key is still running. Retry shortly. |
| 412 | `revision_mismatch` | The widget changed since you read it. GET it again, re-apply your change, and retry with the new ETag. |
| 413 | `payload_too_large` | Bodies are capped at 1 MB. |
| 429 | `rate_limited` | Wait `Retry-After` seconds. |
| 5xx | `internal_error`, `service_unavailable` | Retry with backoff. For creates, reuse the same `Idempotency-Key`. |
