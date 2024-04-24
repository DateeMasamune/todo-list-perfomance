module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "@feature-sliced" /**https://github.com/feature-sliced/eslint-config */,
    "prettier" /**https://github.com/prettier/eslint-config-prettier#installation */
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true /**https://github.com/feature-sliced/eslint-config */
      }
    }
  }
}
