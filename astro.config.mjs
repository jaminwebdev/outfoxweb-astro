import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), mdx(), react()],
  output: 'static',
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },
});
