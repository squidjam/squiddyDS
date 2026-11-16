import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Text — covers: `<p>`, `<small>`, `<b>`, `<i>`, `<s>`, `<u>`, `<abbr>`, `<bdi>`, `<bdo>`, `<cite>`, `<dfn>`, `<em>`, `<q>`, `<rp>`, `<rt>`, `<ruby>`, `<samp>`, `<strong>`, `<var>`, `<wbr>`
 */
@customElement('sq-text')
export class SqText extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: var(--sq-font-family);
      color: var(--sq-fg-default);
    }
    :host([variant="lead"]) { font-size: var(--sq-text-lg); line-height: var(--sq-line-height-relaxed); color: var(--sq-fg-muted); }
    :host([variant="small"]) { font-size: var(--sq-text-sm); }
    :host([variant="caption"]) { font-size: var(--sq-text-xs); color: var(--sq-fg-muted); }
    :host([weight="medium"]) { font-weight: var(--sq-font-weight-medium); }
    :host([weight="semibold"]) { font-weight: var(--sq-font-weight-semibold); }
    :host([weight="bold"]) { font-weight: var(--sq-font-weight-bold); }
    :host([align="center"]) { text-align: center; }
    :host([align="right"]) { text-align: right; }
    :host([truncate]) p {
      overflow: hidden;
      text-overflow: clip;
      white-space: nowrap;
      margin: 0;
    }
    :host([ellipsis]) p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0;
    }
  `;

  @property({ type: String }) variant: 'body' | 'lead' | 'small' | 'caption' = 'body';
  @property({ type: String }) weight: 'normal' | 'medium' | 'semibold' | 'bold' = 'normal';
  @property({ type: String }) align: 'left' | 'center' | 'right' = 'left';
  @property({ type: Boolean }) truncate = false;
  @property({ type: Boolean }) ellipsis = false;

  override render() {
    return html`<p part="text"><slot></slot></p>`;
  }
}
