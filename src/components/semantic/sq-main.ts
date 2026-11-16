import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/** Squiddy Main — covers: `<main>` */
@customElement('sq-main')
export class SqMain extends LitElement {
  static override styles = css`
    :host { display: block; }
    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--sq-space-6);
      min-height: 100vh;
    }
  `;
  override render() { return html`<main><slot></slot></main>`; }
}
