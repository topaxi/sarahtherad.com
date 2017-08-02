/* eslint node: true */
const FastBootAppServer = require('fastboot-app-server')
const FastBootWatchNotifier = require('fastboot-watch-notifier')

const distPath = '../frontend'
const host = '0.0.0.0'
const port = 8042 || process.env.PORT

let notifier = new FastBootWatchNotifier({ distPath })
let server = new FastBootAppServer({
  distPath,
  notifier,
  host,
  port,
})

server.start()
