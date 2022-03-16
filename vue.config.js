const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default

const paths = [
  {
      path: '/',
      lastmod: '2022-03-05',
      priority: 0.9,
      changefreq: 'yearly'
  },
  {
      path: '/node-js-es6-plus-env-setting',
      lastmod: '2022-02-27',
      priority: 0.9,
      changefreq: 'yearly'
  },
  {
      path: '/vue-cli-working-with-sass',
      lastmod: '2022-03-05',
      priority: 0.9,
      changefreq: 'yearly'
  },
  {
      path: '/vue3-router',
      lastmod: '2022-03-10',
      priority: 1.0,
      changefreq: 'yearly'
  }
]

const webpackPlugins = [
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
  new SitemapPlugin({ base: 'https://example.com', paths })
];

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
  },
}