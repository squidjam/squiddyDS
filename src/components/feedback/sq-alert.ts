import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Alert — covers: `<div>` (alert/notification)
 *
 * Displays a contextual feedback message with optional icon and dismiss button.
 *
 * @slot header - Alert title
 * @slot - Alert body content
 * @slot action - Action button
 *
 * @fires sq-close - Emitted when the alert is dismissed
 */
@customElement('sq-alert')
export class SqAlert extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .alert {
      display: flex;
      align-items: flex-start;
      gap: var(--sq-space-3);
      padding: var(--sq-space-4) var(--sq-space-5);
      border-radius: var(--sq-radius-lg);
      font-family: var(--sq-font-family);
      font-size: var(--sq-text-sm);
      line-height: var(--sq-line-height-normal);
      transition: var(--sq-transition-color);
      position: relative;
      overflow: hidden;
    }

    /* ---- Left accent bar ---- */
    .alert::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      border-radius: var(--sq-radius-lg) 0 0 var(--sq-radius-lg);
    }

    /* ---- Default ---- */
    .alert[variant="default"] {
      background: var(--sq-bg-subtle);
      color: var(--sq-fg-default);
    }
    .alert[variant="default"]::before {
      background: var(--sq-fg-muted);
    }

    /* ---- Success ---- */
    .alert[variant="success"] {
      background: var(--sq-color-success-light);
      color: var(--sq-color-success);
    }
    .alert[variant="success"]::before {
      background: var(--sq-color-success);
    }

    /* ---- Warning ---- */
    .alert[variant="warning"] {
      background: var(--sq-color-warning-light);
      color: var(--sq-color-warning);
    }
    .alert[variant="warning"]::before {
      background: var(--sq-color-warning);
    }

    /* ---- Danger ---- */
    .alert[variant="danger"] {
      background: var(--sq-color-danger-light);
      color: var(--sq-color-danger);
    }
    .alert[variant="danger"]::before {
      background: var(--sq-color-danger);
    }

    /* ---- Info ---- */
    .alert[variant="info"] {
      background: var(--sq-color-info-light);
      color: var(--sq-color-info);
    }
    .alert[variant="info"]::before {
      background: var(--sq-color-info);
    }

    /* ---- Icon ---- */
    .icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      font-size: var(--sq-text-md);
      line-height: 1;
      margin-top: 1px;
    }

    /* ---- Content ---- */
    .content {
      flex: 1;
      min-width: 0;
    }

    .header {
      font-weight: var(--sq-font-weight-semibold);
      margin-bottom: var(--sq-space-1);
    }

    .body {
      opacity: 0.9;
    }

    /* ---- Close button ---- */
    .close-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border: none;
      border-radius: var(--sq-radius-md);
      background: transparent;
      color: inherit;
      font-size: var(--sq-text-sm);
      cursor: pointer;
      opacity: 0.6;
      transition: var(--sq-transition-color);
      flex-shrink: 0;
      padding: 0;
      line-height: 1;
    }

    .close-btn:hover {
      opacity: 1;
      background: rgba(0, 0, 0, 0.1);
    }

    /* ---- Action slot ---- */
    .action {
      flex-shrink: 0;
      margin-top: var(--sq-space-1);
    }

    /* ---- Dismissible animation ---- */
    :host([dismissed]) {
      display: none;
    }

    /* ---- Sizes ---- */
    .alert[size="sm"] {
      padding: var(--sq-space-3) var(--sq-space-4);
      font-size: var(--sq-text-xs);
    }

    .alert[size="lg"] {
      padding: var(--sq-space-5) var(--sq-space-6);
      font-size: var(--sq-text-md);
    }
  `;

  @property({ type: String }) variant: 'default' | 'success' | 'warning' | 'danger' | 'info' = 'info';
  @property({ type: String }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: String }) title = '';
  @property({ type: Boolean }) closable = false;
  @property({ type: Boolean }) dismissed = false;
  @property({ type: Boolean }) showIcon = true;

  private getIcon() {
    switch (this.variant) {
      case 'success': return '✓';
      case 'warning': return '⚠';
      case 'danger': return '✕';
      case 'info': return 'ℹ';
      default: return '';
    }
  }

  private onClose() {
    this.dismissed = true;
    this.dispatchEvent(new CustomEvent('sq-close'));
  }

  override render() {
    if (this.dismissed) return html``;

    return html`
      <div class="alert" role="alert" variant=${this.variant} size=${this.size}>
        ${this.showIcon
          ? html`<span class="icon" aria-hidden="true">${this.getIcon()}</span>`
          : ''}
        <div class="content">
          ${this.title || this.renderRoot?.querySelector('slot[name="header"]')
            ? html`<div class="header"><slot name="header">${this.title}</slot></div>`
            : ''}
          <div class="body"><slot></slot></div>
        </div>
        <div class="action"><slot name="action"></slot></div>
        ${this.closable
          ? html`<button class="close-btn" @click=${this.onClose} aria-label="Dismiss alert">✕</button>`
          : ''}
      </div>
    `;
  }
}
