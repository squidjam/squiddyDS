import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Meter — covers: `<meter>`
 */
@customElement('sq-meter')
export class SqMeter extends LitElement {
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
      height: 12px;
      border-radius: var(--sq-radius-full);
      background: var(--sq-border-subtle);
      overflow: hidden;
      position: relative;
    }

    .bar {
      height: 100%;
      border-radius: var(--sq-radius-full);
      transition: width var(--sq-motion-base), background var(--sq-motion-base);
    }

    .bar.low { background: var(--sq-color-warning); }
    .bar.high { background: var(--sq-color-success); }
    .bar.danger { background: var(--sq-color-danger); }

    .label {
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-muted);
      font-variant-numeric: tabular-nums;
      min-width: 48px;
      text-align: right;
    }
  `;

  @property({ type: Number }) value = 0;
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 1;
  @property({ type: Number }) low = 0.33;
  @property({ type: Number }) high = 0.66;
  @property({ type: Number }) optimum?: number;
  @property({ type: Boolean }) showLabel = false;

  get normalizedValue() {
    return Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
  }

  get colorClass() {
    const v = this.normalizedValue;
    if (this.optimum !== undefined) {
      const optNorm = (this.optimum - this.min) / (this.max - this.min);
      if (optNorm <= this.low) return v > optNorm ? 'high' : 'danger';
      if (optNorm >= this.high) return v < optNorm ? 'low' : 'danger';
    }
    if (v <= this.low) return 'low';
    if (v >= this.high) return 'high';
    return '';
  }

  override render() {
    const pct = Math.round(this.normalizedValue * 100);
    return html`
      <div class="container">
        <div class="track">
          <div class="bar ${this.colorClass}" style="width: ${pct}%"></div>
        </div>
        ${this.showLabel ? html`<span class="label">${this.value} / ${this.max}</span>` : ''}
      </div>
    `;
  }
}
