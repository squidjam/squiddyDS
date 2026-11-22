import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Squiddy Button — covers: `<button>`
 *
 * Five distinct variants:
 * - **primary**: Filled accent color, white text — main call to action
 * - **secondary**: Outlined accent border, accent text — secondary action
 * - **subtle**: Ghost style, no border, text-only — tertiary/ghost action
 * - **danger**: Filled red — destructive actions
 * - **success**: Filled green — positive confirmations
 * - **warning**: Filled amber — cautionary actions
 * - **info**: Filled blue — informational actions
 *
 * @slot - Button label
 * @slot icon - Leading icon
 *
 * @cssproperty --sq-accent-primary - Primary button background
 * @cssproperty --sq-radius-full - Pill-shaped border radius
 */
@customElement('sq-button')
export class SqButton extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
    }

    /* ---- Base Button ---- */
    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--sq-space-2);
      height: 40px;
      padding: 0 var(--sq-space-5);
      border: 2px solid transparent;
      border-radius: var(--sq-radius-full);
      background: var(--sq-accent-primary);
      color: var(--sq-fg-inverse);
      font-family: var(--sq-font-family);
      font-size: var(--sq-text-sm);
      font-weight: var(--sq-font-weight-semibold);
      line-height: 1.2;
      letter-spacing: 0.02em;
      cursor: pointer;
      transition: var(--sq-transition-color), transform var(--sq-motion-fast), box-shadow var(--sq-motion-fast);
      -webkit-font-smoothing: antialiased;
      white-space: nowrap;
      user-select: none;
    }

    button:hover {
      background: var(--sq-accent-primary-hover);
      transform: translateY(-1px);
      box-shadow: var(--sq-shadow-sm);
    }

    button:active {
      background: var(--sq-accent-primary-active);
      transform: translateY(0);
      box-shadow: none;
    }

    /* Primary and secondary variants get lift effect — semantic variants do not */
    button[variant="danger"]:hover,
    button[variant="success"]:hover,
    button[variant="warning"]:hover,
    button[variant="info"]:hover {
      transform: none;
      box-shadow: none;
    }
    button[variant="danger"]:active,
    button[variant="success"]:active,
    button[variant="warning"]:active,
    button[variant="info"]:active {
      transform: none;
      box-shadow: none;
    }

    button:focus-visible {
      outline: 2px solid var(--sq-border-focus);
      outline-offset: 2px;
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
      text-decoration: line-through;
      text-decoration-color: var(--sq-fg-muted);
      text-decoration-thickness: 2px;
    }

    /* ---- Primary (default) — filled accent ---- */
    /* Already set by base styles above */

    /* ---- Secondary — outlined accent border ---- */
    button[variant="secondary"] {
      background: transparent;
      color: var(--sq-accent-primary);
      border-color: var(--sq-accent-primary);
    }
    button[variant="secondary"]:hover {
      background: var(--sq-accent-primary-light);
      border-color: var(--sq-accent-primary-hover);
    }
    button[variant="secondary"]:active {
      background: var(--sq-accent-primary-light-hover);
      border-color: var(--sq-accent-primary-active);
    }

    /* ---- Subtle — ghost/text-only, no border ---- */
    button[variant="subtle"] {
      background: transparent;
      color: var(--sq-fg-default);
      border-color: transparent;
    }
    button[variant="subtle"]:hover {
      background: var(--sq-accent-primary-light);
      color: var(--sq-accent-primary);
    }
    button[variant="subtle"]:active {
      background: var(--sq-accent-primary-light-hover);
    }

    /* ---- Danger — filled red ---- */
    button[variant="danger"] {
      background: var(--sq-color-danger);
      color: var(--sq-fg-inverse);
      border-color: var(--sq-color-danger);
    }
    button[variant="danger"]:hover {
      background: #9A1D15;
      border-color: #9A1D15;
    }
    button[variant="danger"]:active {
      background: #7D1710;
      border-color: #7D1710;
    }

    /* ---- Success — filled green ---- */
    button[variant="success"] {
      background: var(--sq-color-success);
      color: var(--sq-fg-inverse);
      border-color: var(--sq-color-success);
    }
    button[variant="success"]:hover {
      background: #127034;
      border-color: #127034;
    }
    button[variant="success"]:active {
      background: #0D5A28;
      border-color: #0D5A28;
    }

    /* ---- Warning — filled amber ---- */
    button[variant="warning"] {
      background: var(--sq-color-warning);
      color: var(--sq-fg-inverse);
      border-color: var(--sq-color-warning);
    }
    button[variant="warning"]:hover {
      background: #924408;
      border-color: #924408;
    }
    button[variant="warning"]:active {
      background: #763606;
      border-color: #763606;
    }

    /* ---- Info — filled blue ---- */
    button[variant="info"] {
      background: var(--sq-color-info);
      color: var(--sq-fg-inverse);
      border-color: var(--sq-color-info);
    }
    button[variant="info"]:hover {
      background: #1D4ED8;
      border-color: #1D4ED8;
    }
    button[variant="info"]:active {
      background: #1E40AF;
      border-color: #1E40AF;
    }

    /* ---- Sizes ---- */
    button[size="sm"] {
      height: 36px;
      min-width: 36px;
      padding: 0 var(--sq-space-3);
      font-size: var(--sq-text-xs);
      gap: var(--sq-space-1);
    }

    button[size="lg"] {
      height: 48px;
      padding: 0 var(--sq-space-6);
      font-size: var(--sq-text-md);
      gap: var(--sq-space-2);
    }

    /* ---- Loading Spinner ---- */
    .spinner {
      width: 16px;
      height: 16px;
      border: 2px solid currentColor;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 0.6s linear infinite;
    }

    button[size="sm"] .spinner {
      width: 12px;
      height: 12px;
    }

    button[size="lg"] .spinner {
      width: 20px;
      height: 20px;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .icon-slot {
      display: flex;
    }
  `;

  @property({ type: String }) variant: 'primary' | 'secondary' | 'subtle' | 'danger' | 'success' | 'warning' | 'info' = 'primary';
  @property({ type: String }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) loading = false;
  @property({ type: String }) type: 'button' | 'submit' | 'reset' = 'button';
  @property({ type: Number }) loadingTimeout = 60000; // 60 seconds default

  #timeoutId: ReturnType<typeof setTimeout> | null = null;

  override updated(changed: Map<string, unknown>) {
    super.updated(changed);

    // Manage loading timeout
    if (this.loading && !this.disabled && this.loadingTimeout > 0) {
      this.#timeoutId = setTimeout(() => {
        this.dispatchEvent(new CustomEvent('loading-timeout', { bubbles: true }));
        this.loading = false;
        this.disabled = true;
      }, this.loadingTimeout);
    } else if (this.#timeoutId) {
      clearTimeout(this.#timeoutId);
      this.#timeoutId = null;
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this.#timeoutId) {
      clearTimeout(this.#timeoutId);
      this.#timeoutId = null;
    }
  }

  @state() hasIcon = false;

  override firstUpdated() {
    // Check for icon slot content on initial render
    const iconSlot = this.renderRoot.querySelector('slot[name="icon"]') as HTMLSlotElement | null;
    if (iconSlot) {
      iconSlot.addEventListener('slotchange', () => {
        this.hasIcon = iconSlot.assignedElements().length > 0;
        this.requestUpdate();
      });
      // Initial check
      this.hasIcon = iconSlot.assignedElements().length > 0;
    }
  }

  override render() {
    const isDisabled = this.disabled || this.loading;
    return html`
      <button
        type=${this.type}
        variant=${this.variant}
        size=${this.size}
        ?disabled=${isDisabled}
        title=${isDisabled ? 'This button is currently disabled' : ''}
      >
        ${this.hasIcon ? html`<slot name="icon" class="icon-slot"></slot>` : ''}
        ${this.loading ? html`<span class="spinner" aria-hidden="true"></span>` : ''}
        <slot></slot>
      </button>
    `;
  }
}
