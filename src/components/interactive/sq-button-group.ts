import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Button Group — grouped buttons
 *
 * Groups buttons together with shared borders and alignment.
 * Supports horizontal and vertical orientations.
 *
 * @slot - Button elements
 */
@customElement('sq-button-group')
export class SqButtonGroup extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
    }

    .group {
      display: inline-flex;
      flex-direction: var(--sq-direction, row);
      gap: 0;
    }

    .group ::slotted(sq-button) {
      border-radius: 0;
    }

    .group ::slotted(sq-button) button {
      border-radius: 0;
      border-right-width: 1px;
      border-right-color: var(--sq-border-subtle);
    }

    .group ::slotted(sq-button:first-child) {
      border-top-left-radius: var(--sq-radius-full);
      border-bottom-left-radius: var(--sq-radius-full);
    }

    .group ::slotted(sq-button:first-child) button {
      border-top-left-radius: var(--sq-radius-full);
      border-bottom-left-radius: var(--sq-radius-full);
    }

    .group ::slotted(sq-button:last-child) {
      border-top-right-radius: var(--sq-radius-full);
      border-bottom-right-radius: var(--sq-radius-full);
    }

    .group ::slotted(sq-button:last-child) button {
      border-top-right-radius: var(--sq-radius-full);
      border-bottom-right-radius: var(--sq-radius-full);
      border-right-width: 2px;
    }

    :host([orientation="vertical"]) .group {
      flex-direction: column;
    }

    :host([orientation="vertical"]) .group ::slotted(sq-button) {
      border-radius: 0;
    }

    :host([orientation="vertical"]) .group ::slotted(sq-button) button {
      border-radius: 0;
      border-right-width: 2px;
      border-bottom-width: 1px;
      border-bottom-color: var(--sq-border-subtle);
    }

    :host([orientation="vertical"]) .group ::slotted(sq-button:first-child) {
      border-top-left-radius: var(--sq-radius-full);
      border-top-right-radius: var(--sq-radius-full);
    }

    :host([orientation="vertical"]) .group ::slotted(sq-button:first-child) button {
      border-top-left-radius: var(--sq-radius-full);
      border-top-right-radius: var(--sq-radius-full);
    }

    :host([orientation="vertical"]) .group ::slotted(sq-button:last-child) {
      border-bottom-left-radius: var(--sq-radius-full);
      border-bottom-right-radius: var(--sq-radius-full);
    }

    :host([orientation="vertical"]) .group ::slotted(sq-button:last-child) button {
      border-bottom-left-radius: var(--sq-radius-full);
      border-bottom-right-radius: var(--sq-radius-full);
      border-bottom-width: 2px;
    }
  `;

  @property({ type: String }) orientation: 'horizontal' | 'vertical' = 'horizontal';

  override render() {
    return html`
      <div class="group" style="--sq-direction: ${this.orientation === 'vertical' ? 'column' : 'row'};">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-button-group': SqButtonGroup;
  }
}
