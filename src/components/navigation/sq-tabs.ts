import { LitElement, html, css } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

/**
 * Squiddy Tabs — covers: `<nav>` (tab list) + tab panels
 *
 * A horizontal tab bar with associated content panels.
 *
 * @slot - Tab items (`<sq-tab>`)
 *
 * @fires sq-change - Emitted when the active tab changes
 */
@customElement('sq-tabs')
export class SqTabs extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .tabs {
      display: flex;
      gap: var(--sq-space-1);
      border-bottom: 2px solid var(--sq-border-subtle);
      padding-bottom: 0;
    }

    .tabs.pill {
      background: var(--sq-bg-subtle);
      border-bottom: none;
      border-radius: var(--sq-radius-full);
      padding: var(--sq-space-1);
    }

    .panel {
      padding: var(--sq-space-4) 0;
    }
  `;

  @property({ type: String, reflect: true }) variant: 'line' | 'pill' = 'line';

  @query('.tabs') tabsContainer!: HTMLElement | null;
  @state() tabs: SqTab[] = [];
  @state() panels: SqTabPanel[] = [];

  @property({ type: Number }) activeIndex = 0;

  private _activeIndex = 0;

  private _updateActive() {
    if (!this.tabs.length) return;
    this._activeIndex = Math.max(0, Math.min(this._activeIndex, this.tabs.length - 1));
    this.tabs.forEach((tab, i) => {
      tab.active = i === this._activeIndex;
    });
    this.panels.forEach((panel, i) => {
      panel.active = i === this._activeIndex;
    });
  }

  registerTab(tab: SqTab) {
    this.tabs = [...this.tabs, tab];
    if (this.tabs.length === 1) {
      this._updateActive();
    }
  }

  registerPanel(panel: SqTabPanel) {
    this.panels = [...this.panels, panel];
    this._updateActive();
  }

  selectTab(index: number) {
    this.activeIndex = index;
    this.dispatchEvent(new CustomEvent('sq-change', { detail: { index } }));
  }

  override willUpdate(changedProperties: Map<string, unknown>) {
    super.willUpdate(changedProperties);
    if (changedProperties.has('activeIndex')) {
      this._activeIndex = this.activeIndex;
    }
  }

  override updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('activeIndex') || changedProperties.has('tabs') || changedProperties.has('panels')) {
      this._updateActive();
    }
  }

  override render() {
    return html`
      <div class="tabs ${this.variant}" role="tablist">
        <slot @slotchange=${this._onSlotChange}></slot>
      </div>
      <div class="panel">
        <slot name="panel"></slot>
      </div>
    `;
  }

  private _onSlotChange() {
    // Re-collect tabs from the default slot (panels register themselves via connectedCallback)
    const defaultSlot = this.renderRoot.querySelector('slot:not([name])') as HTMLSlotElement | undefined;
    if (defaultSlot) {
      const assigned = defaultSlot.assignedElements() || [];
      this.tabs = assigned.filter((el): el is SqTab => el instanceof SqTab);
    }
    this._updateActive();
  }
}

/**
 * Squiddy Tab — individual tab button
 *
 * @slot - Tab label
 */
@customElement('sq-tab')
export class SqTab extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .tab {
      display: inline-flex;
      align-items: center;
      gap: var(--sq-space-2);
      padding: var(--sq-space-2) var(--sq-space-4);
      border: none;
      border-bottom: 2px solid transparent;
      margin-bottom: -2px;
      background: transparent;
      color: var(--sq-fg-muted);
      font-family: var(--sq-font-family);
      font-size: var(--sq-text-sm);
      font-weight: var(--sq-font-weight-medium);
      cursor: pointer;
      transition: var(--sq-transition-color);
      white-space: nowrap;
      user-select: none;
    }

    .tab:hover {
      color: var(--sq-fg-default);
    }

    :host([active]) .tab {
      color: var(--sq-accent-primary);
      border-bottom-color: var(--sq-accent-primary);
    }

    .tab:focus-visible {
      outline: 2px solid var(--sq-border-focus);
      outline-offset: 2px;
    }

    /* ---- Pill variant ---- */
    :host(:is(.pill-tab)) .tab {
      border-bottom: none;
      border-radius: var(--sq-radius-full);
      margin-bottom: 0;
    }

    :host(:is(.pill-tab)[active]) .tab {
      background: var(--sq-bg-surface);
      color: var(--sq-accent-primary);
      box-shadow: var(--sq-shadow-sm);
    }

    /* ---- Badge ---- */
    .badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 18px;
      height: 18px;
      padding: 0 5px;
      border-radius: var(--sq-radius-full);
      background: var(--sq-color-danger);
      color: var(--sq-fg-inverse);
      font-size: 10px;
      font-weight: var(--sq-font-weight-semibold);
      line-height: 1;
    }
  `;

  @property({ type: Boolean, reflect: true }) active = false;
  @property({ type: String }) label = '';
  @property({ type: Number }) badge = 0;

  private parent?: SqTabs;

  override connectedCallback() {
    super.connectedCallback();
    this.parent = this.closest('sq-tabs') || undefined;
    this.parent?.registerTab(this);
    // Mark pill variant tabs for CSS selector
    if (this.parent?.variant === 'pill') {
      this.classList.add('pill-tab');
    }
  }
  private handleClick() {
    const index = this.parent?.tabs.indexOf(this) ?? -1;
    if (index >= 0 && this.parent) {
      this.parent.selectTab(index);
    }
  }

  override render() {
    return html`
      <button
        class="tab"
        role="tab"
        aria-selected=${this.active}
        tabindex=${this.active ? 0 : -1}
        @click=${this.handleClick}
      >
        <slot name="icon"></slot>
        <slot>${this.label}</slot>
        ${this.badge > 0 ? html`<span class="badge">${this.badge}</span>` : ''}
      </button>
    `;
  }
}

/**
 * Squiddy Tab Panel — content panel for a tab
 */
@customElement('sq-tab-panel')
export class SqTabPanel extends LitElement {
  static override styles = css`
    :host {
      display: none;
    }
    :host([active]) {
      display: block;
    }
  `;

  @property({ type: Boolean, reflect: true }) active = false;

  private parent?: SqTabs;

  override connectedCallback() {
    super.connectedCallback();
    this.parent = this.closest('sq-tabs') || undefined;
    this.parent?.registerPanel(this);
  }
  override render() {
    return html`<slot></slot>`;
  }
}
