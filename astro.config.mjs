import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";

import { remarkReadingTime } from "./remark-reading-time.mjs"


// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: "hover"
  },
  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      wrap: true,
      theme: "poimandres"
    },
    gfm: false,
    remarkPlugins: [remarkReadingTime]
  }), react(), tailwind({
    applyBaseStyles: false,
  }), sitemap()]
});