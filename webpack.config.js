const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style',
          'css?importLoaders=1&modules&localIdentName=ic-picthis-[folder]-[name]__[local]',
          'postcss'
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: [ 'style', 'css' ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  },
  plugins: [
  ],
  postcss (webpack) {
    const srcCss = require('./lib/styles/variables')
    return [
      require('webpack-postcss-tools').prependTildesToImports,
      require('postcss-import')({addDependencyTo: webpack}),
      require('postcss-url')({url: 'inline'}),
      require('postcss-cssnext')({
        browsers: ['last 2 versions'],
        features: {
          customProperties: { variables: srcCss.variables },
          customMedia: { extensions: srcCss.media }
        }
      }),
      require('postcss-browser-reporter')(),
      require('postcss-reporter')()
    ]
  }
}
