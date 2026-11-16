import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Details — covers: `<details>`, `<summary>`
 *
 * @slot summary - Summary/title content
 * @slot - Expandable content
 */
@customElement('sq-details')
export class SqDetails extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    details {
      border: 1px solid var(--sq-border-subtle);
      border-radius: var(--sq-radius-md);
      background: var(--sq-bg-surface);
      overflow: hidden;
      transition: var(--sq-transition-color);
    }

    details[open] {
      border-color: var(--sq-border-default);
    }

    summary {
      display: flex;
      align-items: center;
      gap: var(--sq-space-2);
      padding: var(--sq-space-3) var(--sq-space-4);
      cursor: pointer;
      list-style: none;
      font-weight: var(--sq-font-weight-medium);
      font-size: var(--sq-text-sm);
      color: var(--sq-fg-default);
      transition: var(--sq-transition-color);
      user-select: none;
    }

    summary:hover {
      background: var(--sq-accent-primary-light);
    }

    summary::-webkit-details-marker {
      display: none;
    }

    summary::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      border-right: 2px solid var(--sq-fg-muted);
      border-bottom: 2px solid var(--sq-fg-muted);
      transform: rotate(-45deg);
      transition: transform var(--sq-motion-base);
      flex-shrink: 0;
    }

    details[open] summary::before {
      transform: rotate(45deg);
    }

    .content {
      padding: var(--sq-space-3) var(--sq-space-4) var(--sq-space-4);
      font-size: var(--sq-text-sm);
      line-height: var(--sq-line-height-normal);
      color: var(--sq-fg-muted);
    }
  `;

  @property({ type: Boolean, reflect: true }) open = false;

  override render() {
    return html`
      <details ?open=${this.open}>
        <summary><slot name="summary"></slot></summary>
        <div class="content"><slot></slot></div>
      </details>
    `;
  }
}
