import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * Squiddy Head Elements — Documentation for head-only HTML elements
 *
 * Covers: `<html>`, `<head>`, `<title>`, `<base>`, `<meta>`, `<link>`,
 *         `<script>`, `<style>`, `<noscript>`, `<slot>`, `<template>`,
 *         `<fencedframe>`, `<portal>`, `<map>`, `<area>`, `<data>`,
 *         `<time>`, `<del>`, `<ins>`, `<sub>`, `<sup>`, `<track>`,
 *         `<body>`, `<br>`, `<wbr>`, `<svg>`, `<math>`, `<canvas>`
 *
 * These elements are managed by the browser and don't need web component
 * wrappers. This component documents their usage in the Squiddy design system.
 */
@customElement('sq-head-elements')
export class SqHeadElements extends LitElement {
  static override styles = css`
    :host { display: block; }
    .doc-card {
      padding: var(--sq-space-6);
      border: 1px solid var(--sq-border-subtle);
      border-radius: var(--sq-radius-lg);
      background: var(--sq-bg-surface);
      font-size: var(--sq-text-sm);
      line-height: var(--sq-line-height-relaxed);
      color: var(--sq-fg-default);
    }
    h2 {
      margin: 0 0 var(--sq-space-3);
      font-size: var(--sq-text-xl);
      font-weight: var(--sq-font-weight-semibold);
    }
    p { margin: 0 0 var(--sq-space-3); color: var(--sq-fg-muted); }
    .categories { display: grid; gap: var(--sq-space-4); }
    .category h3 {
      margin: 0 0 var(--sq-space-2);
      font-size: var(--sq-text-sm);
      font-weight: var(--sq-font-weight-semibold);
      color: var(--sq-fg-link);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .elements {
      display: flex;
      flex-wrap: wrap;
      gap: var(--sq-space-1);
    }
    .element {
      display: inline-block;
      padding: 2px 8px;
      font-family: var(--sq-font-mono);
      font-size: var(--sq-text-xs);
      background: var(--sq-bg-elevated);
      border: 1px solid var(--sq-border-subtle);
      border-radius: var(--sq-radius-sm);
      color: var(--sq-fg-muted);
    }
  `;

  override render() {
    return html`
      <div class="doc-card">
        <h2>Head & Native HTML Elements</h2>
        <p>
          The following HTML elements are managed natively by the browser and don't require
          web component wrappers. Use them directly in your HTML documents. The Squiddy design
          system provides global styles for these elements via the design tokens.
        </p>
        <div class="categories">
          <div class="category">
            <h3>Document Structure</h3>
            <div class="elements">
              <span class="element">&lt;html&gt;</span>
              <span class="element">&lt;head&gt;</span>
              <span class="element">&lt;body&gt;</span>
              <span class="element">&lt;title&gt;</span>
              <span class="element">&lt;base&gt;</span>
            </div>
          </div>
          <div class="category">
            <h3>Metadata & Resources</h3>
            <div class="elements">
              <span class="element">&lt;meta&gt;</span>
              <span class="element">&lt;link&gt;</span>
              <span class="element">&lt;script&gt;</span>
              <span class="element">&lt;style&gt;</span>
              <span class="element">&lt;noscript&gt;</span>
              <span class="element">&lt;template&gt;</span>
              <span class="element">&lt;slot&gt;</span>
            </div>
          </div>
          <div class="category">
            <h3>Text Formatting</h3>
            <div class="elements">
              <span class="element">&lt;sub&gt;</span>
              <span class="element">&lt;sup&gt;</span>
              <span class="element">&lt;del&gt;</span>
              <span class="element">&lt;ins&gt;</span>
              <span class="element">&lt;br&gt;</span>
              <span class="element">&lt;wbr&gt;</span>
            </div>
          </div>
          <div class="category">
            <h3>Data & Time</h3>
            <div class="elements">
              <span class="element">&lt;data&gt;</span>
              <span class="element">&lt;time&gt;</span>
            </div>
          </div>
          <div class="category">
            <h3>Graphics & Media</h3>
            <div class="elements">
              <span class="element">&lt;svg&gt;</span>
              <span class="element">&lt;math&gt;</span>
              <span class="element">&lt;canvas&gt;</span>
              <span class="element">&lt;track&gt;</span>
              <span class="element">&lt;map&gt;</span>
              <span class="element">&lt;area&gt;</span>
            </div>
          </div>
          <div class="category">
            <h3>Experimental</h3>
            <div class="elements">
              <span class="element">&lt;fencedframe&gt;</span>
              <span class="element">&lt;portal&gt;</span>
            </div>
          </div>
        </div>
        <slot></slot>
      </div>
    `;
  }
}
