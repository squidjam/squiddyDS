import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Link — covers: `<a>`
 *
 * @slot - Link text
 * @slot icon - Link icon
 */
@customElement('sq-link')
export class SqLink extends LitElement {
  static override styles = css`
    :host { display: inline; }
    a {
      display: inline-flex;
      align-items: center;
      gap: var(--sq-space-1);
      color: var(--sq-fg-link);
      text-decoration: none;
      font-size: var(--sq-text-sm);
      font-weight: var(--sq-font-weight-medium);
      transition: var(--sq-transition-color);
    }
    a:hover { color: var(--sq-fg-link-hover); }
    :host([variant="subtle"]) a { color: var(--sq-fg-muted); }
    :host([variant="subtle"]) a:hover { color: var(--sq-fg-default); }
    :host([variant="underline"]) a { text-decoration: underline; text-underline-offset: 2px; }
    a:focus-visible { outline: 2px solid var(--sq-border-focus); outline-offset: 2px; border-radius: 2px; }
    .external { margin-left: 2px; font-size: 10px; }
  `;
  @property({ type: String }) href = '';
  @property({ type: String }) variant: 'primary' | 'subtle' | 'underline' = 'primary';
  @property({ type: Boolean }) external = false;
  @property({ type: Boolean }) download = false;
  @property({ type: String }) target = '';
  override render() {
    return html`
      <a href=${this.href}
        ?download=${this.download}
        target=${this.target || (this.external ? '_blank' : '')}
        rel=${this.external ? 'noopener noreferrer' : ''}
      >
        <slot name="icon"></slot>
        <slot></slot>
        ${this.external ? html`<span class="external" aria-hidden="true">↗</span>` : ''}
      </a>
    `;
  }
}
