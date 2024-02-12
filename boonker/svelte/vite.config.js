// eslint-disable-next-line
import svelte from 'rollup-plugin-svelte';
import path from 'path';

const buildFolder = process.env.NODE_ENV === 'production' ? 'packages' : 'build';

export default {
  plugins: [svelte()],
  root: './',
  base: '',
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    assetsInlineLimit: 0,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      'techno4/lite/bundle': path.resolve(
        __dirname,
        `../../${buildFolder}/core/techno4-lite-bundle.esm.js`,
      ),
      'techno4/css/bundle': path.resolve(
        __dirname,
        `../../${buildFolder}/core/techno4-bundle.css`,
      ),
      'techno4/lite': path.resolve(
        __dirname,
        `../../${buildFolder}/core/techno4-lite.esm.js`,
      ),
      'techno4-svelte': path.resolve(__dirname, `../../${buildFolder}/svelte`),
    },
  },
};
