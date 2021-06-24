const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('http://localhost:3001/*', { target: 'http://localhdocost:3001' })
  )
}
