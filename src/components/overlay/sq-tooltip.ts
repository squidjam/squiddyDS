import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Tooltip — contextual hover/focus information overlay
 *
 * Displays a tooltip when the trigger element is hovered or focused.
 * Supports multiple positions and variants.
 *
 * @slot - Trigger content
 */
@customElement('sq-tooltip')
export class SqTooltip extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .trigger {
      display: inline-block;
      cursor: default;
    }

    .tooltip {
      position: absolute;
      left: 50%;
      padding: var(--sq-space-2) var(--sq-space-3);
      background: var(--sq-bg-inverse);
      color: var(--sq-fg-inverse);
      font-size: var(--sq-text-xs);
      font-family: var(--sq-font-family);
      line-height: var(--sq-line-height-normal);
      border-radius: var(--sq-radius-md);
      box-shadow: var(--sq-shadow-md);
      white-space: nowrap;
      z-index: 1000;
      opacity: 0;
      pointer-events: none;
      transition: opacity var(--sq-motion-fast);
      transform: translateX(-50%);
    }

    :host([open]) .tooltip {
      opacity: 1;
    }

    :host([position="top"]) .tooltip {
      bottom: calc(100% + var(--sq-space-2));
    }

    :host([position="bottom"]) .tooltip {
      top: calc(100% + var(--sq-space-2));
    }

    :host([position="left"]) .tooltip {
      right: calc(100% + var(--sq-space-2));
      bottom: 50%;
      left: auto;
      transform: translateY(50%);
    }

    :host([position="right"]) .tooltip {
      left: calc(100% + var(--sq-space-2));
      bottom: 50%;
      transform: translateY(50%);
    }

    :host([variant="default"]) .tooltip {
      background: var(--sq-bg-inverse);
      color: var(--sq-fg-inverse);
    }

    :host([variant="info"]) .tooltip {
      background: var(--sq-color-info);
      color: var(--sq-fg-inverse);
    }

    :host([variant="success"]) .tooltip {
      background: var(--sq-color-success);
      color: var(--sq-fg-inverse);
    }

    :host([variant="warning"]) .tooltip {
      background: var(--sq-color-warning);
      color: var(--sq-fg-inverse);
    }

    :host([variant="error"]) .tooltip {
      background: var(--sq-color-danger);
      color: var(--sq-fg-inverse);
    }

    .tooltip::after {
      content: '';
      position: absolute;
      border: 5px solid transparent;
    }

    :host([position="top"]) .tooltip::after {
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      border-top-color: var(--sq-bg-inverse);
    }

    :host([position="bottom"]) .tooltip::after {
      top: -5px;
      left: 50%;
      transform: translateX(-50%);
      border-bottom-color: var(--sq-bg-inverse);
    }

    :host([position="left"]) .tooltip::after {
      right: -5px;
      top: 50%;
      transform: translateY(-50%);
      border-left-color: var(--sq-bg-inverse);
    }

    :host([position="right"]) .tooltip::after {
      left: -5px;
      top: 50%;
      transform: translateY(-50%);
      border-right-color: var(--sq-bg-inverse);
    }

    :host([position="top"][variant="info"]) .tooltip::after { border-top-color: var(--sq-color-info); }
    :host([position="bottom"][variant="info"]) .tooltip::after { border-bottom-color: var(--sq-color-info); }
    :host([position="left"][variant="info"]) .tooltip::after { border-left-color: var(--sq-color-info); }
    :host([position="right"][variant="info"]) .tooltip::after { border-right-color: var(--sq-color-info); }

    :host([position="top"][variant="success"]) .tooltip::after { border-top-color: var(--sq-color-success); }
    :host([position="bottom"][variant="success"]) .tooltip::after { border-bottom-color: var(--sq-color-success); }
    :host([position="left"][variant="success"]) .tooltip::after { border-left-color: var(--sq-color-success); }
    :host([position="right"][variant="success"]) .tooltip::after { border-right-color: var(--sq-color-success); }

    :host([position="top"][variant="warning"]) .tooltip::after { border-top-color: var(--sq-color-warning); }
    :host([position="bottom"][variant="warning"]) .tooltip::after { border-bottom-color: var(--sq-color-warning); }
    :host([position="left"][variant="warning"]) .tooltip::after { border-left-color: var(--sq-color-warning); }
    :host([position="right"][variant="warning"]) .tooltip::after { border-right-color: var(--sq-color-warning); }

    :host([position="top"][variant="error"]) .tooltip::after { border-top-color: var(--sq-color-danger); }
    :host([position="bottom"][variant="error"]) .tooltip::after { border-bottom-color: var(--sq-color-danger); }
    :host([position="left"][variant="error"]) .tooltip::after { border-left-color: var(--sq-color-danger); }
    :host([position="right"][variant="error"]) .tooltip::after { border-right-color: var(--sq-color-danger); }
  `;

  @property({ type: String }) content = '';
  @property({ type: String }) position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @property({ type: String }) variant: 'default' | 'info' | 'success' | 'warning' | 'error' = 'default';
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: Boolean }) hover = false;
  @property({ type: Number }) delay = 200;

  private _timer?: ReturnType<typeof setTimeout>;

  private _show() {
    if (this.hover) {
      clearTimeout(this._timer);
      this._timer = setTimeout(() => {
        this.open = true;
      }, this.delay);
    } else {
      this.open = true;
    }
  }

  private _hide() {
    clearTimeout(this._timer);
    this.open = false;
  }

  override connectedCallback() {
    super.connectedCallback();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this._timer);
  }

  override render() {
    return html`
      <div
        class="trigger"
        @mouseenter=${this._show}
        @mouseleave=${this._hide}
        @focus=${this._show}
        @blur=${this._hide}
        role="tooltip"
      >
        <slot></slot>
      </div>
      <div class="tooltip" role="tooltip">
        ${this.content}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-tooltip': SqTooltip;
  }
}
