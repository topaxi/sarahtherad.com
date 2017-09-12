/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const cssnext = require('postcss-cssnext');
const targets = require('./config/targets');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    babel: {
      plugins: [ 'babel-plugin-transform-decorators-legacy' ],
    },
    'esw-index': {
      version: '2',
      excludeScope: [/\.php/,/\bwp-\w+\//, /manifest.webmanifest$/, /\.xml/],
    },
    'esw-cache-fallback': {
      version: '1',
      patterns: [
        '/wp-json/.+',
        '/wp-content/.+',
        'https://api.mixcloud.com/derdienstagmorgen/.+',
        'https://thumbnailer.mixcloud.com/.+',
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
    sassOptions: {
      includePaths: [ 'node_modules/swiper/dist/css' ],
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
