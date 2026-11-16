import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Drawer — covers: `<aside>` (slide-in panel)
 *
 * A slide-in panel that can appear from any side of the screen.
 *
 * @slot header - Drawer header
 * @slot - Drawer body content
 * @slot footer - Drawer footer
 *
 * @fires sq-close - Emitted when the drawer is closed
 */
@customElement('sq-drawer')
export class SqDrawer extends LitElement {
  static override styles = css`
    :host {
      display: none;
      position: fixed;
      inset: 0;
      z-index: var(--sq-z-modal);
    }

    :host([open]) {
      display: block;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: var(--sq-bg-overlay);
      transition: opacity var(--sq-motion-slow);
      opacity: 0;
      pointer-events: none;
    }

    :host([open]) .overlay {
      opacity: 1;
      pointer-events: auto;
    }

    .drawer {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 400px;
      max-width: 90vw;
      background: var(--sq-bg-surface);
      box-shadow: var(--sq-shadow-lg);
      display: flex;
      flex-direction: column;
      transition: transform var(--sq-motion-slow);
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
      height: 400px;
      max-height: 90vh;
      bottom: auto;
      transform: translateY(-100%);
    }

    :host([position="bottom"]) .drawer {
      bottom: 0;
      left: 0;
      right: 0;
      top: auto;
      width: 100%;
      max-width: 100%;
      height: 400px;
      max-height: 90vh;
      transform: translateY(100%);
    }

    :host([open][position="left"]) .drawer,
    :host([open][position="right"]) .drawer {
      transform: translateX(0);
    }

    :host([open][position="top"]) .drawer,
    :host([open][position="bottom"]) .drawer {
      transform: translateY(0);
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--sq-space-4) var(--sq-space-5);
      border-bottom: 1px solid var(--sq-border-subtle);
      flex-shrink: 0;
    }

    .header-title {
      font-size: var(--sq-text-lg);
      font-weight: var(--sq-font-weight-semibold);
      color: var(--sq-fg-default);
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
      font-size: var(--sq-text-lg);
      cursor: pointer;
      transition: var(--sq-transition-color);
    }

    .close-btn:hover {
      background: var(--sq-accent-primary-light);
      color: var(--sq-fg-default);
    }

    .body {
      flex: 1;
      padding: var(--sq-space-5);
      overflow-y: auto;
      font-size: var(--sq-text-sm);
      line-height: var(--sq-line-height-normal);
      color: var(--sq-fg-muted);
    }

    .footer {
      padding: var(--sq-space-4) var(--sq-space-5);
      border-top: 1px solid var(--sq-border-subtle);
      display: flex;
      justify-content: flex-end;
      gap: var(--sq-space-2);
      flex-shrink: 0;
    }
  `;

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String, reflect: true }) position: 'left' | 'right' | 'top' | 'bottom' = 'right';
  @property({ type: String }) title = '';
  @property({ type: Boolean }) closable = true;

  private close() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('sq-close'));
  }

  private onOverlayClick() {
    if (this.closable) {
      this.close();
    }
  }

  override updated(changed: Map<string, any>) {
    if (changed.has('open')) {
      if (this.open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  override render() {
    return html`
      <div class="overlay" @click=${this.onOverlayClick} aria-hidden="true"></div>
      <div class="drawer" role="dialog" aria-modal="true" aria-label=${this.title || 'Drawer'}>
        <div class="header">
          <span class="header-title"><slot name="header">${this.title}</slot></span>
          ${this.closable
            ? html`<button class="close-btn" @click=${this.close} aria-label="Close drawer">✕</button>`
            : ''}
        </div>
        <div class="body">
          <slot></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}
