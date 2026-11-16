import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Squiddy Split Button — button with dropdown arrow
 *
 * A button that splits into a primary action and a dropdown menu.
 * The main button area triggers the primary action, while the arrow
 * button opens a dropdown menu with additional options.
 *
 * @fires click - Fired when the main button is clicked
 * @fires select - Fired when a dropdown option is selected
 */
@customElement('sq-split-button')
export class SqSplitButton extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .split-btn {
      display: inline-flex;
      align-items: center;
      border: 2px solid transparent;
      border-radius: var(--sq-radius-full);
      background: var(--sq-accent-primary);
      color: var(--sq-fg-inverse);
      font-family: var(--sq-font-family);
      font-size: var(--sq-text-sm);
      font-weight: var(--sq-font-weight-semibold);
      overflow: hidden;
      height: 40px;
    }

    :host([variant="secondary"]) .split-btn {
      background: transparent;
      border-color: var(--sq-accent-primary);
      color: var(--sq-accent-primary);
    }

    :host([variant="subtle"]) .split-btn {
      background: transparent;
      border-color: transparent;
      color: var(--sq-accent-primary);
    }

    :host([variant="danger"]) .split-btn {
      background: var(--sq-color-danger);
      border-color: var(--sq-color-danger);
      color: var(--sq-fg-inverse);
    }

    :host([size="sm"]) .split-btn {
      height: 32px;
      font-size: var(--sq-text-xs);
    }

    :host([size="sm"]) .main-btn {
      padding: 0 var(--sq-space-3);
    }

    :host([size="sm"]) .arrow-btn {
      padding: 0 var(--sq-space-2);
    }

    :host([size="lg"]) .split-btn {
      height: 48px;
      font-size: var(--sq-text-base);
    }

    :host([size="lg"]) .main-btn {
      padding: 0 var(--sq-space-6);
    }

    :host([disabled]) .split-btn {
      opacity: 0.4;
      pointer-events: none;
    }

    .main-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--sq-space-2);
      padding: 0 var(--sq-space-5);
      border: none;
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      background: transparent;
      color: inherit;
      font: inherit;
      cursor: pointer;
      flex: 1;
    }

    :host([variant="secondary"]) .main-btn {
      border-right-color: rgba(0, 0, 0, 0.1);
    }

    .main-btn:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    :host([variant="secondary"]) .main-btn:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    .arrow-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0 var(--sq-space-2);
      border: none;
      background: rgba(255, 255, 255, 0.1);
      color: inherit;
      cursor: pointer;
      transition: var(--sq-transition-color);
    }

    :host([variant="secondary"]) .arrow-btn {
      background: rgba(0, 0, 0, 0.05);
    }

    .arrow-btn:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    :host([variant="secondary"]) .arrow-btn:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    .chevron {
      width: 16px;
      height: 16px;
      transition: transform var(--sq-motion-fast);
    }

    :host([open]) .chevron {
      transform: rotate(180deg);
    }

    .menu {
      position: absolute;
      top: calc(100% + var(--sq-space-1));
      right: 0;
      min-width: var(--sq-min-width, 180px);
      background: var(--sq-bg-surface);
      border: 1px solid var(--sq-border-default);
      border-radius: var(--sq-radius-md);
      box-shadow: var(--sq-shadow-lg);
      padding: var(--sq-space-1) 0;
      z-index: 1000;
      opacity: 0;
      transform: translateY(-8px);
      pointer-events: none;
      transition: opacity var(--sq-motion-fast), transform var(--sq-motion-fast);
    }

    :host([open]) .menu {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }

    .menu-item {
      display: flex;
      align-items: center;
      padding: var(--sq-space-2) var(--sq-space-3);
      font-size: var(--sq-text-sm);
      color: var(--sq-fg-default);
      cursor: pointer;
      transition: var(--sq-transition-color);
      font-family: var(--sq-font-family);
    }

    .menu-item:hover {
      background: var(--sq-accent-primary-light);
      color: var(--sq-accent-primary);
    }

    .menu-item.disabled {
      opacity: 0.4;
      pointer-events: none;
    }

    .divider {
      height: 1px;
      background: var(--sq-border-subtle);
      margin: var(--sq-space-1) 0;
    }
  `;

  @property({ type: String }) label = 'Action';
  @property({ type: String, reflect: true }) variant: 'primary' | 'secondary' | 'subtle' | 'danger' = 'primary';
  @property({ type: String, reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: Array }) options: { label: string; value: string; disabled?: boolean; divider?: boolean }[] = [];
  @property({ type: String }) minWidth = '180px';

  @state() private _focusedMenuIndex = -1;

  private _onMainClick() {
    if (this.disabled) return;
    this.dispatchEvent(new CustomEvent('click', { bubbles: true, composed: true }));
  }

  private _onArrowClick() {
    if (this.disabled) return;
    this.open = !this.open;
    if (this.open) {
      this._focusedMenuIndex = -1;
    }
  }

  private _onSelect(option: { label: string; value: string }) {
    this.open = false;
    this.dispatchEvent(new CustomEvent('select', {
      detail: { label: option.label, value: option.value },
      bubbles: true,
      composed: true,
    }));
  }

  private _onKeyDown = (e: KeyboardEvent) => {
    if (!this.open) return;
    const validOptions = this.options.filter(o => !o.divider && !o.disabled);

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this._focusedMenuIndex = Math.min(this._focusedMenuIndex + 1, validOptions.length - 1);
        break;
      case 'ArrowUp':
        e.preventDefault();
        this._focusedMenuIndex = Math.max(this._focusedMenuIndex - 1, 0);
        break;
      case 'Enter':
        e.preventDefault();
        if (this._focusedMenuIndex >= 0) {
          this._onSelect(validOptions[this._focusedMenuIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        this.open = false;
        break;
    }
  };

  override connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._onDocumentClick);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._onDocumentClick);
  }

  private _onDocumentClick = (e: MouseEvent) => {
    if (this.open && !this.contains(e.target as Node)) {
      this.open = false;
    }
  };

  override render() {
    return html`
      <div class="split-btn">
        <button class="main-btn" @click=${this._onMainClick} ?disabled=${this.disabled}>
          <slot name="icon"></slot>
          <slot>${this.label}</slot>
        </button>
        <button class="arrow-btn" @click=${this._onArrowClick} ?disabled=${this.disabled} aria-label="More options" aria-haspopup="listbox" aria-expanded=${this.open}>
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
      <div class="menu" role="listbox" @keydown=${this._onKeyDown} style="--sq-min-width: ${this.minWidth};">
        ${this.options.map(option => {
          if (option.divider) {
            return html`<div class="divider" role="separator"></div>`;
          }
          return html`
            <div
              class="menu-item ${option.disabled ? 'disabled' : ''}"
              role="option"
              ?aria-disabled=${option.disabled}
              @click=${() => !option.disabled && this._onSelect(option)}
            >
              ${option.label}
            </div>
          `;
        })}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-split-button': SqSplitButton;
  }
}
