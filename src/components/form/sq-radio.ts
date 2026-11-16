import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/** Squiddy Radio — covers: `<input type="radio">` */
@customElement('sq-radio')
export class SqRadio extends LitElement {
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
    input[type="radio"] { display: none; }
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
    input:checked + .radiomark {
      border-color: var(--sq-accent-primary);
    }
    input:checked + .radiomark::after {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--sq-accent-primary);
    }
    input:focus-visible + .radiomark {
      outline: 2px solid var(--sq-border-focus);
      outline-offset: 2px;
    }
    .wrapper:hover .radiomark {
      border-color: var(--sq-accent-primary);
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
  @property({ type: String }) name = '';
  @property({ type: String }) value = '';
  private _onChange() {
    this.checked = true;
    this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value } }));
  }
  override focus() {
    const input = this.renderRoot?.querySelector('input');
    input?.focus();
  }
  override render() {
    return html`
      <label class="wrapper">
        <input id=${this.id} type="radio" ?checked=${this.checked} ?disabled=${this.disabled} name=${this.name} value=${this.value} @change=${this._onChange} />
        <span class="radiomark"></span>
        ${this.label ? html`<span class="label">${this.label}</span>` : ''}
      </label>
    `;
  }
}
