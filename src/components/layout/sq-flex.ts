import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Flex — Flexbox layout container
 *
 * A flexible layout container with configurable direction, wrapping, alignment, and gap.
 */
@customElement('sq-flex')
export class SqFlex extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .flex {
      display: flex;
      flex-direction: var(--sq-direction, row);
      flex-wrap: var(--sq-wrap, nowrap);
      gap: var(--sq-gap, 16px);
      align-items: var(--sq-align-items, stretch);
      justify-content: var(--sq-justify-content, flex-start);
    }
  `;

  @property({ type: String }) direction = 'row';
  @property({ type: String }) wrap = 'nowrap';
  @property({ type: String }) gap = '16px';
  @property({ type: String }) alignItems = 'stretch';
  @property({ type: String }) justifyContent = 'flex-start';

  override render() {
    return html`
      <div
        class="flex"
        style="
          --sq-direction: ${this.direction};
          --sq-wrap: ${this.wrap};
          --sq-gap: ${this.gap};
          --sq-align-items: ${this.alignItems};
          --sq-justify-content: ${this.justifyContent};
        "
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-flex': SqFlex;
  }
}
