const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const webpackConfig = require("../webpack.config");

const MODE = "development";

webpackConfig.mode = MODE;

webpackConfig.plugins = webpackConfig.plugins.concat(
    new webpack.EnvironmentPlugin({
        NODE_ENV: MODE,
    })
);

const compiler = webpack(webpackConfig);

const devServerOptions = {...webpackConfig.devServer, open: true};

const server = new webpackDevServer(devServerOptions, compiler);

server.start();
