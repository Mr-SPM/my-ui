import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  apiParser: {},
  resolve: {
    entryFile: './src/index.ts',
  },
  themeConfig: {
    name: 'my-ui',
    footer: false,
    logo: false,
  },
});
