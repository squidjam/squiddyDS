import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export interface FormField {
  name: string;
  value: any;
  valid?: boolean;
  touched?: boolean;
}

/**
 * Squiddy Form — form wrapper with validation state management
 *
 * Wraps form fields and provides validation state management.
 * Tracks field validity and provides overall form state.
 *
 * @slot - Form content
 * @slot header - Form header
 * @slot footer - Form footer actions
 *
 * @fires submit - Fired when form is submitted
 * @fires validate - Fired when validation state changes
 */
@customElement('sq-form')
export class SqForm extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .form-wrapper {
      display: flex;
      flex-direction: column;
      gap: var(--sq-space-5);
    }

    .form-header {
      padding-bottom: var(--sq-space-3);
      border-bottom: 1px solid var(--sq-border-subtle);
    }

    .form-body {
      display: flex;
      flex-direction: column;
      gap: var(--sq-space-4);
    }

    .form-footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: var(--sq-space-3);
      padding-top: var(--sq-space-3);
      border-top: 1px solid var(--sq-border-subtle);
    }

    .form-error-summary {
      padding: var(--sq-space-3) var(--sq-space-4);
      background: var(--sq-color-danger-light);
      border: 1px solid var(--sq-color-danger);
      border-radius: var(--sq-radius-md);
      color: var(--sq-color-danger);
      font-size: var(--sq-text-sm);
    }

    .form-error-summary strong {
      display: block;
      margin-bottom: var(--sq-space-1);
    }

    .form-error-summary ul {
      margin: 0;
      padding-left: var(--sq-space-4);
    }

    :host([invalid]) .form-body {
      /* Visual indicator that form has errors */
    }
  `;

  @property({ type: String }) action = '';
  @property({ type: String }) method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'POST';
  @property({ type: Boolean }) noValidate = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) invalid = false;
  @property({ type: Array }) fields: FormField[] = [];

  @state() private _submitted = false;
  @state() private _errors: { name: string; message: string }[] = [];


  /**
   * Mark a field as touched and validate it
   */
  markTouched(fieldName: string) {
    const field = this.fields.find(f => f.name === fieldName);
    if (field) {
      field.touched = true;
    }
    this._updateValidity();
  }

  /**
   * Set a field's value
   */
  setFieldValue(fieldName: string, value: any) {
    const field = this.fields.find(f => f.name === fieldName);
    if (field) {
      field.value = value;
    }
    this._updateValidity();
  }

  /**
   * Set a field's validation state
   */
  setFieldValid(fieldName: string, valid: boolean, message?: string) {
    const field = this.fields.find(f => f.name === fieldName);
    if (field) {
      field.valid = valid;
    }
    if (!valid && message) {
      this._errors = this._errors.filter(e => e.name !== fieldName);
      this._errors.push({ name: fieldName, message });
    } else {
      this._errors = this._errors.filter(e => e.name !== fieldName);
    }
    this._updateValidity();
  }

  private _updateValidity() {
    this.invalid = this.fields.some(f => f.touched && f.valid === false);
    this.dispatchEvent(new CustomEvent('validate', {
      detail: { valid: !this.invalid, errors: this._errors },
      bubbles: true,
      composed: true,
    }));
  }

  private _onSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    this._submitted = true;

    // Mark all fields as touched
    this.fields.forEach(f => f.touched = true);
    this._updateValidity();

    if (this.invalid) {
      return;
    }

    const formData = new FormData();
    this.fields.forEach(f => {
      formData.append(f.name, String(f.value));
    });

    this.dispatchEvent(new CustomEvent('submit', {
      detail: {
        fields: this.fields,
        formData,
        valid: true,
      },
      bubbles: true,
      composed: true,
    }));
  };

  override render() {
    const hasHeader = this.querySelector('[slot="header"]');
    const hasFooter = this.querySelector('[slot="footer"]');

    return html`
      <div class="form-wrapper">
        ${hasHeader ? html`
          <div class="form-header"><slot name="header"></slot></div>
        ` : ''}
        ${this._submitted && this.invalid ? html`
          <div class="form-error-summary" role="alert">
            <strong>Please fix the following errors:</strong>
            <ul>
              ${this._errors.map(err => html`<li>${err.message}</li>`)}
            </ul>
          </div>
        ` : ''}
        <form
          class="form-body"
          action=${this.action || undefined}
          method=${this.method}
          ?novalidate=${this.noValidate}
          @submit=${this._onSubmit}
        >
          <slot></slot>
        </form>
        ${hasFooter ? html`
          <div class="form-footer"><slot name="footer"></slot></div>
        ` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-form': SqForm;
  }
}
