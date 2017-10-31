const distPath = process.env.LOCAL_DEV ? '../dist' : '../frontend'
const host = '0.0.0.0'
const port = 8042 || process.env.PORT
const apiBase = process.env.LOCAL_DEV
  ? 'http://localhost:8080/wp-json/rad'
  : 'https://sarahtherad.com/wp-json/rad'

module.exports = { distPath, host, port, apiBase }
