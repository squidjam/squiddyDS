import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Heading — styled heading levels
 *
 * Displays consistent heading levels with proper sizing and spacing.
 * Supports h1 through h6 levels, alignment, and decorative variants.
 */
@customElement('sq-heading')
export class SqHeading extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .heading {
      font-family: var(--sq-font-family);
      font-weight: var(--sq-font-weight-bold);
      line-height: var(--sq-line-height-tight);
      color: var(--sq-fg-default);
      margin: 0;
      text-align: var(--sq-align, left);
    }

    :host([level="1"]) .heading {
      font-size: var(--sq-text-4xl);
    }

    :host([level="2"]) .heading {
      font-size: var(--sq-text-3xl);
    }

    :host([level="3"]) .heading {
      font-size: var(--sq-text-2xl);
    }

    :host([level="4"]) .heading {
      font-size: var(--sq-text-xl);
    }

    :host([level="5"]) .heading {
      font-size: var(--sq-text-lg);
    }

    :host([level="6"]) .heading {
      font-size: var(--sq-text-md);
    }

    :host([align="center"]) .heading {
      text-align: center;
    }

    :host([align="right"]) .heading {
      text-align: right;
    }

    :host([variant="accent"]) .heading {
      color: var(--sq-accent-primary);
    }

    :host([variant="muted"]) .heading {
      color: var(--sq-fg-muted);
    }

    :host([decorated]) .heading::after {
      content: '';
      display: block;
      width: 48px;
      height: 3px;
      background: var(--sq-accent-primary);
      border-radius: var(--sq-radius-full);
      margin-top: var(--sq-space-2);
    }

    :host([align="center"][decorated]) .heading::after {
      margin-left: auto;
      margin-right: auto;
    }

    :host([align="right"][decorated]) .heading::after {
      margin-left: auto;
    }
  `;

  @property({ type: String }) level: '1' | '2' | '3' | '4' | '5' | '6' = '2';
  @property({ type: String }) variant: 'default' | 'accent' | 'muted' = 'default';
  @property({ type: String }) align: 'left' | 'center' | 'right' = 'left';
  @property({ type: Boolean }) decorated = false;

  override render() {
    const tag = `h${this.level}`;
    return html`
      <div class="heading" part="heading" role="${tag}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-heading': SqHeading;
  }
}
