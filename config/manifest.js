/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: 'sarahtherad.com',
    short_name: 'sarahtherad',
    lang: 'en',
    description: '',
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    icons: [
      {
        src: 'app-logos/logo192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'app-logos/logo512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'app-logos/logo1024.png',
        sizes: '1024x1024',
        type: 'image/png',
      }
    ],
    apple: {
      statusBarStyle: 'black-translucent'
    }
  };
}
