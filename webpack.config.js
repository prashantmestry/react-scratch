const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    clean: true, // before creating bundle, already created bundle folder will get clear.
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // which extension type file we have to proide to webpack for transpiling purpose.
        exclude: /node_modules/, // do not include node_module for transpilation.
        use: "babel-loader", // use babel-loader when transpiling .js or .jsx files.
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"], // css-loader to import css file in .jsx file and style-loader is to display applied css on element.
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i, // match image format.
        // use: "asset/resource", //built-in asset modules.
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // font format
        // use: "asset/resource",
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "utils/index.html"),
    }),
  ],
  devServer: {
    port: 3000,
    static: "./public", // folder to watch for frequent changes for reloading.
  },
};
