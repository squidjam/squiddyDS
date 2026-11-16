import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Stack — vertical or horizontal spacing stack
 *
 * A simple layout container that applies consistent spacing between children.
 */
@customElement('sq-stack')
export class SqStack extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .stack {
      display: flex;
      flex-direction: var(--sq-direction, column);
      gap: var(--sq-gap, var(--sq-space-4));
    }
  `;

  @property({ type: String }) direction = 'column';
  @property({ type: String }) gap = 'var(--sq-space-4)';

  override render() {
    return html`
      <div
        class="stack"
        style="
          --sq-direction: ${this.direction};
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
    'sq-stack': SqStack;
  }
}
