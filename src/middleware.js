const helmet = require('micro-helmet')

module.exports = (jamsiteHandler) => helmet(async (req, res) => {
  return jamsiteHandler(req, res)
})
