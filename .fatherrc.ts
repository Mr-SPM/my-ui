import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: { output: 'dist' },
  // umd: {
  //   output: { path: 'dist', filename: 'index.umd.js' },
  //   externals: { react: 'React', antd: 'antd', 'react-dom': 'ReactDOM' , "lodash":"lodash-es"},
  // },
});
