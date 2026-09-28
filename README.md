# GetWidget Skill

An AI agent skill for building and managing [GetWidget](https://getwidget.com) website widgets through the GetWidget API. It works with any agent that supports the [Agent Skills](https://agentskills.io) specification.

## What it does

Describe what you want ("add a booking widget to my site", "what's booked tomorrow?") and the skill handles the API calls.

- Create and edit any of GetWidget's widget types: appointment booking, forms, FAQ, testimonials, careers, announcement bars, cookie consent, WhatsApp/Telegram/LINE chat buttons, logo showcase, before/after, notifications, Google reviews and Instagram feeds
- Publish them (after showing you what will change) and add the embed snippet to your site
- Read appointment bookings and check availability
- Read form entries, job applications and announcement sign-ups

## Installation

### Claude Code

```bash
claude install-skill https://github.com/microdotcompany/getwidget-skill
```

### OpenClaw

Tell your agent:

```
Install the getwidget skill from https://github.com/microdotcompany/getwidget-skill
```

### Codex

Clone into your Codex skills directory:

```bash
git clone https://github.com/microdotcompany/getwidget-skill.git ~/.agents/skills/getwidget-skill
```

Or for a project-specific install:

```bash
git clone https://github.com/microdotcompany/getwidget-skill.git .agents/skills/getwidget-skill
```

### Manual

Copy `SKILL.md` and `references/` into your project and point your agent at `SKILL.md`.

## Setup

Create an API key in the GetWidget dashboard: open the avatar menu, then **API keys → Create API key**. Name it, pick the workspace it's for (a key works in one workspace only), and set the permissions. Workspace Editors and Owners can create keys.

- **Read widgets** (`widgets.read`): read widgets and widget types. On by default.
- **Edit widgets** (`widgets.write`): create and edit widgets. On by default.
- **Publish widgets** (`widgets.publish`): publish and unpublish, which changes live sites. Off by default.
- **Delete widgets** (`widgets.delete`): delete widgets. Off by default.
- **Read submissions** (`submissions.read`): form entries, job applications and sign-ups. On by default.
- **Read bookings** (`bookings.read`): bookings and availability. On by default.

The key is shown once, so copy it then. Permissions can't be changed later: to add one, create a new key and revoke the old one from the same page.

Give the key to your agent as `GW_API_KEY`. The skill finds your workspace from the key.

```bash
export GW_API_KEY="gw_live_..."
```

## Usage examples

```
> Add an appointment booking widget for my dental clinic: cleanings (45 min) and check-ups (30 min), Mon–Fri 9–5 with lunch 1–2, Berlin time
> Put an FAQ about shipping and returns on the pricing page
> Make the contact form match our brand colour #0f766e and publish it
> What's booked for tomorrow?
> Show me this week's job applications
```

## Skill structure

```
├── SKILL.md                     # Skill definition and API reference
├── references/
│   ├── widget-types/            # One page per widget type (generated from the API)
│   ├── install.md               # Putting the embed on WordPress, Shopify, Webflow, Next.js…
│   └── errors.md                # Error codes and what to do about each
├── scripts/
│   └── generate-references.mjs  # Regenerates references/widget-types from the live API
├── AGENTS.md
├── README.md
└── LICENSE
```

Follows the [Agent Skills specification](https://agentskills.io/specification.md).

## License

[MIT](LICENSE)
