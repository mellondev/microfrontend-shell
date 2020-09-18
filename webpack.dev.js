const webpack = require('webpack');
const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const common = require('./webpack.common.js');
const path = require('path');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  entry: ['./projects/shell/src/polyfills.ts', './projects/shell/src/main.ts'],
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist/shell'),
    port: 4200,
  },
  plugins: [
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: './projects/shell/tsconfig.app.json',
      directTemplateLoading: true,
      entryModule: path.resolve(__dirname, './projects/shell/src/app/app.module#AppModule'),
    }),
  ]
});
