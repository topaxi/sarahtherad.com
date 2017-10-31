/* eslint-env node */
const browsers = [
  'last 2 Edge versions',
  'last 2 Chrome versions',
  'last 2 Firefox versions',
  'last 2 Safari versions',
]

const isCI = Boolean(process.env.CI)
const isProduction = process.env.EMBER_ENV === 'production'

if (isCI || isProduction) {
  browsers.push(...['> 0.5% in CH', 'ie 11', 'Firefox ESR'])
}

module.exports = {
  browsers,
}
