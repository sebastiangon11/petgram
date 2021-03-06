module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ["react-app"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
