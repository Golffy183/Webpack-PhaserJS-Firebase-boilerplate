const path = require('node:path');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/scripts/main.ts'],
  output: {
    // path: path.resolve(__dirname, '../dist'),
    path: path.resolve(__dirname, '../hosting/public'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$|\.jsx?$/,
        include: path.join(__dirname, '../src'),
        loader: 'ts-loader',
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[/\\]node_modules[/\\]/,
          name: 'vendors',
          chunks: 'all',
          filename: '[name].bundle.js',
        },
      },
    },
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({ gameName: 'My Phaser Game', template: 'src/index.html' }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },
        { from: 'pwa', to: '' },
        { from: 'src/favicon.ico', to: '' },
      ],
    }),
  ],
};
