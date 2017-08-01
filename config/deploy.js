/* eslint node: true */
const fs = require('fs')

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
      directory: 'tmp/sarahtherad.com/.',
      path: '/home/sarah/wordpress-test/wp-content/themes/sarahtherad.com',
      beforeUpload() {
        fs.mkdirSync('tmp/sarahtherad.com')
        fs.renameSync('tmp/deploy-dist', 'tmp/sarahtherad.com/frontend')
        copySync('wordpress-theme/style.css', 'tmp/sarahtherad.com/style.css')
        copySync('wordpress-theme/index.php', 'tmp/sarahtherad.com/index.php')
        copySync('wordpress-theme/functions.php', 'tmp/sarahtherad.com/functions.php')
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
