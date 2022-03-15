const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

const postPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'docs'),
    routes: [
        "/node-js-es6-plus-env-setting",
        "/vue-cli-working-with-sass",
        "/vue3-router",
    ],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: '#app'
    }),
  }),
];

module.exports = {
  outputDir: 'docs',
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...postPlugins);
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