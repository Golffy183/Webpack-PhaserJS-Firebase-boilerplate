module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['simple-import-sort', 'prettier', 'check-file', 'unicorn'],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        // 'PascalCase' for react component
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: ['default', 'variable'],
        modifiers: ['exported'],
        format: ['PascalCase'],
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'check-file/folder-naming-convention': [
      'error',
      {
        'src/**/': 'KEBAB_CASE',
      },
    ],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'jsx-a11y/accessible-emoji': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-unused-vars': ['warn'],
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
};
