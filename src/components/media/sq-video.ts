import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/** Squiddy Video — covers: `<video>`, `<source>`, `<track>` */
@customElement('sq-video')
export class SqVideo extends LitElement {
  static override styles = css`
    :host { display: block; }
    video {
      display: block;
      width: 100%;
      max-height: 70vh;
      background: #000;
      border-radius: var(--sq-radius-md);
    }
  `;
  @property({ type: String }) src = '';
  @property({ type: String }) poster = '';
  @property({ type: Boolean }) controls = true;
  @property({ type: Boolean }) autoplay = false;
  @property({ type: Boolean }) loop = false;
  @property({ type: Boolean }) muted = false;
  @property({ type: Boolean }) playsInline = true;
  override render() {
    return html`<video
      src=${this.src}
      poster=${this.poster}
      ?controls=${this.controls}
      ?autoplay=${this.autoplay}
      ?loop=${this.loop}
      ?muted=${this.muted}
      ?playsInline=${this.playsInline}
    ><slot></slot></video>`;
  }
}
