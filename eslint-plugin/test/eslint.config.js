import squiddyds from '../dist/index.js';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: await import('@typescript-eslint/parser').then(m => m.default),
    },
    plugins: {
      squiddyds,
    },
    rules: {
      'squiddyds/no-unknown-component': 'error',
      'squiddyds/no-invalid-attribute-values': 'error',
      'squiddyds/no-unknown-attributes': 'warn',
    },
  },
];
