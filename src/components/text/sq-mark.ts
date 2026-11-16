import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/** Squiddy Mark — covers: `<mark>` */
@customElement('sq-mark')
export class SqMark extends LitElement {
  static override styles = css`
    :host { display: inline; }
    mark {
      padding: 1px 4px;
      border-radius: var(--sq-radius-sm);
      font-weight: var(--sq-font-weight-medium);
    }
    :host([color="default"]) mark { background: var(--sq-color-warning-light); color: var(--sq-fg-default); }
    :host([color="success"]) mark { background: var(--sq-color-success-light); color: var(--sq-color-success); }
    :host([color="warning"]) mark { background: var(--sq-color-warning-light); color: var(--sq-color-warning); }
    :host([color="danger"]) mark { background: var(--sq-color-danger-light); color: var(--sq-color-danger); }
    :host([color="info"]) mark { background: var(--sq-color-info-light); color: var(--sq-color-info); }
  `;
  @property({ type: String }) color: 'default' | 'success' | 'warning' | 'danger' | 'info' = 'default';
  override render() { return html`<mark><slot></slot></mark>`; }
}
