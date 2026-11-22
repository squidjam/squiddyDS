import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Squiddy Color Picker — color selection input with recent color history.
 *
 * Features:
 * - Native color picker with custom UI
 * - Recent color history (configurable size, persisted in localStorage)
 * - HEX, RGB, and HSL color format display
 * - Custom color palette
 * - Copy color value to clipboard
 *
 * @example
 * ```html
 * <sq-color-picker value="#3b82f6" .history-size=${10}></sq-color-picker>
 * ```
 */
@customElement('sq-color-picker')
export class SqColorPicker extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    :host([hidden]) {
      display: none;
    }

    .picker-trigger {
      display: flex;
      align-items: center;
      gap: var(--sq-space-2);
      padding: var(--sq-space-2) var(--sq-space-3);
      border: 1px solid var(--sq-border-default);
      border-radius: var(--sq-radius-md);
      background: var(--sq-bg-surface);
      color: var(--sq-fg-default);
      cursor: pointer;
      font-size: var(--sq-text-sm);
      font-family: var(--sq-font-mono, monospace);
      transition: border-color var(--sq-transition-fast);
      min-width: 120px;
    }

    .picker-trigger:hover {
      border-color: var(--sq-accent-primary);
    }

    .picker-trigger:focus-visible {
      outline: 2px solid var(--sq-accent-primary);
      outline-offset: 2px;
    }

    .color-preview {
      width: var(--sq-space-4);
      height: var(--sq-space-4);
      border-radius: var(--sq-radius-sm);
      border: 1px solid var(--sq-border-subtle);
      flex-shrink: 0;
    }

    .color-value {
      flex: 1;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dropdown {
      position: absolute;
      top: calc(100% + var(--sq-space-1));
      left: 0;
      z-index: 100;
      display: none;
      flex-direction: column;
      gap: var(--sq-space-3);
      padding: var(--sq-space-3);
      background: var(--sq-bg-surface);
      border: 1px solid var(--sq-border-default);
      border-radius: var(--sq-radius-lg);
      box-shadow: var(--sq-shadow-lg);
      min-width: 240px;
    }

    .dropdown[open] {
      display: flex;
    }

    .picker-header {
      display: flex;
      align-items: center;
      gap: var(--sq-space-3);
    }

    .native-picker {
      width: 48px;
      height: 48px;
      padding: 0;
      border: none;
      border-radius: var(--sq-radius-md);
      cursor: pointer;
      background: none;
    }

    .native-picker::-webkit-color-swatch-wrapper {
      padding: 0;
    }

    .native-picker::-webkit-color-swatch {
      border: 1px solid var(--sq-border-subtle);
      border-radius: var(--sq-radius-md);
    }

    .color-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: var(--sq-space-1);
    }

    .color-format {
      display: flex;
      align-items: center;
      gap: var(--sq-space-1);
      font-size: var(--sq-text-xs);
      font-family: var(--sq-font-mono, monospace);
      color: var(--sq-fg-muted);
      cursor: pointer;
      padding: var(--sq-space-1);
      border-radius: var(--sq-radius-sm);
      transition: background var(--sq-transition-fast);
    }

    .color-format:hover {
      background: var(--sq-bg-subtle);
      color: var(--sq-fg-default);
    }

    .color-format .copy-icon {
      margin-left: auto;
      opacity: 0;
      transition: opacity var(--sq-transition-fast);
    }

    .color-format:hover .copy-icon {
      opacity: 1;
    }

    .color-format.copied {
      color: var(--sq-color-success, #22c55e);
    }

    .color-format.copied .copy-icon {
      opacity: 1;
    }

    .slider-group {
      display: flex;
      flex-direction: column;
      gap: var(--sq-space-2);
    }

    .slider-row {
      display: flex;
      align-items: center;
      gap: var(--sq-space-2);
    }

    .slider-label {
      font-size: var(--sq-text-xs);
      font-weight: var(--sq-font-weight-semibold);
      color: var(--sq-fg-muted);
      width: 16px;
      text-align: center;
      flex-shrink: 0;
    }

    .slider {
      flex: 1;
      height: 8px;
      -webkit-appearance: none;
      appearance: none;
      border-radius: var(--sq-radius-full);
      outline: none;
      cursor: pointer;
    }

    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: white;
      border: 2px solid var(--sq-border-default);
      box-shadow: var(--sq-shadow-sm);
      cursor: pointer;
    }

    .slider::-moz-range-thumb {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: white;
      border: 2px solid var(--sq-border-default);
      box-shadow: var(--sq-shadow-sm);
      cursor: pointer;
    }

    .slider-h { background: linear-gradient(to right, red, yellow, lime, cyan, blue, magenta, red); }
    .slider-s { background: linear-gradient(to right, gray, var(--slider-color, blue)); }
    .slider-l { background: linear-gradient(to right, black, var(--slider-color, blue), white); }
    .slider-a { background: linear-gradient(to right, transparent, var(--slider-color, blue)); }

    .slider-value {
      font-size: var(--sq-text-xs);
      font-family: var(--sq-font-mono, monospace);
      color: var(--sq-fg-muted);
      width: 32px;
      text-align: right;
      flex-shrink: 0;
    }

    .section-label {
      font-size: var(--sq-text-xs);
      font-weight: var(--sq-font-weight-semibold);
      color: var(--sq-fg-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .color-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(24px, 1fr));
      gap: var(--sq-space-1);
    }

    .color-swatch {
      aspect-ratio: 1;
      border-radius: var(--sq-radius-sm);
      border: 2px solid transparent;
      cursor: pointer;
      transition: transform var(--sq-transition-fast), border-color var(--sq-transition-fast);
      position: relative;
    }

    .color-swatch:hover {
      transform: scale(1.1);
      z-index: 1;
    }

    .color-swatch.active {
      border-color: var(--sq-fg-default);
    }

    .color-swatch.remove::after {
      content: '×';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      text-shadow: 0 0 2px black;
      font-size: var(--sq-text-sm);
      line-height: 1;
      opacity: 0;
      transition: opacity var(--sq-transition-fast);
    }

    .color-swatch.remove:hover::after {
      opacity: 1;
    }

    .hex-input {
      width: 100%;
      max-width: 140px;
      padding: var(--sq-space-1) var(--sq-space-2);
      border: 1px solid var(--sq-border-default);
      border-radius: var(--sq-radius-sm);
      font-size: var(--sq-text-sm);
      font-family: var(--sq-font-mono, monospace);
      background: var(--sq-bg-surface);
      color: var(--sq-fg-default);
    }

    .hex-input:focus {
      outline: none;
      border-color: var(--sq-accent-primary);
      box-shadow: 0 0 0 2px var(--sq-accent-primary-light);
    }

    .toast {
      position: fixed;
      bottom: var(--sq-space-4);
      left: 50%;
      transform: translateX(-50%);
      padding: var(--sq-space-2) var(--sq-space-4);
      background: var(--sq-fg-default);
      color: var(--sq-bg-surface);
      border-radius: var(--sq-radius-md);
      font-size: var(--sq-text-sm);
      box-shadow: var(--sq-shadow-lg);
      opacity: 0;
      transition: opacity var(--sq-transition-fast);
      pointer-events: none;
      z-index: 1000;
    }

    .toast.show {
      opacity: 1;
    }
  `;

  /** Selected color value (HEX format). */
  @property({ type: String }) value = '#000000';

  /** Maximum number of recent colors to remember. */
  @property({ type: Number, attribute: 'history-size' }) historySize = 10;

  /** Custom palette of colors to display. */
  @property({ type: Array }) palette: string[] = [];

  /** Whether to show HSV/HSB sliders. */
  @property({ type: Boolean, reflect: true, attribute: 'show-sliders' }) showSliders = true;

  /** Storage key for persisting color history. */
  @property({ type: String, attribute: 'storage-key' }) storageKey = 'sq-color-picker-history';

  /** Label for the color picker trigger. */
  @property({ type: String }) label = 'Color';


  @state() private _isOpen = false;
  @state() private _history: string[] = [];
  @state() private _hue = 0;
  @state() private _saturation = 0;
  @state() private _lightness = 0;
  @state() private _copiedFormat = '';
  @state() private _toastMessage = '';

  connectedCallback() {
    super.connectedCallback();
    this._loadHistory();
    this._updateHSLFromValue();
    this.addEventListener('click', this._onGlobalClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._onGlobalClick);
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('value')) {
      this._updateHSLFromValue();
      this._addToHistory(this.value);
    }
  }

  private _onGlobalClick = (e: MouseEvent) => {
    if (this._isOpen && !this.contains(e.target as Node)) {
      this._isOpen = false;
    }
  };

  private _loadHistory() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        this._history = JSON.parse(stored);
      }
    } catch {
      this._history = [];
    }
  }

  private _saveHistory() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this._history));
    } catch {
      // Storage full or unavailable
    }
  }

  private _addToHistory(color: string) {
    const normalized = color.toLowerCase();
    const index = this._history.indexOf(normalized);
    if (index > -1) {
      this._history.splice(index, 1);
    }
    this._history.unshift(normalized);
    if (this._history.length > this.historySize) {
      this._history = this._history.slice(0, this.historySize);
    }
    this._saveHistory();
  }

  private _removeFromHistory(color: string, e: Event) {
    e.stopPropagation();
    this._history = this._history.filter(c => c !== color);
    this._saveHistory();
  }

  private _updateHSLFromValue() {
    const hsl = this._hexToHSL(this.value);
    if (hsl) {
      this._hue = hsl.h;
      this._saturation = hsl.s;
      this._lightness = hsl.l;
    }
  }

  private _hexToHSL(hex: string): { h: number; s: number; l: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return null;

    let r = parseInt(result[1], 16) / 255;
    let g = parseInt(result[2], 16) / 255;
    let b = parseInt(result[3], 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  }

  private _hslToHex(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;

    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };

    return `#${f(0)}${f(8)}${f(4)}`;
  }

  private _hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return null;

    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    };
  }

  private _selectColor(color: string) {
    this.value = color;
    this.dispatchEvent(new CustomEvent('color-change', {
      detail: { value: color },
      bubbles: true,
      composed: true,
    }));
  }

  private _toggleDropdown() {
    this._isOpen = !this._isOpen;
  }

  private _copyToClipboard(text: string, format: string) {
    navigator.clipboard.writeText(text).then(() => {
      this._copiedFormat = format;
      this._showToast(`Copied: ${text}`);
      setTimeout(() => { this._copiedFormat = ''; }, 2000);
    });
  }

  private _showToast(message: string) {
    this._toastMessage = message;
    const toast = this.renderRoot.querySelector('.toast');
    if (toast) {
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 1500);
    }
  }

  private _onHueChange(e: Event) {
    this._hue = parseInt((e.target as HTMLInputElement).value);
    this._selectColor(this._hslToHex(this._hue, this._saturation, this._lightness));
  }

  private _onSaturationChange(e: Event) {
    this._saturation = parseInt((e.target as HTMLInputElement).value);
    this._selectColor(this._hslToHex(this._hue, this._saturation, this._lightness));
  }

  private _onLightnessChange(e: Event) {
    this._lightness = parseInt((e.target as HTMLInputElement).value);
    this._selectColor(this._hslToHex(this._hue, this._saturation, this._lightness));
  }

  private _onHexInput(e: Event) {
    let val = (e.target as HTMLInputElement).value;
    if (!val.startsWith('#')) val = '#' + val;
    if (/^#[0-9a-fA-F]{6}$/.test(val)) {
      this._selectColor(val.toLowerCase());
    }
  }

  private _onHexBlur(e: Event) {
    const input = e.target as HTMLInputElement;
    if (!/^#[0-9a-fA-F]{6}$/.test(input.value)) {
      input.value = this.value;
    }
  }

  override render() {
    const rgb = this._hexToRgb(this.value);
    const hsl = this._hexToHSL(this.value);

    const hexValue = this.value;
    const rgbValue = rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : '';
    const hslValue = hsl ? `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` : '';

    const defaultPalette = [
      '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e',
      '#14b8a6', '#06b6d4', '#3b82f6', '#9333ea', '#a855f7', '#D946EF',
      '#d946ef', '#ec4899', '#f43f5e', '#000000', '#333333', '#666666',
      '#999999', '#cccccc', '#e5e5e5', '#ffffff',
    ];

    const paletteColors = this.palette.length ? this.palette : defaultPalette;
    const hueColor = `hsl(${this._hue}, 100%, 50%)`;

    return html`
      <div
        class="picker-trigger"
        @click=${this._toggleDropdown}
        role="button"
        tabindex="0"
        aria-haspopup="listbox"
        aria-expanded=${this._isOpen}
        aria-label=${this.label}
        @keydown=${(e: KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this._toggleDropdown();
          }
          if (e.key === 'Escape') this._isOpen = false;
        }}
      >
        <div class="color-preview" style="background: ${this.value}"></div>
        <span class="color-value">${this.value}</span>
      </div>

      <div class="dropdown" ?open=${this._isOpen}>
        <div class="picker-header">
          <input
            type="color"
            class="native-picker"
            .value=${this.value}
            @input=${(e: Event) => this._selectColor((e.target as HTMLInputElement).value)}
          />
          <div class="color-info">
            <input
              type="text"
              class="hex-input"
              .value=${this.value}
              @input=${this._onHexInput}
              @blur=${this._onHexBlur}
              @keydown=${(e: KeyboardEvent) => {
                if (e.key === 'Enter') (e.target as HTMLElement).blur();
              }}
              maxlength="7"
              aria-label="Hex color value"
            />
            ${[
              { label: 'HEX', value: hexValue, format: 'hex' },
              { label: 'RGB', value: rgbValue, format: 'rgb' },
              { label: 'HSL', value: hslValue, format: 'hsl' },
            ].map(fmt => html`
              <div
                class="color-format ${this._copiedFormat === fmt.format ? 'copied' : ''}"
                @click=${() => this._copyToClipboard(fmt.value, fmt.format)}
                title="Click to copy"
              >
                <strong>${fmt.label}:</strong> ${fmt.value}
                <span class="copy-icon">${this._copiedFormat === fmt.format ? '✓' : '📋'}</span>
              </div>
            `)}
          </div>
        </div>

        ${this.showSliders ? html`
          <div class="slider-group">
            <div class="slider-row">
              <span class="slider-label">H</span>
              <input
                type="range"
                class="slider slider-h"
                min="0"
                max="360"
                .value=${this._hue}
                @input=${this._onHueChange}
              />
              <span class="slider-value">${this._hue}°</span>
            </div>
            <div class="slider-row">
              <span class="slider-label">S</span>
              <input
                type="range"
                class="slider slider-s"
                style="--slider-color: ${hueColor}"
                min="0"
                max="100"
                .value=${this._saturation}
                @input=${this._onSaturationChange}
              />
              <span class="slider-value">${this._saturation}%</span>
            </div>
            <div class="slider-row">
              <span class="slider-label">L</span>
              <input
                type="range"
                class="slider slider-l"
                style="--slider-color: ${hueColor}"
                min="0"
                max="100"
                .value=${this._lightness}
                @input=${this._onLightnessChange}
              />
              <span class="slider-value">${this._lightness}%</span>
            </div>
          </div>
        ` : ''}

        ${paletteColors.length ? html`
          <div>
            <div class="section-label">Palette</div>
            <div class="color-grid">
              ${paletteColors.map(color => html`
                <div
                  class="color-swatch ${color.toLowerCase() === this.value.toLowerCase() ? 'active' : ''}"
                  style="background: ${color}"
                  @click=${() => this._selectColor(color)}
                  role="option"
                  aria-label=${color}
                  aria-selected=${color.toLowerCase() === this.value.toLowerCase()}
                  tabindex="0"
                  @keydown=${(e: KeyboardEvent) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      this._selectColor(color);
                    }
                  }}
                ></div>
              `)}
            </div>
          </div>
        ` : ''}

        ${this._history.length ? html`
          <div>
            <div class="section-label">Recent</div>
            <div class="color-grid">
              ${this._history.map(color => html`
                <div
                  class="color-swatch remove ${color === this.value ? 'active' : ''}"
                  style="background: ${color}"
                  @click=${() => this._selectColor(color)}
                  @dblclick=${(e: Event) => this._removeFromHistory(color, e)}
                  role="option"
                  aria-label=${color}
                  title="Click to select, double-click to remove"
                  tabindex="0"
                ></div>
              `)}
            </div>
          </div>
        ` : ''}
      </div>

      <div class="toast">${this._toastMessage}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-color-picker': SqColorPicker;
  }
}
