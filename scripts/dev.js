const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const webpackConfig = require("../webpack.config");

webpackConfig.mode = "development";

webpackConfig.plugins = webpackConfig.plugins.concat(
  new webpack.EnvironmentPlugin({
    NODE_ENV: "development",
  })
);

const compiler = webpack(webpackConfig);

const devServerOptions = { ...webpackConfig.devServer, open: true };

const server = new webpackDevServer(devServerOptions, compiler);

server.start();
