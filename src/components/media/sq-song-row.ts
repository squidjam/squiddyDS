import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Song Row — a single track in a playlist or library view.
 *
 * @slot cover - Album cover image or sq-album-cover component
 * @slot actions - Custom action buttons (e.g., like, add to playlist)
 *
 * @cssproperty --sq-space-* - Spacing scale
 */
@customElement('sq-song-row')
export class SqSongRow extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .row {
      display: grid;
      grid-template-columns: var(--sq-space-5) 48px 1fr auto auto;
      align-items: center;
      gap: var(--sq-space-3);
      padding: var(--sq-space-2) var(--sq-space-3);
      border-radius: var(--sq-radius-md);
      transition: background var(--sq-motion-fast);
      cursor: pointer;
    }

    .row:hover {
      background: var(--sq-bg-subtle);
    }

    .row[playing] {
      background: var(--sq-accent-primary-light);
    }

    .index {
      font-size: var(--sq-text-sm);
      color: var(--sq-fg-muted);
      text-align: center;
      width: var(--sq-space-5);
      flex-shrink: 0;
    }

    .row:hover .index-text,
    .row[playing] .index-text {
      display: none;
    }

    .row:hover .index-play,
    .row[playing] .index-play {
      display: inline-flex;
    }

    .index-play {
      display: none;
      align-items: center;
      justify-content: center;
      color: var(--sq-accent-primary);
    }

    .row[playing] .index-play {
      color: var(--sq-accent-primary);
    }

    .cover-slot {
      width: 48px;
      height: 48px;
      flex-shrink: 0;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 2px;
      min-width: 0;
      overflow: hidden;
    }

    .title {
      font-size: var(--sq-text-sm);
      font-weight: var(--sq-font-weight-medium);
      color: var(--sq-fg-default);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .row[playing] .title {
      color: var(--sq-accent-primary);
    }

    .artist {
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-muted);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .album-col {
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-muted);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 150px;
    }

    .duration {
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-muted);
      font-variant-numeric: tabular-nums;
      min-width: var(--sq-space-6);
      text-align: right;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: var(--sq-space-1);
      opacity: 0;
      transition: opacity var(--sq-motion-fast);
    }

    .row:hover .actions {
      opacity: 1;
    }

    .action-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--sq-space-6);
      height: var(--sq-space-6);
      border: none;
      border-radius: var(--sq-radius-sm);
      background: transparent;
      color: var(--sq-fg-muted);
      cursor: pointer;
      transition: color var(--sq-motion-fast), background var(--sq-motion-fast);
    }

    .action-btn:hover {
      color: var(--sq-fg-default);
      background: var(--sq-bg-subtle);
    }

    .action-btn svg {
      width: var(--sq-space-4);
      height: var(--sq-space-4);
    }

    /* Header variant */
    .row[header] {
      cursor: default;
      font-size: var(--sq-text-xs);
      font-weight: var(--sq-font-weight-semibold);
      color: var(--sq-fg-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background: transparent;
    }

    .row[header]:hover {
      background: transparent;
    }

    .row[header] .index {
      color: var(--sq-fg-muted);
    }

    .row[header] .title,
    .row[header] .artist,
    .row[header] .album-col,
    .row[header] .duration {
      color: var(--sq-fg-muted);
    }

    /* Show album column */
    :host([show-album]) .row {
      grid-template-columns: var(--sq-space-5) 48px 1fr 150px auto auto;
    }

    :host(:not([show-album])) .album-col {
      display: none;
    }

    @media (max-width: 640px) {
      .row {
        grid-template-columns: var(--sq-space-5) 48px 1fr auto;
      }

      .album-col {
        display: none !important;
      }
    }
  `;

  @property({ type: String }) title = '';
  @property({ type: String }) artist = '';
  @property({ type: String }) album = '';
  @property({ type: String }) duration = '';
  @property({ type: Number }) indexNum = 0;
  @property({ type: Boolean }) playing = false;
  @property({ type: Boolean }) liked = false;
  @property({ type: Boolean }) header = false;
  @property({ type: Boolean }) showAlbum = false;

  override render() {
    if (this.header) {
      return html`
        <div class="row" header>
          <span class="index">#</span>
          <div class="cover-slot"></div>
          <div class="info">
            <span class="title">Title</span>
          </div>
          <span class="album-col">Album</span>
          <span class="duration"></span>
          <div class="actions"></div>
        </div>
      `;
    }

    return html`
      <div class="row" ?playing=${this.playing}
           @click=${this._onPlay} role="button" tabindex="0"
           aria-label=${`Play ${this.title} by ${this.artist}`}>
        <span class="index">
          <span class="index-text">${this.indexNum}</span>
          <span class="index-play">
            ${this.playing
              ? html`<svg viewBox="0 0 24 24" fill="currentColor">
                   <rect x="6" y="4" width="4" height="16" rx="1"/>
                   <rect x="14" y="4" width="4" height="16" rx="1"/>
                 </svg>`
              : html`<svg viewBox="0 0 24 24" fill="currentColor">
                   <path d="M8 5v14l11-7z"/>
                 </svg>`}
          </span>
        </span>
        <div class="cover-slot">
          <slot name="cover"></slot>
        </div>
        <div class="info">
          <span class="title">${this.title}</span>
          <span class="artist">${this.artist}</span>
        </div>
        <span class="album-col">${this.album}</span>
        <span class="duration">${this.duration}</span>
        <div class="actions">
          <button class="action-btn" @click=${this._onLike}
                  aria-label=${this.liked ? 'Unlike' : 'Like'}
                  title=${this.liked ? 'Unlike' : 'Like'}>
            <svg viewBox="0 0 24 24" fill=${this.liked ? 'currentColor' : 'none'}
                 stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <slot name="actions"></slot>
        </div>
      </div>
    `;
  }

  _onPlay(e: Event) {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent('play', { bubbles: true, composed: true }));
  }

  _onLike(e: Event) {
    e.stopPropagation();
    this.liked = !this.liked;
    this.dispatchEvent(new CustomEvent('like', {
      bubbles: true,
      composed: true,
      detail: { liked: this.liked },
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-song-row': SqSongRow;
  }
}
