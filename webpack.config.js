const { resolve } = require('path');
const externalsWebpack = require('webpack-node-externals')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './server/index.js',
  mode: "production",
  target: 'node',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  externals: [externalsWebpack()],
  plugins: [
    new htmlPlugin({
      template: 'server/public/index.html',
      filename: 'public/index.html'
    })
  ]
}