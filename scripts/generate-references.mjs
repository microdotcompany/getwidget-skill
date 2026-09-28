#!/usr/bin/env node
/**
 * Regenerates references/widget-types/*.md from the live API, so the skill's
 * per-type notes are the published contract, never a hand-copied one.
 *
 *   GW_API_BASE=https://api.getwidget.com node scripts/generate-references.mjs
 *   GW_API_BASE=http://localhost:8081     node scripts/generate-references.mjs
 *
 * GET /v1/widget-types is public, so no key is needed. Re-run after any change
 * to @getwidget/schemas and commit the result with a version bump.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const base = (process.env.GW_API_BASE || 'https://api.getwidget.com').replace(/\/$/, '');
const outDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../references/widget-types');

const get = async (url) => {
  const response = await fetch(`${base}${url}`);
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response.json();
};

const cell = (text) => String(text ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');

function typeLabel(schema) {
  if (!schema) return '';
  if (schema.enum) return schema.enum.map((value) => JSON.stringify(value)).join(' | ');
  if (schema.const !== undefined) return JSON.stringify(schema.const);
  if (schema.anyOf) return schema.anyOf.map(typeLabel).join(' or ');
  const type = Array.isArray(schema.type) ? schema.type.join(' or ') : schema.type;
  if (type === 'array') return `array of ${typeLabel(schema.items) || 'items'}`;
  return type || 'any';
}

const shortDefault = (value) => {
  if (value === undefined) return '';
  const text = JSON.stringify(value);
  return text.length > 40 ? '(see defaults)' : `\`${text}\``;
};

/** One row per field, nested objects flattened into dot paths, list items as `[]`. */
function rows(schema, prefix = '', depth = 0) {
  const out = [];
  for (const [key, field] of Object.entries(schema.properties || {})) {
    const pathName = prefix ? `${prefix}.${key}` : key;
    out.push(`| \`${pathName}\` | ${cell(typeLabel(field))} | ${shortDefault(field.default)} | ${cell(field.description)} |`);
    if (depth < 3) {
      if (field.type === 'object' && field.properties) out.push(...rows(field, pathName, depth + 1));
      if (field.type === 'array' && field.items?.properties) out.push(...rows(field.items, `${pathName}[]`, depth + 1));
    }
  }
  return out;
}

function exampleConfig(entry) {
  // the starter minus the long defaults: a readable place to begin
  const config = {};
  for (const key of Object.keys(entry.starter)) {
    if (JSON.stringify(entry.starter[key]) !== JSON.stringify(entry.defaults[key])) config[key] = entry.starter[key];
  }
  return config;
}

function page(entry) {
  const lines = [
    `# ${entry.name} (\`${entry.widgetType}\`)`,
    '',
    `${entry.description}.`,
    '',
    `- **Collects:** ${entry.collects ?? 'nothing (display only)'}`,
    `- **Content fetched by GetWidget:** ${entry.syncsContent ? 'yes — see rules' : 'no'}`,
    ...(entry.availableForNewWidgets ? [] : ['- **Not available for new widgets.** Existing ones can still be edited.']),
    '',
    '> Generated from `GET /v1/widget-types/' + entry.widgetType + '`. The live endpoint is the source of truth.',
    '',
    '## Rules',
    '',
    ...entry.rules.map((rule) => `- ${rule}`),
    '',
  ];

  if (entry.starterNeeds.length) {
    lines.push('## A new widget still needs', '');
    for (const need of entry.starterNeeds) {
      lines.push(`- \`${need.path}\` — ${need.message}${need.blocking ? ' **(blocks publishing)**' : ''}`);
    }
    lines.push('');
  }

  if (entry.managedPaths.length) {
    lines.push('## Written by GetWidget (never send)', '', ...entry.managedPaths.map((p) => `- \`${p}\``), '');
  }

  lines.push(
    '## Fields',
    '',
    '| Field | Type | Default | Description |',
    '| --- | --- | --- | --- |',
    ...rows(entry.configSchema),
    ''
  );

  const example = exampleConfig(entry);
  lines.push(
    '## Starting point',
    '',
    'What a new widget gets besides the defaults (ids are assigned on create):',
    '',
    '```json',
    JSON.stringify(example, null, 2),
    '```',
    ''
  );

  if (entry.cssHooks.length) {
    lines.push('## CSS hooks for `customCss`', '', ...entry.cssHooks.map((h) => `- \`.${h.className}\` — ${h.description}`), '');
  }
  return lines.join('\n');
}

const { data } = await get('/v1/widget-types');
await fs.mkdir(outDir, { recursive: true });
const index = ['# Widget types', '', '| Type | What it is | Collects |', '| --- | --- | --- |'];
for (const summary of data) {
  const entry = await get(`/v1/widget-types/${summary.widgetType}`);
  await fs.writeFile(path.join(outDir, `${entry.widgetType}.md`), page(entry));
  index.push(
    `| [\`${entry.widgetType}\`](${entry.widgetType}.md) | ${entry.description}${entry.availableForNewWidgets ? '' : ' (not for new widgets)'} | ${entry.collects ?? '—'} |`
  );
}
await fs.writeFile(path.join(outDir, 'README.md'), `${index.join('\n')}\n`);
console.log(`wrote ${data.length} widget types to ${path.relative(process.cwd(), outDir)}`);
