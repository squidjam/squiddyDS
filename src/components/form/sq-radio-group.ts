import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export interface RadioGroupOption {
  label: string;
  value: string;
  disabled?: boolean;
}

/**
 * Squiddy Radio Group — grouped radio buttons
 *
 * A group of radio buttons that manages single selection state.
 * Supports programmatic options or slot-based rendering.
 *
 * @fires change - Fired when selection changes
 */
@customElement('sq-radio-group')
export class SqRadioGroup extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      gap: var(--sq-space-2);
    }

    .label-row {
      display: flex;
      align-items: center;
      gap: var(--sq-space-1);
      font-size: var(--sq-text-sm);
      font-weight: var(--sq-font-weight-medium);
      color: var(--sq-fg-default);
      margin-bottom: var(--sq-space-2);
    }

    .required {
      color: var(--sq-color-danger);
    }

    .radio-item {
      display: inline-flex;
      align-items: center;
      gap: var(--sq-space-2);
      cursor: pointer;
      padding: var(--sq-space-2) 0;
    }

    :host([disabled]) .radio-item {
      opacity: 0.4;
      pointer-events: none;
    }

    .radio-item.disabled {
      opacity: 0.4;
      pointer-events: none;
    }

    input[type="radio"] {
      display: none;
    }

    .radiomark {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      border: 2px solid var(--sq-border-default);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: var(--sq-transition-color);
      background: var(--sq-bg-surface);
    }

    .radiomark[checked] {
      border-color: var(--sq-accent-primary);
    }

    .radiomark[checked]::after {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--sq-accent-primary);
    }

    .radio-item:focus-visible .radiomark {
      outline: 2px solid var(--sq-border-focus);
      outline-offset: 2px;
    }

    .radio-item:hover .radiomark {
      border-color: var(--sq-accent-primary);
    }

    .radio-label {
      font-size: var(--sq-text-sm);
      color: var(--sq-fg-default);
      user-select: none;
      line-height: var(--sq-line-height-normal);
    }

    .error-msg {
      font-size: var(--sq-text-xs);
      color: var(--sq-color-danger);
      margin-top: var(--sq-space-1);
    }

    .helper {
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-muted);
      margin-top: var(--sq-space-1);
    }
  `;

  @property({ type: String }) name = '';
  @property({ type: String }) label = '';
  @property({ type: String }) value = '';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) required = false;
  @property({ type: String }) error = '';
  @property({ type: String }) helperText = '';
  @property({ type: Array }) options: RadioGroupOption[] = [];

  @state() private _internalValue = '';

  private get _displayValue() {
    return this.value || this._internalValue;
  }

  private _onSelect(optionValue: string) {
    this._internalValue = optionValue;
    this.value = optionValue;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: optionValue },
      bubbles: true,
      composed: true,
    }));
  }

  override render() {
    return html`
      <div class="wrapper">
        ${this.label ? html`
          <div class="label-row">
            <label>${this.label}</label>
            ${this.required ? html`<span class="required">*</span>` : ''}
          </div>
        ` : ''}
        <div role="radiogroup" aria-label=${this.label || undefined} ?aria-required=${this.required}>
          <slot>
            ${this.options.map(option => html`
              <label class="radio-item ${option.disabled ? 'disabled' : ''}" tabindex="0">
                <input
                  type="radio"
                  name=${this.name || this.label}
                  value=${option.value}
                  ?checked=${this._displayValue === option.value}
                  ?disabled=${option.disabled || this.disabled}
                  @change=${() => this._onSelect(option.value)}
                  role="radio"
                  aria-checked=${this._displayValue === option.value}
                />
                <span class="radiomark" ?checked=${this._displayValue === option.value}></span>
                <span class="radio-label">${option.label}</span>
              </label>
            `)}
          </slot>
        </div>
        ${this.error ? html`<span class="error-msg">${this.error}</span>` : ''}
        ${this.helperText && !this.error ? html`<span class="helper">${this.helperText}</span>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-radio-group': SqRadioGroup;
  }
}
