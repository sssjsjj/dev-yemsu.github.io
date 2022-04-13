const webpackPlugins = require('./webpack.plugin')

module.exports = {
  outputDir: 'docs',
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...webpackPlugins)
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/style/global.scss";`
      }
    }
  }
}