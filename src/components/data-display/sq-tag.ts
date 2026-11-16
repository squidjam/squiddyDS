import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Tag — removable chips for filtering or categorization
 *
 * Displays a small tag/chip with optional remove button.
 * Supports multiple variants and sizes.
 *
 * @fires remove - Fired when the remove button is clicked
 */
@customElement('sq-tag')
export class SqTag extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
    }

    .tag {
      display: inline-flex;
      align-items: center;
      gap: var(--sq-space-1);
      padding: var(--sq-space-1) var(--sq-space-2);
      border-radius: var(--sq-radius-full);
      font-size: var(--sq-text-xs);
      font-family: var(--sq-font-family);
      font-weight: var(--sq-font-weight-medium);
      white-space: nowrap;
      user-select: none;
      transition: var(--sq-transition-color);
      border: 1px solid transparent;
    }

    :host([variant="default"]) .tag {
      background: var(--sq-bg-subtle);
      color: var(--sq-fg-default);
      border-color: var(--sq-border-subtle);
    }

    :host([variant="primary"]) .tag {
      background: var(--sq-accent-primary-light);
      color: var(--sq-accent-primary);
      border-color: var(--sq-accent-primary);
    }

    :host([variant="success"]) .tag {
      background: var(--sq-color-success-light);
      color: var(--sq-color-success);
      border-color: var(--sq-color-success);
    }

    :host([variant="warning"]) .tag {
      background: var(--sq-color-warning-light);
      color: var(--sq-color-warning);
      border-color: var(--sq-color-warning);
    }

    :host([variant="error"]) .tag {
      background: var(--sq-color-danger-light);
      color: var(--sq-color-danger);
      border-color: var(--sq-color-danger);
    }

    :host([variant="info"]) .tag {
      background: var(--sq-color-info-light);
      color: var(--sq-color-info);
      border-color: var(--sq-color-info);
    }

    :host([size="sm"]) .tag {
      padding: 0 var(--sq-space-2);
      font-size: var(--sq-text-xs);
    }

    :host([size="lg"]) .tag {
      padding: var(--sq-space-1) var(--sq-space-3);
      font-size: var(--sq-text-sm);
    }

    :host([removable]):hover .tag {
      opacity: 0.8;
    }

    .remove-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      border: none;
      border-radius: var(--sq-radius-full);
      background: transparent;
      color: inherit;
      cursor: pointer;
      opacity: 0.6;
      transition: var(--sq-transition-color);
      padding: 0;
      line-height: 0;
      font-size: 14px;
    }

    .remove-btn:hover {
      opacity: 1;
      background: rgba(0, 0, 0, 0.1);
    }

    :host([disabled]) .tag {
      opacity: 0.4;
      pointer-events: none;
    }

    :host([clickable]) .tag {
      cursor: pointer;
    }

    :host([clickable]) .tag:hover {
      opacity: 0.85;
    }
  `;

  @property({ type: String }) label = '';
  @property({ type: String, reflect: true }) variant: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' = 'default';
  @property({ type: String, reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: Boolean, reflect: true }) removable = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) clickable = false;

  private _onRemove = (e: Event) => {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent('remove', {
      bubbles: true,
      composed: true,
    }));
  };

  override render() {
    return html`
      <span class="tag" role="tag">
        <slot>${this.label}</slot>
        ${this.removable ? html`
          <button class="remove-btn" @click=${this._onRemove} aria-label="Remove ${this.label}">&times;</button>
        ` : ''}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-tag': SqTag;
  }
}
