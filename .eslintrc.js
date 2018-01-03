module.exports = {
  globals: {
    server: true,
    percySnapshot: true,
  },
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: ['ember', 'prettier'],
  extends: ['eslint:recommended', 'plugin:ember/recommended', 'prettier'],
  env: {
    browser: true,
  },
  rules: {
    'quote-props': ['error', 'as-needed'],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'ember/alias-model-in-controller': 0,
    'ember/use-ember-get-and-set': 0,
    'ember/named-functions-in-promises': 0,
    'ember/new-module-imports': 2,
    'ember/no-global-jquery': 2,
    'ember/require-super-in-init': 2,
    'ember/order-in-components': 0,
    'ember/order-in-controllers': 0,
    'ember/order-in-routes': 0,
  },
  overrides: [
    {
      files: ['app/**/*.js'],
      plugins: ['disable-features'],
      rules: {
        'disable-features/disable-async-await': 'error',
        'disable-features/disable-generator-functions': 'error',
      },
    },

    // node files
    {
      files: ['testem.js', 'ember-cli-build.js', 'config/**/*.js'],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015,
      },
      env: {
        browser: false,
        node: true,
      },
    },

    // test files
    {
      files: ['tests/**/*.js'],
      excludedFiles: ['tests/dummy/**/*.js'],
      env: {
        embertest: true,
      },
    },
  ],
}
