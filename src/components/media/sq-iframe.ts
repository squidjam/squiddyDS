import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/** Squiddy Iframe — covers: `<iframe>`, `<embed>`, `<object>`, `<param>` */
@customElement('sq-iframe')
export class SqIframe extends LitElement {
  static override styles = css`
    :host { display: block; }
    .wrapper {
      position: relative;
      width: 100%;
      padding-bottom: 56.25%;
      border-radius: var(--sq-radius-md);
      overflow: hidden;
      background: var(--sq-bg-elevated);
    }
    iframe {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  `;
  @property({ type: String }) src = '';
  @property({ type: String }) title = '';
  @property({ type: String }) aspectRatio = '16/9';
  @property({ type: String }) sandbox = '';
  override render() {
    const [w, h] = this.aspectRatio.split('/').map(Number);
    const pb = h && w ? (h / w) * 100 : 56.25;
    return html`
      <div class="wrapper" style="padding-bottom: ${pb}%">
        <iframe src=${this.src} title=${this.title} sandbox=${this.sandbox}></iframe>
      </div>
    `;
  }
}
