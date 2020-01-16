module.exports = {
  get name () {
    return `"${super.name}"`
  },
  get apiKey () {
    return `${process.env.API_KEY}`
  }
}
