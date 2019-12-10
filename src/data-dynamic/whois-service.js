const whois = require('easy-whois')

module.exports = {
  async whois (data) {
    const { domain } = data.$request.params
    return whois(domain)
  }
}
