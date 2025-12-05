import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';
import { createRequire } from 'module';
import fs from 'fs';

const require = createRequire(import.meta.url);

// 读取package.json获取版本信息
const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/**/*.tsx', 'src/**/*.ts'],
      outDir: 'dist',
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        button: path.resolve(__dirname, 'src/button/index.ts'),
        card: path.resolve(__dirname, 'src/card/index.ts'),
      },
      name: '@pawpatrol/ui',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // 外部化React和React DOM，避免将它们打包进库
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // 为每个组件输出独立的样式文件
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'style.css';
          }
          return 'assets/[name]-[hash][extname]';
        },
        // 确保每个组件的样式能够被正确引用
        manualChunks: {
          button: ['src/button/Button.css'],
          card: ['src/card/Card.css'],
        },
      },
    },
    sourcemap: true,
    outDir: 'dist',
  },
});
