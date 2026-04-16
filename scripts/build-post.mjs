#!/usr/bin/env node
/**
 * Post-build step: copy non-JS assets to dist/.
 * tsup builds the JS bundles, but CSS/static files must be copied manually.
 */
import { mkdirSync, copyFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const copies = [
  { from: 'src/css/primitives.css', to: 'dist/css/primitives.css' },
];

for (const { from, to } of copies) {
  const src = resolve(ROOT, from);
  const dst = resolve(ROOT, to);
  mkdirSync(dirname(dst), { recursive: true });
  copyFileSync(src, dst);
  console.log(`✅ ${from} → ${to}`);
}
