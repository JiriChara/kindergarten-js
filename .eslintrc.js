module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',

  plugins: [
    '@typescript-eslint',
    'jest',
  ],

  extends: [
    'airbnb-typescript',
    'prettier',
   'plugin:jest/recommended',
  ],

  parserOptions: {
    project: './tsconfig.lint.json',
  },

  settings: {
    react: {
      version: '...', // get rid of annoying react version warning
    },
  },
};
