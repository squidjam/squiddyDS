import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Squiddy Carousel — a content slider inspired by FlexSlider.
 *
 * Features:
 * - Fade and slide animations
 * - Dot (control) navigation
 * - Previous/Next (direction) navigation
 * - Keyboard navigation (left/right arrows)
 * - Touch/swipe support
 * - Auto-play with pause on hover
 * - Pause/Play button
 *
 * @slot - Carousel slides (any content).
 * @slot controls - Custom controls replacing default navigation.
 *
 * @example
 * ```html
 * <sq-carousel animation="slide" auto-play interval="5000">
 *   <div><img src="slide1.jpg" alt="Slide 1" /></div>
 *   <div><img src="slide2.jpg" alt="Slide 2" /></div>
 *   <div><img src="slide3.jpg" alt="Slide 3" /></div>
 * </sq-carousel>
 * ```
 */
@customElement('sq-carousel')
export class SqCarousel extends LitElement {
  static override styles = css`
    :host {
      display: block;
      position: relative;
      overflow: hidden;
      max-width: 100%;
    }

    .carousel {
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 9;
    }

    .carousel[aspect-ratio='auto'] {
      aspect-ratio: auto;
    }

    .carousel[aspect-ratio='square'] {
      aspect-ratio: 1 / 1;
    }

    .slides {
      position: relative;
      width: 100%;
      height: 100%;
    }

    ::slotted(.slide) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity var(--sq-motion-base), transform var(--sq-motion-base);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    ::slotted(.slide.active) {
      opacity: 1;
      z-index: 1;
    }

    /* Note: Cannot style deep descendants of slotted elements from shadow DOM.
       Use :host(.fill-media) ::slotted(*) or add styles in light DOM for img/video.
       Alternatively, the slotted elements should style their own children. */

    /* Slide animation mode — use :host attribute selectors since ::slotted can't be chained */
    :host([animation="slide"]) ::slotted(.slide) {
      transform: translateX(100%);
    }

    :host([animation="slide"]) ::slotted(.slide.active) {
      transform: translateX(0);
    }

    :host([animation="slide"]) ::slotted(.slide.prev) {
      transform: translateX(-100%);
    }

    :host([animation="slide"][direction="vertical"]) ::slotted(.slide) {
      transform: translateY(100%);
    }

    :host([animation="slide"][direction="vertical"]) ::slotted(.slide.active) {
      transform: translateY(0);
    }

    :host([animation="slide"][direction="vertical"]) ::slotted(.slide.prev) {
      transform: translateY(-100%);
    }

    :host([animation="slide"][reverse]) ::slotted(.slide) {
      transform: translateX(-100%);
    }

    :host([animation="slide"][reverse]) ::slotted(.slide.prev) {
      transform: translateX(100%);
    }

    /* Direction navigation (prev/next arrows) */
    .direction-nav {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      z-index: 2;
    }

    .direction-nav button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: none;
      border-radius: var(--sq-radius-full);
      background: rgba(0, 0, 0, 0.4);
      color: white;
      cursor: pointer;
      font-size: var(--sq-text-lg);
      transition: background var(--sq-transition-fast);
      opacity: 0;
    }

    :host(:hover) .direction-nav button {
      opacity: 1;
    }

    .direction-nav button:hover {
      background: rgba(0, 0, 0, 0.6);
    }

    .direction-nav button:focus-visible {
      outline: 2px solid var(--sq-accent-primary);
      outline-offset: 2px;
    }

    .direction-nav button[disabled] {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .direction-nav .prev {
      left: var(--sq-space-3);
    }

    .direction-nav .next {
      right: var(--sq-space-3);
    }

    /* Control navigation (dots) */
    .control-nav {
      position: absolute;
      bottom: var(--sq-space-3);
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: var(--sq-space-2);
      z-index: 2;
      padding: var(--sq-space-1);
    }

    .control-nav button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.8);
      background: transparent;
      cursor: pointer;
      padding: 0;
      transition: background var(--sq-transition-fast), transform var(--sq-transition-fast);
    }

    .control-nav button:hover {
      background: rgba(255, 255, 255, 0.5);
    }

    .control-nav button.active {
      background: white;
      transform: scale(1.2);
    }

    .control-nav button:focus-visible {
      outline: 2px solid var(--sq-accent-primary);
      outline-offset: 2px;
    }

    /* Pause/Play button */
    .pause-play {
      position: absolute;
      top: var(--sq-space-2);
      right: var(--sq-space-2);
      z-index: 3;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: var(--sq-radius-full);
      background: rgba(0, 0, 0, 0.4);
      color: white;
      cursor: pointer;
      font-size: var(--sq-text-xs);
      opacity: 0;
      transition: opacity var(--sq-transition-fast), background var(--sq-transition-fast);
    }

    :host(:hover) .pause-play {
      opacity: 1;
    }

    .pause-play:hover {
      background: rgba(0, 0, 0, 0.6);
    }

    /* Slide counter */
    .slide-counter {
      position: absolute;
      top: var(--sq-space-2);
      left: var(--sq-space-2);
      z-index: 3;
      padding: var(--sq-space-1) var(--sq-space-2);
      background: rgba(0, 0, 0, 0.4);
      color: white;
      font-size: var(--sq-text-xs);
      border-radius: var(--sq-radius-sm);
    }

    /* Custom controls slot */
    .custom-controls {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 3;
      padding: var(--sq-space-2);
    }
  `;

  /** Animation type: fade or slide. */
  @property({ type: String, reflect: true }) animation: 'fade' | 'slide' = 'fade';

  /** Slide direction: horizontal or vertical. */
  @property({ type: String, reflect: true }) direction: 'horizontal' | 'vertical' = 'horizontal';

  /** Reverse the animation direction. */
  @property({ type: Boolean, reflect: true }) reverse = false;

  /** Whether the carousel loops back to the start. */
  @property({ type: Boolean, reflect: true, attribute: 'animation-loop' }) animationLoop = true;

  /** Whether to show dot navigation. */
  @property({ type: Boolean, reflect: true, attribute: 'control-nav' }) controlNav = true;

  /** Whether to show prev/next navigation. */
  @property({ type: Boolean, reflect: true, attribute: 'direction-nav' }) directionNav = true;

  /** Text for the previous button. */
  @property({ type: String, reflect: true, attribute: 'prev-text' }) prevText = '‹';

  /** Text for the next button. */
  @property({ type: String, reflect: true, attribute: 'next-text' }) nextText = '›';

  /** Whether to allow keyboard navigation. */
  @property({ type: Boolean, reflect: true }) keyboard = true;

  /** Whether to enable touch/swipe navigation. */
  @property({ type: Boolean, reflect: true }) touch = true;

  /** Whether to enable auto-play. */
  @property({ type: Boolean, reflect: true, attribute: 'auto-play' }) autoPlay = false;

  /** Auto-play interval in milliseconds. */
  @property({ type: Number, reflect: true, attribute: 'interval' }) interval = 4000;

  /** Whether to pause auto-play on hover. */
  @property({ type: Boolean, reflect: true, attribute: 'pause-on-hover' }) pauseOnHover = true;

  /** Whether to show pause/play button. */
  @property({ type: Boolean, reflect: true, attribute: 'pause-play' }) pausePlay = false;

  /** Whether to show slide counter. */
  @property({ type: Boolean, reflect: true, attribute: 'show-counter' }) showCounter = false;

  /** Aspect ratio of the carousel: 16/9, 4/3, 1/1, or auto. */
  @property({ type: String, reflect: true }) aspectRatio: '16/9' | '4/3' | '1/1' | 'auto' = '16/9';

  /** Current slide index. */
  @property({ type: Number, reflect: true }) current = 0;

  @state() private _isPlaying = false;
  @state() private _slides: HTMLElement[] = [];

  private _autoPlayTimer?: ReturnType<typeof setInterval>;
  private _touchStartX = 0;
  private _touchStartY = 0;
  private _touchDeltaX = 0;
  private _touchDeltaY = 0;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', this._onKeyDown);
    if (this.touch) {
      this.addEventListener('touchstart', this._onTouchStart, { passive: true });
      this.addEventListener('touchmove', this._onTouchMove, { passive: true });
      this.addEventListener('touchend', this._onTouchEnd);
    }
    if (this.pauseOnHover) {
      this.addEventListener('mouseenter', this._onMouseEnter);
      this.addEventListener('mouseleave', this._onMouseLeave);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._onKeyDown);
    this.removeEventListener('touchstart', this._onTouchStart);
    this.removeEventListener('touchmove', this._onTouchMove);
    this.removeEventListener('touchend', this._onTouchEnd);
    this.removeEventListener('mouseenter', this._onMouseEnter);
    this.removeEventListener('mouseleave', this._onMouseLeave);
    this._stopAutoPlay();
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('current')) {
      this._updateSlides();
    }
    if (changed.has('autoPlay') || changed.has('_isPlaying')) {
      if (this.autoPlay && this._isPlaying) {
        this._startAutoPlay();
      } else {
        this._stopAutoPlay();
      }
    }
  }

  private _onKeyDown = (e: KeyboardEvent) => {
    if (!this.keyboard) return;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      this.prev();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      this.next();
    }
  };

  private _onTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0];
    this._touchStartX = touch.clientX;
    this._touchStartY = touch.clientY;
    this._touchDeltaX = 0;
    this._touchDeltaY = 0;
  };

  private _onTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0];
    this._touchDeltaX = touch.clientX - this._touchStartX;
    this._touchDeltaY = touch.clientY - this._touchStartY;
  };

  private _onTouchEnd = () => {
    const minSwipeDistance = 50;
    const absDeltaX = Math.abs(this._touchDeltaX);
    const absDeltaY = Math.abs(this._touchDeltaY);

    if (absDeltaX > absDeltaY && absDeltaX >= minSwipeDistance) {
      if (this._touchDeltaX > 0) {
        this.prev();
      } else {
        this.next();
      }
    }
  };

  private _onMouseEnter = () => {
    if (this.pauseOnHover && this._isPlaying) {
      this._stopAutoPlay();
    }
  };

  private _onMouseLeave = () => {
    if (this.pauseOnHover && this._isPlaying) {
      this._startAutoPlay();
    }
  };

  private _startAutoPlay() {
    this._stopAutoPlay();
    this._autoPlayTimer = setInterval(() => this.next(), this.interval);
  }

  private _stopAutoPlay() {
    if (this._autoPlayTimer) {
      clearInterval(this._autoPlayTimer);
      this._autoPlayTimer = undefined;
    }
  }

  private _updateSlides() {
    const slot = this.renderRoot.querySelector('slot');
    if (!slot) return;

    this._slides = Array.from(slot.assignedElements()) as HTMLElement[];
    const total = this._slides.length;

    if (total === 0) return;

    if (this.current >= total) this.current = 0;
    if (this.current < 0) this.current = this.animationLoop ? total - 1 : 0;

    this._slides.forEach((slide, i) => {
      slide.classList.add('slide');
      slide.classList.remove('active', 'prev');
      if (i === this.current) {
        slide.classList.add('active');
      } else if (this.animation === 'slide' && i === this._getPrevIndex()) {
        slide.classList.add('prev');
      }
    });

    this.dispatchEvent(new CustomEvent('slide-change', {
      detail: { current: this.current, total },
      bubbles: true,
      composed: true,
    }));
  }

  private _getPrevIndex() {
    const total = this._slides.length;
    return this.animationLoop ? (this.current - 1 + total) % total : Math.max(0, this.current - 1);
  }

  private _getNextIndex() {
    const total = this._slides.length;
    return this.animationLoop ? (this.current + 1) % total : Math.min(total - 1, this.current + 1);
  }

  /** Move to the next slide. */
  next() {
    const total = this._slides.length;
    if (total === 0) return;

    const nextIndex = this._getNextIndex();
    if (!this.animationLoop && nextIndex === this.current) return;

    this.current = nextIndex;
  }

  /** Move to the previous slide. */
  prev() {
    const total = this._slides.length;
    if (total === 0) return;

    const prevIndex = this._getPrevIndex();
    if (!this.animationLoop && prevIndex === this.current) return;

    this.current = prevIndex;
  }

  /** Move to a specific slide by index. */
  goTo(index: number) {
    const total = this._slides.length;
    if (index < 0 || index >= total) return;
    this.current = index;
  }

  /** Start auto-play. */
  play() {
    this._isPlaying = true;
    this._startAutoPlay();
  }

  /** Pause auto-play. */
  pause() {
    this._isPlaying = false;
    this._stopAutoPlay();
  }

  /** Stop auto-play and reset. */
  stop() {
    this._isPlaying = false;
    this._stopAutoPlay();
    this.autoPlay = false;
  }

  /** Total number of slides. */
  get totalSlides(): number {
    const slot = this.renderRoot.querySelector('slot');
    if (!slot) return 0;
    return Array.from(slot.assignedElements()).length;
  }

  override render() {
    const total = this.totalSlides;
    const isLast = !this.animationLoop && this.current === total - 1;
    const isFirst = !this.animationLoop && this.current === 0;

    return html`
      <div
        class="carousel"
        animation=${this.animation}
        direction=${this.direction}
        ?reverse=${this.reverse}
        aspect-ratio=${this.aspectRatio}
      >
        <div class="slides">
          <slot @slotchange=${() => this._updateSlides()}></slot>
        </div>

        ${this.directionNav ? html`
          <div class="direction-nav">
            <button
              class="prev"
              @click=${this.prev}
              ?disabled=${isFirst}
              aria-label="Previous slide"
            >${this.prevText}</button>
            <button
              class="next"
              @click=${this.next}
              ?disabled=${isLast}
              aria-label="Next slide"
            >${this.nextText}</button>
          </div>
        ` : ''}

        ${this.controlNav ? html`
          <div class="control-nav" role="tablist" aria-label="Slide navigation">
            ${Array.from({ length: total }).map((_, i) => html`
              <button
                role="tab"
                class=${i === this.current ? 'active' : ''}
                @click=${() => this.goTo(i)}
                aria-label="Go to slide ${i + 1}"
                aria-selected=${i === this.current}
              ></button>
            `)}
          </div>
        ` : ''}

        ${this.pausePlay ? html`
          <button
            class="pause-play"
            @click=${() => this._isPlaying ? this.pause() : this.play()}
            aria-label=${this._isPlaying ? 'Pause' : 'Play'}
          >
            ${this._isPlaying ? '⏸' : '▶'}
          </button>
        ` : ''}

        ${this.showCounter ? html`
          <div class="slide-counter">
            ${this.current + 1} / ${total}
          </div>
        ` : ''}

        <div class="custom-controls">
          <slot name="controls"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-carousel': SqCarousel;
  }
}
