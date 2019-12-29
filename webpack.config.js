const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')

const src = path.join(__dirname, 'src')

module.exports = {
  mode: 'development',
  entry: path.join(src, 'scripts', 'main.js'),
  output: {
    path: path.join(src, 'public', 'scripts'),
    publicPath: '/scripts/',
    filename: '[name].[chunkhash:8].js'
  },
  plugins: [
    new ManifestPlugin({
      writeToFileEmit: true,
      fileName: path.join(src, 'data-static', 'webpack-manifest.json')
    })
  ]
}
