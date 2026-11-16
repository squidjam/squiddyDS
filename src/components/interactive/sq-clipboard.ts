import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Squiddy Clipboard — copy to clipboard button
 *
 * Copies the provided text to the clipboard and shows feedback.
 *
 * @fires copy
 */
@customElement('sq-clipboard')
export class SqClipboard extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
    }

    .clipboard-btn {
      display: inline-flex;
      align-items: center;
      gap: var(--sq-space-2);
      padding: var(--sq-space-2) var(--sq-space-3);
      border: 1px solid var(--sq-border-subtle);
      border-radius: var(--sq-radius-md);
      background: var(--sq-bg-surface);
      color: var(--sq-fg-default);
      font-size: var(--sq-text-sm);
      font-family: var(--sq-font-family);
      cursor: pointer;
      transition: var(--sq-transition-color);
    }

    .clipboard-btn:hover {
      background: var(--sq-accent-primary-light);
      border-color: var(--sq-accent-primary);
    }

    .clipboard-btn:focus-visible {
      outline: 2px solid var(--sq-border-focus);
      outline-offset: 2px;
    }

    .clipboard-btn.copied {
      background: var(--sq-color-success-light);
      border-color: var(--sq-color-success);
      color: var(--sq-color-success);
    }

    .icon {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }

    .label {
      white-space: nowrap;
    }
  `;

  @property({ type: String }) text = '';
  @property({ type: String }) label = 'Copy';
  @property({ type: String }) copiedLabel = 'Copied!';
  @property({ type: Number }) feedbackDuration = 2000;
  @state() private _copied = false;
  private _timer?: ReturnType<typeof setTimeout>;

  private _copy() {
    if (!this.text) return;
    navigator.clipboard.writeText(this.text).then(() => {
      this._copied = true;
      this.dispatchEvent(new CustomEvent('copy', { detail: { text: this.text } }));
      clearTimeout(this._timer);
      this._timer = setTimeout(() => {
        this._copied = false;
      }, this.feedbackDuration);
    }).catch(() => {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = this.text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      this._copied = true;
      this.dispatchEvent(new CustomEvent('copy', { detail: { text: this.text } }));
      clearTimeout(this._timer);
      this._timer = setTimeout(() => {
        this._copied = false;
      }, this.feedbackDuration);
    });
  }

  private _getCopyIcon() {
    return html`
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
      </svg>
    `;
  }

  private _getCheckIcon() {
    return html`
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    `;
  }

  override render() {
    return html`
      <button
        class="clipboard-btn ${this._copied ? 'copied' : ''}"
        @click=${this._copy}
        aria-label="${this._copied ? this.copiedLabel : this.label}"
      >
        ${this._copied ? this._getCheckIcon() : this._getCopyIcon()}
        <span class="label">${this._copied ? this.copiedLabel : this.label}</span>
      </button>
    `;
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this._timer);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-clipboard': SqClipboard;
  }
}
