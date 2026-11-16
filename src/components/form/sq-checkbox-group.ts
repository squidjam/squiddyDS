import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export interface CheckboxGroupOption {
  label: string;
  value: string;
  disabled?: boolean;
}

/**
 * Squiddy Checkbox Group — grouped checkboxes
 *
 * A group of checkboxes that manages multiple selection state.
 * Supports programmatic options or slot-based rendering.
 *
 * @fires change - Fired when selection changes
 */
@customElement('sq-checkbox-group')
export class SqCheckboxGroup extends LitElement {
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

    .checkbox-item {
      display: flex;
      align-items: center;
      gap: var(--sq-space-2);
      cursor: pointer;
      padding: var(--sq-space-2) 0;
    }

    :host([disabled]) .checkbox-item {
      opacity: 0.4;
      pointer-events: none;
    }

    .checkbox-item.disabled {
      opacity: 0.4;
      pointer-events: none;
    }

    input[type="checkbox"] {
      display: none;
    }

    .checkmark {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      border: 2px solid var(--sq-border-default);
      border-radius: var(--sq-radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: var(--sq-transition-color);
      background: var(--sq-bg-surface);
    }

    input:checked + .checkmark {
      background: var(--sq-accent-primary);
      border-color: var(--sq-accent-primary);
    }

    input:checked + .checkmark::after {
      content: '✓';
      color: var(--sq-fg-inverse);
      font-size: 12px;
      font-weight: bold;
    }

    input:focus-visible + .checkmark {
      outline: 2px solid var(--sq-border-focus);
      outline-offset: 2px;
    }

    .checkbox-item:hover .checkmark {
      border-color: var(--sq-accent-primary);
    }

    .checkbox-label {
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
  @property({ type: Array }) values: string[] = [];
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) required = false;
  @property({ type: String }) error = '';
  @property({ type: String }) helperText = '';
  @property({ type: Array }) options: CheckboxGroupOption[] = [];

  @state() private _internalValues: string[] = [];

  private get _displayValues() {
    return this.values.length > 0 ? this.values : this._internalValues;
  }

  private _onToggle(optionValue: string, checked: boolean) {
    const values = checked
      ? [...this._displayValues, optionValue]
      : this._displayValues.filter(v => v !== optionValue);
    this._internalValues = values;
    this.values = values;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { values },
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
        <div role="group" aria-label=${this.label || undefined}>
          <slot>
            ${this.options.map(option => {
              const isChecked = this._displayValues.includes(option.value);
              return html`
                <label class="checkbox-item ${option.disabled ? 'disabled' : ''}">
                  <input
                    type="checkbox"
                    name=${this.name || this.label}
                    value=${option.value}
                    ?checked=${isChecked}
                    ?disabled=${option.disabled || this.disabled}
                    @change=${(e: Event) => this._onToggle(option.value, (e.target as HTMLInputElement).checked)}
                  />
                  <span class="checkmark"></span>
                  <span class="checkbox-label">${option.label}</span>
                </label>
              `;
            })}
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
    'sq-checkbox-group': SqCheckboxGroup;
  }
}
