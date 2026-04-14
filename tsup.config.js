import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.js',
    theme: 'src/theme.js',
    'tailwind-preset': 'src/tailwind-preset.js',
  },
  format: ['esm'],
  target: 'es2020',
  external: ['react', 'react-dom'],
  clean: true,
  dts: false,
  sourcemap: false,
  loader: { '.js': 'jsx' },
});
