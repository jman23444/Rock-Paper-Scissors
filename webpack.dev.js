const path = require("path"); // Add this import
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"), // This now works
    port: 8080,
    open: true,
    hot: true,
  },
});
