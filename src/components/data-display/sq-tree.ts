import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  expanded?: boolean;
  selected?: boolean;
  disabled?: boolean;
  icon?: string;
  [key: string]: unknown;
}

/**
 * Squiddy Tree — displays hierarchical data with expand/collapse nodes.
 *
 * @slot - Default slot for custom tree structure.
 *
 * @example
 * ```html
 * <sq-tree .nodes=${treeData} selection-mode="single"></sq-tree>
 * ```
 */
@customElement('sq-tree')
export class SqTree extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-size: var(--sq-text-sm);
      color: var(--sq-fg-default);
    }

    .tree {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .tree ul {
      list-style: none;
      margin: 0;
      padding-left: var(--sq-space-4);
      border-left: 1px solid var(--sq-border-subtle);
      margin-left: var(--sq-space-2);
    }

    .tree-item {
      position: relative;
    }

    .tree-item-content {
      display: flex;
      align-items: center;
      gap: var(--sq-space-1);
      padding: var(--sq-space-1) var(--sq-space-2);
      border-radius: var(--sq-radius-sm);
      cursor: pointer;
      transition: background var(--sq-transition-fast);
      user-select: none;
    }

    .tree-item-content:hover {
      background: var(--sq-bg-subtle);
    }

    .tree-item[data-selected='true'] > .tree-item-content {
      background: var(--sq-accent-primary-light);
      color: var(--sq-accent-primary);
    }

    .tree-item[data-disabled='true'] > .tree-item-content {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .tree-item-icon {
      width: var(--sq-space-4);
      height: var(--sq-space-4);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-muted);
      transition: transform var(--sq-transition-fast);
    }

    .tree-item-icon[expanded] {
      transform: rotate(90deg);
    }

    .tree-item-icon[leaf] {
      visibility: hidden;
    }

    .tree-item-checkbox {
      flex-shrink: 0;
    }

    .tree-item-custom-icon {
      flex-shrink: 0;
      font-size: var(--sq-text-sm);
    }

    .tree-item-label {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .tree-item-children {
      overflow: hidden;
      transition: max-height var(--sq-motion-base);
    }

    .tree-item-children[collapsed] {
      max-height: 0;
    }

    .tree-search {
      width: 100%;
      padding: var(--sq-space-2) var(--sq-space-3);
      border: 1px solid var(--sq-border-default);
      border-radius: var(--sq-radius-md);
      font-size: var(--sq-text-sm);
      background: var(--sq-bg-surface);
      color: var(--sq-fg-default);
      margin-bottom: var(--sq-space-2);
    }

    .tree-search:focus {
      outline: none;
      border-color: var(--sq-accent-primary);
      box-shadow: 0 0 0 2px var(--sq-accent-primary-light);
    }

    .tree-empty {
      padding: var(--sq-space-4);
      text-align: center;
      color: var(--sq-fg-muted);
      font-style: italic;
    }
  `;

  /** Array of tree nodes. */
  @property({ type: Array }) nodes: TreeNode[] = [];

  /** Selection mode: none, single, or multiple. */
  @property({ type: String, reflect: true, attribute: 'selection-mode' }) selectionMode: 'none' | 'single' | 'multiple' = 'none';

  /** Whether to show checkboxes for selection. */
  @property({ type: Boolean, reflect: true, attribute: 'show-checkboxes' }) showCheckboxes = false;

  /** Whether to enable search/filter functionality. */
  @property({ type: Boolean, reflect: true, attribute: 'show-search' }) showSearch = false;

  /** Search query for filtering nodes. */
  @property({ type: String, reflect: true }) search = '';

  /** Whether to expand all nodes by default. */
  @property({ type: Boolean, reflect: true, attribute: 'expand-all' }) expandAll = false;

  @state() private _selectedIds = new Set<string>();
  @state() private _expandedIds = new Set<string>();
  @state() private _filteredNodes: TreeNode[] = [];

  connectedCallback() {
    super.connectedCallback();
    this._initExpandedState();
  }

  private _initExpandedState() {
    this._expandedIds = new Set();
    this._walkNodes(this.nodes, (node) => {
      if (node.expanded || this.expandAll) {
        this._expandedIds.add(node.id);
      }
    });
    this._updateFilteredNodes();
  }

  private _walkNodes(nodes: TreeNode[], callback: (node: TreeNode) => void) {
    for (const node of nodes) {
      callback(node);
      if (node.children?.length) {
        this._walkNodes(node.children, callback);
      }
    }
  }

  private _updateFilteredNodes() {
    if (!this.search) {
      this._filteredNodes = this.nodes;
    } else {
      const query = this.search.toLowerCase();
      this._filteredNodes = this._filterNodes(this.nodes, query);
    }
  }

  private _filterNodes(nodes: TreeNode[], query: string): TreeNode[] {
    return nodes.reduce<TreeNode[]>((result, node) => {
      const labelMatch = node.label.toLowerCase().includes(query);
      const filteredChildren = node.children ? this._filterNodes(node.children, query) : [];

      if (labelMatch || filteredChildren.length > 0) {
        const newNode = { ...node };
        if (filteredChildren.length > 0) {
          newNode.children = filteredChildren;
          newNode.expanded = true;
          this._expandedIds.add(node.id);
        } else {
          newNode.children = undefined;
        }
        result.push(newNode);
      }

      return result;
    }, []);
  }

  private _toggleExpand(nodeId: string) {
    const newExpanded = new Set(this._expandedIds);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    this._expandedIds = newExpanded;
  }

  private _toggleSelect(node: TreeNode, e: MouseEvent) {
    if (node.disabled) return;

    const newSelected = new Set(this._selectedIds);

    if (this.selectionMode === 'single') {
      newSelected.clear();
      newSelected.add(node.id);
    } else if (this.selectionMode === 'multiple') {
      if (e.ctrlKey || e.metaKey) {
        if (newSelected.has(node.id)) {
          newSelected.delete(node.id);
        } else {
          newSelected.add(node.id);
        }
      } else {
        newSelected.add(node.id);
      }
    }

    this._selectedIds = newSelected;
    this.dispatchEvent(new CustomEvent('selection-change', {
      detail: { selected: Array.from(newSelected), node },
      bubbles: true,
      composed: true,
    }));
  }

  private _toggleCheckbox(node: TreeNode) {
    if (node.disabled) return;

    const newSelected = new Set(this._selectedIds);
    if (newSelected.has(node.id)) {
      newSelected.delete(node.id);
    } else {
      newSelected.add(node.id);
    }

    // Toggle children recursively
    if (node.children?.length) {
      this._toggleChildrenSelection(node.children, newSelected, true);
    }

    this._selectedIds = newSelected;
    this.dispatchEvent(new CustomEvent('selection-change', {
      detail: { selected: Array.from(newSelected), node },
      bubbles: true,
      composed: true,
    }));
  }

  private _toggleChildrenSelection(nodes: TreeNode[], selected: Set<string>, isSelected: boolean) {
    for (const node of nodes) {
      if (isSelected) {
        selected.add(node.id);
      } else {
        selected.delete(node.id);
      }
      if (node.children?.length) {
        this._toggleChildrenSelection(node.children, selected, isSelected);
      }
    }
  }

  /** Returns the currently selected nodes. */
  get selectedNodes(): TreeNode[] {
    const result: TreeNode[] = [];
    this._findSelected(this.nodes, result);
    return result;
  }

  private _findSelected(nodes: TreeNode[], result: TreeNode[]) {
    for (const node of nodes) {
      if (this._selectedIds.has(node.id)) {
        result.push(node);
      }
      if (node.children?.length) {
        this._findSelected(node.children, result);
      }
    }
  }

  override render() {
    const nodesToRender = this._filteredNodes.length !== this.nodes.length
      ? this._filteredNodes
      : this.nodes;

    return html`
      ${this.showSearch ? this._renderSearch() : ''}
      ${nodesToRender.length
        ? html`<ul class="tree">${nodesToRender.map(node => this._renderNode(node))}</ul>`
        : html`<div class="tree-empty">No items found</div>`}
    `;
  }

  private _renderSearch() {
    return html`
      <input
        type="search"
        class="tree-search"
        placeholder="Search..."
        .value=${this.search}
        @input=${(e: Event) => {
          this.search = (e.target as HTMLInputElement).value;
          this._updateFilteredNodes();
        }}
        @keyup.escape=${() => {
          this.search = '';
          this._updateFilteredNodes();
        }}
      />
    `;
  }

  private _renderNode(node: TreeNode): TemplateResult {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = this._expandedIds.has(node.id);
    const isSelected = this._selectedIds.has(node.id);

    return html`
      <li class="tree-item" data-selected="${isSelected}" data-disabled="${node.disabled || false}">
        <div
          class="tree-item-content"
          @click=${(e: MouseEvent) => {
            if (this.showCheckboxes) return;
            this._toggleSelect(node, e);
          }}
          @dblclick=${() => hasChildren && this._toggleExpand(node.id)}
        >
          <span
            class="tree-item-icon"
            ?expanded=${isExpanded}
            ?leaf=${!hasChildren}
            @click=${() => hasChildren && this._toggleExpand(node.id)}
          >
            ${hasChildren ? '▶' : ''}
          </span>
          ${this.showCheckboxes ? html`
            <label class="tree-item-checkbox" @click=${(e: Event) => {
              e.stopPropagation();
              this._toggleCheckbox(node);
            }}>
              <input
                type="checkbox"
                ?checked=${isSelected}
                ?disabled=${node.disabled}
              />
            </label>
          ` : ''}
          ${node.icon ? html`<span class="tree-item-custom-icon">${node.icon}</span>` : ''}
          <span class="tree-item-label">${node.label}</span>
        </div>
        ${hasChildren ? html`
          <ul class="tree-item-children" ?collapsed=${!isExpanded}>
            ${node.children!.map(child => this._renderNode(child))}
          </ul>
        ` : ''}
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-tree': SqTree;
  }
}
