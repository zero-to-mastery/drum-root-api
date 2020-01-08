module.exports = {
  env: {
    node: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-unused-vars": ["error", { argsIgnorePattern: "req|res|next|val" }]
  }
};
