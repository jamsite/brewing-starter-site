module.exports.GET = async function(req, res) {
  // todo: access jamsite instance
  const data = req.$jamsite.dataContext.data()
  return `Hello world from api-index/index.js\n${JSON.stringify(data.users, null, 2)}`
}
