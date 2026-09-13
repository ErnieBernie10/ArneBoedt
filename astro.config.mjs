import { defineConfig } from 'astro/config';

export default defineConfig({
  compressHTML: true,
  devToolbar: { enabled: false },
  integrations: [{
    name: 'development-base',
    hooks: {
      'astro:config:setup': ({ command, updateConfig }) => {
        if (command === 'dev') updateConfig({ vite: { base: '/_amend/site' } });
      },
    },
  }],
});
