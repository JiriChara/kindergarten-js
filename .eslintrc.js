module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',

  plugins: [
    '@typescript-eslint',
  ],

  extends: [
    'airbnb-typescript',
    'prettier',
  ],

  parserOptions: {
    project: './tsconfig.json',
  },

  settings: {
    react: {
      version: '...', // get rid of annoying react version warning
    },
  },
};
