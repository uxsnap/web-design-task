const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const PugPlugin = require('pug-plugin')
const path = require('path')
const paths = require('./paths')

module.exports = {
  entry: {
    index: './src/pages/home.pug', // output dist/index.html
    user: './src/pages/user.pug', // output dist/user.html
    order: './src/pages/order.pug', // output dist/order.html
  },

  output: {
    path: paths.build,
    publicPath: '/',
  },

  plugins: [
    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          noErrorOnMissing: true,
        },
      ],
    }),

    new PugPlugin({
      css: {
        filename: 'assets/css/[name].[contenthash:8].css',
      },
    }),
  ],

  module: {
    rules: [
      { test: /\.pug$/, loader: PugPlugin.loader },
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader'],
      },
      { test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i, type: 'asset/resource' },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },

  resolve: {
    alias: {
      images: path.join(__dirname, '../src/images/'),
      styles: path.join(__dirname, '../src/styles/'),
      scripts: path.join(__dirname, '../src/scripts/'),
      components: path.join(__dirname, '../src/pages/components')
    },
  },
}
