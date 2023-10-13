module.exports = {
    root: true,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    settings: {
      react: {
        version: 'detect'
      },
      jest: {
        version: 29
      }
    },
    plugins: ['simple-import-sort', 'jest', 'testing-library', 'jest-formatting'],
    env: {
      browser: true,
      amd: true,
      node: true,
      "jest/globals": true
    },
    extends: [
      'airbnb',
      'airbnb/hooks',
      'plugin:prettier/recommended',
      'plugin:jest-formatting/recommended',
      'plugin:jest/recommended',
      'plugin:testing-library/react'
    ],
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
          tabWidth: 2,
          printWidth: 100,
          singleQuote: true,
          trailingComma: 'none',
          bracketSameLine: false
        },
        { usePrettierrc: false }
      ],
      'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-sort-props': [
        'error',
        {
          shorthandFirst: true,
          callbacksLast: true,
          reservedFirst: ['key', 'ref']
        }
      ],
      "react/function-component-definition": [
        'error',
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function"
        },
      ],
      'no-underscore-dangle': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton']
        }
      ],
      'func-names': 'error'
    }
  };