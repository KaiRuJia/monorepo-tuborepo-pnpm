import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      outDir: 'dist',
      include: ['src/**/*.ts'],
    }),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        string: path.resolve(__dirname, 'src/string.ts'),
        number: path.resolve(__dirname, 'src/number.ts'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [],
      output: {
        // 全局变量配置
        globals: {},
      },
    },
    sourcemap: true,
  },
});