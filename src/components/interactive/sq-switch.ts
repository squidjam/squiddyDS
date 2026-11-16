import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Switch — covers: `<input type="checkbox">` as toggle
 *
 * @fires change
 */
@customElement('sq-switch')
export class SqSwitch extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: var(--sq-space-2);
    }

    .switch {
      position: relative;
      width: 44px;
      height: 24px;
      cursor: pointer;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
    }

    .slider {
      position: absolute;
      inset: 0;
      border-radius: var(--sq-radius-full);
      background: var(--sq-border-default);
      transition: var(--sq-transition-color);
    }

    .slider::before {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--sq-bg-surface);
      box-shadow: var(--sq-shadow-sm);
      transition: transform var(--sq-motion-base);
    }

    .switch input:checked + .slider {
      background: var(--sq-accent-primary);
    }

    .switch input:checked + .slider::before {
      transform: translateX(20px);
    }

    .switch input:focus-visible + .slider {
      outline: 2px solid var(--sq-border-focus);
      outline-offset: 2px;
    }

    .switch.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .label {
      font-size: var(--sq-text-sm);
      color: var(--sq-fg-default);
      user-select: none;
      cursor: pointer;
    }

    .switch.disabled .label {
      cursor: not-allowed;
    }
  `;

  @property({ type: Boolean }) checked = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) label = '';

  private _onChange() {
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('change', { detail: { checked: this.checked } }));
  }

  override render() {
    return html`
      <label class="switch ${this.disabled ? 'disabled' : ''}">
        <input
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this._onChange}
        />
        <span class="slider"></span>
        ${this.label ? html`<span class="label">${this.label}</span>` : ''}
      </label>
    `;
  }
}
