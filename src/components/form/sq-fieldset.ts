import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/** Squiddy Fieldset — covers: `<fieldset>`, `<legend>` */
@customElement('sq-fieldset')
export class SqFieldset extends LitElement {
  static override styles = css`
    :host { display: block; }
    fieldset {
      border: 1px solid var(--sq-border-subtle);
      border-radius: var(--sq-radius-md);
      padding: var(--sq-space-6);
      padding-top: var(--sq-space-4);
      margin: 0;
    }
    fieldset:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
    legend {
      font-size: var(--sq-text-sm);
      font-weight: var(--sq-font-weight-semibold);
      color: var(--sq-fg-default);
      padding: 0 var(--sq-space-3);
    }
  `;
  @property({ type: String }) legend = '';
  @property({ type: Boolean }) disabled = false;
  override render() {
    return html`
      <fieldset ?disabled=${this.disabled}>
        ${this.legend ? html`<legend>${this.legend}</legend>` : ''}
        <slot></slot>
      </fieldset>
    `;
  }
}
