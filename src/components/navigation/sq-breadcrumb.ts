import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Breadcrumb — covers: `<nav>` (as breadcrumbs)
 *
 * @slot - Breadcrumb items (links)
 */
@customElement('sq-breadcrumb')
export class SqBreadcrumb extends LitElement {
  @property({ type: String }) variant: 'primary' | 'subtle' | 'underline' = 'primary';

  static override styles = css`
    :host { display: block; }
    nav {
      display: flex;
      align-items: center;
      gap: var(--sq-space-1);
      font-size: var(--sq-text-sm);
    }
    nav a {
      display: inline-flex;
      align-items: center;
      gap: var(--sq-space-1);
      color: var(--sq-fg-link);
      text-decoration: none;
      font-weight: var(--sq-font-weight-medium);
      transition: var(--sq-transition-color);
    }
    nav a:hover { color: var(--sq-fg-link-hover); }
    nav a:focus-visible {
      outline: 2px solid var(--sq-border-focus);
      outline-offset: 2px;
      border-radius: 2px;
    }
    nav a[aria-current="page"] {
      color: var(--sq-accent-primary);
      font-weight: var(--sq-font-weight-semibold);
    }
    :host([variant="subtle"]) nav a { color: var(--sq-fg-muted); }
    :host([variant="subtle"]) nav a:hover { color: var(--sq-fg-default); }
    :host([variant="underline"]) nav a { text-decoration: underline; text-underline-offset: 2px; }
    .sep {
      color: var(--sq-accent-primary);
      opacity: 0.4;
      user-select: none;
    }
  `;
  override render() {
    return html`<nav><slot></slot></nav>`;
  }
}
