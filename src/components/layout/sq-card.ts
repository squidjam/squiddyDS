import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Card — covers: `<div>` (as card), `<canvas>`
 *
 * @slot header - Card header
 * @slot - Card body
 * @slot footer - Card footer
 * @slot actions - Card actions
 */
@customElement('sq-card')
export class SqCard extends LitElement {
  static override styles = css`
    :host { display: block; }
    .card {
      border-radius: var(--sq-radius-lg);
      overflow: hidden;
      transition: var(--sq-transition-color), box-shadow var(--sq-motion-base);
    }
    .card.elevated {
      background: var(--sq-bg-surface);
      box-shadow: var(--sq-shadow-md);
      border: 1px solid var(--sq-border-subtle);
    }
    .card.outlined {
      background: var(--sq-bg-default);
      border: 1px solid var(--sq-border-default);
    }
    .card.filled {
      background: var(--sq-bg-elevated);
      border: 1px solid var(--sq-border-subtle);
    }
    :host([interactive]):hover .card {
      box-shadow: var(--sq-shadow-lg);
      border-color: var(--sq-accent-primary);
    }
    .header {
      padding: var(--sq-space-4) var(--sq-space-6);
      border-bottom: 1px solid var(--sq-border-subtle);
    }
    .body { padding: var(--sq-space-6); }
    .footer {
      padding: var(--sq-space-4) var(--sq-space-6);
      border-top: 1px solid var(--sq-border-subtle);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `;
  @property({ type: String }) variant: 'elevated' | 'outlined' | 'filled' = 'elevated';
  @property({ type: Boolean }) interactive = false;
  override render() {
    return html`
      <div class="card ${this.variant}">
        <div class="header"><slot name="header"></slot></div>
        <div class="body"><slot></slot></div>
        <div class="footer"><slot name="footer"></slot><slot name="actions"></slot></div>
      </div>
    `;
  }
}
