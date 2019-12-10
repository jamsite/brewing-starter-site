const { send } = require('@jamsite/jamsite')

module.exports.GET = async function go (req, res) {
  send(res, 200, { params: req.params, query: req.query })
}
