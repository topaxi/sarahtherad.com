/* eslint node: true */
const fs = require('fs')

const serverFiles = [
  'app.js',
  'config.js',
  'package.json',
  'sitemap/index.jsx',
  'yarn.lock',
]

const wordpressFiles = ['style.css', 'index.php', 'functions.php']

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    // include other plugin configuration that applies to all deploy targets here
  }

  if (deployTarget === 'development') {
    ENV.build.environment = 'development'
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production'
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production'
    ENV['scp'] = {
      nodes: [
        {
          username: 'sarah',
          host: 'sarahtherad.com',
          path:
            '/home/sarah/sarahtherad.com/wp-content/themes/sarahtherad.com',
        },
      ],
      beforeUpload() {
        fs.mkdirSync('tmp/sarahtherad.com')
        fs.mkdirSync('tmp/sarahtherad.com/server')
        fs.mkdirSync('tmp/sarahtherad.com/server/sitemap')
        serverFiles.forEach(file =>
          fs.copyFileSync(
            `fastboot-server/${file}`,
            `tmp/sarahtherad.com/server/${file}`,
          ),
        )
        fs.renameSync('tmp/deploy-dist', 'tmp/sarahtherad.com/frontend')
        wordpressFiles.forEach(file =>
          fs.copyFileSync(
            `wordpress-theme/${file}`,
            `tmp/sarahtherad.com/${file}`,
          ),
        )
        patchThemeColor('tmp/sarahtherad.com/frontend/manifest.webmanifest')
        fs.renameSync('tmp/sarahtherad.com', 'tmp/deploy-dist')
      },
    }
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV
}

function patchThemeColor(manifestFile) {
  const manifest = JSON.parse(fs.readFileSync(manifestFile))
  manifest.theme_color = '#000'
  fs.writeFileSync(manifestFile, JSON.stringify(manifest))
}
