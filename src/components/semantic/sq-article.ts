import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * Squiddy Article — covers: `<article>`
 *
 * @slot header - Article header
 * @slot - Article body
 * @slot footer - Article footer
 * @slot metadata - Article metadata
 */
@customElement('sq-article')
export class SqArticle extends LitElement {
  static override styles = css`
    :host {
      display: block;
      margin: var(--sq-space-4) 0;
    }

    article {
      padding: var(--sq-space-6);
      border: 1px solid var(--sq-border-subtle);
      border-radius: var(--sq-radius-lg);
      background: var(--sq-bg-surface);
    }

    .header {
      margin-bottom: var(--sq-space-4);
      padding-bottom: var(--sq-space-4);
      border-bottom: 1px solid var(--sq-border-subtle);
    }

    .body {
      font-size: var(--sq-text-md);
      line-height: var(--sq-line-height-relaxed);
      color: var(--sq-fg-default);
    }

    .footer {
      margin-top: var(--sq-space-4);
      padding-top: var(--sq-space-4);
      border-top: 1px solid var(--sq-border-subtle);
    }

    .metadata {
      display: flex;
      gap: var(--sq-space-4);
      margin-top: var(--sq-space-3);
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-muted);
    }
  `;

  override render() {
    return html`
      <article>
        <div class="header"><slot name="header"></slot></div>
        <div class="body"><slot></slot></div>
        <div class="footer"><slot name="footer"></slot></div>
        <div class="metadata"><slot name="metadata"></slot></div>
      </article>
    `;
  }
}
