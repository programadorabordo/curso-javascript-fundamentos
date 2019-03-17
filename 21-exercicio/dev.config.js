const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    port: 9000
  }
}