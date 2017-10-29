/* eslint-env node */
module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  parallel: 5,
  launch_in_ci: [
    'Chrome',
    'Firefox',
    'SL_MS_Edge',
    'SL_IE_11',
    'SL_Firefox_ESR',
  ],
  launch_in_dev: ['Chrome'],
  launchers: {
    SL_MS_Edge: {
      command:
        "ember sauce:launch -b microsoftedge -v latest --visibility public --no-connect -u '<url>'",
      protocol: 'tap',
    },
    SL_IE_11: {
      command:
        "ember sauce:launch -b 'internet explorer' -v 11 --visibility public --no-connect -u '<url>'",
      protocol: 'tap',
    },
    SL_Firefox_ESR: {
      command:
        "ember sauce:launch -b firefox -v 52 --visibility public --no-connect -u '<url>'",
      protocol: 'tap',
    },
  },
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
