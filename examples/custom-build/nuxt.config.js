module.exports = {
  build: {
    filenames: {
        css: 'styles.[chunkhash].css',    // default: common.[chunkhash].css
        manifest: 'manifest.[hash].js',   // default: manifest.[hash].js
        vendor: 'vendor.[hash].js',       // default: vendor.bundle.[hash].js
        app: 'app.[chunkhash].js'         // default: nuxt.bundle.[chunkhash].js
    },
    vendor: ['lodash'],
    extend (config, { dev }) {
      if (dev) {
        config.devtool = (dev ? 'eval-source-map' : false)
      }
      const urlLoader = config.module.rules.find((loader) => loader.loader === 'url-loader')
      // Increase limit to 100KO
      urlLoader.query.limit = 100000
    }
  }
}
