import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * Squiddy Menu Divider — horizontal separator between menu sections
 *
 * @cssprop --sq-border-subtle - Divider border color
 */
@customElement('sq-menu-divider')
export class SqMenuDivider extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: var(--sq-space-1) var(--sq-space-2);
    }

    hr {
      border: none;
      border-top: 1px solid var(--sq-border-subtle);
      margin: 0;
    }
  `;

  override render() {
    return html`<hr role="separator" />`;
  }
}
