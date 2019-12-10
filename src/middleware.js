const helmet = require('micro-helmet')

module.exports = (jamsiteHandler) => helmet(async (req, res) => {
  console.log('url:', req.url)
  return jamsiteHandler(req, res)
})
