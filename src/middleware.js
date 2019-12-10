module.exports = (jamsiteHandler) => async (req, res) => {
  console.log('url:', req.url)
  return jamsiteHandler(req, res)
}
