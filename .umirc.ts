import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
export default {
  publicPath: './',
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: { webpackChunkName: true },
      title: 'rematch-demo',
      dll: true,
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
} as IConfig;
