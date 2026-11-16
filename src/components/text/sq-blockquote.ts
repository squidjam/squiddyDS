import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/** Squiddy Blockquote — covers: `<blockquote>`, `<address>`, `<cite>` */
@customElement('sq-blockquote')
export class SqBlockquote extends LitElement {
  static override styles = css`
    :host { display: block; }
    blockquote {
      margin: var(--sq-space-4) 0;
      padding: var(--sq-space-4) var(--sq-space-6);
      border-left: 4px solid var(--sq-accent-primary);
      background: var(--sq-bg-surface);
      border-radius: var(--sq-radius-md);
      font-style: italic;
      color: var(--sq-fg-muted);
    }
    .citation {
      margin-top: var(--sq-space-2);
      font-size: var(--sq-text-sm);
      font-style: normal;
      color: var(--sq-fg-muted);
    }
    .citation::before { content: '— '; }
  `;
  @property({ type: String }) cite = '';
  override render() {
    return html`
      <blockquote>
        <slot></slot>
        ${this.cite ? html`<cite class="citation">${this.cite}</cite>` : html`<slot name="citation"></slot>`}
      </blockquote>
    `;
  }
}
