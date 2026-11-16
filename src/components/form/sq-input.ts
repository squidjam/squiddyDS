import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Input — covers: `<input>` (text, email, password, tel, url, search, number)
 *
 * @fires input
 * @fires change
 */
@customElement('sq-input')
export class SqInput extends LitElement {
  static override styles = css`
    :host { display: block; }
    .wrapper { display: flex; flex-direction: column; gap: var(--sq-space-2); }
    .label-row {
      display: flex;
      align-items: center;
      gap: var(--sq-space-1);
      font-size: var(--sq-text-sm);
      font-weight: var(--sq-font-weight-medium);
      color: var(--sq-fg-default);
    }
    .required { color: var(--sq-color-danger); }
    .input-row {
      display: flex;
      align-items: center;
      gap: var(--sq-space-2);
      height: 40px;
      border: 1px solid var(--sq-border-default);
      border-radius: var(--sq-radius-md);
      background: var(--sq-bg-surface);
      padding: 0 var(--sq-space-3);
      transition: var(--sq-transition-color);
    }
    .input-row:focus-within {
      border-color: var(--sq-accent-primary);
      box-shadow: 0 0 0 2px var(--sq-accent-primary-light);
    }
    .input-row.error { border-color: var(--sq-color-danger); }
    .input-row:has(input:disabled) {
      opacity: 0.5;
      pointer-events: none;
    }
    input {
      flex: 1;
      border: none;
      background: transparent;
      padding: 0;
      height: 100%;
      font-family: var(--sq-font-family);
      font-size: var(--sq-text-md);
      color: var(--sq-fg-default);
      outline: none;
    }
    input::placeholder { color: var(--sq-fg-muted); opacity: 0.6; }
    .icon { color: var(--sq-fg-muted); flex-shrink: 0; }
    .helper { font-size: var(--sq-text-xs); color: var(--sq-fg-muted); }
    .error-msg { font-size: var(--sq-text-xs); color: var(--sq-color-danger); }
  `;

  @property({ type: String }) id = '';
  @property({ type: String }) label = '';
  @property({ type: String }) type = 'text';
  @property({ type: String }) placeholder = '';
  @property({ type: String }) value = '';
  @property({ type: String }) helperText = '';
  @property({ type: String }) error = '';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) required = false;
  @property({ type: String }) leadingIcon = '';
  @property({ type: String }) trailingIcon = '';

  private _onInput(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    this.dispatchEvent(new CustomEvent('input', { detail: { value: this.value } }));
  }

  private _onLabelClick() {
    const input = this.renderRoot?.querySelector('input');
    input?.focus();
  }

  override focus() {
    const input = this.renderRoot?.querySelector('input');
    input?.focus();
  }

  override render() {
    return html`
      <div class="wrapper">
        ${this.label ? html`
          <div class="label-row">
            <label @click=${this._onLabelClick}>${this.label}</label>
            ${this.required ? html`<span class="required">*</span>` : ''}
          </div>
        ` : ''}
        <div class="input-row ${this.error ? 'error' : ''}">
          ${this.leadingIcon ? html`<span class="icon">${this.leadingIcon}</span>` : ''}
          <input
            id=${this.id}
            type=${this.type}
            .value=${this.value}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @input=${this._onInput}
          />
          ${this.trailingIcon ? html`<span class="icon">${this.trailingIcon}</span>` : ''}
        </div>
        ${this.error ? html`<span class="error-msg">${this.error}</span>` : ''}
        ${this.helperText && !this.error ? html`<span class="helper">${this.helperText}</span>` : ''}
      </div>
    `;
  }
}
