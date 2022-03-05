const webpack = require("webpack");
const webpackConfig = require("../webpack.config");

const MODE = "production";

webpackConfig.mode = MODE;

webpackConfig.plugins = webpackConfig.plugins.concat(
  new webpack.EnvironmentPlugin({
    NODE_ENV: MODE,
  })
);

const compiler = webpack(webpackConfig);

compiler.run();
