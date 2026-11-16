import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Section — covers: `<section>`
 *
 * @slot - Section content
 */
@customElement('sq-section')
export class SqSection extends LitElement {
  static override styles = css`
    :host {
      display: block;
      margin: var(--sq-space-6) 0;
    }

    section {
      padding: var(--sq-space-6);
    }

    .heading {
      margin: 0 0 var(--sq-space-4);
      font-size: var(--sq-text-xl);
      font-weight: var(--sq-font-weight-semibold);
      color: var(--sq-fg-default);
    }
  `;

  @property({ type: String }) label = '';

  override render() {
    return html`
      <section>
        ${this.label ? html`<h2 class="heading">${this.label}</h2>` : ''}
        <slot></slot>
      </section>
    `;
  }
}
