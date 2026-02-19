import path from 'node:path'
import { defineConfig } from '@umijs/max'

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    { path: '/docs', component: 'docs' },
  ],
  npmClient: 'pnpm',
  antd: {
    compact: false,
    configProvider: {},
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    title: true,
    baseNavigator: false,
    baseSeparator: '-',
  },
  alias: {
    components: path.resolve(__dirname, 'src/components'),
    pages: path.resolve(__dirname, 'src/pages'),
    utils: path.resolve(__dirname, 'src/utils'),
    assets: path.resolve(__dirname, 'src/assets'),
    styles: path.resolve(__dirname, 'src/styles'),
    hooks: path.resolve(__dirname, 'src/hooks'),
    services: path.resolve(__dirname, 'src/services'),
    types: path.resolve(__dirname, 'src/types'),
    configs: path.resolve(__dirname, 'src/configs'),
  },
  hash: true,
  lessLoader: {
    modifyVars: {
      hack: `true; @import "~@/theme/base.less";`,
    },
  },
  proxy: {},
})
