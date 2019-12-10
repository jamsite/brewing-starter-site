module.exports.GET = async function userById (req, res) {
  const data = req.$jamsite.dataContext.data()
  const { createError } = req.$micro
  const userId = Number(req.params.id)

  for (const user of data.users) {
    if (user.id === userId) {
      return user
    }
  }

  throw createError(404, 'User not found')
}
