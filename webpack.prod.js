const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: ['./projects/shell/src/polyfills.ts', './projects/shell/src/main.prod.ts'],
  mode: 'production',
  plugins: [
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: './projects/shell/tsconfig.app.prod.json',
      directTemplateLoading: true,
      entryModule: path.resolve(__dirname, './projects/shell/src/app/app.module#AppModule'),
    }),
  ]
});
