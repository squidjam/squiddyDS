import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Pagination — covers: `<nav>` (pagination)
 *
 * Displays page navigation with previous/next buttons and page numbers.
 *
 * @slot - Custom pagination content
 *
 * @fires sq-page - Emitted when a page is selected
 */
@customElement('sq-pagination')
export class SqPagination extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    nav {
      display: flex;
      align-items: center;
      gap: var(--sq-space-1);
    }

    .page-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 36px;
      height: 36px;
      padding: 0 var(--sq-space-2);
      border: 1px solid var(--sq-border-subtle);
      border-radius: var(--sq-radius-md);
      background: var(--sq-bg-surface);
      color: var(--sq-fg-default);
      font-family: var(--sq-font-family);
      font-size: var(--sq-text-sm);
      font-weight: var(--sq-font-weight-medium);
      cursor: pointer;
      transition: var(--sq-transition-color), transform var(--sq-motion-fast), box-shadow var(--sq-motion-fast);
      user-select: none;
    }

    .page-btn:hover:not(:disabled):not(.active) {
      background: var(--sq-accent-primary-light);
      border-color: var(--sq-accent-primary);
      color: var(--sq-accent-primary);
    }

    .page-btn.active {
      background: var(--sq-accent-primary);
      border-color: var(--sq-accent-primary);
      color: var(--sq-fg-inverse);
    }

    .page-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .page-btn:focus-visible {
      outline: 2px solid var(--sq-border-focus);
      outline-offset: 2px;
    }

    .ellipsis {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 36px;
      height: 36px;
      color: var(--sq-fg-muted);
      font-size: var(--sq-text-sm);
      user-select: none;
    }

    .info {
      margin-left: var(--sq-space-2);
      font-size: var(--sq-text-sm);
      color: var(--sq-fg-muted);
    }
  `;

  @property({ type: Number }) page = 1;
  @property({ type: Number }) totalPages = 10;
  @property({ type: Number }) siblingCount = 2;
  @property({ type: Boolean }) showInfo = false;
  @property({ type: Number }) totalItems = 0;
  @property({ type: Number }) itemsPerPage = 20;

  get pages() {
    const current = this.page;
    const total = this.totalPages;
    const siblings = this.siblingCount;
    const pages: (number | string)[] = [];

    if (total <= 0) return pages;

    // Always show first page
    pages.push(1);

    const leftSibling = Math.max(2, current - siblings);
    const rightSibling = Math.min(total - 1, current + siblings);

    if (leftSibling > 2) {
      pages.push('...');
    }

    for (let i = leftSibling; i <= rightSibling; i++) {
      if (i !== 1 && i !== total) {
        pages.push(i);
      }
    }

    if (rightSibling < total - 1) {
      pages.push('...');
    }

    if (total > 1) {
      pages.push(total);
    }

    return pages;
  }

  private goToPage(page: number) {
    if (page < 1 || page > this.totalPages || page === this.page) return;
    this.page = page;
    this.dispatchEvent(new CustomEvent('sq-page', { detail: { page } }));
  }

  override render() {
    if (this.totalPages <= 1) return html``;

    return html`
      <nav aria-label="Pagination">
        <button
          class="page-btn"
          aria-label="First page"
          ?disabled=${this.page <= 1}
          @click=${() => this.goToPage(1)}
        >
          ‹‹
        </button>

        <button
          class="page-btn"
          aria-label="Previous page"
          ?disabled=${this.page <= 1}
          @click=${() => this.goToPage(this.page - 1)}
        >
          ‹
        </button>

        ${this.pages.map((p) =>
          typeof p === 'string'
            ? html`<span class="ellipsis" aria-label="More pages">…</span>`
            : html`<button
                class="page-btn ${p === this.page ? 'active' : ''}"
                aria-label="Page ${p}"
                aria-current=${p === this.page ? 'page' : undefined}
                @click=${() => this.goToPage(p)}
              >
                ${p}
              </button>`
        )}

        <button
          class="page-btn"
          aria-label="Next page"
          ?disabled=${this.page >= this.totalPages}
          @click=${() => this.goToPage(this.page + 1)}
        >
          ›
        </button>

        <button
          class="page-btn"
          aria-label="Last page"
          ?disabled=${this.page >= this.totalPages}
          @click=${() => this.goToPage(this.totalPages)}
        >
          ››
        </button>

        ${this.showInfo
          ? html`<span class="info">
              Page ${this.page} of ${this.totalPages}
            </span>`
          : ''}

        <slot></slot>
      </nav>
    `;
  }
}
