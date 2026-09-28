# Putting a widget on a site

A published widget's `embed` has everything needed:

```json
{
  "scriptUrl": "https://static.getwidget.com/scripts/faq.js",
  "containerHtml": "<div class=\"get-widget-id-6ab638c28add21e08e35d9d9\"></div>",
  "html": "<script src=\"https://static.getwidget.com/scripts/faq.js\" async></script>\n<div class=\"get-widget-id-6ab638c28add21e08e35d9d9\"></div>",
  "live": true
}
```

- **The script** loads the widget type (one script per type, even for several widgets of that type on a page). Put it in `<head>` or at the end of `<body>`.
- **The container** is where the widget renders. Inline widgets (FAQ, form, testimonials, inline booking calendar) appear exactly there. Floating ones (chat buttons, the floating booking button, announcement bars, cookie banners, notifications) position themselves, so the container can go anywhere in `<body>`.
- The snippet serves the **live** version. Until the widget is published it renders nothing (`live: false`). Later publishes show up without touching the site.
- The widget loads its own font (Inter) and styles scoped to itself; it doesn't restyle the page.

## Plain HTML

Paste both lines where the widget should appear, or split them: script in `<head>`, container in the body.

## WordPress

- **Block editor:** add a **Custom HTML** block where the widget should appear and paste `embed.html`.
- **Site-wide floating widget** (chat button, cookie banner): add the snippet to the footer with the theme's "footer scripts" option or a header/footer plugin.

## Shopify

**Online Store → Themes → Edit code**. For a site-wide widget, paste `embed.html` just before `</body>` in `layout/theme.liquid`. For one page, add a **Custom Liquid** section to that page's template and paste it there.

## Webflow

Drag an **Embed** element where the widget should appear and paste `embed.html`. For site-wide widgets use **Project settings → Custom code → Footer code**. The widget renders on the published site, not in the Designer.

## Wix / Squarespace

- **Wix:** **Add → Embed code → Embed HTML** (or Settings → Custom code for site-wide).
- **Squarespace:** a **Code** block (or Settings → Advanced → Code Injection → Footer for site-wide).

## Next.js / React

The script scans the page for `get-widget-id-…` containers **once, when it loads**. In a single-page app, load it after the container is on the page:

```jsx
// app/components/GetWidget.jsx
'use client';
import { useEffect } from 'react';

export default function GetWidget({ id, type }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://static.getwidget.com/scripts/${type}.js`;
    script.async = true;
    document.body.appendChild(script);
    return () => script.remove();
  }, [id, type]);

  return <div className={`get-widget-id-${id}`} />;
}
```

```jsx
<GetWidget id="6ab638c28add21e08e35d9d9" type="faq" />
```

For a widget on every page (a chat button), render the component once in the root layout. In plain server-rendered pages the two-line snippet works as is, e.g. in `app/layout.jsx` with `next/script`:

```jsx
import Script from 'next/script';

<div className="get-widget-id-6ab638c28add21e08e35d9d9" />
<Script src="https://static.getwidget.com/scripts/whatsapp.js" strategy="afterInteractive" />
```

## Checking it worked

Open the page. If nothing shows, the usual causes are:

- the widget isn't published (`status` must be `published`);
- the container's id doesn't match the widget id;
- in an SPA, the script ran before the container existed;
- a Content-Security-Policy blocks `static.getwidget.com` or the API it calls.
