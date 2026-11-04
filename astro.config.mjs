import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
export default defineConfig({
  site: 'https://joshlim.vercel.app',
  output: 'hybrid',
  adapter: vercel({ maxDuration: 30 }),
  integrations: [sitemap({ filter: (p) => !p.includes('/api/') })],
});
