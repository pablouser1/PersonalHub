// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import config from './config.mjs';

// https://astro.build/config
export default defineConfig({
  site: config.SITE,
  integrations: [
    solidJs(),
    icon(),
    sitemap(),
    robotsTxt()
  ]
});
