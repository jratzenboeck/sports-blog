module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb-base', 'plugin:vue/recommended', 'plugin:prettier/recommended', 'prettier/vue'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {}
};
