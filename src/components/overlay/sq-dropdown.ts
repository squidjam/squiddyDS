import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export interface DropdownItem {
  label: string;
  value: string;
  disabled?: boolean;
  divider?: boolean;
}

/**
 * Squiddy Dropdown — click-triggered menu with options
 *
 * Displays a dropdown menu triggered by a button or custom trigger slot.
 * Supports programmatic items or slot-based rendering.
 *
 * @fires select - Fired when an item is selected
 */
@customElement('sq-dropdown')
export class SqDropdown extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .trigger {
      display: inline-flex;
      align-items: center;
      gap: var(--sq-space-2);
      padding: var(--sq-space-2) var(--sq-space-3);
      border: 1px solid var(--sq-border-default);
      border-radius: var(--sq-radius-md);
      background: var(--sq-bg-surface);
      color: var(--sq-fg-default);
      font-size: var(--sq-text-sm);
      font-family: var(--sq-font-family);
      cursor: pointer;
      transition: var(--sq-transition-color);
    }

    .trigger:hover {
      border-color: var(--sq-accent-primary);
    }

    .trigger:focus-visible {
      outline: 2px solid var(--sq-border-focus);
      outline-offset: 2px;
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
      left: 0;
      min-width: var(--sq-min-width, 200px);
      max-height: var(--sq-max-height, 300px);
      overflow-y: auto;
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
    }

    .menu-item:hover {
      background: var(--sq-accent-primary-light);
      color: var(--sq-accent-primary);
    }

    .menu-item:focus-visible {
      background: var(--sq-accent-primary-light);
      outline: none;
    }

    .menu-item.disabled {
      opacity: 0.4;
      pointer-events: none;
    }

    .menu-item.selected {
      color: var(--sq-accent-primary);
      font-weight: var(--sq-font-weight-medium);
    }

    .divider {
      height: 1px;
      background: var(--sq-border-subtle);
      margin: var(--sq-space-1) 0;
    }

    .trigger-slot {
      display: contents;
    }
  `;

  @property({ type: Array }) items: DropdownItem[] = [];
  @property({ type: String }) triggerLabel = 'Select';
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) minWidth = '200px';
  @property({ type: String }) maxHeight = '300px';
  @property({ type: String }) selectedValue = '';
  @property({ type: Boolean }) disabled = false;

  @state() private _selectedIndex = -1;

  private _toggle() {
    if (this.disabled) return;
    this.open = !this.open;
    if (this.open) {
      this._selectedIndex = this.items.findIndex(item => item.value === this.selectedValue);
      requestAnimationFrame(() => {
        const focusedItem = this.renderRoot?.querySelector('.menu-item:focus-visible');
        focusedItem?.scrollIntoView({ block: 'nearest' });
      });
    }
  }

  private _selectItem(item: DropdownItem, index: number) {
    if (item.disabled) return;
    this.selectedValue = item.value;
    this.open = false;
    this.dispatchEvent(new CustomEvent('select', {
      detail: { value: item.value, label: item.label, index },
      bubbles: true,
      composed: true,
    }));
  }

  private _onKeyDown = (e: KeyboardEvent) => {
    if (!this.open) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this._toggle();
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this._selectedIndex = Math.min(this._selectedIndex + 1, this.items.length - 1);
        break;
      case 'ArrowUp':
        e.preventDefault();
        this._selectedIndex = Math.max(this._selectedIndex - 1, 0);
        break;
      case 'Enter':
        e.preventDefault();
        if (this._selectedIndex >= 0 && !this.items[this._selectedIndex].disabled) {
          this._selectItem(this.items[this._selectedIndex], this._selectedIndex);
        }
        break;
      case 'Escape':
        e.preventDefault();
        this.open = false;
        break;
    }

    if (this._selectedIndex >= 0) {
      const menuItems = this.renderRoot?.querySelectorAll('.menu-item:not(.disabled)');
      const item = menuItems?.[this._selectedIndex] as HTMLElement | undefined;
        item?.focus();
    }
  };

  private _getSelectedLabel() {
    const item = this.items.find(i => i.value === this.selectedValue);
    return item?.label || this.triggerLabel;
  }

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
      <div @click=${this._toggle} @keydown=${this._onKeyDown} tabindex="0" role="button" aria-expanded=${this.open} aria-haspopup="listbox">
        <slot name="trigger">
          <button class="trigger" ?disabled=${this.disabled}>
            <span>${this._getSelectedLabel()}</span>
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </slot>
      </div>
      <div class="menu" role="listbox" style="--sq-min-width: ${this.minWidth}; --sq-max-height: ${this.maxHeight};">
        <slot>
          ${this.items.map((item, index) => {
            if (item.divider) {
              return html`<div class="divider" role="separator"></div>`;
            }
            return html`
              <div
                class="menu-item ${item.disabled ? 'disabled' : ''} ${item.value === this.selectedValue ? 'selected' : ''}"
                role="option"
                ?aria-selected=${item.value === this.selectedValue}
                ?aria-disabled=${item.disabled}
                tabindex="-1"
                @click=${() => this._selectItem(item, index)}
              >
                ${item.label}
              </div>
            `;
          })}
        </slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-dropdown': SqDropdown;
  }
}
