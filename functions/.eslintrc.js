module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    "ecmaVersion": 2018,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "no-restricted-globals": ["off", "name", "length"],
    "prefer-arrow-callback": "error",
    'no-unused-vars': 'warn',
    'guard-for-in': 'off',
    'max-len': ['error', { "code": 120 }],
    "quotes": ["off", "double", {"allowTemplateLiterals": true}],
    'object-curly-spacing': ['off', 'always'],
  },
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
  globals: {},
};
