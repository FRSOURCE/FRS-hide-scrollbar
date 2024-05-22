import { javascript } from '@frsource/eslint-config';
import globals from 'globals';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  ...javascript,
  { ignores: ['**/dist', '**/node_modules', 'docs/**/*.js'] },
  {
    files: ['src/**'],
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.browser,
      },
    },
  },
];
