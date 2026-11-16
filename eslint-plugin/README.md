# eslint-plugin-squiddyds

ESLint plugin for [Squiddy Design System](https://github.com/squiddy/squiddyds) — validates attributes, detects typos, and enforces best practices when using Squiddy DS web components.

## Installation

```bash
npm install --save-dev eslint-plugin-squiddyds
```

## Usage

### ESLint Config (eslintrc)

```json
{
  "plugins": ["squiddyds"],
  "extends": ["plugin:squiddyds/recommended"]
}
```

### ESLint Config (flat config)

```js
// eslint.config.js
import squiddyds from 'eslint-plugin-squiddyds';

export default [
  {
    plugins: {
      squiddyds: squiddyds,
    },
    rules: {
      ...squiddyds.configs.recommended.rules,
    },
  },
];
```

## Rules

### ✅ `no-unknown-component`

Reports when an unknown `sq-*` element is used that is not part of Squiddy DS.

**Why?** Catches typos in component names and alerts you when using components that don't exist.

```html
<!-- ❌ Bad -->
<sq-butto>Click</sq-butto>
<sq-buttn>Click</sq-buttn>

<!-- ✅ Good -->
<sq-button>Click</sq-button>
```

**Options:**

```json
{
  "squiddyds/no-unknown-component": ["error", {
    "ignoreTags": ["sq-custom-component"]
  }]
}
```

### ✅ `no-invalid-attribute-values`

Reports when a Squiddy DS component attribute has an invalid value.

**Why?** Ensures you use valid variant, size, and other enum values.

```html
<!-- ❌ Bad -->
<sq-button variant="red">Click</sq-button>
<sq-button size="huge">Click</sq-button>

<!-- ✅ Good -->
<sq-button variant="danger">Click</sq-button>
<sq-button size="lg">Click</sq-button>
```

### ⚠️ `no-unknown-attributes`

Reports when a Squiddy DS component has an attribute that doesn't exist.

**Why?** Catches typos in attribute names and alerts you about unsupported attributes.

```html
<!-- ❌ Bad -->
<sq-button vartiant="primary">Click</sq-button>
<sq-button siz="lg">Click</sq-button>

<!-- ✅ Good -->
<sq-button variant="primary">Click</sq-button>
<sq-button size="lg">Click</sq-button>
```

## Supported Components

This plugin supports all 90+ Squiddy DS components across these categories:

| Category | Components |
|----------|-----------|
| **Interactive** | sq-button, sq-button-group, sq-split-button, sq-accordion, sq-carousel, sq-clipboard, sq-collapsible, sq-details, sq-dialog, sq-drawer, sq-meter, sq-progress, sq-skeleton, sq-spinner, sq-switch |
| **Form** | sq-input, sq-textarea, sq-select, sq-checkbox, sq-checkbox-group, sq-radio, sq-radio-group, sq-range, sq-label, sq-fieldset, sq-form, sq-input-group, sq-file-upload, sq-color-picker, sq-date-picker, sq-date-range |
| **Layout** | sq-card, sq-container, sq-divider, sq-flex, sq-grid, sq-masonry, sq-stack, sq-theme |
| **Navigation** | sq-breadcrumb, sq-link, sq-menu, sq-menu-item, sq-menu-divider, sq-stepper, sq-tabs |
| **Overlay** | sq-dropdown, sq-tooltip, sq-drawer |
| **Data Display** | sq-avatar, sq-badge, sq-tag, sq-pagination, sq-timeline, sq-timetree, sq-tree |
| **Text** | sq-heading, sq-text, sq-blockquote, sq-caption, sq-code, sq-kbd, sq-mark |
| **Media** | sq-image, sq-audio, sq-video, sq-iframe, sq-album-cover, sq-song-row, sq-equalizer |
| **Feedback** | sq-alert |
| **List** | sq-list, sq-definition-list |
| **Table** | sq-table, sq-td, sq-th |
| **Semantic** | sq-header, sq-footer, sq-nav, sq-main, sq-article, sq-aside, sq-section, sq-hgroup, sq-search |
| **Head** | sq-head-elements |

## Configuration Presets

### `recommended`

The recommended preset enables all rules with sensible defaults:

- `no-unknown-component`: **error**
- `no-invalid-attribute-values`: **error**
- `no-unknown-attributes`: **warn**

### `all`

Enables all rules as errors:

```json
{
  "extends": ["plugin:squiddyds/all"]
}
```

## Lit Template Support

The plugin works with both JSX and Lit `html` template literals:

```ts
// Lit template — supported!
html`
  <sq-button variant="primary">Click</sq-button>
  <sq-butto>Typo detected!</sq-butto>
`;

// JSX — supported!
function App() {
  return (
    <>
      <sq-button variant="primary">Click</sq-button>
      <sq-butto>Typo detected!</sq-butto>
    </>
  );
}
```

## Programmatic API

You can use the component registry programmatically:

```ts
import {
  getComponent,
  getAllTags,
  getComponentsByCategory,
  getCategories,
} from 'eslint-plugin-squiddyds';

// Get all component tags
const tags = getAllTags();
// ['sq-button', 'sq-input', 'sq-card', ...]

// Get a specific component's attributes
const button = getComponent('sq-button');
console.log(button.attributes.variant.values);
// ['primary', 'secondary', 'subtle', 'danger', 'success', 'warning', 'info']

// Get all components in a category
const formComponents = getComponentsByCategory('form');
```

## Contributing

Contributions are welcome! To add a new rule:

1. Create a new file in `src/rules/`
2. Export the rule from `src/index.ts`
3. Add it to the `configs.recommended` object
4. Update this README

## License

MIT
