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
    background_color: '#000',
    theme_color: '#000',
    icons: [
    ],
    apple: {
      statusBarStyle: 'black-translucent'
    }
  };
}
