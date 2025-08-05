// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import image from '@astrojs/image/squoosh'; // instead of '@astrojs/image'

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});