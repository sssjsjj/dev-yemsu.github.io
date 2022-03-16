
const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default
const postsInfo = require('./public/posts/index.json')

const visiblePosts = postsInfo.filter(post => !post.hidden)
const routes = visiblePosts.map(post => `/${post.name}`)
const paths = visiblePosts.map(post => {
  return {
    path: `/${post.name}`,
    lastmod: post.sitemap.lastmod,
    priority: post.sitemap.priority,
    changefreq: post.sitemap.changefreq
  }
})

module.exports = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'docs'),
    routes,
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: '#app'
    }),
  }),
  new SitemapPlugin({ base: process.env.VUE_APP_BASE_URL, paths })
]