const webpackPlugins = require('./webpack.plugin')

module.exports = {
  outputDir: 'docs',
  filenameHashing: false,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...webpackPlugins)
    }
    
    config.output.filename = 'js/[name].js'
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/style/global.scss";`
      }
    }
  }
}