const { withNextein } = require('nextein/config')

module.exports = withNextein({
  // your next.js config goes here
  future: {
    webpack5: true
  }
})
