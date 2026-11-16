import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/** Squiddy Footer — covers: `<footer>` */
@customElement('sq-footer')
export class SqFooter extends LitElement {
  static override styles = css`
    :host { display: block; }
    footer {
      padding: var(--sq-space-4) var(--sq-space-6);
      border-top: 1px solid var(--sq-border-subtle);
      font-size: var(--sq-text-sm);
      color: var(--sq-fg-muted);
      background: var(--sq-bg-surface);
    }
  `;
  override render() { return html`<footer><slot></slot></footer>`; }
}
