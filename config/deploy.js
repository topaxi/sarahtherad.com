/* eslint node: true */
const fs = require('fs')

const serverFiles = [
  'app.js',
  'package.json',
  'sitemap/index.jsx',
  'yarn.lock',
]

const wordpressFiles = [
  'style.css',
  'index.php',
  'functions.php',
]

module.exports = function(deployTarget) {
  var ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV['scp'] = {
      username: 'sarah',
      host: 'sarahtherad.com',
      path: '/home/sarah/sarahtherad.com/wp-content/themes/sarahtherad.com',
      beforeUpload() {
        fs.mkdirSync('tmp/sarahtherad.com')
        fs.mkdirSync('tmp/sarahtherad.com/server')
        fs.mkdirSync('tmp/sarahtherad.com/server/sitemap')
        serverFiles.forEach(file =>
          copySync(`fastboot-server/${file}`, `tmp/sarahtherad.com/server/${file}`)
        )
        fs.renameSync('tmp/deploy-dist', 'tmp/sarahtherad.com/frontend')
        wordpressFiles.forEach(file =>
          copySync(`wordpress-theme/${file}`, `tmp/sarahtherad.com/${file}`)
        )
        fs.renameSync('tmp/sarahtherad.com', 'tmp/deploy-dist')
      }
    }
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};

function copySync(srcFile, destFile) {
  const BUF_LENGTH = 64 * 1024;
  const buff = new Buffer(BUF_LENGTH);
  const fdr = fs.openSync(srcFile, 'r');
  const fdw = fs.openSync(destFile, 'w');
  let bytesRead = 1;
  let pos = 0;
  while (bytesRead > 0) {
    bytesRead = fs.readSync(fdr, buff, 0, BUF_LENGTH, pos);
    fs.writeSync(fdw, buff, 0, bytesRead);
    pos += bytesRead;
  }
  fs.closeSync(fdr);
  return fs.closeSync(fdw);
}
