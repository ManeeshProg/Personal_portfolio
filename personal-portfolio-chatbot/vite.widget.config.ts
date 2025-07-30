import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'widget.tsx'),
      external: [], // Bundle everything, no external dependencies
      output: {
        dir: 'widget-dist',
        entryFileNames: 'maneesh-chat-widget.js',
        format: 'iife',
        name: 'ManeeshChatWidget',
        inlineDynamicImports: true,
        globals: {}
      }
    },
    outDir: 'widget-dist',
    minify: true,
    sourcemap: false,
    target: 'es2015',
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },
  define: {
    'process.env.NODE_ENV': '"production"',
    'global': 'globalThis'
  },
  esbuild: {
    jsx: 'automatic'
  }
});