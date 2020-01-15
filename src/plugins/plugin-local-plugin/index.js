module.exports = {
  loadMiddleware () {
    console.log('loadMiddleware')
  },
  async onBeforeLoadRes () {
    console.log('onBeforeLoadRes')
  }
}
