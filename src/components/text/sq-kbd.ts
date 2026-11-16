import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/** Squiddy Kbd — covers: `<kbd>` */
@customElement('sq-kbd')
export class SqKbd extends LitElement {
  static override styles = css`
    :host { display: inline; }
    kbd {
      display: inline-block;
      padding: 2px 6px;
      font-family: var(--sq-font-mono);
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-default);
      background: var(--sq-bg-elevated);
      border: 1px solid var(--sq-border-default);
      border-radius: var(--sq-radius-sm);
      box-shadow: 0 1px 0 var(--sq-border-subtle);
    }
  `;
  override render() { return html`<kbd><slot></slot></kbd>`; }
}
