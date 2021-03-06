// require('babel-core/register');
// const webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');
// const webpackConfig = require('./webpack.config');
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config';

const compiler = webpack(webpackConfig);
const port = process.env.PORT || 8000;
const server = new WebpackDevServer(compiler, {
  contentBase: '.',
  port,
  compress: true,
  historyApiFallback: true,
  publicPath: '/public/',
  disableHostCheck: true,
});

server.listen(port, err => console.log(err));