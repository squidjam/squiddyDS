import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Dialog — covers: `<dialog>`
 *
 * @slot header - Dialog header content
 * @slot - Dialog body content
 * @slot footer - Dialog footer actions
 */
@customElement('sq-dialog')
export class SqDialog extends LitElement {
  static override styles = css`
    :host {
      display: contents;
    }

    dialog {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      max-width: 560px;
      max-height: 80vh;
      padding: 0;
      border: 1px solid var(--sq-border-default);
      border-radius: var(--sq-radius-lg);
      background: var(--sq-bg-surface);
      color: var(--sq-fg-default);
      box-shadow: var(--sq-shadow-lg);
      overflow: hidden;
      transition: opacity var(--sq-motion-base), transform var(--sq-motion-base);
    }

    dialog:not([open]) {
      opacity: 0;
      transform: scale(0.95);
      pointer-events: none;
    }

    dialog::backdrop {
      background: var(--sq-bg-overlay);
      backdrop-filter: blur(4px);
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--sq-space-2) var(--sq-space-6) var(--sq-space-4);
      border-bottom: 1px solid var(--sq-border-subtle);
    }

    .header h2 {
      margin: 0;
      font-size: var(--sq-text-lg);
      font-weight: var(--sq-font-weight-semibold);
    }

    .close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      padding: 0;
      border: none;
      border-radius: var(--sq-radius-sm);
      background: transparent;
      color: var(--sq-fg-muted);
      cursor: pointer;
      font-size: var(--sq-text-xl);
      transition: var(--sq-transition-color);
    }

    .close-btn:hover {
      background: var(--sq-accent-primary-light);
      color: var(--sq-fg-default);
    }

    .body {
      padding: var(--sq-space-6);
      overflow-y: auto;
      font-size: var(--sq-text-md);
      line-height: var(--sq-line-height-normal);
      border-bottom: 1px solid var(--sq-border-subtle);
    }

    .body h1,
    .body h2,
    .body h3,
    .body h4,
    .body h5,
    .body h6 {
      margin-top: 0;
      margin-bottom: 0;
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      gap: var(--sq-space-3);
      padding: var(--sq-space-4) var(--sq-space-6);
    }
  `;

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) label = '';

  private _dialog?: HTMLDialogElement;

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this._onBackdropClick);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._onBackdropClick);
  }

  private _onBackdropClick = (e: MouseEvent) => {
    const dialog = this._dialog;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const target = e.target as Node;
    if (target === dialog && (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom)) {
      this.close();
    }
  };

  show() {
    this._dialog?.showModal();
    this.open = true;
  }

  close() {
    this._dialog?.close();
    this.open = false;
  }

  override render() {
    return html`
      <dialog
        ref=${(el: HTMLDialogElement | undefined) => this._dialog = el}
        ?open=${this.open}
        aria-label=${this.label || undefined}
      >
        ${this._renderHeader()}
        <div class="body"><slot></slot></div>
        ${this._renderFooter()}
      </dialog>
    `;
  }

  private _renderHeader() {
    return html`
      <div class="header">
        <slot name="header">${this.label ? html`<h2>${this.label}</h2>` : ''}</slot>
        <button class="close-btn" @click=${this.close} aria-label="Close">&times;</button>
      </div>
    `;
  }

  private _renderFooter() {
    return html`
      <div class="footer"><slot name="footer"></slot></div>
    `;
  }
}
