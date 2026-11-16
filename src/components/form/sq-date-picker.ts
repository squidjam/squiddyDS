import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Squiddy Date Picker — date selection input with calendar popup.
 *
 * Features:
 * - Calendar grid navigation
 * - Keyboard navigation within calendar
 * - Date formatting
 * - Min/max date constraints
 * - Disabled dates
 * - Today quick-select
 *
 * @example
 * ```html
 * <sq-date-picker value="2024-01-15" format="YYYY-MM-DD"></sq-date-picker>
 * ```
 */
@customElement('sq-date-picker')
export class SqDatePicker extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    :host([hidden]) {
      display: none;
    }

    .input-wrapper {
      display: flex;
      align-items: center;
      gap: var(--sq-space-2);
      height: 40px;
      border: 1px solid var(--sq-border-default);
      border-radius: var(--sq-radius-md);
      background: var(--sq-bg-surface);
      padding: 0 var(--sq-space-3);
      transition: var(--sq-transition-color);
      cursor: text;
    }

    .input-wrapper:focus-within {
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

    .input-icon:hover {
      color: var(--sq-fg-default);
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

    :host(:not([clearable])) .clear-btn {
      display: none !important;
    }

    :host([clearable]) .clear-btn {
      display: block;
    }

    .dropdown {
      position: absolute;
      top: calc(100% + var(--sq-space-1));
      left: 0;
      z-index: 100;
      display: none;
      flex-direction: column;
      background: var(--sq-bg-surface);
      border: 1px solid var(--sq-border-default);
      border-radius: var(--sq-radius-lg);
      box-shadow: var(--sq-shadow-lg);
      padding: var(--sq-space-3);
      min-width: 280px;
    }

    .dropdown[open] {
      display: flex;
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

    .calendar-nav button:disabled {
      opacity: 0.3;
      cursor: not-allowed;
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

    .calendar-day[selected] {
      background: var(--sq-accent-primary);
      color: white;
      font-weight: var(--sq-font-weight-semibold);
    }

    .calendar-day[selected][today]::after {
      background: white;
    }

    .calendar-day[disabled] {
      opacity: 0.3;
      cursor: not-allowed;
      text-decoration: line-through;
    }

    .calendar-day[focused] {
      outline: 2px solid var(--sq-accent-primary);
      outline-offset: -2px;
    }

    .calendar-day[in-range] {
      background: var(--sq-accent-primary-light);
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

    .calendar-footer button.today-btn:hover {
      color: var(--sq-accent-primary);
      border-color: var(--sq-accent-primary);
    }
  `;

  /** Selected date in YYYY-MM-DD format. */
  @property({ type: String }) value = '';

  /** Placeholder text for the input. */
  @property({ type: String }) placeholder = 'Select a date';

  /** Date format pattern (YYYY, MM, DD, YYYY-MM-DD, etc.). */
  @property({ type: String }) format = 'YYYY-MM-DD';

  /** Minimum selectable date. */
  @property({ type: String, attribute: 'min-date' }) minDate = '';

  /** Maximum selectable date. */
  @property({ type: String, attribute: 'max-date' }) maxDate = '';

  /** Whether the picker can be cleared. */
  @property({ type: Boolean, reflect: true }) clearable = true;

  /** Whether the input is readonly (only clickable via calendar). */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /** Whether the input is disabled. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Label for the input field. */
  @property({ type: String }) label = 'Date';

  /** First day of the week (0 = Sunday, 1 = Monday). */
  @property({ type: Number, attribute: 'first-day' }) firstDay = 1;

  /** Disable weekday dates (Monday–Friday). */
  @property({ type: Boolean, reflect: true, attribute: 'disable-weekdays' }) disableWeekdays = false;

  /** Disable weekend dates (Saturday and Sunday). */
  @property({ type: Boolean, reflect: true, attribute: 'disable-weekends' }) disableWeekends = false;


  @state() private _isOpen = false;
  @state() private _viewDate = new Date();
  @state() private _focusedDay: number | null = null;

  private readonly _monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  private readonly _dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  connectedCallback() {
    super.connectedCallback();
    if (this.value) {
      this._viewDate = new Date(this.value + 'T00:00:00');
    }
    document.addEventListener('click', this._onGlobalClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._onGlobalClick);
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('value') && this.value) {
      this._viewDate = new Date(this.value + 'T00:00:00');
    }
  }

  private _onGlobalClick = (e: MouseEvent) => {
    if (this._isOpen && !this.contains(e.target as Node)) {
      this._isOpen = false;
    }
  };

  private _toggleDropdown() {
    if (this.disabled) return;
    this._isOpen = !this._isOpen;
    if (this._isOpen) {
      this._focusedDay = this._getFocusedDay();
    }
  }

  private _getFocusedDay(): number | null {
    if (this.value) {
      const date = new Date(this.value + 'T00:00:00');
      if (date.getMonth() === this._viewDate.getMonth() && date.getFullYear() === this._viewDate.getFullYear()) {
        return date.getDate();
      }
    }
    const today = new Date();
    if (today.getMonth() === this._viewDate.getMonth() && today.getFullYear() === this._viewDate.getFullYear()) {
      return today.getDate();
    }
    return 1;
  }

  private _selectDate(day: number) {
    const date = new Date(this._viewDate.getFullYear(), this._viewDate.getMonth(), day);
    this.value = this._formatISO(date);
    this._isOpen = false;
    this.dispatchEvent(new CustomEvent('date-change', {
      detail: { value: this.value, date },
      bubbles: true,
      composed: true,
    }));
  }

  private _clearValue() {
    this.value = '';
    this.dispatchEvent(new CustomEvent('date-change', {
      detail: { value: '', date: null },
      bubbles: true,
      composed: true,
    }));
  }

  private _prevMonth() {
    this._viewDate = new Date(this._viewDate.getFullYear(), this._viewDate.getMonth() - 1, 1);
    this._focusedDay = this._getFocusedDay();
  }

  private _nextMonth() {
    this._viewDate = new Date(this._viewDate.getFullYear(), this._viewDate.getMonth() + 1, 1);
    this._focusedDay = this._getFocusedDay();
  }

  private _goToToday() {
    const today = new Date();
    this._viewDate = new Date(today.getFullYear(), today.getMonth(), 1);
    this._focusedDay = today.getDate();
  }

  private _isDateDisabled(day: number): boolean {
    const date = new Date(this._viewDate.getFullYear(), this._viewDate.getMonth(), day);
    const dateStr = this._formatISO(date);
    const dayOfWeek = date.getDay();

    if (this.minDate && dateStr < this.minDate) return true;
    if (this.maxDate && dateStr > this.maxDate) return true;
    if (this.disableWeekends && (dayOfWeek === 0 || dayOfWeek === 6)) return true;
    if (this.disableWeekdays && dayOfWeek >= 1 && dayOfWeek <= 5) return true;
    return false;
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

  private _formatDisplayValue(): string {
    if (!this.value) return '';
    const date = new Date(this.value + 'T00:00:00');
    return this._formatDate(date);
  }

  private _onKeyDown(e: KeyboardEvent) {
    if (!this._isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter') {
        e.preventDefault();
        this._isOpen = true;
        this._focusedDay = this._getFocusedDay();
      }
      return;
    }

    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        this._focusedDay = Math.max(1, (this._focusedDay || 1) - 7);
        break;
      case 'ArrowDown':
        e.preventDefault();
        this._focusedDay = Math.min(this._getDaysInMonth(), (this._focusedDay || 1) + 7);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        this._focusedDay = Math.max(1, (this._focusedDay || 1) - 1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        this._focusedDay = Math.min(this._getDaysInMonth(), (this._focusedDay || 1) + 1);
        break;
      case 'Enter':
        e.preventDefault();
        if (this._focusedDay && !this._isDateDisabled(this._focusedDay)) {
          this._selectDate(this._focusedDay);
        }
        break;
      case 'Escape':
        e.preventDefault();
        this._isOpen = false;
        break;
      case 'PageUp':
        e.preventDefault();
        if (e.ctrlKey) {
          this._viewDate = new Date(this._viewDate.getFullYear() - 1, this._viewDate.getMonth(), 1);
        } else {
          this._prevMonth();
        }
        break;
      case 'PageDown':
        e.preventDefault();
        if (e.ctrlKey) {
          this._viewDate = new Date(this._viewDate.getFullYear() + 1, this._viewDate.getMonth(), 1);
        } else {
          this._nextMonth();
        }
        break;
      case 'Home':
        e.preventDefault();
        this._focusedDay = 1;
        break;
      case 'End':
        e.preventDefault();
        this._focusedDay = this._getDaysInMonth();
        break;
    }
  }

  private _getDaysInMonth(): number {
    return new Date(this._viewDate.getFullYear(), this._viewDate.getMonth() + 1, 0).getDate();
  }

  private _getFirstDayOfMonth(): number {
    return new Date(this._viewDate.getFullYear(), this._viewDate.getMonth(), 1).getDay();
  }

  private _isToday(year: number, month: number, day: number): boolean {
    const today = new Date();
    return today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
  }

  private _isSelected(year: number, month: number, day: number): boolean {
    if (!this.value) return false;
    const date = new Date(this.value + 'T00:00:00');
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
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
    const displayValue = this._formatDisplayValue();

    const prevMonthDisabled = this.minDate
      ? new Date(year, month - 1, 1).getTime() <= new Date(this.minDate).getTime() - 86400000
      : false;
    const nextMonthDisabled = this.maxDate
      ? new Date(year, month + 1, 1).getTime() >= new Date(this.maxDate).getTime()
      : false;

    return html`
      <div class="input-wrapper">
        <input
          type="text"
          class="input"
          .value=${displayValue}
          placeholder=${this.placeholder}
          ?readonly=${this.readonly || true}
          ?disabled=${this.disabled}
          aria-label=${this.label}
          aria-haspopup="dialog"
          aria-expanded=${this._isOpen}
          @click=${this._toggleDropdown}
          @keydown=${this._onKeyDown}
          @input=${(e: Event) => {
            const val = (e.target as HTMLInputElement).value;
            if (/^\d{4}-\d{2}-\d{2}$/.test(val)) {
              this.value = val;
            }
          }}
        />
        <button
          class="clear-btn"
          ?hidden=${!this.value}
          @click=${this._clearValue}
          aria-label="Clear date"
        >×</button>
        <span class="input-icon" @click=${this._toggleDropdown} aria-hidden="true">📅</span>
      </div>

      <div class="dropdown" ?open=${this._isOpen}>
        <div class="calendar-header">
          <div class="calendar-nav">
            <button @click=${this._prevMonth} ?disabled=${prevMonthDisabled} aria-label="Previous month">‹</button>
          </div>
          <span class="calendar-title">
            ${this._monthNames[month]} ${year}
          </span>
          <div class="calendar-nav">
            <button @click=${this._nextMonth} ?disabled=${nextMonthDisabled} aria-label="Next month">›</button>
          </div>
        </div>

        <div class="calendar-weekdays">
          ${dayNames.map(name => html`<span class="calendar-weekday">${name}</span>`)}
        </div>

        <div class="calendar-grid" role="grid" aria-label="Calendar">
          ${Array.from({ length: adjustedFirstDay }).map((_, i) => {
            const day = daysInPrevMonth - adjustedFirstDay + i + 1;
            return html`
              <button
                class="calendar-day"
                other-month
                @click=${() => { this._prevMonth(); requestAnimationFrame(() => this._selectDate(day)); }}
              >${day}</button>
            `;
          })}

          ${Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const isDisabled = this._isDateDisabled(day);
            const isToday = this._isToday(year, month, day);
            const isSelected = this._isSelected(year, month, day);
            const isFocused = this._focusedDay === day;

            return html`
              <button
                class="calendar-day"
                ?disabled=${isDisabled}
                ?today=${isToday}
                ?selected=${isSelected}
                ?focused=${isFocused}
                @click=${() => !isDisabled && this._selectDate(day)}
                @keydown=${(e: KeyboardEvent) => {
                  if (e.key === 'Enter' && !isDisabled) this._selectDate(day);
                }}
                role="gridcell"
                aria-label=${`${this._monthNames[month]} ${day}, ${year}`}
                aria-selected=${isSelected}
              >${day}</button>
            `;
          })}

          ${Array.from({
            length: Math.ceil((adjustedFirstDay + daysInMonth) / 7) * 7 - (adjustedFirstDay + daysInMonth),
          }).map((_, i) => {
            const day = i + 1;
            return html`
              <button
                class="calendar-day"
                other-month
                @click=${() => { this._nextMonth(); requestAnimationFrame(() => this._selectDate(day)); }}
              >${day}</button>
            `;
          })}
        </div>

        <div class="calendar-footer">
          <button class="today-btn" @click=${this._goToToday}>Today</button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sq-date-picker': SqDatePicker;
  }
}
