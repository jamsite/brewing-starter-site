const helmet = require('micro-helmet')

module.exports = (jamsiteHandler) => helmet(jamsiteHandler)
