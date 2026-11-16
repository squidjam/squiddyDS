# Squiddy Design System

A comprehensive web component design system built with **Lit.js**, **Vanilla JS**, **Modern CSS3**, and documented with **Storybook 10**.

## Covered HTML Elements

This design system provides web component wrappers and styled variants for **150+ HTML elements**:

### Interactive Components
| Component | Covers |
|---|---|
| `sq-button` | `<button>` |
| `sq-dialog` | `<dialog>` |
| `sq-details` | `<details>`, `<summary>` |
| `sq-progress` | `<progress>` |
| `sq-meter` | `<meter>` |
| `sq-switch` | `<input type="checkbox">` (toggle) |

### Semantic Components
| Component | Covers |
|---|---|
| `sq-article` | `<article>` |
| `sq-section` | `<section>` |
| `sq-nav` | `<nav>` |
| `sq-header` | `<header>` |
| `sq-footer` | `<footer>` |
| `sq-aside` | `<aside>` |
| `sq-main` | `<main>` |
| `sq-search` | `<search>` |
| `sq-hgroup` | `<hgroup>`, `<h1>`–`<h6>` |

### Text Components
| Component | Covers |
|---|---|
| `sq-text` | `<p>`, `<small>`, `<b>`, `<i>`, `<s>`, `<u>`, `<abbr>`, `<bdi>`, `<bdo>`, `<cite>`, `<dfn>`, `<em>`, `<q>`, `<rp>`, `<rt>`, `<ruby>`, `<samp>`, `<strong>`, `<var>`, `<wbr>` |
| `sq-code` | `<code>`, `<pre>` |
| `sq-mark` | `<mark>` |
| `sq-kbd` | `<kbd>` |
| `sq-blockquote` | `<blockquote>`, `<address>`, `<cite>` |

### Media Components
| Component | Covers |
|---|---|
| `sq-image` | `<img>`, `<picture>`, `<figure>`, `<figcaption>` |
| `sq-audio` | `<audio>`, `<source>` |
| `sq-video` | `<video>`, `<source>`, `<track>` |
| `sq-iframe` | `<iframe>`, `<embed>`, `<object>`, `<param>` |

### Layout Components
| Component | Covers |
|---|---|
| `sq-card` | `<div>` (as card), `<canvas>` |
| `sq-divider` | `<hr>` |
| `sq-container` | `<div>` (as container) |

### Form Components
| Component | Covers |
|---|---|
| `sq-input` | `<input>` (text, email, password, tel, url, search, number) |
| `sq-select` | `<select>`, `<option>`, `<optgroup>` |
| `sq-textarea` | `<textarea>` |
| `sq-checkbox` | `<input type="checkbox">` |
| `sq-radio` | `<input type="radio">` |
| `sq-label` | `<label>`, `<legend>`, `<output>`, `<datalist>` |
| `sq-fieldset` | `<fieldset>`, `<legend>` |
| `sq-range` | `<input type="range">` |

### Table & List Components
| Component | Covers |
|---|---|
| `sq-table` | `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>`, `<caption>`, `<col>`, `<colgroup>` |
| `sq-list` | `<ul>`, `<ol>`, `<menu>`, `<li>` |
| `sq-definition-list` | `<dl>`, `<dt>`, `<dd>` |

### Navigation Components
| Component | Covers |
|---|---|
| `sq-link` | `<a>` |
| `sq-breadcrumb` | `<nav>` (as breadcrumbs) |

### Head & Native Elements (Documentation)
| Component | Covers |
|---|---|
| `sq-head-elements` | `<html>`, `<head>`, `<title>`, `<base>`, `<meta>`, `<link>`, `<script>`, `<style>`, `<noscript>`, `<slot>`, `<template>`, `<fencedframe>`, `<portal>`, `<map>`, `<area>`, `<data>`, `<time>`, `<del>`, `<ins>`, `<sub>`, `<sup>`, `<track>`, `<body>`, `<br>`, `<wbr>`, `<svg>`, `<math>` |

## Getting Started

### Installation

```bash
npm install squiddyds
```

### Usage

```html
<!-- Import the design system -->
<script type="module" src="squiddyds/dist/squiddy-ds.js"></script>

<!-- Use components -->
<sq-button variant="primary">Click me</sq-button>
<sq-input label="Name" placeholder="Enter your name"></sq-input>
<sq-card variant="elevated">
  <span slot="header">Card Title</span>
  Card body content
</sq-card>
```

### Theme Switching

```html
<!-- Light theme (default) -->
<html>
  <body>...</body>
</html>

<!-- Dark theme -->
<html sq-mode="dark">
  <body>...</body>
</html>
```

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build the library
npm run build

# Build Storybook for production
npm run build-storybook
```

## Design Tokens

All components use CSS custom properties prefixed with `--sq-`:

- **Colors**: `--sq-bg-default`, `--sq-fg-default`, `--sq-accent-primary`, etc.
- **Typography**: `--sq-text-xs` through `--sq-text-4xl`, `--sq-font-family`
- **Spacing**: `--sq-space-1` through `--sq-space-16`
- **Radius**: `--sq-radius-sm`, `--sq-radius-md`, `--sq-radius-lg`, `--sq-radius-full`
- **Shadows**: `--sq-shadow-sm`, `--sq-shadow-md`, `--sq-shadow-lg`
- **Motion**: `--sq-motion-fast`, `--sq-motion-base`, `--sq-motion-slow`

## Architecture

- **Lit.js** — Lightweight web component framework
- **CSS Custom Properties** — Themeable design tokens
- **Web Components** — Framework-agnostic, works anywhere
- **Storybook 10** — Interactive documentation and testing
- **TypeScript** — Type-safe component APIs

## License

MIT
