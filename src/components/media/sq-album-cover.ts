import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Squiddy Album Cover — displays album artwork with optional play overlay.
 *
 * @slot - Fallback content when no image src is provided
 *
 * @cssproperty --sq-radius-md - Rounded album cover shape
 */
@customElement('sq-album-cover')
export class SqAlbumCover extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
    }

    .cover {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      aspect-ratio: 1 / 1;
      border-radius: var(--sq-radius-md);
      overflow: hidden;
      background: var(--sq-bg-subtle);
      cursor: pointer;
      transition: transform var(--sq-motion-fast), box-shadow var(--sq-motion-fast);
    }

    .cover:hover {
      transform: scale(1.02);
      box-shadow: var(--sq-shadow-md);
    }

    .cover img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--sq-space-2);
      color: var(--sq-fg-muted);
      font-size: var(--sq-text-sm);
      text-align: center;
      padding: var(--sq-space-4);
    }

    .placeholder svg {
      width: var(--sq-space-8);
      height: var(--sq-space-8);
      opacity: 0.5;
    }

    .play-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.4);
      opacity: 0;
      transition: opacity var(--sq-motion-fast);
    }

    .cover:hover .play-overlay {
      opacity: 1;
    }

    .play-overlay svg {
      width: var(--sq-space-10);
      height: var(--sq-space-10);
      color: white;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    }

    /* Size variants */
    .cover[size="sm"] {
      width: 48px;
    }

    .cover[size="md"] {
      width: 120px;
    }

    .cover[size="lg"] {
      width: 200px;
    }

    .cover[size="xl"] {
      width: 300px;
    }

    /* Shape variants */
    .cover[shape="rounded"] {
      border-radius: var(--sq-radius-lg);
    }

    .cover[shape="circle"] {
      border-radius: var(--sq-radius-full);
    }

    /* Now playing indicator */
    .now-playing {
      position: absolute;
      bottom: var(--sq-space-2);
      left: var(--sq-space-2);
      display: flex;
      align-items: flex-end;
      gap: 2px;
      height: var(--sq-space-3);
    }

    .now-playing .bar {
      width: 3px;
      background: var(--sq-accent-primary);
      border-radius: 1px;
      animation: equalizer 0.8s ease-in-out infinite alternate;
    }

    .now-playing .bar:nth-child(1) {
      height: 40%;
      animation-delay: 0s;
    }

    .now-playing .bar:nth-child(2) {
      height: 70%;
      animation-delay: 0.2s;
    }

    .now-playing .bar:nth-child(3) {
      height: 50%;
      animation-delay: 0.4s;
    }

    .now-playing .bar:nth-child(4) {
      height: 80%;
      animation-delay: 0.1s;
    }

    @keyframes equalizer {
      0% { height: 20%; }
      100% { height: 100%; }
    }
  `;

  @property({ type: String }) src = '';
  @property({ type: String }) alt = '';
  @property({ type: String }) size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @property({ type: String }) shape: 'square' | 'rounded' | 'circle' = 'square';
  @property({ type: Boolean }) showPlayOverlay = true;
  @property({ type: Boolean }) nowPlaying = false;

  override render() {
    return html`
      <div class="cover" size=${this.size} shape=${this.shape}
           @click=${this._onPlay} role="button" tabindex="0"
           aria-label=${this.alt || 'Album cover'}>
        ${this.src
          ? html`<img src=${this.src} alt=${this.alt} loading="lazy" />`
          : html`
              <div class="placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M9 18V5l12-2v13" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="6" cy="18" r="3" fill="currentColor" opacity="0.3"/>
                  <circle cx="18" cy="16" r="3" fill="currentColor" opacity="0.3"/>
                </svg>
                <slot>Album</slot>
              </div>
            `}
        ${this.showPlayOverlay ? html`
          <div class="play-overlay">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        ` : ''}
        ${this.nowPlaying ? html`
          <div class="now-playing">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        ` : ''}
      </div>
    `;
  }

  _onPlay() {
    this.dispatchEvent(new CustomEvent('play', { bubbles: true, composed: true }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-album-cover': SqAlbumCover;
  }
}
