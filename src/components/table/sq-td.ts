/**
 * Squiddy Table Data Cell — `<sq-td>`
 *
 * An inner content wrapper for `<td>` that works inside `<table sq-table>` elements.
 * Place it inside a `<td>` element to control the data cell content styling.
 *
 * Usage:
 *   <table sq-table>
 *     <tbody>
 *       <tr>
 *         <td><sq-td>Alice</sq-td></td>
 *         <td><sq-td align="right">$1,234</sq-td></td>
 *         <td><sq-td align-vertical="top">Multi-line content</sq-td></td>
 *       </tr>
 *     </tbody>
 *   </table>
 *
 * Attributes:
 * - `align`: text alignment (left, center, right)
 * - `align-vertical`: vertical alignment (top, middle, bottom)
 * - `truncate`: ellipsis overflow for long text
 */
class SqTd extends HTMLElement {
  static stylesInjected = false;

  connectedCallback() {
    if (!SqTd.stylesInjected) {
      SqTd.stylesInjected = true;
      const style = document.createElement('style');
      style.textContent = `
        sq-td {
          display: block;
        }

        /* Inherit border from parent table styles */
        /* sq-td is inside <td>, so the <td> handles borders via table styles */

        /* Alignment variants */
        sq-td[align="center"] {
          text-align: center;
        }
        sq-td[align="right"] {
          text-align: right;
        }

        /* Truncate long text with ellipsis */
        sq-td[truncate] {
          max-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /* Vertical alignment override */
        sq-td[align-vertical="top"] {
          display: block;
          height: 100%;
          vertical-align: top;
        }
        sq-td[align-vertical="bottom"] {
          display: block;
          height: 100%;
          vertical-align: bottom;
        }

        /* Dense mode — inherited from parent table */
        /* Padding is handled by the parent <td> element via table styles */
      `;
      document.head.appendChild(style);
    }
  }

  /** Text alignment */
  get align(): string {
    return this.getAttribute('align') || 'left';
  }

  set align(v: string) {
    if (v) this.setAttribute('align', v);
    else this.removeAttribute('align');
  }

  /** Vertical alignment */
  get alignVertical(): string {
    return this.getAttribute('align-vertical') || 'middle';
  }

  set alignVertical(v: string) {
    if (v) this.setAttribute('align-vertical', v);
    else this.removeAttribute('align-vertical');
  }

  /** Whether to truncate long text with ellipsis */
  get truncate(): boolean {
    return this.hasAttribute('truncate');
  }

  set truncate(v: boolean) {
    if (v) this.setAttribute('truncate', '');
    else this.removeAttribute('truncate');
  }
}

customElements.define('sq-td', SqTd);

export { SqTd };
