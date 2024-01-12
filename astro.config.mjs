import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import node from '@astrojs/node';


// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: node({
    mode: 'standalone',
  }),
  server: { port: 8080}, 
  site: 'https://denuncialo.com.co',
  integrations: [tailwind(),mdx(), react(), vue(), svelte(), sitemap()]
});