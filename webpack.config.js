const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CopyPlugin = require('copy-webpack-plugin');

const shellConfig = {
  entry: ['./projects/shell/src/polyfills.ts', './projects/shell/src/main.ts'],
  resolve: {
    mainFields: ['browser', 'module', 'main'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/shell'),
    port: 4200,
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: '@ngtools/webpack' },
      {
        test: /\.(scss|sass)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {},
      shared: ['@angular/core', '@angular/common', '@angular/router'],
    }),
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: './projects/shell/tsconfig.app.json',
      directTemplateLoading: true,
      entryModule: path.resolve(__dirname, './projects/shell/src/app/app.module#AppModule'),
    }),
    new CopyPlugin({
      patterns: [{ from: 'projects/shell/src/assets', to: 'assets' }],
    }),
    new HtmlWebpackPlugin({
      template: './projects/shell/src/index.html',
    }),
  ],
  output: {
    filename: '[id].[name].js',
    path: __dirname + '/dist/shell',
    chunkFilename: '[id].[chunkhash].js',
  },
  devtool: 'inline-source-map',
  mode: 'development',
};

module.exports = [shellConfig];
