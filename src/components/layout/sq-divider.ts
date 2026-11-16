import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/** Squiddy Divider — covers: `<hr>` */
@customElement('sq-divider')
export class SqDivider extends LitElement {
  static override styles = css`
    :host { display: block; }
    hr {
      border: none;
      height: 1px;
      background: var(--sq-border-subtle);
      margin: var(--sq-space-4) 0;
    }
    :host([inset]) hr { margin: var(--sq-space-4) var(--sq-space-8); }
    :host([orientation="vertical"]) {
      display: inline-block;
      width: 1px;
      height: 1em;
      align-self: stretch;
      margin: 0 var(--sq-space-3);
    }
    :host([orientation="vertical"]) hr {
      width: 1px;
      height: 100%;
      margin: 0;
    }
  `;
  @property({ type: Boolean }) inset = false;
  @property({ type: String }) orientation: 'horizontal' | 'vertical' = 'horizontal';
  override render() { return html`<hr></hr>`; }
}
