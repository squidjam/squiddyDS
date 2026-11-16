import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Menu — container with infinite nested submenus
 *
 * @slot - Menu items (sq-menu-item, sq-menu-divider)
 * @cssprop --sq-bg-surface - Background color for the menu
 * @cssprop --sq-border-subtle - Border color
 * @cssprop --sq-shadow-md - Shadow for block layout
 */
@customElement('sq-menu')
export class SqMenu extends LitElement {
  static override styles = css`
    :host {
      display: block;
      position: relative;
    }

    nav {
      display: flex;
      align-items: center;
      gap: var(--sq-space-1);
      padding: var(--sq-space-2);
      border: 1px solid var(--sq-border-subtle);
      border-radius: var(--sq-radius-md);
      background: var(--sq-bg-surface);
      list-style: none;
      margin: 0;
    }

    nav[layout="block"] {
      box-shadow: var(--sq-shadow-md);
    }

    nav[orientation="vertical"] {
      flex-direction: column;
      align-items: stretch;
    }

    /* Submenu positioning */
    nav.submenu {
      position: absolute;
      z-index: var(--sq-z-dropdown);
      min-width: 200px;
      padding: var(--sq-space-1);
      box-shadow: var(--sq-shadow-md);
      border: 1px solid var(--sq-border-subtle);
      opacity: 0;
      visibility: hidden;
      transform: translateY(var(--sq-space-2));
      transition: opacity var(--sq-motion-fast), transform var(--sq-motion-fast), visibility var(--sq-motion-fast);
    }

    nav.submenu.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    /* Horizontal menu: submenu drops down */
    nav.submenu[orientation="vertical"] {
      top: 100%;
      left: 0;
    }

    /* Vertical menu: submenu expands right */
    nav.submenu[orientation="horizontal"] {
      top: 0;
      left: 100%;
    }

    /* Smart positioning flips */
    nav.submenu.flip-right {
      left: auto;
      right: 0;
    }

    nav.submenu.flip-up {
      top: auto;
      bottom: 0;
      transform: translateY(var(--sq-space-2));
    }
    nav.submenu.flip-up.open {
      transform: translateY(0);
    }
  `;

  @property({ type: String }) orientation: 'horizontal' | 'vertical' = 'horizontal';
  @property({ type: String }) layout: 'inline' | 'block' = 'inline';

  constructor() {
    super();
    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._handleOutsideClick = this._handleOutsideClick.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', this._handleKeyDown);
  }

  override updated() {
    document.addEventListener('click', this._handleOutsideClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._handleKeyDown);
    document.removeEventListener('click', this._handleOutsideClick);
  }

  _handleOutsideClick(e: MouseEvent) {
    if (!this.contains(e.target as Node)) {
      this.closeAllSubmenus();
    }
  }

  closeAllSubmenus() {
    const submenus = this.querySelectorAll('sq-menu-item .submenu-container nav.submenu');
    submenus.forEach((nav: Element) => nav.classList.remove('open'));
    const items = this.querySelectorAll('sq-menu-item');
    items.forEach((item: any) => {
      if (item.hasSubmenu) {
        item.expanded = false;
      }
    });
  }

  _handleKeyDown(e: KeyboardEvent) {
    const items = Array.from(this.querySelectorAll('sq-menu-item:not([disabled])')) as HTMLElement[];
    const currentIndex = items.indexOf(document.activeElement as HTMLElement);

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown': {
        e.preventDefault();
        const isVertical = this.orientation === 'vertical';
        const next = isVertical
          ? items[(currentIndex + 1) % items.length]
          : items[(currentIndex + 1) % items.length];
        next?.focus();
        break;
      }

      case 'ArrowLeft':
      case 'ArrowUp': {
        e.preventDefault();
        const isVertical = this.orientation === 'vertical';
        const prev = isVertical
          ? items[(currentIndex - 1 + items.length) % items.length]
          : items[(currentIndex - 1 + items.length) % items.length];
        prev?.focus();
        break;
      }

      case 'Home': {
        e.preventDefault();
        items[0]?.focus();
        break;
      }

      case 'End': {
        e.preventDefault();
        items[items.length - 1]?.focus();
        break;
      }

      case 'Escape': {
        e.preventDefault();
        this.closeAllSubmenus();
        this.blur();
        break;
      }
    }
  }

  override render() {
    const isSubmenu = this.classList.contains('submenu') || this.hasAttribute('submenu');
    const navClass = isSubmenu ? 'submenu' : '';

    return html`
      <nav
        role="menu"
        class="${navClass}"
        orientation=${this.orientation}
        layout=${this.layout}
      >
        <slot></slot>
      </nav>
    `;
  }
}
