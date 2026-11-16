import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Masonry — masonry layout container
 *
 * A responsive masonry layout using CSS columns with configurable column count and gap.
 */
@customElement('sq-masonry')
export class SqMasonry extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .masonry {
      column-count: var(--sq-columns, 3);
      column-gap: var(--sq-gap, 16px);
    }

    ::slotted(*) {
      break-inside: avoid;
      margin-bottom: var(--sq-gap, 16px);
    }

    ::slotted(*:last-child) {
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      .masonry {
        column-count: var(--sq-columns-sm, 2);
      }
    }

    @media (max-width: 480px) {
      .masonry {
        column-count: var(--sq-columns-xs, 1);
      }
    }
  `;

  @property({ type: String }) columns = '3';
  @property({ type: String }) columnsSm = '2';
  @property({ type: String }) columnsXs = '1';
  @property({ type: String }) gap = '16px';

  override render() {
    return html`
      <div
        class="masonry"
        style="
          --sq-columns: ${this.columns};
          --sq-columns-sm: ${this.columnsSm};
          --sq-columns-xs: ${this.columnsXs};
          --sq-gap: ${this.gap};
        "
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-masonry': SqMasonry;
  }
}
