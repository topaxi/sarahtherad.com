module.exports = {
  globals: {
    server: true,
  },
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'no-unused-vars': [
      'error', {
        argsIgnorePattern: '^_',
      }
    ],
    'ember/alias-model-in-controller': 0,
    'ember/use-ember-get-and-set': 0,
    'ember/named-functions-in-promises': 0,
    'ember/new-module-imports': 2,
    'ember/no-global-jquery': 2,
    'ember/require-super-in-init': 2,
    'ember/order-in-components': 0,
    'ember/order-in-controllers': 0,
    'ember/no-jquery': 2,
  }
};
