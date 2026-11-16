import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Spinner — loading indicator
 *
 * Displays an animated circular spinner with configurable size and color.
 */
@customElement('sq-spinner')
export class SqSpinner extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .spinner {
      width: var(--sq-size);
      height: var(--sq-size);
      border: var(--sq-border-width) solid var(--sq-track-color);
      border-top-color: var(--sq-accent-color);
      border-radius: 50%;
      animation: sq-spin var(--sq-duration) linear infinite;
    }

    @keyframes sq-spin {
      to {
        transform: rotate(360deg);
      }
    }
  `;

  @property({ type: String }) size = 'md';
  @property({ type: String }) color = 'primary';
  @property({ type: String }) speed = 'normal';
  @property({ type: String }) label = 'Loading';

  private _getCssVars() {
    const sizeMap: Record<string, string> = { sm: '16px', md: '32px', lg: '48px' };
    const colorMap: Record<string, string> = {
      primary: 'var(--sq-accent-primary)',
      success: 'var(--sq-color-success)',
      warning: 'var(--sq-color-warning)',
      error: 'var(--sq-color-danger)',
      info: 'var(--sq-color-info)',
    };
    const speedMap: Record<string, string> = {
      slow: '2s',
      normal: '0.8s',
      fast: '0.4s',
      ultra: '0.2s',
    };
    return {
      '--sq-size': sizeMap[this.size] || sizeMap.md,
      '--sq-border-width': '3px',
      '--sq-track-color': 'var(--sq-border-subtle)',
      '--sq-accent-color': colorMap[this.color] || colorMap.primary,
      '--sq-duration': speedMap[this.speed] || speedMap.normal,
    };
  }

  override render() {
    return html`
      <span class="spinner" role="status" aria-label="${this.label}" style="${Object.entries(this._getCssVars()).map(([k, v]) => `${k}: ${v}`).join('; ')}"></span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-spinner': SqSpinner;
  }
}
