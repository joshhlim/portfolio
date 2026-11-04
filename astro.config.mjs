import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://joshlim.vercel.app', output: 'static', integrations: [sitemap()] });
