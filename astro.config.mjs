import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";
import robotsTxt from 'astro-robots-txt';
import sitemap from "@astrojs/sitemap";
import config from './config.mjs';

// https://astro.build/config
export default defineConfig({
  site: config.SITE,
  integrations: [svelte(), sitemap(), robotsTxt()]
});
