const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: 'https://red-wave-053790403.azurestaticapps.net/',
  },
});
