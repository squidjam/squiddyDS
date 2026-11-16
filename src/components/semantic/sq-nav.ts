import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Nav — covers: `<nav>`
 *
 * @slot - Navigation content
 */
@customElement('sq-nav')
export class SqNav extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    nav {
      display: flex;
      gap: var(--sq-space-2);
      padding: var(--sq-space-3) var(--sq-space-4);
      border: 1px solid var(--sq-border-subtle);
      border-radius: var(--sq-radius-md);
      background: var(--sq-bg-surface);
    }

    nav[orientation="vertical"] {
      flex-direction: column;
    }

    ::slotted(a) {
      display: inline-flex;
      align-items: center;
      gap: var(--sq-space-2);
      padding: var(--sq-space-2) var(--sq-space-3);
      border-radius: var(--sq-radius-sm);
      color: var(--sq-fg-link);
      text-decoration: none;
      font-size: var(--sq-text-sm);
      font-weight: var(--sq-font-weight-medium);
      transition: var(--sq-transition-color);
    }

    ::slotted(a:hover) {
      color: var(--sq-fg-link-hover);
    }

    ::slotted(a:focus-visible) {
      outline: 2px solid var(--sq-border-focus);
      outline-offset: 2px;
    }

    ::slotted(a[aria-current="page"]) {
      color: var(--sq-accent-primary);
      font-weight: var(--sq-font-weight-semibold);
    }

    /* Subtle variant */
    :host([variant="subtle"]) ::slotted(a) {
      color: var(--sq-fg-muted);
    }

    :host([variant="subtle"]) ::slotted(a:hover) {
      color: var(--sq-fg-default);
    }

    :host([variant="subtle"]) ::slotted(a[aria-current="page"]) {
      color: var(--sq-fg-default);
    }

    /* Underline variant */
    :host([variant="underline"]) ::slotted(a) {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  `;

  @property({ type: String }) orientation: 'horizontal' | 'vertical' = 'horizontal';
  @property({ type: String, reflect: true }) variant: 'primary' | 'subtle' | 'underline' = 'primary';

  override render() {
    return html`
      <nav orientation=${this.orientation}>
        <slot></slot>
      </nav>
    `;
  }
}
