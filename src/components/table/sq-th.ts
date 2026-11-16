/**
 * Squiddy Table Header Cell — `<sq-th>`
 *
 * An inner content wrapper for `<th>` that works inside `<table sq-table>` elements.
 * Place it inside a `<th>` element to control the header cell content styling.
 *
 * Usage:
 *   <table sq-table>
 *     <thead>
 *       <tr>
 *         <th><sq-th>Name</sq-th></th>
 *         <th><sq-th align="right">Price</sq-th></th>
 *         <th><sq-th align-vertical="top">Multi-line</sq-th></th>
 *       </tr>
 *     </thead>
 *   </table>
 *
 * Attributes:
 * - `align`: text alignment (left, center, right)
 * - `align-vertical`: vertical alignment (top, middle, bottom)
 * - `sort`: sort direction indicator (asc, desc)
 */
class SqTh extends HTMLElement {
  static stylesInjected = false;

  connectedCallback() {
    if (!SqTh.stylesInjected) {
      SqTh.stylesInjected = true;
      const style = document.createElement('style');
      style.textContent = `
        sq-th {
          display: block;
          font-weight: var(--sq-font-weight-semibold, 600);
          color: var(--sq-fg-default, inherit);
        }

        /* sq-th is inside <th>, so the <th> handles borders via table styles */

        /* Alignment variants */
        sq-th[align="center"] {
          text-align: center;
        }
        sq-th[align="right"] {
          text-align: right;
        }

        /* Sort indicator */
        sq-th[sort]::after {
          content: '';
          display: inline-block;
          width: 0.5rem;
          height: 0.5rem;
          margin-left: 0.5rem;
          vertical-align: middle;
        }
        sq-th[sort="asc"]::after {
          content: '↑';
        }
        sq-th[sort="desc"]::after {
          content: '↓';
        }

        /* Vertical alignment override */
        sq-th[align-vertical="top"] {
          display: block;
          height: 100%;
          vertical-align: top;
        }
        sq-th[align-vertical="bottom"] {
          display: block;
          height: 100%;
          vertical-align: bottom;
        }

        /* Padding is handled by the parent <th> element via table styles */
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

  /** Sort direction indicator */
  get sort(): string {
    return this.getAttribute('sort') || '';
  }

  set sort(v: string) {
    if (v) this.setAttribute('sort', v);
    else this.removeAttribute('sort');
  }
}

customElements.define('sq-th', SqTh);

export { SqTh };
