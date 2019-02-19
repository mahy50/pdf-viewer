const argv = require('minimist')(process.argv.slice(2))

module.exports = {
  productionSourceMap: false,
  publicPath: '/pdf-viewer',
  devServer: {
    open: true
  },
  configureWebpack: {
    optimization: {
      minimize: true
    }
  },
  css: { extract: argv.target !== 'lib' }
}

