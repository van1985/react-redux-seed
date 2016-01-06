var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports ={
  entry: "./src/app.js",
  output:{
    filename: "public/bundle.js"
  },
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query:{
          presets: ['react','es2015']
        }
      },
      {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract(
            "style",
            "css!sass")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('public/style.css')
]
}
