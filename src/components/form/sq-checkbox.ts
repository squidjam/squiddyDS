import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/** Squiddy Checkbox — covers: `<input type="checkbox">` */
@customElement('sq-checkbox')
export class SqCheckbox extends LitElement {
  static override styles = css`
    :host { display: inline-flex; align-items: center; }
    .wrapper {
      display: inline-flex;
      align-items: center;
      gap: var(--sq-space-2);
      cursor: pointer;
      padding: var(--sq-space-2) 0;
    }
    :host([disabled]) .wrapper { opacity: 0.4; pointer-events: none; }
    input[type="checkbox"] { display: none; }
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
    .wrapper:hover .checkmark {
      border-color: var(--sq-accent-primary);
    }
    input[indeterminate-flag] + .checkmark::after {
      content: '—';
      color: var(--sq-fg-default);
      font-size: 14px;
      font-weight: bold;
    }
    .label {
      font-size: var(--sq-text-sm);
      color: var(--sq-fg-default);
      user-select: none;
      line-height: var(--sq-line-height-normal);
    }
  `;
  @property({ type: String }) id = '';
  @property({ type: Boolean }) checked = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) label = '';
  @property({ type: Boolean }) indeterminate = false;
  private _onChange() {
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('change', { detail: { checked: this.checked } }));
  }
  override firstUpdated() {
    const input = this.renderRoot?.querySelector('input');
    if (input) {
      input.indeterminate = this.indeterminate;
      if (this.indeterminate) input.setAttribute('indeterminate-flag', '');
    }
  }
  override updated(changed: Map<string, any>) {
    if (changed.has('indeterminate')) {
      const input = this.renderRoot?.querySelector('input');
      if (input) {
        input.indeterminate = this.indeterminate;
        if (this.indeterminate) input.setAttribute('indeterminate-flag', '');
        else input.removeAttribute('indeterminate-flag');
      }
    }
  }
  override focus() {
    const input = this.renderRoot?.querySelector('input');
    input?.focus();
  }
  override render() {
    return html`
      <label class="wrapper">
        <input id=${this.id} type="checkbox" ?checked=${this.checked} ?disabled=${this.disabled} @change=${this._onChange} />
        <span class="checkmark"></span>
        ${this.label ? html`<span class="label">${this.label}</span>` : ''}
      </label>
    `;
  }
}
