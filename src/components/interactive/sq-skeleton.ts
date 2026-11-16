import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Skeleton — loading placeholder
 *
 * Displays a shimmering placeholder shape to indicate loading content.
 */
@customElement('sq-skeleton')
export class SqSkeleton extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .skeleton {
      background: var(--sq-border-subtle);
      border-radius: var(--sq-radius-md);
      position: relative;
      overflow: hidden;
      width: var(--sq-width, 100%);
      height: var(--sq-height, 16px);
    }

    .skeleton::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0.4) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      animation: sq-shimmer 1.5s infinite;
    }

    :host([variant="circle"]) .skeleton {
      border-radius: var(--sq-radius-full);
    }

    :host([variant="rounded"]) .skeleton {
      border-radius: var(--sq-radius-full);
    }

    @keyframes sq-shimmer {
      100% {
        transform: translateX(100%);
      }
    }
  `;

  @property({ type: String }) variant = 'rect';
  @property({ type: String }) width = '100%';
  @property({ type: String }) height = '16px';

  override render() {
    return html`
      <div
        class="skeleton"
        role="presentation"
        aria-hidden="true"
        style="--sq-width: ${this.width}; --sq-height: ${this.height};"
      ></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-skeleton': SqSkeleton;
  }
}
