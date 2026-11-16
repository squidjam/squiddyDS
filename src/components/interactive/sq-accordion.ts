import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Accordion — covers: `<details>` (accordion group)
 *
 * A vertically stacked, expandable accordion. Each item is an `<sq-accordion-item>`.
 *
 * @slot - Accordion items (`<sq-accordion-item>`)
 *
 * @fires sq-change - Emitted when an item is toggled
 */
@customElement('sq-accordion')
export class SqAccordion extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .accordion {
      border: 1px solid var(--sq-border-subtle);
      border-radius: var(--sq-radius-lg);
      overflow: hidden;
      background: var(--sq-bg-surface);
    }

    sq-accordion-item:not(:last-child) {
      border-bottom: 1px solid var(--sq-border-subtle);
    }
  `;

  @property({ type: String }) variant: 'default' | 'bordered' = 'default';
  @property({ type: Boolean }) multiple = false;

  override render() {
    return html`
      <div class="accordion" role="region">
        <slot></slot>
      </div>
    `;
  }
}

/**
 * Squiddy Accordion Item — individual accordion panel
 *
 * @slot header - Item header/title
 * @slot - Item content
 */
@customElement('sq-accordion-item')
export class SqAccordionItem extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--sq-space-4) var(--sq-space-5);
      cursor: pointer;
      font-weight: var(--sq-font-weight-medium);
      font-size: var(--sq-text-sm);
      color: var(--sq-fg-default);
      transition: var(--sq-transition-color);
      user-select: none;
    }

    .header:hover {
      background: var(--sq-accent-primary-light);
    }

    .header:focus-visible {
      outline: 2px solid var(--sq-border-focus);
      outline-offset: -2px;
    }

    .chevron {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      transition: transform var(--sq-motion-base);
      color: var(--sq-fg-muted);
    }

    :host([open]) .chevron {
      transform: rotate(180deg);
    }

    .content {
      max-height: 0;
      overflow: hidden;
      transition: max-height var(--sq-motion-slow);
    }

    :host([open]) .content {
      max-height: 1000px;
    }

    .content-inner {
      padding: var(--sq-space-3) var(--sq-space-5) var(--sq-space-5);
      font-size: var(--sq-text-sm);
      line-height: var(--sq-line-height-normal);
      color: var(--sq-fg-muted);
    }
  `;

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) header = '';

  private toggle() {
    this.open = !this.open;
    this.dispatchEvent(new CustomEvent('sq-change', { detail: { open: this.open }, bubbles: true }));
  }

  override render() {
    return html`
      <div
        class="header"
        role="button"
        tabindex="0"
        aria-expanded=${this.open}
        @click=${this.toggle}
        @keydown=${(e: KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.toggle();
          }
        }}
      >
        <span><slot name="header">${this.header}</slot></span>
        <span class="chevron" aria-hidden="true">▼</span>
      </div>
      <div class="content" role="region">
        <div class="content-inner">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
