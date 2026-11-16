import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Squiddy Date Range — date range selection with start and end date inputs.
 *
 * Features:
 * - Dual date inputs (start and end)
 * - Shared calendar popup with range highlighting
 * - Click start then end to define range
 * - Preset quick ranges (Today, Yesterday, Last 7 days, etc.)
 * - Min/max date constraints
 * - Clearable selection
 *
 * @example
 * ```html
 * <sq-date-range
 *   start="2024-01-01"
 *   end="2024-01-15"
 * ></sq-date-range>
 * ```
 */
@customElement('sq-date-range')
export class SqDateRange extends LitElement {
  static override styles = css`
    :host {
      display: block;
      position: relative;
    }

    :host([hidden]) {
      display: none;
    }

    .input-group {
      display: flex;
      align-items: center;
      gap: var(--sq-space-2);
    }

    .input-wrapper {
      display: flex;
      align-items: center;
      gap: var(--sq-space-2);
      height: 40px;
      flex: 1;
      border: 1px solid var(--sq-border-default);
      border-radius: var(--sq-radius-md);
      background: var(--sq-bg-surface);
      padding: 0 var(--sq-space-3);
      transition: var(--sq-transition-color);
      cursor: text;
    }

    .input-wrapper:focus-within,
    .input-wrapper.active {
      border-color: var(--sq-accent-primary);
      box-shadow: 0 0 0 2px var(--sq-accent-primary-light);
    }

    .input {
      flex: 1;
      border: none;
      background: transparent;
      padding: 0;
      height: 100%;
      font-family: var(--sq-font-family);
      font-size: var(--sq-text-md);
      color: var(--sq-fg-default);
      outline: none;
      cursor: text;
    }

    .input::placeholder {
      color: var(--sq-fg-muted);
      opacity: 0.6;
    }

    .input-icon {
      color: var(--sq-fg-muted);
      flex-shrink: 0;
      cursor: pointer;
      font-size: var(--sq-text-sm);
      user-select: none;
    }

    .clear-btn {
      flex-shrink: 0;
      padding: var(--sq-space-0);
      cursor: pointer;
      color: var(--sq-fg-muted);
      font-size: var(--sq-text-xs);
      line-height: 1;
      background: none;
      border: none;
      display: none;
    }

    .clear-btn:hover {
      color: var(--sq-fg-default);
    }

    :host([clearable]) .clear-btn {
      display: block;
    }

    .separator {
      color: var(--sq-fg-muted);
      font-size: var(--sq-text-sm);
      user-select: none;
    }

    .dropdown {
      position: absolute;
      top: calc(100% + var(--sq-space-1));
      left: 0;
      z-index: 100;
      display: none;
      background: var(--sq-bg-surface);
      border: 1px solid var(--sq-border-default);
      border-radius: var(--sq-radius-lg);
      box-shadow: var(--sq-shadow-lg);
      padding: var(--sq-space-3);
      min-width: 320px;
    }

    .dropdown[open] {
      display: flex;
      gap: var(--sq-space-3);
    }

    .presets {
      display: flex;
      flex-direction: column;
      gap: var(--sq-space-0);
      min-width: 120px;
      border-right: 1px solid var(--sq-border-subtle);
      padding-right: var(--sq-space-3);
    }

    .preset-label {
      font-size: var(--sq-text-xs);
      font-weight: var(--sq-font-weight-semibold);
      color: var(--sq-fg-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: var(--sq-space-1);
    }

    .preset-btn {
      display: block;
      width: 100%;
      text-align: left;
      padding: var(--sq-space-1) var(--sq-space-2);
      border: none;
      border-radius: var(--sq-radius-sm);
      background: none;
      color: var(--sq-fg-muted);
      cursor: pointer;
      font-size: var(--sq-text-xs);
      transition: background var(--sq-transition-fast), color var(--sq-transition-fast);
    }

    .preset-btn:hover {
      background: var(--sq-bg-subtle);
      color: var(--sq-fg-default);
    }

    .calendar-container {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .calendar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: var(--sq-space-2);
      gap: var(--sq-space-2);
    }

    .calendar-nav {
      display: flex;
      align-items: center;
      gap: var(--sq-space-1);
    }

    .calendar-nav button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border: 1px solid var(--sq-border-subtle);
      border-radius: var(--sq-radius-sm);
      background: var(--sq-bg-surface);
      color: var(--sq-fg-muted);
      cursor: pointer;
      font-size: var(--sq-text-xs);
      transition: background var(--sq-transition-fast), color var(--sq-transition-fast);
    }

    .calendar-nav button:hover {
      background: var(--sq-bg-subtle);
      color: var(--sq-fg-default);
    }

    .calendar-title {
      font-size: var(--sq-text-sm);
      font-weight: var(--sq-font-weight-semibold);
      color: var(--sq-fg-default);
      min-width: 120px;
      text-align: center;
    }

    .calendar-weekdays {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 1px;
      margin-bottom: var(--sq-space-1);
    }

    .calendar-weekday {
      text-align: center;
      font-size: var(--sq-text-xs);
      font-weight: var(--sq-font-weight-semibold);
      color: var(--sq-fg-muted);
      padding: var(--sq-space-1) 0;
    }

    .calendar-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 1px;
    }

    .calendar-day {
      display: flex;
      align-items: center;
      justify-content: center;
      aspect-ratio: 1;
      font-size: var(--sq-text-sm);
      border-radius: var(--sq-radius-sm);
      cursor: pointer;
      transition: background var(--sq-transition-fast);
      border: none;
      background: none;
      color: var(--sq-fg-default);
      font-family: inherit;
      position: relative;
    }

    .calendar-day:hover:not([disabled]):not([other-month]) {
      background: var(--sq-bg-subtle);
    }

    .calendar-day[other-month] {
      color: var(--sq-fg-muted);
      opacity: 0.5;
    }

    .calendar-day[today]::after {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: var(--sq-accent-primary);
    }

    .calendar-day[in-range] {
      background: var(--sq-accent-primary-light);
      border-radius: 0;
    }

    .calendar-day[range-start] {
      background: var(--sq-accent-primary);
      color: white;
      border-radius: var(--sq-radius-sm) 0 0 var(--sq-radius-sm);
    }

    .calendar-day[range-end] {
      background: var(--sq-accent-primary);
      color: white;
      border-radius: 0 var(--sq-radius-sm) var(--sq-radius-sm) 0;
    }

    .calendar-day[range-start][range-end] {
      border-radius: var(--sq-radius-sm);
    }

    .calendar-day[disabled] {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .calendar-day[hovering] {
      background: var(--sq-bg-subtle);
    }

    .calendar-footer {
      display: flex;
      justify-content: flex-end;
      gap: var(--sq-space-2);
      margin-top: var(--sq-space-2);
      padding-top: var(--sq-space-2);
      border-top: 1px solid var(--sq-border-subtle);
    }

    .calendar-footer button {
      padding: var(--sq-space-1) var(--sq-space-3);
      border: 1px solid var(--sq-border-default);
      border-radius: var(--sq-radius-sm);
      background: var(--sq-bg-surface);
      color: var(--sq-fg-muted);
      cursor: pointer;
      font-size: var(--sq-text-xs);
      transition: background var(--sq-transition-fast), color var(--sq-transition-fast);
    }

    .calendar-footer button:hover {
      background: var(--sq-bg-subtle);
      color: var(--sq-fg-default);
    }

    .status-text {
      font-size: var(--sq-text-xs);
      color: var(--sq-fg-muted);
      padding: var(--sq-space-1) 0;
      text-align: center;
    }
  `;

  /** Start date in YYYY-MM-DD format. */
  @property({ type: String }) start = '';

  /** End date in YYYY-MM-DD format. */
  @property({ type: String }) end = '';

  /** Date format pattern. */
  @property({ type: String }) format = 'YYYY-MM-DD';

  /** Minimum selectable date. */
  @property({ type: String, attribute: 'min-date' }) minDate = '';

  /** Maximum selectable date. */
  @property({ type: String, attribute: 'max-date' }) maxDate = '';

  /** Whether the range can be cleared. */
  @property({ type: Boolean, reflect: true }) clearable = true;

  /** Whether to show preset ranges. */
  @property({ type: Boolean, reflect: true, attribute: 'show-presets' }) showPresets = true;

  /** Placeholder for start date input. */
  @property({ type: String, attribute: 'start-placeholder' }) startPlaceholder = 'Start date';

  /** Placeholder for end date input. */
  @property({ type: String, attribute: 'end-placeholder' }) endPlaceholder = 'End date';

  /** First day of the week (0 = Sunday, 1 = Monday). */
  @property({ type: Number, attribute: 'first-day' }) firstDay = 1;

  /** Disable weekend dates (Saturday and Sunday). */
  @property({ type: Boolean, reflect: true, attribute: 'disable-weekends' }) disableWeekends = false;

  /** Disable weekday dates (Monday–Friday). */
  @property({ type: Boolean, reflect: true, attribute: 'disable-weekdays' }) disableWeekdays = false;

  @state() private _isOpen = false;
  @state() private _viewDate = new Date();
  @state() private _selectingStart = true;
  @state() private _hoverDay: string | null = null;

  private readonly _monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  private readonly _dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  connectedCallback() {
    super.connectedCallback();
    if (this.start) {
      this._viewDate = new Date(this.start + 'T00:00:00');
    }
    document.addEventListener('click', this._onGlobalClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._onGlobalClick);
  }

  private _onGlobalClick = (e: MouseEvent) => {
    if (this._isOpen && !this.contains(e.target as Node)) {
      this._isOpen = false;
    }
  };

  private _toggleDropdown() {
    this._isOpen = !this._isOpen;
    this._selectingStart = !this.start || Boolean(this.start && this.end);
  }

  private _selectDate(dayStr: string) {
    if (this._selectingStart) {
      this.start = dayStr;
      this.end = '';
      this._selectingStart = false;
    } else {
      if (dayStr < this.start) {
        this.end = this.start;
        this.start = dayStr;
      } else {
        this.end = dayStr;
      }
      this._selectingStart = true;
      this._isOpen = false;
    }

    this._viewDate = new Date(dayStr + 'T00:00:00');

    this.dispatchEvent(new CustomEvent('range-change', {
      detail: { start: this.start, end: this.end },
      bubbles: true,
      composed: true,
    }));
  }

  private _clearRange() {
    this.start = '';
    this.end = '';
    this._selectingStart = true;
    this.dispatchEvent(new CustomEvent('range-change', {
      detail: { start: '', end: '' },
      bubbles: true,
      composed: true,
    }));
  }

  private _prevMonth() {
    this._viewDate = new Date(this._viewDate.getFullYear(), this._viewDate.getMonth() - 1, 1);
  }

  private _nextMonth() {
    this._viewDate = new Date(this._viewDate.getFullYear(), this._viewDate.getMonth() + 1, 1);
  }

  private _goToToday() {
    const today = new Date();
    this._viewDate = new Date(today.getFullYear(), today.getMonth(), 1);
  }

  private _applyPreset(preset: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const formatDate = (d: Date) => {
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const dd = String(d.getDate()).padStart(2, '0');
      return `${y}-${m}-${dd}`;
    };

    switch (preset) {
      case 'today':
        this.start = formatDate(today);
        this.end = formatDate(today);
        break;
      case 'yesterday': {
        const y = new Date(today);
        y.setDate(y.getDate() - 1);
        this.start = formatDate(y);
        this.end = formatDate(y);
        break;
      }
      case 'last7': {
        const d7 = new Date(today);
        d7.setDate(d7.getDate() - 6);
        this.start = formatDate(d7);
        this.end = formatDate(today);
        break;
      }
      case 'last30': {
        const d30 = new Date(today);
        d30.setDate(d30.getDate() - 29);
        this.start = formatDate(d30);
        this.end = formatDate(today);
        break;
      }
      case 'thisMonth': {
        const first = new Date(today.getFullYear(), today.getMonth(), 1);
        this.start = formatDate(first);
        this.end = formatDate(today);
        break;
      }
      case 'lastMonth': {
        const first = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const last = new Date(today.getFullYear(), today.getMonth(), 0);
        this.start = formatDate(first);
        this.end = formatDate(last);
        break;
      }
    }

    this._selectingStart = true;
    this._isOpen = false;
    this._viewDate = new Date(this.start + 'T00:00:00');

    this.dispatchEvent(new CustomEvent('range-change', {
      detail: { start: this.start, end: this.end },
      bubbles: true,
      composed: true,
    }));
  }

  private _formatISO(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private _formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return this.format
      .replace('YYYY', String(year))
      .replace('MM', month)
      .replace('DD', day);
  }

  private _formatDisplay(value: string): string {
    if (!value) return '';
    const date = new Date(value + 'T00:00:00');
    return this._formatDate(date);
  }

  private _isDateDisabled(dayStr: string): boolean {
    const date = new Date(dayStr + 'T00:00:00');
    const dateStr = this._formatISO(date);
    const dayOfWeek = date.getDay();

    if (this.minDate && dateStr < this.minDate) return true;
    if (this.maxDate && dateStr > this.maxDate) return true;
    if (this.disableWeekends && (dayOfWeek === 0 || dayOfWeek === 6)) return true;
    if (this.disableWeekdays && dayOfWeek >= 1 && dayOfWeek <= 5) return true;
    return false;
  }

  private _getDayState(year: number, month: number, day: number) {
    const dayStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const states: string[] = [];

    const today = new Date();
    if (today.getFullYear() === year && today.getMonth() === month && today.getDate() === day) {
      states.push('today');
    }

    if (this.start && this.end) {
      if (dayStr === this.start) states.push('range-start');
      else if (dayStr === this.end) states.push('range-end');
      else if (dayStr > this.start && dayStr < this.end) states.push('in-range');
    } else if (this.start && !this.end) {
      if (dayStr === this.start) states.push('range-start');
      // Show hover range
      if (this._hoverDay) {
        const hoverEnd = this._hoverDay > this.start ? this._hoverDay : this.start;
        const hoverStart = this._hoverDay < this.start ? this._hoverDay : this.start;
        if (dayStr > hoverStart && dayStr < hoverEnd) states.push('in-range');
        if (dayStr === hoverEnd && this._hoverDay !== this.start) states.push('hovering');
      }
    }

    return states;
  }

  private _getDaysInMonth(): number {
    return new Date(this._viewDate.getFullYear(), this._viewDate.getMonth() + 1, 0).getDate();
  }

  private _getFirstDayOfMonth(): number {
    return new Date(this._viewDate.getFullYear(), this._viewDate.getMonth(), 1).getDay();
  }

  private _getDayNames() {
    const names = [...this._dayNames];
    if (this.firstDay === 1) {
      const sunday = names.shift();
      names.push(sunday!);
    }
    return names;
  }

  override render() {
    const year = this._viewDate.getFullYear();
    const month = this._viewDate.getMonth();
    const daysInMonth = this._getDaysInMonth();
    const firstDay = this._getFirstDayOfMonth();
    const adjustedFirstDay = (firstDay - this.firstDay + 7) % 7;
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const dayNames = this._getDayNames();

    return html`
      <div class="input-group">
        <div class="input-wrapper ${this._selectingStart && this._isOpen ? 'active' : ''}">
          <input
            type="text"
            class="input"
            .value=${this._formatDisplay(this.start)}
            placeholder=${this.startPlaceholder}
            readonly
            aria-label="Start date"
            @click=${this._toggleDropdown}
          />
          ${this.start ? html`
            <button
              class="clear-btn"
              @click=${(e: Event) => {
                e.stopPropagation();
                this.start = '';
                this._selectingStart = true;
              }}
              aria-label="Clear start date"
            >×</button>
          ` : ''}
          <span class="input-icon" @click=${this._toggleDropdown} aria-hidden="true">📅</span>
        </div>

        <span class="separator">→</span>

        <div class="input-wrapper ${!this._selectingStart && this._isOpen ? 'active' : ''}">
          <input
            type="text"
            class="input"
            .value=${this._formatDisplay(this.end)}
            placeholder=${this.endPlaceholder}
            readonly
            aria-label="End date"
            @click=${this._toggleDropdown}
          />
          ${this.end ? html`
            <button
              class="clear-btn"
              @click=${(e: Event) => {
                e.stopPropagation();
                this.end = '';
                this._selectingStart = !this.start;
              }}
              aria-label="Clear end date"
            >×</button>
          ` : ''}
        </div>

        ${this.clearable && (this.start || this.end) ? html`
          <button
            class="clear-btn"
            style="position: relative; right: auto; top: auto; transform: none;"
            @click=${this._clearRange}
            aria-label="Clear range"
          >×</button>
        ` : ''}
      </div>

      <div class="dropdown" ?open=${this._isOpen}>
        ${this.showPresets ? html`
          <div class="presets">
            <div class="preset-label">Quick Ranges</div>
            <button class="preset-btn" @click=${() => this._applyPreset('today')}>Today</button>
            <button class="preset-btn" @click=${() => this._applyPreset('yesterday')}>Yesterday</button>
            <button class="preset-btn" @click=${() => this._applyPreset('last7')}>Last 7 days</button>
            <button class="preset-btn" @click=${() => this._applyPreset('last30')}>Last 30 days</button>
            <button class="preset-btn" @click=${() => this._applyPreset('thisMonth')}>This month</button>
            <button class="preset-btn" @click=${() => this._applyPreset('lastMonth')}>Last month</button>
          </div>
        ` : ''}

        <div class="calendar-container">
          ${!this._selectingStart && this.start ? html`
            <div class="status-text">Select end date</div>
          ` : html`
            <div class="status-text">Select start date</div>
          `}

          <div class="calendar-header">
            <div class="calendar-nav">
              <button @click=${this._prevMonth} aria-label="Previous month">‹</button>
            </div>
            <span class="calendar-title">
              ${this._monthNames[month]} ${year}
            </span>
            <div class="calendar-nav">
              <button @click=${this._nextMonth} aria-label="Next month">›</button>
            </div>
          </div>

          <div class="calendar-weekdays">
            ${dayNames.map(name => html`<span class="calendar-weekday">${name}</span>`)}
          </div>

          <div class="calendar-grid" role="grid" aria-label="Calendar">
            ${Array.from({ length: adjustedFirstDay }).map((_, i) => {
              const day = daysInPrevMonth - adjustedFirstDay + i + 1;
              return html`
                <button class="calendar-day" other-month>${day}</button>
              `;
            })}

            ${Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dayStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
              const isDisabled = this._isDateDisabled(dayStr);
              const dayStates = this._getDayState(year, month, day);

              const inRange = dayStates.includes('in-range');
              const rangeStart = dayStates.includes('range-start');
              const rangeEnd = dayStates.includes('range-end');
              const hovering = dayStates.includes('hovering');

              return html`
                <button
                  class="calendar-day"
                  ?disabled=${isDisabled}
                  ?today=${dayStates.includes('today')}
                  ?in-range=${inRange}
                  ?range-start=${rangeStart}
                  ?range-end=${rangeEnd}
                  ?hovering=${hovering}
                  @click=${() => !isDisabled && this._selectDate(dayStr)}
                  @mouseenter=${() => {
                    if (!this.end) this._hoverDay = dayStr;
                  }}
                  @mouseleave=${() => {
                    this._hoverDay = null;
                  }}
                  role="gridcell"
                  aria-label=${`${this._monthNames[month]} ${day}, ${year}`}
                >${day}</button>
              `;
            })}

            ${Array.from({
              length: Math.ceil((adjustedFirstDay + daysInMonth) / 7) * 7 - (adjustedFirstDay + daysInMonth),
            }).map((_, i) => {
              const day = i + 1;
              return html`
                <button class="calendar-day" other-month>${day}</button>
              `;
            })}
          </div>

          <div class="calendar-footer">
            <button @click=${this._goToToday}>Today</button>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-date-range': SqDateRange;
  }
}
