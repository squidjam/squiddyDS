import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/** Squiddy Search — covers: `<search>` */
@customElement('sq-search')
export class SqSearch extends LitElement {
  static override styles = css`
    :host { display: block; }
    search {
      padding: var(--sq-space-4);
      border: 1px solid var(--sq-border-subtle);
      border-radius: var(--sq-radius-md);
      background: var(--sq-bg-surface);
    }
  `;
  override render() { return html`<search><slot></slot></search>`; }
}
