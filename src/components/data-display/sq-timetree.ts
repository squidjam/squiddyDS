import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export interface TimetreeNode {
  id: string;
  label: string;
  date?: string;
  description?: string;
  branch?: string;
  parentId?: string;
  mergeTargetId?: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  expanded?: boolean;
}

export interface TimetreeBranch {
  name: string;
  color: string;
}

/**
 * Squiddy Timetree — displays a branching timeline with multiple lanes,
 * fork points, and merge indicators (inspired by git history visualization).
 *
 * @slot header - Optional header above the timetree.
 *
 * @example
 * ```html
 * <sq-timetree .nodes=${nodes} .branches=${branches}></sq-timetree>
 * ```
 */
@customElement('sq-timetree')
export class SqTimetree extends LitElement {
  @state() private _dimensions: { nodePositions: Map<string, { x: number; y: number; lane: number }> } = { nodePositions: new Map() };

  static override styles = css`
    :host {
      display: block;
      overflow-x: auto;
      padding: var(--sq-space-4);
    }
    :host([variant="dense"]) { padding: var(--sq-space-2); }

    .timetree-header {
      margin-bottom: var(--sq-space-4);
    }

    .timetree {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0;
      min-width: fit-content;
    }

    .timetree svg.connectors {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
    }

    .timetree svg.connectors line {
      stroke: var(--branch-color, var(--sq-border-subtle));
      stroke-width: 2;
      fill: none;
    }

    :host([variant="dense"]) .timetree svg.connectors line {
      stroke-width: 1;
    }

    .branch-lanes {
      display: flex;
      gap: var(--sq-space-6);
      position: relative;
    }

    :host([variant="dense"]) .branch-lanes {
      gap: var(--sq-space-4);
    }

    .branch-lane {
      position: relative;
      flex: 0 0 200px;
      display: flex;
      flex-direction: column;
    }

    :host([variant="dense"]) .branch-lane {
      flex: 0 0 160px;
    }

    .branch-label {
      font-size: var(--sq-text-xs);
      font-weight: var(--sq-font-weight-semibold);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--sq-fg-muted);
      padding: var(--sq-space-2) 0;
      text-align: center;
      border-bottom: 2px solid var(--branch-color, var(--sq-accent-primary));
      margin-bottom: var(--sq-space-3);
    }

    :host([variant="dense"]) .branch-label {
      font-size: 10px;
      padding: var(--sq-space-1) 0;
      margin-bottom: var(--sq-space-1);
    }

    .node-row {
      position: relative;
      display: flex;
      align-items: center;
      min-height: 60px;
      padding: var(--sq-space-2) 0;
    }

    :host([variant="dense"]) .node-row {
      min-height: 36px;
      padding: var(--sq-space-1) 0;
    }

    .node {
      position: relative;
      display: flex;
      align-items: center;
      gap: var(--sq-space-2);
      cursor: pointer;
      padding: var(--sq-space-2);
      border-radius: var(--sq-radius-md);
      transition: background var(--sq-transition-fast);
      z-index: 1;
    }

    :host([variant="dense"]) .node {
      gap: var(--sq-space-1);
      padding: var(--sq-space-1);
    }

    .node:hover {
      background: var(--sq-bg-subtle);
    }

    .node-dot {
      width: var(--sq-space-4);
      height: var(--sq-space-4);
      border-radius: 50%;
      background: var(--branch-color, var(--sq-accent-primary));
      border: 2px solid var(--sq-bg-surface);
      box-shadow: 0 0 0 2px var(--branch-color, var(--sq-accent-primary));
      flex-shrink: 0;
      transition: transform var(--sq-transition-fast);
    }

    :host([variant="dense"]) .node-dot {
      width: var(--sq-space-2);
      height: var(--sq-space-2);
      border-width: 1px;
      box-shadow: 0 0 0 1px var(--branch-color, var(--sq-accent-primary));
    }

    .node:hover .node-dot {
      transform: scale(1.2);
    }

    .node[data-variant='success'] .node-dot {
      background: var(--sq-color-success, #22c55e);
      box-shadow: 0 0 0 2px var(--sq-color-success, #22c55e);
    }

    :host([variant="dense"]) .node[data-variant='success'] .node-dot {
      box-shadow: 0 0 0 1px var(--sq-color-success, #22c55e);
    }

    .node[data-variant='warning'] .node-dot {
      background: var(--sq-color-warning, #f59e0b);
      box-shadow: 0 0 0 2px var(--sq-color-warning, #f59e0b);
    }

    :host([variant="dense"]) .node[data-variant='warning'] .node-dot {
      box-shadow: 0 0 0 1px var(--sq-color-warning, #f59e0b);
    }

    .node[data-variant='error'] .node-dot {
      background: var(--sq-color-error, #ef4444);
      box-shadow: 0 0 0 2px var(--sq-color-error, #ef4444);
    }

    :host([variant="dense"]) .node[data-variant='error'] .node-dot {
      box-shadow: 0 0 0 1px var(--sq-color-error, #ef4444);
    }

    .node[data-variant='info'] .node-dot {
      background: var(--sq-color-info, #3b82f6);
      box-shadow: 0 0 0 2px var(--sq-color-info, #3b82f6);
    }

    :host([variant="dense"]) .node[data-variant='info'] .node-dot {
      box-shadow: 0 0 0 1px var(--sq-color-info, #3b82f6);
    }

    .node-merge .node-dot {
      background: transparent;
      border: 3px solid var(--branch-color, var(--sq-accent-primary));
      width: var(--sq-space-5);
      height: var(--sq-space-5);
    }

    :host([variant="dense"]) .node-merge .node-dot {
      border-width: 2px;
      width: var(--sq-space-3);
      height: var(--sq-space-3);
    }

    .node-content {
      flex: 1;
      min-width: 0;
    }

    .node-label {
      font-size: var(--sq-text-sm);
      font-weight: var(--sq-font-weight-medium);
      color: var(--sq-fg-default);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    :host([variant="dense"]) .node-label {
      font-size: var(--sq-text-xs);
    }

    .node-date {
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-muted);
    }

    :host([variant="dense"]) .node-date {
      font-size: 10px;
    }

    .node-description {
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-muted);
      margin-top: 2px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    :host([variant="dense"]) .node-description {
      display: none;
    }

    .connector {
      position: absolute;
      background: var(--branch-color, var(--sq-border-subtle));
      z-index: 0;
    }

    .connector-vertical {
      width: 2px;
      left: 50%;
      transform: translateX(-50%);
    }

    .connector-horizontal {
      height: 2px;
    }

    .connector-fork {
      position: absolute;
      width: 2px;
      background: var(--sq-border-subtle);
      z-index: 0;
    }

    .connector-merge {
      position: absolute;
      height: 2px;
      background: var(--sq-border-subtle);
      z-index: 0;
    }

    .node-details {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--sq-bg-surface);
      border: 1px solid var(--sq-border-default);
      border-radius: var(--sq-radius-md);
      padding: var(--sq-space-3);
      box-shadow: var(--sq-shadow-md);
      z-index: 10;
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-muted);
    }

    .node[expanded] .node-details {
      display: block;
    }

    .legend {
      display: flex;
      flex-wrap: wrap;
      gap: var(--sq-space-3);
      margin-top: var(--sq-space-4);
      padding-top: var(--sq-space-3);
      border-top: 1px solid var(--sq-border-subtle);
    }

    :host([variant="dense"]) .legend {
      gap: var(--sq-space-2);
      margin-top: var(--sq-space-2);
      padding-top: var(--sq-space-2);
    }

    .legend-item {
      display: flex;
      align-items: center;
      gap: var(--sq-space-1);
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-muted);
    }

    :host([variant="dense"]) .legend-item {
      font-size: 10px;
    }

    .legend-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }

    :host([variant="dense"]) .legend-dot {
      width: 6px;
      height: 6px;
    }
  `;

  /** Array of timeline nodes with branching relationships. */
  @property({ type: Array }) nodes: TimetreeNode[] = [];

  /** Branch definitions with colors. */
  @property({ type: Array }) branches: TimetreeBranch[] = [];

  /** Whether to show branch legend. */
  @property({ type: Boolean, reflect: true }) showLegend = true;

  /** Display variant: default or dense (smaller elements). */
  @property({ type: String, reflect: true }) variant: 'default' | 'dense' = 'default';

  @state() private _expandedNode: string | null = null;

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this._onClick);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._onClick);
  }

  private _onClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const node = target.closest('.node');
    if (node) {
      const nodeId = node.getAttribute('data-id');
      this._expandedNode = this._expandedNode === nodeId ? null : nodeId;
    }
  };

  override firstUpdated() {
    this._measureNodes();
    const observer = new ResizeObserver(() => this._measureNodes());
    observer.observe(this);
  }

  private _measureNodes() {
    const positions = new Map<string, { x: number; y: number; lane: number }>();
    const lanes = this.renderRoot?.querySelectorAll('.branch-lane');
    if (!lanes) return;

    lanes.forEach((lane, laneIndex) => {
      const nodes = lane.querySelectorAll('.node');
      nodes.forEach(node => {
        const nodeId = node.getAttribute('data-id');
        if (!nodeId) return;
        const nodeRect = node.getBoundingClientRect();
        const containerRect = this.getBoundingClientRect();
        positions.set(nodeId, {
          x: nodeRect.left - containerRect.left + nodeRect.width / 2,
          y: nodeRect.top - containerRect.top + nodeRect.height / 2,
          lane: laneIndex,
        });
      });
    });

    this._dimensions = { nodePositions: positions };
    this.requestUpdate();
  }

  override render() {
    return html`
      ${this._renderHeader()}
      <div class="timetree">
        ${this._renderConnectors()}
        <div class="branch-lanes">
          ${this._renderLanes()}
        </div>
        ${this.showLegend ? this._renderLegend() : ''}
      </div>
    `;
  }

  private _renderConnectors() {
    const { nodePositions } = this._dimensions;
    if (nodePositions.size === 0) return '';

    const lines: Array<{ x1: number; y1: number; x2: number; y2: number; color: string }> = [];

    // Vertical connectors within each lane
    const branchNames = this.branches?.map(b => b.name) || [];
    if (branchNames.length === 0) {
      // Single lane
      const nodes = this.nodes;
      const defaultColor = this._resolveColor('var(--sq-accent-primary)');
      for (let i = 0; i < nodes.length - 1; i++) {
        const current = nodePositions.get(nodes[i].id);
        const next = nodePositions.get(nodes[i + 1].id);
        if (current && next) {
          lines.push({
            x1: current.x,
            y1: current.y,
            x2: next.x,
            y2: next.y,
            color: defaultColor,
          });
        }
      }
    } else {
      // Multi-lane: vertical connectors within each lane
      branchNames.forEach(name => {
        const laneNodes = this.nodes.filter(n => n.branch === name);
        const color = this._resolveColor(this._getBranchColor(name));
        for (let i = 0; i < laneNodes.length - 1; i++) {
          const current = nodePositions.get(laneNodes[i].id);
          const next = nodePositions.get(laneNodes[i + 1].id);
          if (current && next) {
            lines.push({ x1: current.x, y1: current.y, x2: next.x, y2: next.y, color });
          }
        }
      });
    }

    // Oblique connectors for merges
    this.nodes.forEach(node => {
      if (node.mergeTargetId) {
        const source = nodePositions.get(node.mergeTargetId);
        const target = nodePositions.get(node.id);
        if (source && target) {
          const color = this._resolveColor(this._getBranchColor(node.branch || ''));
          lines.push({ x1: source.x, y1: source.y, x2: target.x, y2: target.y, color });
        }
      }
    });

    if (lines.length === 0) return '';

    // Get the full container dimensions for the SVG
    const timetreeEl = this.renderRoot?.querySelector('.timetree') as HTMLElement | null;
    const width = timetreeEl?.offsetWidth || 800;
    const height = timetreeEl?.offsetHeight || 600;

    return html`
      <svg class="connectors" width="${width}" height="${height}">
        ${lines.map(line => html`
          <line
            x1="${line.x1}"
            y1="${line.y1}"
            x2="${line.x2}"
            y2="${line.y2}"
            stroke="${line.color}"
          />
        `)}
      </svg>
    `;
  }

  private _resolveColor(color: string): string {
    // If it's already a hex, rgb, or named color, return as-is
    if (color.startsWith('#') || color.startsWith('rgb') || color.startsWith('hsl')) {
      return color;
    }
    // Try to resolve CSS variable from computed styles
    try {
      const computed = getComputedStyle(this);
      const match = color.match(/var\((--[^)]+)\)/);
      if (match) {
        const resolved = computed.getPropertyValue(match[1]).trim();
        if (resolved) return resolved;
      }
    } catch {
      // Ignore errors
    }
    // Fallback to a default color
    return '#3b82f6';
  }

  private _renderHeader() {
    const slot = this.renderRoot.querySelector('slot[name="header"]') as HTMLSlotElement | null;
    if (slot?.assignedElements().length) {
      return html`
        <div class="timetree-header">
          <slot name="header"></slot>
        </div>
      `;
    }
    return '';
  }

  private _getBranchColor(branchName: string): string {
    const branch = this.branches?.find(b => b.name === branchName);
    return branch?.color || 'var(--sq-accent-primary)';
  }

  private _getNodesForBranch(branchName?: string): TimetreeNode[] {
    if (branchName) {
      return this.nodes.filter(n => n.branch === branchName);
    }
    return this.nodes;
  }

  private _renderLanes() {
    const branchNames = this.branches?.map(b => b.name) || [];
    const orphanNodes = this.nodes.filter(n => n.branch && !branchNames.includes(n.branch));

    if (branchNames.length === 0 && this.nodes.length > 0) {
      return this._renderSingleLane();
    }

    const lanes = branchNames.map(name => {
      const color = this._getBranchColor(name);
      const nodes = this._getNodesForBranch(name);
      return html`
        <div class="branch-lane" style="--branch-color: ${color}">
          <div class="branch-label">${name}</div>
          ${nodes.map(node => this._renderNode(node, color))}
        </div>
      `;
    });

    if (orphanNodes.length > 0) {
      lanes.push(html`
        <div class="branch-lane" style="--branch-color: var(--sq-fg-muted)">
          <div class="branch-label">Other</div>
          ${orphanNodes.map(node => this._renderNode(node, 'var(--sq-fg-muted)'))}
        </div>
      `);
    }

    return lanes;
  }

  private _renderSingleLane() {
    return html`
      <div class="branch-lane" style="--branch-color: var(--sq-accent-primary)">
        ${this.nodes.map(node => this._renderNode(node, 'var(--sq-accent-primary)'))}
      </div>
    `;
  }

  private _renderNode(node: TimetreeNode, color: string) {
    const isExpanded = this._expandedNode === node.id;
    const isMerge = !!node.mergeTargetId;

    return html`
      <div class="node-row">
        <div
          class="node ${isMerge ? 'node-merge' : ''}"
          data-id="${node.id}"
          data-variant="${node.variant || 'default'}"
          expanded=${isExpanded ? '' : undefined}
          style="--branch-color: ${color}"
          role="button"
          tabindex="0"
          aria-expanded="${isExpanded}"
          @keydown="${(e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              this._expandedNode = this._expandedNode === node.id ? null : node.id;
            }
          }}"
        >
          <div class="node-dot"></div>
          <div class="node-content">
            <div class="node-label">${node.label}</div>
            ${node.date ? html`<div class="node-date">${node.date}</div>` : ''}
            ${node.description ? html`<div class="node-description">${node.description}</div>` : ''}
            ${isExpanded ? html`
              <div class="node-details">
                <strong>ID:</strong> ${node.id}<br />
                ${node.branch ? html`<strong>Branch:</strong> ${node.branch}<br />` : ''}
                ${node.parentId ? html`<strong>Parent:</strong> ${node.parentId}<br />` : ''}
                ${node.mergeTargetId ? html`<strong>Merge target:</strong> ${node.mergeTargetId}` : ''}
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  private _renderLegend() {
    if (!this.branches?.length) return '';

    return html`
      <div class="legend">
        ${this.branches.map(branch => html`
          <div class="legend-item">
            <span class="legend-dot" style="background: ${branch.color}"></span>
            <span>${branch.name}</span>
          </div>
        `)}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-timetree': SqTimetree;
  }
}
