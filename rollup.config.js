const path = require('path')
const outputManifest = require('rollup-plugin-output-manifest').default

const src = path.join(__dirname, 'src')

export default {
  input: path.join(src, 'scripts', 'main.js'),
  output: {
    file: path.join(src, 'public', 'scripts', 'main.rollup.js'),
    format: 'iife'
  },
  plugins: [
    outputManifest({
      publicPath: '/scripts/',
      fileName: path.join(src, 'data-static', 'rollup-manifest.json'),
    })
  ],
  watch: {
    clearScreen: false
  }
}
