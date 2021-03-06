/* eslint-env node */
'use strict'

const EmberApp = require('ember-cli/lib/broccoli/ember-app')
const cssnext = require('postcss-cssnext')
const targets = require('./config/targets')

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    treeShaking: {
      enabled: process.env.EMBER_ENV === 'production',
    },
    babel: {
      plugins: ['babel-plugin-transform-decorators-legacy'],
    },
    fingerprint: {
      extensions: ['ico', 'js', 'css', 'png', 'jpg', 'svg', 'gif'],
    },
    minifyHTML: {
      minifierOptions: {
        ignoreCustomComments: [
          /^\s*EMBER_CLI_FASTBOOT_BODY|EMBER_CLI_FASTBOOT_HEAD|EMBER_APP_SHELL_PLACEHOLDER/,
        ],
      },
    },
    'ember-app-shell': {
      outputFile: 'app-shell.html',
      criticalCSSOptions: {
        // For some reason critical (or penthouse) does not pick these up
        include: [
          'a',
          'main',
          /\.liquid-container/,
          '.hamburglar',
          '.burger-icon',
          '.burger-container',
          '.burger-bun-top',
          '.burger-filling',
          '.burger-bun-bot',
          '.logo',
          '.header-icon',
          '.header-icon.email',
          '.menu',
          /\.app-shell/
        ],
        ignore: [/font-face/, /font-family/, /mask/],
      },
    },
    'ember-service-worker': {
      registrationStrategy: 'inline',
    },
    'esw-index': {
      version: '3',
      // Use default index.html in development, otherwise the ember proxy will
      // cache the prod app-shell in case of --proxy=https://sarahtherad.com/
      location:
        process.env.EMBER_ENV === 'production'
          ? 'app-shell.html'
          : 'index.html',
      excludeScope: [
        /\.php/, // any php files
        /\bwp-\w+\//, // any wordpress content
        /manifest.webmanifest$/,
        /robots.txt$/,
        /favicon.ico$/,
        /favicon-.*$/,
        /app-logos\//,
        /jobs\//,
        /\.xml/, // any xml files (sitemaps)
        /sw.js$/, // chrome triggers sw even in view-source..
      ],
    },
    'asset-cache': {
      exclude: [
        // Nginx does this for us
        '**/*.webp',
      ],
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
        require('imagemin-svgo')(),
      ],
    },
    vendorFiles: {
      'jquery.js': process.env.EMBER_ENV === 'test' ? undefined : null,
      'app-shims.js': null,
    },
    jquery: {
      slim: true,
    },
    sassOptions: {
      includePaths: ['node_modules/swiper/dist/css'],
    },
    postcssOptions: {
      compile: {
        enabled: false,
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
                customProperties: false,
              },
            },
          },
        ],
      },
    },
  })

  return app.toTree()
}
