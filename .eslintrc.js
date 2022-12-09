module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:compat/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'next/core-web-vitals',
  ],
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
  },
  rules: {
    'array-callback-return': [
      'error',
      {
        allowImplicit: true,
      },
    ],
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true,
      },
    ],
    // '@typescript-eslint/restrict-template-expressions': ['error', {
    //   allowNumber: true
    // }],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        // See https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-promises.md#checksvoidreturn
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        },
      },
    ],
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-namespace': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    'prefer-const': ['off'],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],
    'no-implicit-globals': 'off',
    'react/no-unstable-nested-components': ['error'],
    'react/no-unescaped-entities': ['off'],
    'react/no-unknown-property': [
      2,
      {
        ignore: ['jsx'],
      },
    ],
    // Buggy
    'react/prop-types': ['off'],
  },
}
