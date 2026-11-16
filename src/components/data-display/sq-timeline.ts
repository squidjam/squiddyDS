import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export interface TimelineItem {
  date?: string;
  title?: string;
  content?: string;
  icon?: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
}

/**
 * Squiddy Timeline — displays a vertical sequence of events.
 *
 * @slot - Default slot for custom timeline items using `<sq-timeline-item>` elements.
 * @slot header - Optional header above the timeline.
 *
 * @example
 * ```html
 * <sq-timeline>
 *   <sq-timeline-item date="2024-01-15" title="Project Started">
 *     Initial project kickoff meeting.
 *   </sq-timeline-item>
 *   <sq-timeline-item date="2024-03-20" title="Beta Release" variant="success">
 *     First beta version released to testers.
 *   </sq-timeline-item>
 * </sq-timeline>
 * ```
 */
@customElement('sq-timeline')
export class SqTimeline extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: var(--sq-space-4) 0;
    }

    :host([orientation='horizontal']) {
      padding: 0 var(--sq-space-4);
    }

    .timeline-header {
      margin-bottom: var(--sq-space-4);
      padding: 0 var(--sq-space-4);
    }

    .timeline {
      position: relative;
      padding-left: var(--sq-space-8);
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: var(--sq-space-6);
      top: 0;
      bottom: 0;
      width: 2px;
      background: var(--sq-border-subtle);
    }

    :host([orientation='horizontal']) .timeline {
      display: flex;
      gap: var(--sq-space-4);
      padding-left: 0;
      padding-top: var(--sq-space-8);
      overflow-x: auto;
    }

    :host([orientation='horizontal']) .timeline::before {
      left: 0;
      right: 0;
      top: var(--sq-space-6);
      bottom: auto;
      width: auto;
      height: 2px;
    }

    .timeline-item {
      position: relative;
      padding: 0 0 var(--sq-space-6) var(--sq-space-4);
    }

    :host([orientation='horizontal']) .timeline-item {
      flex: 0 0 240px;
      padding: 0 var(--sq-space-4) var(--sq-space-6) 0;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: calc(var(--sq-space-6) - var(--sq-space-1));
      top: var(--sq-space-1);
      width: var(--sq-space-3);
      height: var(--sq-space-3);
      border-radius: 50%;
      background: var(--sq-accent-primary);
      border: 2px solid var(--sq-bg-surface);
      box-shadow: 0 0 0 2px var(--sq-accent-primary);
    }

    :host([orientation='horizontal']) .timeline-item::before {
      left: auto;
      right: calc(var(--sq-space-6) - var(--sq-space-1));
      top: calc(var(--sq-space-6) - var(--sq-space-1));
    }

    .timeline-item[data-variant='success']::before {
      background: var(--sq-color-success, #22c55e);
      box-shadow: 0 0 0 2px var(--sq-color-success, #22c55e);
    }

    .timeline-item[data-variant='warning']::before {
      background: var(--sq-color-warning, #f59e0b);
      box-shadow: 0 0 0 2px var(--sq-color-warning, #f59e0b);
    }

    .timeline-item[data-variant='error']::before {
      background: var(--sq-color-error, #ef4444);
      box-shadow: 0 0 0 2px var(--sq-color-error, #ef4444);
    }

    .timeline-item[data-variant='info']::before {
      background: var(--sq-color-info, #3b82f6);
      box-shadow: 0 0 0 2px var(--sq-color-info, #3b82f6);
    }

    .timeline-item-content {
      background: var(--sq-bg-surface);
      border: 1px solid var(--sq-border-subtle);
      border-radius: var(--sq-radius-md);
      padding: var(--sq-space-4);
    }

    .timeline-item-header {
      display: flex;
      align-items: center;
      gap: var(--sq-space-2);
      margin-bottom: var(--sq-space-1);
    }

    .timeline-item-icon {
      font-size: var(--sq-text-lg);
      flex-shrink: 0;
    }

    .timeline-item-title {
      font-size: var(--sq-text-md);
      font-weight: var(--sq-font-weight-semibold);
      color: var(--sq-fg-default);
      margin: 0;
    }

    .timeline-item-date {
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-muted);
      margin: 0 0 var(--sq-space-2) 0;
    }

    .timeline-item-body {
      font-size: var(--sq-text-sm);
      color: var(--sq-fg-muted);
      line-height: var(--sq-line-height-normal);
    }

    .timeline-item-body p {
      margin: 0;
    }
  `;

  /** Orientation of the timeline: vertical (default) or horizontal. */
  @property({ type: String, reflect: true }) orientation: 'vertical' | 'horizontal' = 'vertical';

  /** Array of timeline items for programmatic rendering. */
  @property({ type: Array }) items: TimelineItem[] = [];

  override render() {
    return html`
      ${this._renderHeader()}
      <div class="timeline">
        ${this.items.length
          ? this.items.map(item => this._renderItem(item))
          : html`<slot></slot>`}
      </div>
    `;
  }

  private _renderHeader() {
    const slot = this.renderRoot.querySelector('slot[name="header"]') as HTMLSlotElement | null;
    if (slot?.assignedElements().length) {
      return html`
        <div class="timeline-header">
          <slot name="header"></slot>
        </div>
      `;
    }
    return '';
  }

  private _renderItem(item: TimelineItem) {
    return html`
      <div class="timeline-item" data-variant=${item.variant || 'default'}>
        <div class="timeline-item-content">
          <div class="timeline-item-header">
            ${item.icon ? html`<span class="timeline-item-icon">${item.icon}</span>` : ''}
            <h3 class="timeline-item-title">${item.title || ''}</h3>
          </div>
          ${item.date ? html`<time class="timeline-item-date">${item.date}</time>` : ''}
          ${item.content ? html`<div class="timeline-item-body"><p>${item.content}</p></div>` : ''}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-timeline': SqTimeline;
  }
}
