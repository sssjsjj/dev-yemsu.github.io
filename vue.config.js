module.exports = {
  outputDir: 'docs',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/style/global.scss";`
      }
    }
  }
}