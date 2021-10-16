const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

let rootDirectory = '';
let devTool = 'eval-source-map';

module.exports = (env, options) => {
  if (options.mode === 'production') {
    rootDirectory = '';
    devTool = undefined;
  }

  return {
    target: 'web',
    entry: './src/index.tsx',
    devtool: devTool,
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            'ts-loader',
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(ttf|woff|woff2|eot)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts',
            publicPath: `${rootDirectory}/fonts`,
          },
        },
        {
          test: /\.(svg|jpeg|jpg)$/,
          include: [path.join(__dirname, 'src/assets')],
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img',
            publicPath: `${rootDirectory}/img`,
          },
        },
        {
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    resolve: { extensions: ['*', '.ts', '.tsx', '.js'] },
    output: {
      path: path.resolve(__dirname, 'dist/'),
      publicPath: rootDirectory,
      filename: 'bundle.js',
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      port: 3000,
    },
    plugins: [
      new webpack.CleanPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new Dotenv({
        path: path.resolve(__dirname, `./.env.${options.mode}`),
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  };
};
