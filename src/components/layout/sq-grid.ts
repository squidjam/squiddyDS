import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Grid — CSS Grid layout container
 *
 * A responsive grid layout with configurable columns, gaps, and alignment.
 */
@customElement('sq-grid')
export class SqGrid extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .grid {
      display: grid;
      grid-template-columns: var(--sq-grid-columns);
      gap: var(--sq-gap);
      align-items: var(--sq-align-items, start);
      justify-items: var(--sq-justify-items, start);
    }
  `;

  @property({ type: String }) columns = 'repeat(3, 1fr)';
  @property({ type: String }) gap = '16px';
  @property({ type: String }) alignItems = 'start';
  @property({ type: String }) justifyItems = 'start';

  override render() {
    return html`
      <div
        class="grid"
        style="
          --sq-grid-columns: ${this.columns};
          --sq-gap: ${this.gap};
          --sq-align-items: ${this.alignItems};
          --sq-justify-items: ${this.justifyItems};
        "
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-grid': SqGrid;
  }
}
