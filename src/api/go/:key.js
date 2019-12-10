module.exports.GET = async function go (req, res) {
  return {
    params: req.params, query: req.query
  }
}
