const common = require('./webpack.common.js');
const path = require('path');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist/shell'),
    port: 4200,
  },
  output: {
    publicPath: 'http://localhost:4200/',
  },
});
