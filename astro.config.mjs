// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Y-S-94.github.io',
  base: '/YS-4',
  site: 'https://Y-S-94.github.io',
  base: '/YS-2',
  vite: {
    plugins: [tailwindcss()]
  }
});
