import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://samar.dev', // Update this to your actual domain
  integrations: [sitemap()],
});
