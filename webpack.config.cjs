const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // before creating bundle, already created bundle folder will get clear.
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // which extension type file we have to proide to webpack for transpiling purpose.
        exclude: /node_modules/, // do not include node_module for transpilation.
        use: ['babel-loader'], // use babel-loader when transpiling .js or .jsx files.
      },
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'], // css-loader to import css file in .jsx file and style-loader is to display applied css on element.
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i, // match image format.
        // use: "asset/resource", //built-in asset modules.
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // font format
        // use: "asset/resource",
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'utils/index.html'),
    }),
  ],
  devServer: {
    port: 3000,
    static: './public', // folder to watch for frequent changes for reloading.
  },
  // devtool: 'inline-source-map',  // to identify error in individual files instead of bundler.js.
};
