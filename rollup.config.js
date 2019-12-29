const path = require('path')

const src = path.join(__dirname, 'src')

export default {
  input: path.join(src, 'scripts', 'main.js'),
  output: {
    file: path.join(src, 'public', 'scripts', 'main.rollup.js'),
    format: 'cjs'
  }
}
