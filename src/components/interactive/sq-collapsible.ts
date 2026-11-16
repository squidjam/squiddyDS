import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Collapsible — expandable content section
 *
 * Displays a header that toggles visibility of the slotted content.
 *
 * @fires change
 */
@customElement('sq-collapsible')
export class SqCollapsible extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .collapsible {
      border: 1px solid var(--sq-border-subtle);
      border-radius: var(--sq-radius-md);
      overflow: hidden;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: var(--sq-space-3) var(--sq-space-4);
      background: var(--sq-bg-surface);
      border: none;
      cursor: pointer;
      font-size: var(--sq-text-md);
      font-weight: var(--sq-font-weight-medium);
      color: var(--sq-fg-default);
      text-align: left;
      transition: background-color var(--sq-motion-fast);
    }

    .header:hover {
      background: var(--sq-accent-primary-light);
    }

    .header:focus-visible {
      outline: 2px solid var(--sq-border-focus);
      outline-offset: -2px;
    }

    .header[disabled] {
      cursor: not-allowed;
      opacity: 0.5;
    }

    .chevron {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      transition: transform var(--sq-motion-base);
      color: var(--sq-fg-muted);
    }

    .chevron.open {
      transform: rotate(180deg);
    }

    .content {
      max-height: 0;
      overflow: hidden;
      transition: max-height var(--sq-motion-slow);
    }

    .content.open {
      max-height: 5000px;
    }

    .content-inner {
      padding: var(--sq-space-4);
    }
  `;

  @property({ type: String }) headerText = 'Toggle';
  @property({ type: Boolean }) open = false;
  @property({ type: Boolean }) disabled = false;

  private _toggle() {
    if (this.disabled) return;
    this.open = !this.open;
    this.dispatchEvent(new CustomEvent('change', { detail: { open: this.open } }));
  }

  override render() {
    return html`
      <div class="collapsible">
        <button
          class="header"
          ?disabled=${this.disabled}
          @click=${this._toggle}
          aria-expanded=${this.open}
          aria-controls="sq-collapsible-content"
        >
          <span>${this.headerText}</span>
          <svg class="chevron ${this.open ? 'open' : ''}" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </button>
        <div class="content ${this.open ? 'open' : ''}" id="sq-collapsible-content">
          <div class="content-inner">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-collapsible': SqCollapsible;
  }
}
