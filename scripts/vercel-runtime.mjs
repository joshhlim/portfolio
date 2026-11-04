// @astrojs/vercel v7 (Astro 4) only knows Node 18/20 and falls back to nodejs18.x on Node 22.
// Pin the serverless function runtime to the project's Node version (package.json engines: 22.x).
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
const dir = '.vercel/output/functions';
if (existsSync(dir)) for (const f of readdirSync(dir)) {
  const p = `${dir}/${f}/.vc-config.json`;
  if (!existsSync(p)) continue;
  const c = JSON.parse(readFileSync(p, 'utf8'));
  c.runtime = 'nodejs22.x';
  writeFileSync(p, JSON.stringify(c, null, 2));
  console.log(`[vercel-runtime] ${f} -> nodejs22.x`);
}
