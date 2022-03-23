const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default
const postsInfo = require('./public/posts/index.json')

const posts = postsInfo.filter(post => !post.hidden)
const routes = posts.map(post => `/${post.name}`)
const paths = posts.map(post => {
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
    postProcess(renderedRoute) {
      let { html, route } = renderedRoute;
      const { title, description, keywords } = posts.find(post => route.includes(post.name))
      const url = `${process.env.VUE_APP_BASE_URL}${route}`
      const imgUrl = `${process.env.VUE_APP_BASE_URL}/images/og_image.jpg`
      
      const metaData = `
        <title>${title}</title>
        <meta name="title" content="${title}" />
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${keywords}" />
        <meta property="og:url" content="${url}" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${description}" />
        <meta property="og:image" content="${imgUrl}" />
        <meta property="twitter:card" content="${imgUrl}" />
        <meta property="twitter:url" content="${url}" />
        <meta property="twitter:title" content="${title}" />
        <meta property="twitter:description" content="${description}" />
        <meta property="twitter:image" content="${imgUrl}" />
      `;
      const start = html.indexOf('<head>') + '<head>'.length;
      html = html.slice(0, start) + metaData + html.slice(start);
      renderedRoute.html = html;
      return renderedRoute;
    },
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: '#app'
    }),
  }),
  new SitemapPlugin({
    base: process.env.VUE_APP_BASE_URL,
    paths
  })
]