const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: 'https://blue-rock-08cf12003.azurestaticapps.net/',
  },
});
