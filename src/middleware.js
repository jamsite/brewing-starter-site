const helmet = require('micro-helmet')

module.exports = function helmetMiddleware (jamsiteHandler) {
  return helmet(jamsiteHandler)
}
