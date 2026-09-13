import { defineConfig } from 'astro/config';

const amendBase = process.env.AMEND_BASE;

export default defineConfig({
  compressHTML: true,
  devToolbar: { enabled: false },
  ...(amendBase ? { vite: { base: amendBase } } : {}),
});
