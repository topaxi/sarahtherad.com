/* eslint node: true */
const ExpressHTTPServer = require('fastboot-app-server/src/express-http-server')
const FastBootAppServer = require('fastboot-app-server')
const FastBootWatchNotifier = require('fastboot-watch-notifier')

require('babel-register')({
  plugins: [['transform-react-jsx', { pragma: 'createElement' }]],
})

const distPath = '../frontend'
const host = '0.0.0.0'
const port = 8042 || process.env.PORT

const notifier = new FastBootWatchNotifier({ distPath })

const httpServer = new ExpressHTTPServer({
  host,
  port,
})

const { app } = httpServer

app.use('/', require('./sitemap'))

const server = new FastBootAppServer({
  httpServer,
  distPath,
  notifier,
  host,
  port,
})

server.start()
