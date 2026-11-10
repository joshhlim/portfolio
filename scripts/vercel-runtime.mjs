// @astrojs/vercel v7 (Astro 4) only knows Node 18/20 and falls back to nodejs18.x on Node 22.
// Pin the serverless function runtime to the project's Node version (package.json engines: 22.x).
// The same adapter reads vercel.json only to warn about trailingSlash, so host redirects
// from that file are prepended onto .vercel/output/config.json here (Build Output API).
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

const ALIAS = 'portfolio-delta-green-t9mnmnxfan.vercel.app';
const CANONICAL = 'https://joshlim.vercel.app/$1';
const configPath = '.vercel/output/config.json';
if (!existsSync('vercel.json')) throw new Error('vercel.json is missing');
if (!existsSync(configPath)) throw new Error(`${configPath} is missing`);
const vercelConfig = JSON.parse(readFileSync('vercel.json', 'utf8'));
const redirects = Array.isArray(vercelConfig.redirects) ? vercelConfig.redirects : [];
const alias = redirects.find((r) =>
  r?.source === '/(.*)' &&
  r?.destination === CANONICAL &&
  r?.permanent === true &&
  r?.has?.some((h) => h?.type === 'host' && h?.value === ALIAS));
if (!alias) throw new Error(`vercel.json must permanently redirect ${ALIAS} to ${CANONICAL}`);
// Only "/(.*)" is converted below, to the same route @vercel/routing-utils emits.
// Every redirect must be host-conditioned so canonical, preview, and local hosts are untouched.
const routes = redirects.map((r) => {
  if (r?.source !== '/(.*)' || !r?.has?.some((h) => h?.type === 'host') || typeof r.destination !== 'string') {
    throw new Error(`Unsupported vercel.json redirect: ${JSON.stringify(r)}`);
  }
  return {
    src: '^(?:/(.*))$',
    headers: { Location: r.destination },
    status: r.permanent === false ? 307 : 308,
    has: r.has,
  };
});
const output = JSON.parse(readFileSync(configPath, 'utf8'));
const seen = new Set((output.routes || []).map((r) => JSON.stringify(r)));
const fresh = routes.filter((r) => !seen.has(JSON.stringify(r)));
output.routes = [...fresh, ...(output.routes || [])];
writeFileSync(configPath, JSON.stringify(output, null, '\t'));
console.log(`[vercel-runtime] prepended ${fresh.length} vercel.json redirect(s)`);
