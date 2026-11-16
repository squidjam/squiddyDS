import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Caption — small descriptive text
 *
 * Displays small caption text for images, figures, or other media.
 * Supports alignment and variant styling.
 */
@customElement('sq-caption')
export class SqCaption extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .caption {
      font-family: var(--sq-font-family);
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-muted);
      line-height: var(--sq-line-height-normal);
      margin: 0;
      text-align: var(--sq-align, center);
    }

    :host([variant="default"]) .caption {
      color: var(--sq-fg-muted);
    }

    :host([variant="subtle"]) .caption {
      color: var(--sq-fg-subtle);
    }

    :host([variant="emphasis"]) .caption {
      color: var(--sq-fg-default);
      font-weight: var(--sq-font-weight-medium);
    }

    :host([align="left"]) .caption {
      text-align: left;
    }

    :host([align="center"]) .caption {
      text-align: center;
    }

    :host([align="right"]) .caption {
      text-align: right;
    }
  `;

  @property({ type: String }) variant: 'default' | 'subtle' | 'emphasis' = 'default';
  @property({ type: String }) align: 'left' | 'center' | 'right' = 'center';

  override render() {
    return html`
      <figcaption class="caption">
        <slot></slot>
      </figcaption>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-caption': SqCaption;
  }
}
