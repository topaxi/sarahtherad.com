/* eslint-env node */
module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  parallel: 5,
  launch_in_ci: process.env.SAUCE_TEST
    ? ['Chrome', 'Firefox', 'SL_MS_Edge', 'SL_IE_11', 'SL_Firefox_ESR']
    : ['Chrome', 'Firefox'],
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
        // --no-sandbox is needed when running Chrome inside a container
        process.env.TRAVIS ? '--no-sandbox' : null,

        '--disable-gpu',
        '--headless',
        '--remote-debugging-port=0',
        '--window-size=1440,900',
      ],
    },
  },
}
