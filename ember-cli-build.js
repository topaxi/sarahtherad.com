/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var cssnext = require('postcss-cssnext');
var targets = require('./config/targets');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'esw-cache-first': {
      version: '1',
      patterns: [
        'https://fonts.googleapis.com/css(?:.+)',
        'https://fonts.gstatic.com/s/slabo27px/(?:.+)',
      ],
    },
    'esw-cache-fallback': {
      version: '1',
      patterns: [
        'https://api.mixcloud.com/derdienstagmorgen/(?:.*)',
      ],
    },
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
              browsers: targets.browsers,
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
