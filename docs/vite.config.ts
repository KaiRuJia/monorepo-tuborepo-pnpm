import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pawpatrol/ui': resolve(__dirname, '../packages/ui/src'),
      '@pawpatrol/ui/button': resolve(__dirname, '../packages/ui/src/button/index.ts'),
      '@pawpatrol/ui/card': resolve(__dirname, '../packages/ui/src/card/index.ts'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
});
