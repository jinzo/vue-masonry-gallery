var path = require("path");

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.resolve(__dirname, "../src/components/VueMasonryGallery.vue"),
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../vendor/VueMasonryGallery/"),
    filename: "VueMasonryGallery.js",
    libraryTarget: "umd",
    library: "VueMasonryGallery",
    libraryExport: "default" // Do not set this item, then only access in test.default
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};
