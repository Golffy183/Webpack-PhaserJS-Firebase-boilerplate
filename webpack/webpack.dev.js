const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const dev = {
  mode: 'development',
  stats: 'errors-warnings',
  devtool: 'eval',
  devServer: {
    open: true,
    https: true,
  },
};

module.exports = merge(common, dev);
