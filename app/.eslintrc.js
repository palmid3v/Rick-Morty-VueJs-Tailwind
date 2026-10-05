module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  plugins: [
    'vue'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {}
}
