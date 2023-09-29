/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  globals: {
    it: true,
    describe: true,
    expect: true,
    jest: true,
    module: true
  },
  root: true,
  'extends': ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier/skip-formatting', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  "rules": {"vue/multi-word-component-names": "off"}
}
