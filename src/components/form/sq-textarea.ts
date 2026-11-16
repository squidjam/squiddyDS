import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/** Squiddy Textarea — covers: `<textarea>` */
@customElement('sq-textarea')
export class SqTextarea extends LitElement {
  static override styles = css`
    :host { display: block; }
    .wrapper { display: flex; flex-direction: column; gap: var(--sq-space-2); }
    .label-row {
      display: flex; align-items: center; gap: var(--sq-space-1);
      font-size: var(--sq-text-sm); font-weight: var(--sq-font-weight-medium); color: var(--sq-fg-default);
    }
    .required { color: var(--sq-color-danger); }
    textarea {
      padding: var(--sq-space-3);
      border: 1px solid var(--sq-border-default);
      border-radius: var(--sq-radius-md);
      background: var(--sq-bg-surface);
      font-family: var(--sq-font-family);
      font-size: var(--sq-text-md);
      color: var(--sq-fg-default);
      outline: none;
      resize: vertical;
      transition: var(--sq-transition-color);
      line-height: var(--sq-line-height-normal);
    }
    textarea:focus { border-color: var(--sq-accent-primary); box-shadow: 0 0 0 2px var(--sq-accent-primary-light); }
    textarea:disabled { opacity: 0.5; pointer-events: none; }
    .helper { font-size: var(--sq-text-xs); color: var(--sq-fg-muted); }
    .error-msg { font-size: var(--sq-text-xs); color: var(--sq-color-danger); }
  `;
  @property({ type: String }) id = '';
  @property({ type: String }) label = '';
  @property({ type: String }) value = '';
  @property({ type: String }) placeholder = '';
  @property({ type: Number }) rows = 4;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) required = false;
  @property({ type: String }) helperText = '';
  @property({ type: String }) error = '';
  private _onInput(e: Event) {
    this.value = (e.target as HTMLTextAreaElement).value;
    this.dispatchEvent(new CustomEvent('input', { detail: { value: this.value } }));
  }
  private _onLabelClick() {
    const textarea = this.renderRoot?.querySelector('textarea');
    textarea?.focus();
  }
  override focus() {
    const textarea = this.renderRoot?.querySelector('textarea');
    textarea?.focus();
  }
  override render() {
    return html`
      <div class="wrapper">
        ${this.label ? html`<div class="label-row"><label @click=${this._onLabelClick}>${this.label}</label>${this.required ? html`<span class="required">*</span>` : ''}</div>` : ''}
        <textarea id=${this.id} .value=${this.value} placeholder=${this.placeholder} rows=${this.rows} ?disabled=${this.disabled} ?required=${this.required} @input=${this._onInput}></textarea>
        ${this.error ? html`<span class="error-msg">${this.error}</span>` : ''}
        ${this.helperText && !this.error ? html`<span class="helper">${this.helperText}</span>` : ''}
      </div>
    `;
  }
}
