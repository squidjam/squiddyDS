import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy List — covers: `<ul>`, `<ol>`, `<menu>`, `<li>`
 *
 * @slot - List items
 */
@customElement('sq-list')
export class SqList extends LitElement {
  static override styles = css`
    :host { display: block; }
    ul, ol {
      margin: 0;
      padding-left: var(--sq-space-6);
      font-size: var(--sq-text-sm);
      color: var(--sq-fg-default);
    }
    :host([type="definition"]) ul, :host([type="definition"]) ol {
      list-style: none;
      padding-left: 0;
    }
    ul ::slotted(li),
    ol ::slotted(li) {
      padding: var(--sq-space-1) 0;
      line-height: var(--sq-line-height-normal);
    }
    :host([dense]) ul ::slotted(li),
    :host([dense]) ol ::slotted(li) {
      padding: 2px 0;
      line-height: var(--sq-line-height-tight);
    }
    :host([bordered]) ul ::slotted(li),
    :host([bordered]) ol ::slotted(li) {
      padding: var(--sq-space-2) var(--sq-space-3);
      border-bottom: 1px solid var(--sq-border-subtle);
    }
    :host([bordered]) ul ::slotted(li:last-child),
    :host([bordered]) ol ::slotted(li:last-child) {
      border-bottom: none;
    }
  `;
  @property({ type: String }) type: 'unordered' | 'ordered' | 'definition' = 'unordered';
  @property({ type: Boolean }) dense = false;
  @property({ type: Boolean }) bordered = false;
  override render() {
    if (this.type === 'ordered') {
      return html`<ol part="list"><slot></slot></ol>`;
    }
    return html`<ul part="list"><slot></slot></ul>`;
  }
}
