/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var cssnext = require('postcss-cssnext');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    imagemin: {
      plugins: [
        require('imagemin-jpegtran')({ progressive: true }),
        require('imagemin-optipng')(),
        require('imagemin-svgo')()
      ]
    },
    vendorFiles: { 'jquery.js': null },
    jquery: {
      slim: true
    },
    postcssOptions: {
      compile: {
        enabled: false
      },
      filter: {
        enabled: true,
        map: false,
        plugins: [
          {
            module: cssnext,
            options: {
              browsers: [
                '> 1% in CH',
                'last 2 versions',
                'Firefox ESR'
              ],
              features: {
                customProperties: false
              }
            }
          }
        ]
      }
    }
  });

  return app.toTree();
};
