import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/** Squiddy Header — covers: `<header>` */
@customElement('sq-header')
export class SqHeader extends LitElement {
  static override styles = css`
    :host { display: block; }
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--sq-space-4);
      padding: var(--sq-space-4) var(--sq-space-6);
      border-bottom: 1px solid var(--sq-border-subtle);
      background: var(--sq-bg-surface);
    }
    .title { font-size: var(--sq-text-xl); font-weight: var(--sq-font-weight-semibold); margin: 0; }
    .subtitle { font-size: var(--sq-text-sm); color: var(--sq-fg-muted); margin: 0; }
  `;
  @property({ type: String }) title = '';
  @property({ type: String }) subtitle = '';
  override render() {
    return html`<header>
      <div><slot name="default">${this.title ? html`<h1 class="title">${this.title}</h1>` : ''}${this.subtitle ? html`<p class="subtitle">${this.subtitle}</p>` : ''}</slot></div>
      <slot name="actions"></slot>
    </header>`;
  }
}
