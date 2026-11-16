import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/** Squiddy Container — covers: `<div>` (as container), `<center>` */
@customElement('sq-container')
export class SqContainer extends LitElement {
  static override styles = css`
    :host { display: block; }
    .container {
      max-width: 100%;
      margin: 0 auto;
    }
    :host([size="sm"]) .container { max-width: 640px; }
    :host([size="md"]) .container { max-width: 768px; }
    :host([size="lg"]) .container { max-width: 1024px; }
    :host([size="xl"]) .container { max-width: 1280px; }
    :host([padded]) .container { padding: 0 var(--sq-space-4); }
  `;
  @property({ type: String }) size: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'xl';
  @property({ type: Boolean }) padded = true;
  override render() { return html`<div class="container"><slot></slot></div>`; }
}
