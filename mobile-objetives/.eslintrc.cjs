module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint-config-prettier', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'standard'],
  plugins: ['prettier', 'react-native', '@typescript-eslint', 'react'],
  ignorePatterns: ['.eslintrc.cjs', 'babel.config.js'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    jsx: true,
    tsconfigRootDir: __dirname,
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off'
  }
}
