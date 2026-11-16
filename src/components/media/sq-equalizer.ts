import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Squiddy Equalizer — animated bar visualizer for media playback.
 *
 * @cssproperty --sq-space-* - Spacing scale
 */
@customElement('sq-equalizer')
export class SqEqualizer extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
      align-items: flex-end;
      gap: 2px;
      height: var(--sq-space-5);
    }

    .equalizer {
      display: inline-flex;
      align-items: flex-end;
      gap: 2px;
      height: 100%;
    }

    .bar {
      width: 3px;
      background: var(--sq-accent-primary);
      border-radius: 1px;
      animation: equalizer var(--duration, 0.8s) ease-in-out infinite alternate;
    }

    :host([variant="success"]) .bar {
      background: var(--sq-color-success);
    }

    :host([variant="warning"]) .bar {
      background: var(--sq-color-warning);
    }

    :host([variant="danger"]) .bar {
      background: var(--sq-color-danger);
    }

    :host([variant="info"]) .bar {
      background: var(--sq-color-info);
    }

    :host([paused]) .bar {
      animation-play-state: paused;
    }

    @keyframes equalizer {
      0% { height: 20%; }
      100% { height: 100%; }
    }
  `;

  @property({ type: Number }) bars = 8;
  @property({ type: String }) variant: 'default' | 'success' | 'warning' | 'danger' | 'info' = 'default';
  @property({ type: Boolean }) paused = false;
  @property({ type: String }) duration = '0.8s';

  @state() private barHeights: number[] = [];

  override willUpdate() {
    if (!this.barHeights || this.barHeights.length !== this.bars) {
      this.barHeights = Array.from({ length: this.bars }, () =>
        Math.random() * 100
      );
    }
  }

  override render() {
    const barStyles = (index: number) => {
      const delay = (index * 0.1).toFixed(1);
      return `animation-delay: ${delay}s; height: ${this.barHeights[index]}%;`;
    };

    return html`
      <div class="equalizer">
        ${Array.from({ length: this.bars }, (_, i) =>
          html`<span class="bar" style="${barStyles(i)}"></span>`
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-equalizer': SqEqualizer;
  }
}
