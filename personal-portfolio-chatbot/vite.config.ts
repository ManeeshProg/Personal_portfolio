import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },
  // Environment variables with VITE_ prefix are automatically exposed
  // No need to manually define them in the config
});
