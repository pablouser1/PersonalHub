// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import config from './config.mjs';

// https://astro.build/config
export default defineConfig({
  site: config.SITE,
  integrations: [
    icon(),
    sitemap(),
    robotsTxt()
  ]
});
