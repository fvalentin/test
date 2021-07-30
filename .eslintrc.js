module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': [
      0,
      // { caseSensitive: false },
    ],
    'react/jsx-props-no-spreading': 'off',
    'object-curly-newline': 'off',
    'comma-dangle': 'off',
    'react/require-default-props': 'off'
  },
};
