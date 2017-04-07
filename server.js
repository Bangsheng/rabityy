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
});

server.listen(port, err => console.log(err));