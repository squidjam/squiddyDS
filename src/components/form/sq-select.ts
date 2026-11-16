import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/** Squiddy Select — covers: `<select>`, `<option>`, `<optgroup>` */
@customElement('sq-select')
export class SqSelect extends LitElement {
  static override styles = css`
    :host { display: block; }
    .wrapper { display: flex; flex-direction: column; gap: var(--sq-space-2); }
    .label-row {
      display: flex; align-items: center; gap: var(--sq-space-1);
      font-size: var(--sq-text-sm); font-weight: var(--sq-font-weight-medium); color: var(--sq-fg-default);
    }
    .required { color: var(--sq-color-danger); }
    select {
      padding: 0 32px 0 var(--sq-space-3);
      min-height: 40px;
      border: 1px solid var(--sq-border-default);
      border-radius: var(--sq-radius-md);
      background: var(--sq-bg-surface);
      font-family: var(--sq-font-family);
      font-size: var(--sq-text-md);
      color: var(--sq-fg-default);
      outline: none;
      cursor: pointer;
      transition: var(--sq-transition-color);
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2394a3b8' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 12px center;
    }
    select[multiple] {
      padding: var(--sq-space-1);
      background-image: none;
      min-height: auto;
      height: auto;
    }
    select:focus { border-color: var(--sq-accent-primary); box-shadow: 0 0 0 2px var(--sq-accent-primary-light); }
    select:disabled { opacity: 0.5; pointer-events: none; }
  `;
  @property({ type: String }) id = '';
  @property({ type: String }) label = '';
  @property({ type: String }) value = '';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean }) multiple = false;

  @state() private _optionsHTML = '';

  private _observer: MutationObserver | null = null;

  private _extractOptionsHTML() {
    const raw = this.innerHTML.trim();
    this._optionsHTML = raw || '';
  }

  private _onLabelClick() {
    const select = this.renderRoot?.querySelector('select');
    select?.focus();
  }

  override focus() {
    const select = this.renderRoot?.querySelector('select');
    select?.focus();
  }

  override connectedCallback() {
    super.connectedCallback();
    this._extractOptionsHTML();
    this._observer = new MutationObserver(() => {
      this._extractOptionsHTML();
    });
    this._observer.observe(this, { childList: true, characterData: true, subtree: true });
  }

  override disconnectedCallback() {
    this._observer?.disconnect();
    super.disconnectedCallback();
  }

  override render() {
    return html`
      <div class="wrapper">
        ${this.label ? html`<div class="label-row"><label @click=${this._onLabelClick}>${this.label}</label>${this.required ? html`<span class="required">*</span>` : ''}</div>` : ''}
        <select id=${this.id} .value=${this.value} ?disabled=${this.disabled} ?required=${this.required} ?multiple=${this.multiple}>
          ${this._optionsHTML ? unsafeHTML(this._optionsHTML) : ''}
        </select>
      </div>
    `;
  }
}
