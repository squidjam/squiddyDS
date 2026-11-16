import { LitElement, html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';

/** Squiddy Audio — themed audio player with custom controls. Covers: `<audio>`, `<source>` */
@customElement('sq-audio')
export class SqAudio extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .player {
      display: flex;
      align-items: center;
      gap: var(--sq-space-3);
      padding: var(--sq-space-3) var(--sq-space-4);
      background: var(--sq-bg-surface);
      border: 1px solid var(--sq-border-subtle);
      border-radius: var(--sq-radius-lg);
      box-shadow: var(--sq-shadow-sm);
    }

    .play-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--sq-space-8);
      height: var(--sq-space-8);
      border: none;
      border-radius: var(--sq-radius-full);
      background: var(--sq-accent-primary);
      color: var(--sq-fg-inverse);
      cursor: pointer;
      flex-shrink: 0;
      transition: background var(--sq-motion-fast), transform var(--sq-motion-fast);
    }

    .play-btn:hover {
      background: var(--sq-accent-primary-hover);
      transform: scale(1.05);
    }

    .play-btn:active {
      background: var(--sq-accent-primary-active);
      transform: scale(0.95);
    }

    .play-btn svg {
      width: var(--sq-space-4);
      height: var(--sq-space-4);
      fill: currentColor;
    }

    .progress-section {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: var(--sq-space-1);
      min-width: 0;
    }

    .progress-bar-container {
      position: relative;
      display: flex;
      align-items: center;
      height: var(--sq-space-3);
      cursor: pointer;
    }

    .progress-bar-bg {
      position: absolute;
      width: 100%;
      height: 6px;
      background: var(--sq-border-subtle);
      border-radius: var(--sq-radius-full);
      overflow: hidden;
    }

    .progress-bar-fill {
      height: 100%;
      width: 0%;
      background: var(--sq-accent-primary);
      border-radius: var(--sq-radius-full);
      transition: width 100ms linear;
    }

    .progress-bar-container:hover .progress-bar-fill {
      height: 8px;
      margin-top: -1px;
    }

    .time-display {
      display: flex;
      justify-content: space-between;
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-muted);
      font-variant-numeric: tabular-nums;
    }

    .volume-section {
      display: flex;
      align-items: center;
      gap: var(--sq-space-2);
      flex-shrink: 0;
    }

    .volume-btn {
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

    .volume-btn:hover {
      color: var(--sq-fg-default);
      background: var(--sq-bg-subtle);
    }

    .volume-btn svg {
      width: var(--sq-space-4);
      height: var(--sq-space-4);
      fill: currentColor;
    }

    .volume-slider {
      -webkit-appearance: none;
      appearance: none;
      width: var(--sq-space-10);
      height: 4px;
      background: var(--sq-border-subtle);
      border-radius: var(--sq-radius-full);
      outline: none;
      cursor: pointer;
    }

    .volume-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 14px;
      height: 14px;
      border-radius: var(--sq-radius-full);
      background: var(--sq-accent-primary);
      cursor: pointer;
      transition: transform var(--sq-motion-fast);
    }

    .volume-slider::-webkit-slider-thumb:hover {
      transform: scale(1.2);
    }

    .volume-slider::-moz-range-thumb {
      width: 14px;
      height: 14px;
      border: none;
      border-radius: var(--sq-radius-full);
      background: var(--sq-accent-primary);
      cursor: pointer;
    }

    /* Dark mode refinements */
    [sq-mode="dark"] .player {
      border-color: var(--sq-border-subtle);
    }

    [sq-mode="dark"] .volume-slider {
      background: var(--sq-bg-subtle);
    }

    /* Variant: filled — primary accent background */
    .player[variant='filled'] {
      background: var(--sq-accent-primary);
      border-color: var(--sq-accent-primary);
    }

    .player[variant='filled'] .play-btn {
      background: var(--sq-fg-inverse);
      color: var(--sq-accent-primary);
    }

    .player[variant='filled'] .play-btn:hover {
      background: var(--sq-bg-default);
    }

    .player[variant='filled'] .progress-bar-bg {
      background: rgba(255, 255, 255, 0.3);
    }

    .player[variant='filled'] .progress-bar-fill {
      background: var(--sq-fg-inverse);
    }

    .player[variant='filled'] .time-display {
      color: var(--sq-fg-inverse);
    }

    .player[variant='filled'] .volume-btn {
      color: var(--sq-fg-inverse);
    }

    .player[variant='filled'] .volume-btn:hover {
      color: var(--sq-fg-default);
      background: rgba(255, 255, 255, 0.2);
    }

    .player[variant='filled'] .volume-slider {
      background: rgba(255, 255, 255, 0.3);
    }

    .player[variant='filled'] .volume-slider::-webkit-slider-thumb {
      background: var(--sq-fg-inverse);
    }

    .player[variant='filled'] .volume-slider::-moz-range-thumb {
      background: var(--sq-fg-inverse);
    }

    .player[variant='filled'] .download-btn {
      color: var(--sq-fg-inverse);
    }

    .player[variant='filled'] .download-btn:hover {
      background: rgba(255, 255, 255, 0.2);
      color: var(--sq-bg-default);
    }

    /* Variant: subtle — light accent background */
    .player[variant='subtle'] {
      background: var(--sq-accent-primary-light);
      border-color: var(--sq-accent-primary);
    }

    .player[variant='subtle'] .progress-bar-bg {
      background: var(--sq-border-subtle);
    }

    .player[variant='subtle'] .volume-slider {
      background: var(--sq-border-subtle);
    }

    /* Download button */
    .download-btn {
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
      flex-shrink: 0;
      transition: color var(--sq-motion-fast), background var(--sq-motion-fast);
    }

    .download-btn:hover {
      color: var(--sq-fg-default);
      background: var(--sq-bg-subtle);
    }

    .download-btn svg {
      width: var(--sq-space-4);
      height: var(--sq-space-4);
      fill: currentColor;
    }

    /* Hide on small screens, show volume inline on larger */
    @media (max-width: 480px) {
      .volume-section {
        display: none;
      }
    }
  `;

  /** Source URL of the audio file. */
  @property({ type: String }) src = '';

  /** Whether to show custom controls (default) or native browser controls. */
  @property({ type: Boolean }) controls = true;

  /** Whether to start playing automatically. */
  @property({ type: Boolean }) autoplay = false;

  /** Whether to loop playback. */
  @property({ type: Boolean }) loop = false;

  /** Whether audio starts muted. */
  @property({ type: Boolean }) muted = false;

  /** Visual variant of the player: "default" (surface background), "filled" (accent background), or "subtle" (light accent background). */
  @property({ type: String, reflect: true }) variant: 'default' | 'filled' | 'subtle' = 'default';

  /** Whether to show a download button for the audio file. */
  @property({ type: Boolean, reflect: true }) downloadable = false;

  /** Filename to use when downloading (defaults to the last segment of the src URL). */
  @property({ type: String, attribute: 'download-filename' }) downloadFilename = '';

  @state() private _isPlaying = false;
  @state() private _currentTime = 0;
  @state() private _duration = 0;
  @state() private _volume = 1;
  @state() private _isMuted = false;

  @query('audio') private _audioEl!: HTMLAudioElement;
  private _timeUpdateInterval: number | null = null;

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._cleanup();
  }

  updated(changed: Map<string, unknown>) {
    const audio = this._audioEl;
    if (!audio) return;

    if (changed.has('src') && this.src) {
      audio.src = this.src;
    }
    if (changed.has('autoplay') && this.autoplay) {
      audio.play().catch(() => {});
    }
    if (changed.has('loop')) {
      audio.loop = this.loop;
    }
    if (changed.has('muted')) {
      audio.muted = this.muted;
      this._isMuted = this.muted;
    }

    // Set up event listeners once
    if (!this._listenersAttached) {
      this._attachListeners(audio);
      this._listenersAttached = true;
    }
  }

  private _listenersAttached = false;

  private _attachListeners(audio: HTMLAudioElement) {
    audio.addEventListener('play', () => { this._isPlaying = true; this._startTimer(); });
    audio.addEventListener('pause', () => { this._isPlaying = false; });
    audio.addEventListener('loadedmetadata', () => {
      this._duration = audio.duration;
    });
    audio.addEventListener('ended', () => {
      this._isPlaying = false;
      this._stopTimer();
    });
    audio.addEventListener('volumechange', () => {
      this._volume = audio.volume;
      this._isMuted = audio.muted;
    });
  }

  private _startTimer() {
    this._stopTimer();
    this._timeUpdateInterval = window.setInterval(() => {
      if (this._audioEl) {
        this._currentTime = this._audioEl.currentTime;
      }
    }, 250);
  }

  private _stopTimer() {
    if (this._timeUpdateInterval !== null) {
      clearInterval(this._timeUpdateInterval);
      this._timeUpdateInterval = null;
    }
  }

  private _cleanup() {
    this._stopTimer();
    if (this._audioEl) {
      this._audioEl.pause();
      this._audioEl.src = '';
    }
  }

  private _togglePlay() {
    if (!this._audioEl) return;
    if (this._audioEl.paused) {
      this._audioEl.play().catch(() => {});
    } else {
      this._audioEl.pause();
    }
  }

  private _seek(e: MouseEvent) {
    if (!this._audioEl) return;
    const bar = e.currentTarget as HTMLElement;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    this._audioEl.currentTime = ratio * this._duration;
    this._currentTime = this._audioEl.currentTime;
  }

  private _toggleMute() {
    if (!this._audioEl) return;
    this._isMuted = !this._isMuted;
    this._audioEl.muted = this._isMuted;
  }

  private _onVolumeChange(e: Event) {
    if (!this._audioEl) return;
    const slider = e.target as HTMLInputElement;
    this._volume = parseFloat(slider.value);
    this._audioEl.volume = this._volume;
    if (this._volume > 0 && this._isMuted) {
      this._isMuted = false;
      this._audioEl.muted = false;
    }
  }

  private _formatTime(seconds: number): string {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  private _getPlayIcon() {
    return html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>`;
  }

  private _getPauseIcon() {
    return html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
  }

  private _getVolumeIcon() {
    if (this._isMuted || this._volume === 0) {
      return html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>`;
    } else if (this._volume < 0.5) {
      return html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/></svg>`;
    } else {
      return html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`;
    }
  }

  private _getDownloadIcon() {
    return html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>`;
  }

  private _downloadAudio() {
    if (!this.src) return;
    const link = document.createElement('a');
    link.href = this.src;
    link.download = this.downloadFilename || this._extractFilename();
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  private _extractFilename(): string {
    try {
      const url = new URL(this.src, window.location.origin);
      const parts = url.pathname.split('/');
      const filename = parts[parts.length - 1] || 'audio';
      return decodeURIComponent(filename);
    } catch {
      return 'audio';
    }
  }

  override render() {
    if (!this.controls) {
      // Fallback to native controls when custom controls are disabled
      return html`
        <audio
          src=${this.src}
          ?controls=${true}
          ?autoplay=${this.autoplay}
          ?loop=${this.loop}
          ?muted=${this.muted}
        ><slot></slot></audio>
      `;
    }

    const progressPercent = this._duration > 0 ? (this._currentTime / this._duration) * 100 : 0;

    return html`
      <div class="player" variant=${this.variant}>
        <button
          class="play-btn"
          @click=${this._togglePlay}
          aria-label=${this._isPlaying ? 'Pause' : 'Play'}
        >
          ${this._isPlaying
            ? this._getPauseIcon()
            : this._getPlayIcon()}
        </button>

        <div class="progress-section">
          <div
            class="progress-bar-container"
            @click=${this._seek}
            role="slider"
            aria-label="Seek"
            aria-valuemin="0"
            aria-valuemax=${this._duration || 0}
            aria-valuenow=${this._currentTime}
            tabindex="0"
          >
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" style="width: ${progressPercent}%"></div>
            </div>
          </div>
          <div class="time-display">
            <span>${this._formatTime(this._currentTime)}</span>
            <span>${this._formatTime(this._duration)}</span>
          </div>
        </div>

        <div class="volume-section">
          <button
            class="volume-btn"
            @click=${this._toggleMute}
            aria-label=${this._isMuted ? 'Unmute' : 'Mute'}
          >
            ${this._getVolumeIcon()}
          </button>
          <input
            type="range"
            class="volume-slider"
            min="0"
            max="1"
            step="0.01"
            .value=${this._volume}
            @input=${this._onVolumeChange}
            aria-label="Volume"
          />
          ${this.downloadable ? html`
            <button
              class="download-btn"
              @click=${this._downloadAudio}
              aria-label="Download audio"
              title="Download audio"
            >
              ${this._getDownloadIcon()}
            </button>
          ` : ''}
        </div>
      </div>

      <audio
        src=${this.src}
        ?loop=${this.loop}
        ?muted=${this.muted}
        style="display: none;"
      ><slot></slot></audio>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-audio': SqAudio;
  }
}
