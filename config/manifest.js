/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: 'sarahtherad.com',
    short_name: 'sarahtherad',
    description: '',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#000',
    icons: [
      {
        src: 'pictures/logo192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pictures/logo512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'pictures/logo1024.png',
        sizes: '1024x1024',
        type: 'image/png',
      }
    ],
    apple: {
      statusBarStyle: 'black-translucent'
    }
  };
}
