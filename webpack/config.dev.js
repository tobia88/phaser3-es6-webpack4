const merge = require('webpack-merge')
const webpackConfig = require('./config')
const BrowserSyncWebpackPlugin = require('browser-sync-webpack-plugin')

module.exports = merge(webpackConfig, {
  devtool: 'eval',

  output: {
    pathinfo: true,
    publicPath: '/',
    filename: '[name].js'
  },

  plugins: [
    new BrowserSyncWebpackPlugin({
      host: process.env.IP || 'localhost',
      port: process.env.PORT || 3000,
      server: {
        baseDir: ['dist']
      }
    })
  ]
})
