import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Squiddy Drawer — slide-in panel from screen edges
 *
 * A drawer panel that slides in from any edge of the screen.
 * Supports header, body, and footer slots.
 *
 * @slot header - Drawer header content
 * @slot - Drawer body content
 * @slot footer - Drawer footer actions
 *
 * @fires close
 */
@customElement('sq-drawer')
export class SqDrawer extends LitElement {
  static override styles = css`
    :host {
      display: contents;
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--sq-bg-overlay);
      z-index: 999;
      opacity: 0;
      pointer-events: none;
      transition: opacity var(--sq-motion-base);
    }

    :host([open]) .overlay {
      opacity: 1;
      pointer-events: auto;
    }

    .drawer {
      position: fixed;
      top: 0;
      bottom: 0;
      width: var(--sq-width, 400px);
      max-width: 90vw;
      background: var(--sq-bg-surface);
      color: var(--sq-fg-default);
      box-shadow: var(--sq-shadow-lg);
      z-index: 1000;
      display: flex;
      flex-direction: column;
      transition: transform var(--sq-motion-base);
    }

    :host([position="left"]) .drawer {
      left: 0;
      transform: translateX(-100%);
    }

    :host([position="right"]) .drawer {
      right: 0;
      transform: translateX(100%);
    }

    :host([position="top"]) .drawer {
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      max-width: 100%;
      height: var(--sq-height, 300px);
      transform: translateY(-100%);
    }

    :host([position="bottom"]) .drawer {
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      max-width: 100%;
      height: var(--sq-height, 300px);
      transform: translateY(100%);
    }

    :host([open]) .drawer {
      transform: translate(0, 0);
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--sq-space-4) var(--sq-space-5);
      border-bottom: 1px solid var(--sq-border-subtle);
      flex-shrink: 0;
    }

    .header h2 {
      margin: 0;
      font-size: var(--sq-text-lg);
      font-weight: var(--sq-font-weight-semibold);
    }

    .close-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: var(--sq-radius-md);
      background: transparent;
      color: var(--sq-fg-muted);
      font-size: 20px;
      cursor: pointer;
      transition: var(--sq-transition-color);
    }

    .close-btn:hover {
      background: var(--sq-bg-subtle);
      color: var(--sq-fg-default);
    }

    .close-btn:focus-visible {
      outline: 2px solid var(--sq-border-focus);
      outline-offset: 2px;
    }

    .body {
      flex: 1;
      padding: var(--sq-space-5);
      overflow-y: auto;
    }

    .footer {
      padding: var(--sq-space-4) var(--sq-space-5);
      border-top: 1px solid var(--sq-border-subtle);
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: var(--sq-space-3);
      flex-shrink: 0;
    }
  `;

  @property({ type: Boolean }) open = false;
  @property({ type: String }) position: 'left' | 'right' | 'top' | 'bottom' = 'right';
  @property({ type: String }) label = '';
  @property({ type: String }) width = '400px';
  @property({ type: String }) height = '300px';
  @property({ type: Boolean }) closeOnOverlay = true;
  @property({ type: Boolean }) closeOnEscape = true;

  @state() private _hasHeaderSlot = false;
  @state() private _hasFooterSlot = false;

  override connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keydown', this._onKeyDown);
    // Ensure position attribute is always reflected for CSS selectors to work
    this.setAttribute('position', this.position);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._onKeyDown);
  }

  override willUpdate(changedProperties: Map<string, unknown>) {
    super.willUpdate(changedProperties);
    // Always reflect position attribute so CSS selectors match even when value equals default
    if (changedProperties.has('position')) {
      this.setAttribute('position', this.position);
    }
    // Reflect open attribute for CSS selectors
    if (changedProperties.has('open')) {
      if (this.open) {
        this.setAttribute('open', '');
      } else {
        this.removeAttribute('open');
      }
    }
  }

  override firstUpdated() {
    const headerSlot = this.renderRoot.querySelector('slot[name="header"]') as HTMLSlotElement | null;
    const footerSlot = this.renderRoot.querySelector('slot[name="footer"]') as HTMLSlotElement | null;

    if (headerSlot) {
      headerSlot.addEventListener('slotchange', () => {
        this._hasHeaderSlot = headerSlot.assignedElements().length > 0;
        this.requestUpdate();
      });
      this._hasHeaderSlot = headerSlot.assignedElements().length > 0;
    }

    if (footerSlot) {
      footerSlot.addEventListener('slotchange', () => {
        this._hasFooterSlot = footerSlot.assignedElements().length > 0;
        this.requestUpdate();
      });
      this._hasFooterSlot = footerSlot.assignedElements().length > 0;
    }
  }

  private _onKeyDown = (e: KeyboardEvent) => {
    if (this.closeOnEscape && e.key === 'Escape' && this.open) {
      this.close();
    }
  };

  private _onOverlayClick() {
    if (this.closeOnOverlay) {
      this.close();
    }
  }

  close() {
    this.open = false;
    this.removeAttribute('open');
    this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
  }

  openDrawer() {
    this.open = true;
    this.setAttribute('open', '');
  }

  override render() {
    return html`
      <div class="overlay" @click=${this._onOverlayClick} aria-hidden="true"></div>
      <div class="drawer" role="dialog" aria-modal="true" aria-label=${this.label || undefined}>
        ${this._hasHeaderSlot || this.label ? html`
          <div class="header">
            <slot name="header">
              ${this.label ? html`<h2>${this.label}</h2>` : ''}
            </slot>
            <button class="close-btn" @click=${this.close} aria-label="Close">&times;</button>
          </div>
        ` : ''}
        <div class="body"><slot></slot></div>
        ${this._hasFooterSlot ? html`
          <div class="footer"><slot name="footer"></slot></div>
        ` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-drawer': SqDrawer;
  }
}
