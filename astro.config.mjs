import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  adapter: vercel(),
  // Vercel host/canonical domain differences can trip Astro's POST origin checks for the Work login form.
  // This app only uses POST for the low-risk Work password gate (no data mutation endpoints).
  security: {
    checkOrigin: false
  },
  server: {
    host: true
  }
});
