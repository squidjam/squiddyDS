import { LitElement, html } from 'lit';

/**
 * Base class for all Squiddy Design System components.
 * Provides theme support, slot forwarding, and common utilities.
 */
export class SquiddyElement extends LitElement {
  /** Apply a theme to this component and all descendants. */
  set theme(value: 'light' | 'dark' | '') {
    this.setAttribute('sq-mode', value || '');
  }

  get theme(): 'light' | 'dark' | '' {
    return (this.getAttribute('sq-mode') || '') as 'light' | 'dark' | '';
  }

  protected renderSlots() {
    return html`<slot></slot>`;
  }
}
