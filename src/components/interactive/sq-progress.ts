import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Progress — covers: `<progress>`
 */
@customElement('sq-progress')
export class SqProgress extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .container {
      display: flex;
      align-items: center;
      gap: var(--sq-space-3);
    }

    .track {
      flex: 1;
      height: 8px;
      border-radius: var(--sq-radius-full);
      background: var(--sq-border-subtle);
      overflow: hidden;
    }

    .bar {
      height: 100%;
      border-radius: var(--sq-radius-full);
      background: var(--sq-accent-primary);
      transition: width var(--sq-motion-base);
    }

    .bar.indeterminate {
      width: 30% !important;
      animation: indeterminate 1.5s ease-in-out infinite;
    }

    @keyframes indeterminate {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(400%); }
    }

    .label {
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-muted);
      font-variant-numeric: tabular-nums;
      min-width: 36px;
      text-align: right;
    }
  `;

  @property({ type: Number }) value = 0;
  @property({ type: Number }) max = 100;
  @property({ type: Boolean }) indeterminate = false;
  @property({ type: Boolean }) showLabel = false;

  get percentage() {
    if (this.indeterminate) return null;
    return Math.round((this.value / this.max) * 100);
  }

  override render() {
    const pct = this.percentage ?? 0;
    return html`
      <div class="container">
        <div class="track">
          <div class="bar ${this.indeterminate ? 'indeterminate' : ''}" style="width: ${pct}%"></div>
        </div>
        ${this.showLabel ? html`<span class="label">${this.percentage ?? '?'}%</span>` : ''}
      </div>
    `;
  }
}
