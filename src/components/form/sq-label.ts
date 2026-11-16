import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/** Squiddy Label — covers: `<label>`, `<legend>`, `<output>`, `<datalist>` */
@customElement('sq-label')
export class SqLabel extends LitElement {
  static override styles = css`
    :host { display: inline-flex; align-items: center; gap: var(--sq-space-1); }
    label {
      font-size: var(--sq-text-sm);
      font-weight: var(--sq-font-weight-medium);
      color: var(--sq-fg-default);
      cursor: pointer;
    }
    .required { color: var(--sq-color-danger); }
  `;
  @property({ type: String, attribute: 'for' }) forId = '';
  @property({ type: Boolean }) required = false;

  private _onClick() {
    if (!this.forId) return;
    const target = document.getElementById(this.forId);
    if (target) {
      // Try to call focus() on custom elements (which may delegate to shadow DOM)
      if (typeof (target as any).focus === 'function') {
        (target as any).focus();
      } else {
        (target as HTMLElement).focus();
      }
    }
  }

  override render() {
    return html`
      <label ${this.forId ? `for=${this.forId}` : ''} @click=${this._onClick}>
        <slot></slot>
        ${this.required ? html`<span class="required">*</span>` : ''}
      </label>
    `;
  }
}
