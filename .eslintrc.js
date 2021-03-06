module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    // 'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: [
        '**/*.test.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
