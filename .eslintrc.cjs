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
  "plugins": [
    "import"
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  "rules": {
    "vue/multi-word-component-names": "off",
    "import/order": [
      1,
      {
        "groups": [
          "external",
          "builtin",
          "internal",
          "sibling",
          "parent",
          "index"
        ],
        "pathGroups": [
          {
            "pattern": "components",
            "group": "internal"
          },
          {
            "pattern": "hooks",
            "group": "internal"
          }
        ],
        "pathGroupsExcludedImportTypes": ["internal"],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
  },

}
