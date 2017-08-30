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
  extends: 'eslint:recommended',
  env: {
    browser: true
  },
  rules: {
    'no-unused-vars': [
      'error', {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_'
      }
    ]
  }
};
