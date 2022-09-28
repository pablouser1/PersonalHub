import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";
import robotsTxt from 'astro-robots-txt';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://pabloferreiro.es",
  integrations: [svelte(), sitemap(), robotsTxt()],
  vite: {
    build: {
      cssCodeSplit: false
    },
    ssr: {
      external: ["svgo"]
    }
  }
});
