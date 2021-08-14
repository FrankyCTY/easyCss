const packageJson = require('../package.json')

module.exports = {
  debug: false,
  logger: {
    logLevel: 'info',
    logReqRes: false,
  },
  server: {
    port: process.env.PORT || 8080,
  },
  db: {
    uri: '',
  },
}
