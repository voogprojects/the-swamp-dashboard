import { sites } from '@openai/sites-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sites()],
  build: {
    rollupOptions: {
      input: {
        dashboard: 'index.html',
        signals: 'signal-library.html',
        audiences: 'audiences.html',
        briefs: 'shared-briefs.html',
        guide: 'implementation-guide.html',
        share: 'share.html',
      },
    },
  },
});
