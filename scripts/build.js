const webpack = require("webpack");
const webpackConfig = require("../webpack.config");

webpackConfig.mode = "production";

webpackConfig.plugins = webpackConfig.plugins.concat(
  new webpack.EnvironmentPlugin({
    NODE_ENV: "production",
  })
);

const compiler = webpack(webpackConfig);

compiler.run();
