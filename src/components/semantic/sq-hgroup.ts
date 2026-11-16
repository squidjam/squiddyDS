import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/** Squiddy HGroup — covers: `<hgroup>`, `<h1>` through `<h6>` */
@customElement('sq-hgroup')
export class SqHGroup extends LitElement {
  static override styles = css`
    :host { display: block; }
    hgroup {
      margin: var(--sq-space-4) 0;
    }
    hgroup h1, hgroup h2, hgroup h3, hgroup h4, hgroup h5, hgroup h6 {
      margin: 0 0 var(--sq-space-1);
      font-weight: var(--sq-font-weight-semibold);
      line-height: var(--sq-line-height-tight);
      color: var(--sq-fg-default);
    }
    hgroup h1 { font-size: var(--sq-text-4xl); }
    hgroup h2 { font-size: var(--sq-text-3xl); }
    hgroup h3 { font-size: var(--sq-text-2xl); }
    hgroup h4 { font-size: var(--sq-text-xl); }
    hgroup h5 { font-size: var(--sq-text-lg); }
    hgroup h6 { font-size: var(--sq-text-md); color: var(--sq-fg-muted); }
  `;
  override render() { return html`<hgroup><slot></slot></hgroup>`; }
}
