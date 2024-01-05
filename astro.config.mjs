import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import config from './config.mjs';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: config.SITE,
  integrations: [solidJs(), icon(), sitemap(), robotsTxt()],
  vite: {
    build: {
      cssCodeSplit: false
    }
  }
});
