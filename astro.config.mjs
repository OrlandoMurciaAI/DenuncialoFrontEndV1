import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";


import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: netlify(),
  server: {
    host: true,
    port: 80
  },
  site: 'https://reporit-frontend.azurewebsites.net',
  integrations: [tailwind(), mdx(), react(), vue(), svelte(), sitemap()]
});