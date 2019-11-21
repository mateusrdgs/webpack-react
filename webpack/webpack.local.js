const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common');

const cwd = process.cwd();

module.exports = merge(common, {
  mode: 'development',
  entry: ['react-hot-loader/patch', './src/main.tsx'],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(cwd, 'build'),
    historyApiFallback: true,
    hot: true,
    hotOnly: true,
  },
  devtool: 'cheap-module-eval-source-map',
});
