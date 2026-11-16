import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Input Group — prefixed/suffixed inputs
 *
 * Wraps an input with prefix and suffix elements (e.g., currency symbols, units).
 * Supports slots for custom prefix/suffix content.
 *
 * @slot - Input element
 * @slot prefix - Leading prefix content
 * @slot suffix - Trailing suffix content
 */
@customElement('sq-input-group')
export class SqInputGroup extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .input-group {
      display: flex;
      align-items: center;
      border: 1px solid var(--sq-border-default);
      border-radius: var(--sq-radius-md);
      background: var(--sq-bg-surface);
      transition: var(--sq-transition-color);
      overflow: hidden;
    }

    .input-group:focus-within {
      border-color: var(--sq-accent-primary);
      box-shadow: 0 0 0 2px var(--sq-accent-primary-light);
    }

    :host([error]) .input-group {
      border-color: var(--sq-color-danger);
    }

    :host([disabled]) .input-group {
      opacity: 0.4;
      pointer-events: none;
    }

    .prefix,
    .suffix {
      display: flex;
      align-items: center;
      padding: 0 var(--sq-space-3);
      font-size: var(--sq-text-sm);
      color: var(--sq-fg-muted);
      white-space: nowrap;
      flex-shrink: 0;
    }

    .prefix {
      border-right: 1px solid var(--sq-border-subtle);
    }

    .suffix {
      border-left: 1px solid var(--sq-border-subtle);
    }

    .input-wrapper {
      flex: 1;
      min-width: 0;
    }

    .input-wrapper ::slotted(input),
    .input-wrapper ::slotted(sq-input) {
      border: none;
      outline: none;
      background: transparent;
      height: 40px;
      padding: 0 var(--sq-space-3);
      width: 100%;
      font-size: var(--sq-text-sm);
      font-family: var(--sq-font-family);
      color: var(--sq-fg-default);
    }

    .input-wrapper ::slotted(sq-input) {
      height: auto;
    }

    .input-wrapper ::slotted(input)::placeholder {
      color: var(--sq-fg-subtle);
    }

    .error-msg {
      font-size: var(--sq-text-xs);
      color: var(--sq-color-danger);
      margin-top: var(--sq-space-1);
    }

    .helper {
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-muted);
      margin-top: var(--sq-space-1);
    }
  `;

  @property({ type: Boolean }) error = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) errorMsg = '';
  @property({ type: String }) helperText = '';

  override render() {
    return html`
      <div class="input-group">
        ${this.querySelector('[slot="prefix"]') || this.querySelector('[slot="suffix"]') ? html`
          <div class="prefix"><slot name="prefix"></slot></div>
        ` : ''}
        <div class="input-wrapper">
          <slot></slot>
        </div>
        ${this.querySelector('[slot="suffix"]') || this.querySelector('[slot="prefix"]') ? html`
          <div class="suffix"><slot name="suffix"></slot></div>
        ` : ''}
      </div>
      ${this.error && this.errorMsg ? html`<span class="error-msg">${this.errorMsg}</span>` : ''}
      ${this.helperText && !this.error ? html`<span class="helper">${this.helperText}</span>` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-input-group': SqInputGroup;
  }
}
