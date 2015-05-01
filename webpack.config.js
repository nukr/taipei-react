var webpack = require('webpack');

module.exports = {
  entry: [
    './client/src/js/boot.js'
  ],
  output: {
    path: __dirname + '/client/build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'url?limit=10000' },
      { test: /\.jsx?$/, loaders: ['babel-loader?stage=0&optional=runtime'], exclude: /node_modules/},
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff'},
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff'},
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
    ]
  }
};
