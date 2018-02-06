const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


const outputDir = path.join(__dirname, 'build')

module.exports = (env) => {
  const config = {
    devtool: 'source-map',
    entry: {
      main: [
        'react-hot-loader/patch',
        './src/main.js',
      ],
    },
    output: {
      path: outputDir,
      filename: '[name].js',
      libraryTarget: 'umd',
      publicPath: '/',
    },
    devServer: {
      contentBase: outputDir,
      historyApiFallback: true,
      watchContentBase: true,
      hotOnly: true,
      // hot: true,
      open: true,
      compress: true,
      port: 9000,
    },
    resolve: {
      alias: {
        app: path.resolve(__dirname, 'src/'),
      },
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['flow', 'react'],
            plugins: [
              'react-hot-loader/babel',
              'transform-class-properties',
              'transform-object-rest-spread',
            ],
          },
        },
        {
          test: /\.svg$/,
          loader: 'svg-react-loader',
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new CleanWebpackPlugin([outputDir]),
      new CopyWebpackPlugin([
        { from: 'src/index.html', to: 'index.html' },
      ]),
      new webpack.EnvironmentPlugin({
        NODE_ENV: env.NODE_ENV,
      }),
    ],
  }
  return config
}
