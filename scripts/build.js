const Webpack = require("webpack");
const webpackConfig = require("../webpack.config");

const compiler = Webpack(webpackConfig);

compiler.run();
