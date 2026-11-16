import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Definition List — covers: `<dl>`, `<dt>`, `<dd>`
 *
 * @slot - Definition terms and descriptions
 */
@customElement('sq-definition-list')
export class SqDefinitionList extends LitElement {
  static override styles = css`
    :host { display: block; }
    dl {
      margin: 0;
      font-size: var(--sq-text-sm);
    }
    dt {
      font-weight: var(--sq-font-weight-semibold);
      color: var(--sq-fg-default);
      margin-bottom: var(--sq-space-1);
    }
    dd {
      margin: 0 0 var(--sq-space-3) var(--sq-space-4);
      color: var(--sq-fg-muted);
      line-height: var(--sq-line-height-normal);
    }
    :host([horizontal]) dl {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: var(--sq-space-2) var(--sq-space-4);
    }
    :host([horizontal]) dt { margin-bottom: 0; }
    :host([horizontal]) dd { margin: 0; }
  `;
  @property({ type: Boolean }) horizontal = false;
  override render() { return html`<dl><slot></slot></dl>`; }
}
