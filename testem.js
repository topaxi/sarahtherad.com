/* eslint-env node */
module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  parallel: 2,
  launch_in_ci: [
    'Chrome',
    'Firefox',
  ],
  launch_in_dev: ['Chrome'],
  browser_args: {
    Firefox: {
      mode: 'ci',
      args: ['-headless'],
    },
    Chrome: {
      mode: 'ci',
      args: [
        '--disable-gpu',
        '--headless',
        '--remote-debugging-port=9222',
        '--window-size=1440,900',
      ],
    },
  },
}
