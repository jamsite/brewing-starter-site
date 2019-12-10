const { send } = require('jamsite')

module.exports.GET = async function userById (req, res) {
  const data = req.$jamsite.dataContext.data()
  const userId = Number(req.params.id)

  for (const user of data.users) {
    if (user.id === userId) {
      send(res, 200, user)
      return
    }
  }

  send(res, 404, 'User not found')
}
