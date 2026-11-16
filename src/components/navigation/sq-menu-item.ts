import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../text/sq-kbd';

/**
 * Squiddy Menu Item — menu item with optional nested submenu
 *
 * @slot - Menu item label
 * @slot icon - Leading icon
 * @slot submenu - Nested sq-menu for submenu
 * @cssprop --sq-fg-link - Default text color
 * @cssprop --sq-fg-link-hover - Hover text color
 * @cssprop --sq-accent-primary - Active/selected text color
 * @cssprop --sq-accent-primary-light - Hover background
 */
@customElement('sq-menu-item')
export class SqMenuItem extends LitElement {
  static override styles = css`
    :host {
      display: block;
      position: relative;
    }

    a {
      display: flex;
      align-items: center;
      gap: var(--sq-space-2);
      width: 100%;
      padding: var(--sq-space-2) var(--sq-space-3);
      border-radius: var(--sq-radius-sm);
      color: var(--sq-fg-link);
      text-decoration: none;
      font-size: var(--sq-text-sm);
      font-weight: var(--sq-font-weight-medium);
      transition: var(--sq-transition-color);
      cursor: pointer;
      position: relative;
      white-space: nowrap;
    }

    a:hover {
      background: var(--sq-accent-primary-light);
      color: var(--sq-fg-link-hover);
    }

    a:focus-visible {
      outline: 2px solid var(--sq-border-focus);
      outline-offset: 2px;
    }

    a:active {
      color: var(--sq-accent-primary);
    }

    :host([disabled]) a {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }

    /* Chevron indicator for submenu */
    a.has-submenu::after {
      content: '';
      display: inline-block;
      width: 6px;
      height: 6px;
      border-right: 2px solid currentColor;
      border-bottom: 2px solid currentColor;
      transform: rotate(45deg);
      margin-left: auto;
      flex-shrink: 0;
    }

    /* Kbd shortcut indicator */
    .kbd {
      margin-left: auto;
      font-size: var(--sq-text-xs);
      opacity: 0.7;
    }

    /* Submenu container */
    .submenu-container {
      position: absolute;
      z-index: var(--sq-z-dropdown);
      display: none;
    }

    .submenu-container.has-submenu {
      display: block;
    }

    /* Horizontal parent: submenu drops down */
    .submenu-container.horizontal-parent {
      top: 100%;
      left: 0;
    }

    /* Vertical parent: submenu expands right */
    .submenu-container.vertical-parent {
      top: 0;
      left: 100%;
    }

    /* Smart positioning flips */
    .submenu-container.flip-right {
      left: auto;
      right: 0;
    }

    .submenu-container.flip-up {
      top: auto;
      bottom: 0;
    }
  `;

  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) kbd = '';
  @property({ type: String }) href = '';
  @property({ type: Boolean }) expanded = false;

  @state() _hasSubmenu = false;
  @state() _parentOrientation: 'horizontal' | 'vertical' = 'horizontal';

  constructor() {
    super();
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('mouseenter', this._handleMouseEnter);
    this.addEventListener('mouseleave', this._handleMouseLeave);
    this.addEventListener('click', this._handleClick);
    this.addEventListener('keydown', this._handleKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('mouseenter', this._handleMouseEnter);
    this.removeEventListener('mouseleave', this._handleMouseLeave);
    this.removeEventListener('click', this._handleClick);
    this.removeEventListener('keydown', this._handleKeyDown);
  }

  firstUpdated() {
    this._detectParentOrientation();
    const slot = this.shadowRoot?.querySelector('slot[name="submenu"]') as HTMLSlotElement | null;
    if (slot) {
      const checkSubmenu = () => {
        const assigned = slot.assignedNodes();
        const hasSubmenu = assigned.length > 0;
        if (hasSubmenu !== this._hasSubmenu) {
          this._hasSubmenu = hasSubmenu;
          if (hasSubmenu) {
            this._detectParentOrientation();
          }
        }
      };
      slot.addEventListener('slotchange', checkSubmenu);
      checkSubmenu();
    }
  }

  _detectParentOrientation() {
    const parentMenu = this.closest('sq-menu');
    if (parentMenu) {
      this._parentOrientation = (parentMenu as any).orientation || 'horizontal';
    }
  }

  get hasSubmenu() {
    return this._hasSubmenu;
  }

  _handleMouseEnter() {
    if (this._hasSubmenu && !this.disabled) {
      this._openSubmenu();
    }
  }

  _handleMouseLeave() {
    // Delay closing to allow mouse to move into submenu
    setTimeout(() => {
      if (this._hasSubmenu && this.expanded) {
        const submenu = this._getSubmenuNav();
        if (submenu && !submenu.parentElement?.contains(document.activeElement)) {
          this._closeSubmenu();
        }
      }
    }, 100);
  }

  _handleClick(e: MouseEvent) {
    if (this.disabled) return;

    if (this._hasSubmenu) {
      e.preventDefault();
      this._toggleSubmenu();
    } else if (this.href) {
      window.location.href = this.href;
    }
  }

  _handleKeyDown(e: KeyboardEvent) {
    if (this.disabled) return;

    switch (e.key) {
      case 'Enter':
      case ' ': {
        e.preventDefault();
        if (this._hasSubmenu) {
          this._toggleSubmenu();
        } else if (this.href) {
          window.location.href = this.href;
        }
        break;
      }

      case 'ArrowRight': {
        e.preventDefault();
        if (this._hasSubmenu && !this.expanded) {
          this._openSubmenu();
          this._focusFirstSubmenuItem();
        }
        break;
      }

      case 'ArrowLeft': {
        e.preventDefault();
        if (this.expanded) {
          this._closeSubmenu();
        }
        break;
      }

      case 'Escape': {
        e.preventDefault();
        this._closeSubmenu();
        break;
      }
    }
  }

  _toggleSubmenu() {
    if (this.expanded) {
      this._closeSubmenu();
    } else {
      this._openSubmenu();
    }
  }

  _openSubmenu() {
    this.expanded = true;
    this._smartPositionSubmenu();
    requestAnimationFrame(() => {
      const nav = this._getSubmenuNav();
      nav?.classList.add('open');
    });
  }

  _closeSubmenu() {
    this.expanded = false;
    const nav = this._getSubmenuNav();
    nav?.classList.remove('open');
  }

  _getSubmenuNav(): HTMLElement | null {
    const container = this.shadowRoot?.querySelector('.submenu-container');
    if (!container) return null;
    const lightDomMenu = this.querySelector('sq-menu[slot="submenu"]');
    return lightDomMenu?.shadowRoot?.querySelector('nav') as HTMLElement | null;
  }

  _smartPositionSubmenu() {
    const container = this.shadowRoot?.querySelector('.submenu-container');
    if (!container) return;

    // Reset flip classes
    container.classList.remove('flip-right', 'flip-up');

    const rect = this.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // For horizontal parent (submenu drops down), check right edge overflow
    if (this._parentOrientation === 'horizontal') {
      if (rect.right + 200 > viewportWidth) {
        container.classList.add('flip-right');
      }
      if (rect.bottom + 200 > viewportHeight) {
        container.classList.add('flip-up');
      }
    } else {
      // For vertical parent (submenu expands right), check right edge overflow
      if (rect.right + 200 > viewportWidth) {
        container.classList.add('flip-right');
      }
    }
  }

  _focusFirstSubmenuItem() {
    requestAnimationFrame(() => {
      const lightDomMenu = this.querySelector('sq-menu[slot="submenu"]');
      const firstItem = lightDomMenu?.querySelector('sq-menu-item a');
      (firstItem as HTMLElement | null)?.focus();
    });
  }

  override render() {
    const linkClass = this._hasSubmenu ? 'has-submenu' : '';
    const containerClass = `submenu-container ${this._hasSubmenu ? 'has-submenu' : ''} ${this._parentOrientation}-parent`;

    return html`
      <a
        role="menuitem"
        class="${linkClass}"
        href=${this.href || undefined}
        aria-haspopup=${this._hasSubmenu ? 'true' : undefined}
        aria-expanded=${this._hasSubmenu ? this.expanded.toString() : undefined}
        tabindex="0"
      >
        <slot name="icon"></slot>
        <slot></slot>
        ${this.kbd ? html`<sq-kbd class="kbd">${this.kbd}</sq-kbd>` : ''}
      </a>
      <div class="${containerClass}">
        <slot name="submenu"></slot>
      </div>
    `;
  }
}
