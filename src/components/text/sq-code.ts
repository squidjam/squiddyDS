import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/** Squiddy Code — covers: `<code>`, `<pre>` */
@customElement('sq-code')
export class SqCode extends LitElement {
  static override styles = css`
    :host { display: inline; }
    :host([block]) { display: block; }
    code {
      font-family: var(--sq-font-mono);
      font-size: var(--sq-text-sm);
      color: var(--sq-fg-link);
      background: var(--sq-bg-elevated);
      border: 1px solid var(--sq-border-subtle);
      border-radius: var(--sq-radius-sm);
      padding: 0.1em 0.3em;
    }
    :host([block]) {
      padding: 0;
    }
    :host([block]) pre {
      margin: 0;
      padding: var(--sq-space-4);
      overflow-x: auto;
      background: var(--sq-bg-elevated);
      border: 1px solid var(--sq-border-subtle);
      border-radius: var(--sq-radius-md);
      font-family: var(--sq-font-mono);
      font-size: var(--sq-text-sm);
      color: var(--sq-fg-link);
      white-space: pre;
    }
    :host([block]) pre code {
      background: none;
      border: none;
      padding: 0;
    }
    .lang-label {
      display: none;
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-muted);
      padding: var(--sq-space-1) var(--sq-space-3);
      background: var(--sq-bg-elevated);
      border: 1px solid var(--sq-border-subtle);
      border-bottom: none;
      border-radius: var(--sq-radius-sm) var(--sq-radius-sm) 0 0;
      font-family: var(--sq-font-mono);
    }
    :host([block][language]) .lang-label { display: block; }
  `;

  @property({ type: String }) language = '';
  @property({ type: Boolean }) block = false;

  override render() {
    if (this.block) {
      return html`
        ${this.language ? html`<div class="lang-label">${this.language}</div>` : ''}
        <pre><code><slot></slot></code></pre>
      `;
    }
    return html`<code><slot></slot></code>`;
  }
}
