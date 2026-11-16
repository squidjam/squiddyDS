/**
 * ESLint Plugin for Squiddy Design System
 *
 * Provides rules for validating Squiddy DS component usage in HTML/JSX templates.
 *
 * @example
 * // .eslintrc.json
 * {
 *   "plugins": ["squiddyds"],
 *   "extends": ["plugin:squiddyds/recommended"]
 * }
 */

import noUnknownComponent from './rules/no-unknown-component.js';
import noInvalidAttributeValues from './rules/no-invalid-attribute-values.js';
import noUnknownAttributes from './rules/no-unknown-attributes.js';

export const rules = {
  'no-unknown-component': noUnknownComponent,
  'no-invalid-attribute-values': noInvalidAttributeValues,
  'no-unknown-attributes': noUnknownAttributes,
};

export const configs = {
  recommended: {
    plugins: ['squiddyds'],
    rules: {
      'squiddyds/no-unknown-component': 'error',
      'squiddyds/no-invalid-attribute-values': 'error',
      'squiddyds/no-unknown-attributes': 'warn',
    },
  },
  all: {
    plugins: ['squiddyds'],
    rules: {
      'squiddyds/no-unknown-component': 'error',
      'squiddyds/no-invalid-attribute-values': 'error',
      'squiddyds/no-unknown-attributes': 'error',
    },
  },
};

// Re-export component registry for programmatic use
export { components, getComponent, getAllTags, getComponentsByCategory, getCategories } from './components.js';
export type { ComponentDefinition, ComponentAttribute } from './components.js';

// Default export for ESLint flat config
export default {
  rules,
  configs,
};
