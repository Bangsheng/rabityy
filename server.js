const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);
const port = process.env.PORT || 8000;
const server = new WebpackDevServer(compiler, {
  contentBase: '.',
  port,
  compress: true,
  historyApiFallback: true,
  publicPath: '/public/',
});

server.listen(port, err => console.log(err));