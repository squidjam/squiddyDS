import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Badge — covers: `<span>` (notification badge)
 *
 * A small indicator for counts, status, or notifications. Can be used standalone or as an overlay on icons/buttons.
 *
 * @slot - Badge content (e.g., count number)
 *
 * @cssproperty --sq-radius-full - Circular badge shape
 */
@customElement('sq-badge')
export class SqBadge extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 20px;
      height: 20px;
      padding: 0 var(--sq-space-1);
      border-radius: var(--sq-radius-full);
      font-family: var(--sq-font-family);
      font-size: 11px;
      font-weight: var(--sq-font-weight-semibold);
      line-height: 1;
      text-align: center;
      white-space: nowrap;
      user-select: none;
    }

    /* ---- Dot variant ---- */
    .badge.dot {
      min-width: 8px;
      width: 8px;
      height: 8px;
      padding: 0;
    }

    /* ---- Default ---- */
    .badge[variant="default"] {
      background: var(--sq-bg-subtle);
      color: var(--sq-fg-default);
    }

    /* ---- Primary ---- */
    .badge[variant="primary"] {
      background: var(--sq-accent-primary);
      color: var(--sq-fg-inverse);
    }

    /* ---- Success ---- */
    .badge[variant="success"] {
      background: var(--sq-color-success);
      color: var(--sq-fg-inverse);
    }

    /* ---- Warning ---- */
    .badge[variant="warning"] {
      background: var(--sq-color-warning);
      color: var(--sq-fg-inverse);
    }

    /* ---- Danger ---- */
    .badge[variant="danger"] {
      background: var(--sq-color-danger);
      color: var(--sq-fg-inverse);
    }

    /* ---- Info ---- */
    .badge[variant="info"] {
      background: var(--sq-color-info);
      color: var(--sq-fg-inverse);
    }

    /* ---- Sizes ---- */
    .badge[size="sm"] {
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-size: 9px;
    }

    .badge[size="lg"] {
      min-width: 24px;
      height: 24px;
      padding: 0 var(--sq-space-2);
      font-size: var(--sq-text-xs);
    }

    /* ---- Outlined ---- */
    .badge.outlined {
      background: transparent;
      border: 2px solid currentColor;
    }

    .badge.outlined[variant="default"] {
      color: var(--sq-fg-default);
    }

    .badge.outlined[variant="primary"] {
      color: var(--sq-accent-primary);
    }

    .badge.outlined[variant="success"] {
      color: var(--sq-color-success);
    }

    .badge.outlined[variant="warning"] {
      color: var(--sq-color-warning);
    }

    .badge.outlined[variant="danger"] {
      color: var(--sq-color-danger);
    }

    .badge.outlined[variant="info"] {
      color: var(--sq-color-info);
    }
  `;

  @property({ type: String }) variant: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' = 'primary';
  @property({ type: String }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: Boolean }) dot = false;
  @property({ type: Boolean }) outlined = false;
  @property({ type: Number }) count = 0;

  override render() {
    const dotClass = this.dot ? 'dot' : '';
    const outlinedClass = this.outlined ? 'outlined' : '';

    if (this.dot) {
      return html`<span class="badge ${dotClass} ${outlinedClass}" variant=${this.variant}></span>`;
    }

    const content = this.count > 0 ? (this.count > 99 ? '99+' : this.count.toString()) : '';

    return html`
      <span class="badge ${dotClass} ${outlinedClass}" variant=${this.variant} size=${this.size}>
        <slot>${content}</slot>
      </span>
    `;
  }
}

/**
 * Squiddy Badge Wrapper — wraps an element with a badge overlay
 *
 * @slot - Content to wrap (e.g., icon, button)
 * @slot badge - Badge element
 */
@customElement('sq-badge-wrapper')
export class SqBadgeWrapper extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .badge-container {
      position: absolute;
      top: -6px;
      right: -6px;
      z-index: var(--sq-z-dropdown);
    }
  `;

  override render() {
    return html`
      <slot></slot>
      <div class="badge-container">
        <slot name="badge"></slot>
      </div>
    `;
  }
}
