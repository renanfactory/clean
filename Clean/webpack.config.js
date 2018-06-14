const helpers = require('./helpers');
var path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var webpack = require('webpack');
var pkg = require('./package.json');
const autoprefixer = require('autoprefixer');
const bootstrapEntryPoints = require('./webpack.bootstrap.config.js');
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function _path(p) {
  return path.join(__dirname, p);
}
 
// eslint-disable-next-line no-console
console.log(`=> bootstrap-loader configuration: ${bootstrapEntryPoints.dev}`);

var config = {
  mode: "development",
  entry: [
    'tether',
    'font-awesome-loader',
    bootstrapEntryPoints.dev,
    __dirname + "/scss/style.scss",
    __dirname + "/App/Main.ts",
    __dirname + "/App/Pages/loader.page.ts"
  ],
  devtool: '#cheap-module-eval-source-map',
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['*', '.js', ".ts", ".tsx", ".js"]
  },
  output: {
    path: path.resolve(__dirname, 'wwwroot/js'), // `dist` is the destination
    publicPath: "/js/",
    filename: '[name].bundle.js?v=' + pkg.version
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|eot)$/i,
        loader: "file-loader?name=/assets/[name].[ext]"
      },
      {
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: [helpers.root('node_modules')]
      },
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
      // Bootstrap 3
      { test: /bootstrap-sass\/assets\/javascripts\//, use: 'imports-loader?jQuery=jQuery' },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('developer')
      }
    }),
    new UglifyJsPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.Tether': 'tether'
    }),
    new webpack.LoaderOptionsPlugin({
      postcss: [autoprefixer],
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }),
    new CompressionPlugin({
      cache: true
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        Commons: {
          chunks: 'initial',
          filename: '[name].bundle.js?v=' + pkg.version,
          test: /[\\/]node_modules[\\/]/,
          name: 'Commons'
        },
        Styles: {
          chunks: 'initial',
          filename: '[name].bundle.js?v=' + pkg.version,
          test: /\.scss$/,
          name: 'Styles'
        },
      }
    }
  }
};

module.exports = config;