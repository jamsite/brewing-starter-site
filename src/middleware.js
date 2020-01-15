module.exports = function customSiteMiddleware (jamsiteHandler) {
  return async function middleware (req, res) {
    console.log('custom middleware:', 'log request', req.url)
    return jamsiteHandler(req, res)
  }
}
