import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Image — covers: `<img>`, `<picture>`, `<figure>`, `<figcaption>`
 *
 * @slot caption - Figure caption
 */
@customElement('sq-image')
export class SqImage extends LitElement {
  static override styles = css`
    :host { display: block; }
    figure {
      margin: 0;
      padding: 0;
      border-radius: var(--sq-radius-md);
      overflow: hidden;
    }
    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: contain;
    }
    figcaption {
      padding: var(--sq-space-2) var(--sq-space-3);
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-muted);
      text-align: center;
      background: var(--sq-bg-surface);
    }
  `;

  @property({ type: String }) src = '';
  @property({ type: String }) alt = '';
  @property({ type: String }) width = '';
  @property({ type: String }) height = '';
  @property({ type: String }) objectFit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down' = 'contain';
  @property({ type: Boolean }) lazy = true;

  override render() {
    return html`
      <figure>
        <img
          src=${this.src}
          alt=${this.alt}
          loading=${this.lazy ? 'lazy' : 'eager'}
          style="object-fit: ${this.objectFit}; ${this.width ? `width: ${this.width};` : ''} ${this.height ? `height: ${this.height};` : ''}"
        />
        <figcaption><slot name="caption"></slot></figcaption>
      </figure>
    `;
  }
}
