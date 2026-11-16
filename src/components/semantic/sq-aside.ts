import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/** Squiddy Aside — covers: `<aside>` */
@customElement('sq-aside')
export class SqAside extends LitElement {
  static override styles = css`
    :host { display: block; }
    aside {
      padding: var(--sq-space-4);
      border-left: 3px solid var(--sq-accent-primary);
      background: var(--sq-bg-surface);
      border-radius: var(--sq-radius-md);
      font-size: var(--sq-text-sm);
      line-height: var(--sq-line-height-normal);
      color: var(--sq-fg-muted);
    }
  `;
  override render() { return html`<aside><slot></slot></aside>`; }
}
