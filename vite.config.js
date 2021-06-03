// vite.config.js
const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        collection: resolve(__dirname, 'collection/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        news: resolve(__dirname, 'news/index.html'),
      }
    }
  }
}
