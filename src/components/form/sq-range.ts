import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/** Squiddy Range — covers: `<input type="range">` */
@customElement('sq-range')
export class SqRange extends LitElement {
  static override styles = css`
    :host { display: block; }
    .wrapper { display: flex; flex-direction: column; gap: var(--sq-space-2); }
    .label-row {
      display: flex; align-items: center; justify-content: space-between;
      font-size: var(--sq-text-sm); font-weight: var(--sq-font-weight-medium); color: var(--sq-fg-default);
    }
    .value { color: var(--sq-fg-muted); font-variant-numeric: tabular-nums; }
    input[type="range"] {
      width: 100%;
      height: 6px;
      border-radius: var(--sq-radius-full);
      background: var(--sq-border-subtle);
      outline: none;
      appearance: none;
      cursor: pointer;
    }
    input[type="range"]::-webkit-slider-thumb {
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--sq-accent-primary);
      cursor: pointer;
      border: 2px solid var(--sq-bg-surface);
      box-shadow: var(--sq-shadow-sm);
      transition: var(--sq-transition-transform);
    }
    input[type="range"]::-webkit-slider-thumb:hover {
      transform: scale(1.2);
    }
    input[type="range"]::-moz-range-thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--sq-accent-primary);
      cursor: pointer;
      border: 2px solid var(--sq-bg-surface);
      box-shadow: var(--sq-shadow-sm);
    }
    input[type="range"]:disabled { opacity: 0.4; pointer-events: none; }
  `;
  @property({ type: String }) id = '';
  @property({ type: Number }) value = 50;
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 100;
  @property({ type: Number }) step = 1;
  @property({ type: String }) label = '';
  @property({ type: Boolean }) disabled = false;
  private _onInput(e: Event) {
    this.value = (e.target as HTMLInputElement).valueAsNumber;
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
            <span class="value">${this.value}</span>
          </div>
        ` : ''}
        <input id=${this.id} type="range" .value=${this.value} min=${this.min} max=${this.max} step=${this.step} ?disabled=${this.disabled} @input=${this._onInput} />
      </div>
    `;
  }
}
