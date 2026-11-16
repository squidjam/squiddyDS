/**
 * Squiddy DS Component Registry
 *
 * Auto-generated registry of all Squiddy DS components and their valid attributes.
 * Used by ESLint rules to validate attribute names, values, and types.
 */

export interface ComponentAttribute {
  /** The HTML attribute name (may differ from the property name) */
  attribute?: string;
  /** The TypeScript type */
  type: 'String' | 'Boolean' | 'Number' | 'Array' | 'Object';
  /** Allowed values for string enums */
  values?: string[];
  /** Default value */
  default?: string | number | boolean;
  /** Whether the attribute reflects to the DOM */
  reflect?: boolean;
}

export interface ComponentDefinition {
  /** The custom element tag name */
  tag: string;
  /** Category of the component */
  category: string;
  /** Map of property name → attribute definition */
  attributes: Record<string, ComponentAttribute>;
}

export const components: ComponentDefinition[] = [
  // ─── Interactive ───
  {
    tag: 'sq-button',
    category: 'interactive',
    attributes: {
      variant: { type: 'String', values: ['primary', 'secondary', 'subtle', 'danger', 'success', 'warning', 'info'], default: 'primary' },
      size: { type: 'String', values: ['sm', 'md', 'lg'], default: 'md' },
      disabled: { type: 'Boolean', default: false },
      loading: { type: 'Boolean', default: false },
      type: { type: 'String', values: ['button', 'submit', 'reset'], default: 'button' },
    },
  },
  {
    tag: 'sq-button-group',
    category: 'interactive',
    attributes: {
      orientation: { type: 'String', values: ['horizontal', 'vertical'], default: 'horizontal' },
    },
  },
  {
    tag: 'sq-split-button',
    category: 'interactive',
    attributes: {
      label: { type: 'String', default: 'Action' },
      variant: { type: 'String', values: ['primary', 'secondary', 'subtle', 'danger'], default: 'primary', reflect: true },
      size: { type: 'String', values: ['sm', 'md', 'lg'], default: 'md', reflect: true },
      disabled: { type: 'Boolean', default: false, reflect: true },
      open: { type: 'Boolean', default: false, reflect: true },
      'min-width': { type: 'String', default: '180px' },
    },
  },
  {
    tag: 'sq-accordion',
    category: 'interactive',
    attributes: {
      variant: { type: 'String', values: ['default', 'bordered'], default: 'default' },
      multiple: { type: 'Boolean', default: false },
      open: { type: 'Boolean', default: false, reflect: true },
      header: { type: 'String', default: '' },
    },
  },
  {
    tag: 'sq-carousel',
    category: 'interactive',
    attributes: {
      animation: { type: 'String', values: ['fade', 'slide'], default: 'fade', reflect: true },
      direction: { type: 'String', values: ['horizontal', 'vertical'], default: 'horizontal', reflect: true },
      reverse: { type: 'Boolean', default: false, reflect: true },
      'animation-loop': { type: 'Boolean', default: true, reflect: true },
      'control-nav': { type: 'Boolean', default: true, reflect: true },
      'direction-nav': { type: 'Boolean', default: true, reflect: true },
      'prev-text': { type: 'String', default: '‹', reflect: true },
      'next-text': { type: 'String', default: '›', reflect: true },
      keyboard: { type: 'Boolean', default: true, reflect: true },
      touch: { type: 'Boolean', default: true, reflect: true },
      'auto-play': { type: 'Boolean', default: false, reflect: true },
      interval: { type: 'Number', default: 4000, reflect: true },
      'pause-on-hover': { type: 'Boolean', default: true, reflect: true },
      'pause-play': { type: 'Boolean', default: false, reflect: true },
      'show-counter': { type: 'Boolean', default: false, reflect: true },
      'aspect-ratio': { type: 'String', values: ['16/9', '4/3', '1/1', 'auto'], default: '16/9', reflect: true },
      current: { type: 'Number', default: 0, reflect: true },
    },
  },
  {
    tag: 'sq-clipboard',
    category: 'interactive',
    attributes: {
      text: { type: 'String', default: '' },
      label: { type: 'String', default: 'Copy' },
      'copied-label': { type: 'String', default: 'Copied!' },
      'feedback-duration': { type: 'Number', default: 2000 },
    },
  },
  {
    tag: 'sq-collapsible',
    category: 'interactive',
    attributes: {
      'header-text': { type: 'String', default: 'Toggle' },
      open: { type: 'Boolean', default: false },
      disabled: { type: 'Boolean', default: false },
    },
  },
  {
    tag: 'sq-details',
    category: 'interactive',
    attributes: {
      open: { type: 'Boolean', default: false, reflect: true },
    },
  },
  {
    tag: 'sq-dialog',
    category: 'interactive',
    attributes: {
      open: { type: 'Boolean', default: false, reflect: true },
      label: { type: 'String', default: '' },
    },
  },
  {
    tag: 'sq-drawer',
    category: 'interactive',
    attributes: {
      open: { type: 'Boolean', default: false, reflect: true },
      position: { type: 'String', values: ['left', 'right', 'top', 'bottom'], default: 'right', reflect: true },
      title: { type: 'String', default: '' },
      closable: { type: 'Boolean', default: true },
    },
  },
  {
    tag: 'sq-meter',
    category: 'interactive',
    attributes: {
      value: { type: 'Number', default: 0 },
      min: { type: 'Number', default: 0 },
      max: { type: 'Number', default: 1 },
      low: { type: 'Number', default: 0.33 },
      high: { type: 'Number', default: 0.66 },
      optimum: { type: 'Number' },
      'show-label': { type: 'Boolean', default: false },
    },
  },
  {
    tag: 'sq-progress',
    category: 'interactive',
    attributes: {
      value: { type: 'Number', default: 0 },
      max: { type: 'Number', default: 100 },
      indeterminate: { type: 'Boolean', default: false },
      'show-label': { type: 'Boolean', default: false },
    },
  },
  {
    tag: 'sq-skeleton',
    category: 'interactive',
    attributes: {
      variant: { type: 'String', default: 'rect' },
      width: { type: 'String', default: '100%' },
      height: { type: 'String', default: '16px' },
    },
  },
  {
    tag: 'sq-spinner',
    category: 'interactive',
    attributes: {
      size: { type: 'String', default: 'md' },
      color: { type: 'String', default: 'primary' },
      speed: { type: 'String', default: 'normal' },
      label: { type: 'String', default: 'Loading' },
    },
  },
  {
    tag: 'sq-switch',
    category: 'interactive',
    attributes: {
      checked: { type: 'Boolean', default: false },
      disabled: { type: 'Boolean', default: false },
      label: { type: 'String', default: '' },
    },
  },

  // ─── Form ───
  {
    tag: 'sq-input',
    category: 'form',
    attributes: {
      id: { type: 'String', default: '' },
      label: { type: 'String', default: '' },
      type: { type: 'String', default: 'text' },
      placeholder: { type: 'String', default: '' },
      value: { type: 'String', default: '' },
      'helper-text': { type: 'String', default: '' },
      error: { type: 'String', default: '' },
      disabled: { type: 'Boolean', default: false },
      required: { type: 'Boolean', default: false },
      'leading-icon': { type: 'String', default: '' },
      'trailing-icon': { type: 'String', default: '' },
    },
  },
  {
    tag: 'sq-textarea',
    category: 'form',
    attributes: {
      id: { type: 'String', default: '' },
      label: { type: 'String', default: '' },
      value: { type: 'String', default: '' },
      placeholder: { type: 'String', default: '' },
      rows: { type: 'Number', default: 4 },
      disabled: { type: 'Boolean', default: false },
      required: { type: 'Boolean', default: false },
      'helper-text': { type: 'String', default: '' },
      error: { type: 'String', default: '' },
    },
  },
  {
    tag: 'sq-select',
    category: 'form',
    attributes: {
      id: { type: 'String', default: '' },
      label: { type: 'String', default: '' },
      value: { type: 'String', default: '' },
      disabled: { type: 'Boolean', default: false },
      required: { type: 'Boolean', default: false },
      multiple: { type: 'Boolean', default: false },
    },
  },
  {
    tag: 'sq-checkbox',
    category: 'form',
    attributes: {
      id: { type: 'String', default: '' },
      checked: { type: 'Boolean', default: false },
      disabled: { type: 'Boolean', default: false },
      label: { type: 'String', default: '' },
      indeterminate: { type: 'Boolean', default: false },
    },
  },
  {
    tag: 'sq-checkbox-group',
    category: 'form',
    attributes: {
      name: { type: 'String', default: '' },
      label: { type: 'String', default: '' },
      disabled: { type: 'Boolean', default: false },
      required: { type: 'Boolean', default: false },
      error: { type: 'String', default: '' },
      'helper-text': { type: 'String', default: '' },
    },
  },
  {
    tag: 'sq-radio',
    category: 'form',
    attributes: {
      id: { type: 'String', default: '' },
      checked: { type: 'Boolean', default: false },
      disabled: { type: 'Boolean', default: false },
      label: { type: 'String', default: '' },
      name: { type: 'String', default: '' },
      value: { type: 'String', default: '' },
    },
  },
  {
    tag: 'sq-radio-group',
    category: 'form',
    attributes: {
      name: { type: 'String', default: '' },
      label: { type: 'String', default: '' },
      value: { type: 'String', default: '' },
      disabled: { type: 'Boolean', default: false },
      required: { type: 'Boolean', default: false },
      error: { type: 'String', default: '' },
      'helper-text': { type: 'String', default: '' },
    },
  },
  {
    tag: 'sq-range',
    category: 'form',
    attributes: {
      id: { type: 'String', default: '' },
      value: { type: 'Number', default: 50 },
      min: { type: 'Number', default: 0 },
      max: { type: 'Number', default: 100 },
      step: { type: 'Number', default: 1 },
      label: { type: 'String', default: '' },
      disabled: { type: 'Boolean', default: false },
    },
  },
  {
    tag: 'sq-label',
    category: 'form',
    attributes: {
      for: { type: 'String', default: '' },
      required: { type: 'Boolean', default: false },
    },
  },
  {
    tag: 'sq-fieldset',
    category: 'form',
    attributes: {
      legend: { type: 'String', default: '' },
      disabled: { type: 'Boolean', default: false },
    },
  },
  {
    tag: 'sq-form',
    category: 'form',
    attributes: {
      action: { type: 'String', default: '' },
      method: { type: 'String', values: ['GET', 'POST', 'PUT', 'DELETE'], default: 'POST' },
      'no-validate': { type: 'Boolean', default: false },
      disabled: { type: 'Boolean', default: false },
      invalid: { type: 'Boolean', default: false },
    },
  },
  {
    tag: 'sq-input-group',
    category: 'form',
    attributes: {
      error: { type: 'Boolean', default: false },
      disabled: { type: 'Boolean', default: false },
      'error-msg': { type: 'String', default: '' },
      'helper-text': { type: 'String', default: '' },
    },
  },
  {
    tag: 'sq-file-upload',
    category: 'form',
    attributes: {
      multiple: { type: 'Boolean', default: false },
      accept: { type: 'String', default: '' },
      disabled: { type: 'Boolean', default: false },
      label: { type: 'String', default: 'Browse files' },
      hint: { type: 'String', default: '' },
      'max-size': { type: 'Number', default: Infinity },
    },
  },
  {
    tag: 'sq-color-picker',
    category: 'form',
    attributes: {
      value: { type: 'String', default: '#000000' },
      'history-size': { type: 'Number', default: 10 },
      'show-sliders': { type: 'Boolean', default: true, reflect: true },
      'storage-key': { type: 'String', default: 'sq-color-picker-history' },
      label: { type: 'String', default: 'Color' },
    },
  },
  {
    tag: 'sq-date-picker',
    category: 'form',
    attributes: {
      value: { type: 'String', default: '' },
      placeholder: { type: 'String', default: 'Select a date' },
      format: { type: 'String', default: 'YYYY-MM-DD' },
      'min-date': { type: 'String', default: '' },
      'max-date': { type: 'String', default: '' },
      clearable: { type: 'Boolean', default: true, reflect: true },
      readonly: { type: 'Boolean', default: false, reflect: true },
      disabled: { type: 'Boolean', default: false, reflect: true },
      label: { type: 'String', default: 'Date' },
      'first-day': { type: 'Number', default: 1 },
      'disable-weekdays': { type: 'Boolean', default: false, reflect: true },
      'disable-weekends': { type: 'Boolean', default: false, reflect: true },
    },
  },
  {
    tag: 'sq-date-range',
    category: 'form',
    attributes: {
      start: { type: 'String', default: '' },
      end: { type: 'String', default: '' },
      format: { type: 'String', default: 'YYYY-MM-DD' },
      'min-date': { type: 'String', default: '' },
      'max-date': { type: 'String', default: '' },
      clearable: { type: 'Boolean', default: true, reflect: true },
      'show-presets': { type: 'Boolean', default: true, reflect: true },
      'start-placeholder': { type: 'String', default: 'Start date' },
      'end-placeholder': { type: 'String', default: 'End date' },
      'first-day': { type: 'Number', default: 1 },
      'disable-weekends': { type: 'Boolean', default: false, reflect: true },
      'disable-weekdays': { type: 'Boolean', default: false, reflect: true },
    },
  },

  // ─── Layout ───
  {
    tag: 'sq-card',
    category: 'layout',
    attributes: {
      variant: { type: 'String', values: ['elevated', 'outlined', 'filled'], default: 'elevated' },
      interactive: { type: 'Boolean', default: false },
    },
  },
  {
    tag: 'sq-container',
    category: 'layout',
    attributes: {
      size: { type: 'String', values: ['sm', 'md', 'lg', 'xl', 'full'], default: 'xl' },
      padded: { type: 'Boolean', default: true },
    },
  },
  {
    tag: 'sq-divider',
    category: 'layout',
    attributes: {
      inset: { type: 'Boolean', default: false },
      orientation: { type: 'String', values: ['horizontal', 'vertical'], default: 'horizontal' },
    },
  },
  {
    tag: 'sq-flex',
    category: 'layout',
    attributes: {
      direction: { type: 'String', default: 'row' },
      wrap: { type: 'String', default: 'nowrap' },
      gap: { type: 'String', default: '16px' },
      'align-items': { type: 'String', default: 'stretch' },
      'justify-content': { type: 'String', default: 'flex-start' },
    },
  },
  {
    tag: 'sq-grid',
    category: 'layout',
    attributes: {
      columns: { type: 'String', default: 'repeat(3, 1fr)' },
      gap: { type: 'String', default: '16px' },
      'align-items': { type: 'String', default: 'start' },
      'justify-items': { type: 'String', default: 'start' },
    },
  },
  {
    tag: 'sq-masonry',
    category: 'layout',
    attributes: {
      columns: { type: 'String', default: '3' },
      'columns-sm': { type: 'String', default: '2' },
      'columns-xs': { type: 'String', default: '1' },
      gap: { type: 'String', default: '16px' },
    },
  },
  {
    tag: 'sq-stack',
    category: 'layout',
    attributes: {
      direction: { type: 'String', default: 'column' },
      gap: { type: 'String', default: 'var(--sq-space-4)' },
    },
  },
  {
    tag: 'sq-theme',
    category: 'layout',
    attributes: {
      'sq-theme': { type: 'String', default: '' },
    },
  },

  // ─── Navigation ───
  {
    tag: 'sq-breadcrumb',
    category: 'navigation',
    attributes: {
      variant: { type: 'String', values: ['primary', 'subtle', 'underline'], default: 'primary' },
    },
  },
  {
    tag: 'sq-link',
    category: 'navigation',
    attributes: {
      href: { type: 'String', default: '' },
      variant: { type: 'String', values: ['primary', 'subtle', 'underline'], default: 'primary' },
      external: { type: 'Boolean', default: false },
      download: { type: 'Boolean', default: false },
      target: { type: 'String', default: '' },
    },
  },
  {
    tag: 'sq-menu',
    category: 'navigation',
    attributes: {
      orientation: { type: 'String', values: ['horizontal', 'vertical'], default: 'horizontal' },
      layout: { type: 'String', values: ['inline', 'block'], default: 'inline' },
    },
  },
  {
    tag: 'sq-menu-item',
    category: 'navigation',
    attributes: {
      disabled: { type: 'Boolean', default: false },
      kbd: { type: 'String', default: '' },
      href: { type: 'String', default: '' },
      expanded: { type: 'Boolean', default: false },
    },
  },
  {
    tag: 'sq-menu-divider',
    category: 'navigation',
    attributes: {},
  },
  {
    tag: 'sq-stepper',
    category: 'navigation',
    attributes: {
      'current-step': { type: 'Number', default: 0 },
      orientation: { type: 'String', values: ['horizontal', 'vertical'], default: 'horizontal' },
      clickable: { type: 'Boolean', default: false },
    },
  },
  {
    tag: 'sq-tabs',
    category: 'navigation',
    attributes: {
      variant: { type: 'String', values: ['line', 'pill'], default: 'line', reflect: true },
      'active-index': { type: 'Number', default: 0 },
      active: { type: 'Boolean', default: false, reflect: true },
      label: { type: 'String', default: '' },
      badge: { type: 'Number', default: 0 },
    },
  },

  // ─── Overlay ───
  {
    tag: 'sq-dropdown',
    category: 'overlay',
    attributes: {
      'trigger-label': { type: 'String', default: 'Select' },
      open: { type: 'Boolean', default: false, reflect: true },
      'min-width': { type: 'String', default: '200px' },
      'max-height': { type: 'String', default: '300px' },
      'selected-value': { type: 'String', default: '' },
      disabled: { type: 'Boolean', default: false },
    },
  },
  {
    tag: 'sq-tooltip',
    category: 'overlay',
    attributes: {
      content: { type: 'String', default: '' },
      position: { type: 'String', values: ['top', 'bottom', 'left', 'right'], default: 'top' },
      variant: { type: 'String', values: ['default', 'info', 'success', 'warning', 'error'], default: 'default' },
      open: { type: 'Boolean', default: false, reflect: true },
      hover: { type: 'Boolean', default: false },
      delay: { type: 'Number', default: 200 },
    },
  },
  {
    tag: 'sq-drawer',
    category: 'overlay',
    attributes: {
      open: { type: 'Boolean', default: false },
      position: { type: 'String', values: ['left', 'right', 'top', 'bottom'], default: 'right' },
      label: { type: 'String', default: '' },
      width: { type: 'String', default: '400px' },
      height: { type: 'String', default: '300px' },
      'close-on-overlay': { type: 'Boolean', default: true },
      'close-on-escape': { type: 'Boolean', default: true },
    },
  },

  // ─── Data Display ───
  {
    tag: 'sq-avatar',
    category: 'data-display',
    attributes: {
      src: { type: 'String', default: '' },
      alt: { type: 'String', default: '' },
      initials: { type: 'String', default: '' },
      size: { type: 'String', values: ['xs', 'sm', 'md', 'lg', 'xl'], default: 'md' },
      shape: { type: 'String', values: ['circle', 'rounded', 'square'], default: 'circle' },
      variant: { type: 'String', values: ['default', 'success', 'warning', 'danger', 'info'], default: 'default' },
    },
  },
  {
    tag: 'sq-badge',
    category: 'data-display',
    attributes: {
      variant: { type: 'String', values: ['default', 'primary', 'success', 'warning', 'danger', 'info'], default: 'primary' },
      size: { type: 'String', values: ['sm', 'md', 'lg'], default: 'md' },
      dot: { type: 'Boolean', default: false },
      outlined: { type: 'Boolean', default: false },
      count: { type: 'Number', default: 0 },
    },
  },
  {
    tag: 'sq-tag',
    category: 'data-display',
    attributes: {
      label: { type: 'String', default: '' },
      variant: { type: 'String', values: ['default', 'primary', 'success', 'warning', 'error', 'info'], default: 'default', reflect: true },
      size: { type: 'String', values: ['sm', 'md', 'lg'], default: 'md', reflect: true },
      removable: { type: 'Boolean', default: false, reflect: true },
      disabled: { type: 'Boolean', default: false, reflect: true },
      clickable: { type: 'Boolean', default: false, reflect: true },
    },
  },
  {
    tag: 'sq-pagination',
    category: 'data-display',
    attributes: {
      page: { type: 'Number', default: 1 },
      'total-pages': { type: 'Number', default: 10 },
      'sibling-count': { type: 'Number', default: 2 },
      'show-info': { type: 'Boolean', default: false },
      'total-items': { type: 'Number', default: 0 },
      'items-per-page': { type: 'Number', default: 20 },
    },
  },
  {
    tag: 'sq-timeline',
    category: 'data-display',
    attributes: {
      orientation: { type: 'String', values: ['vertical', 'horizontal'], default: 'vertical', reflect: true },
    },
  },
  {
    tag: 'sq-timetree',
    category: 'data-display',
    attributes: {
      'show-legend': { type: 'Boolean', default: true, reflect: true },
      variant: { type: 'String', values: ['default', 'dense'], default: 'default', reflect: true },
    },
  },
  {
    tag: 'sq-tree',
    category: 'data-display',
    attributes: {
      'selection-mode': { type: 'String', values: ['none', 'single', 'multiple'], default: 'none', reflect: true },
      'show-checkboxes': { type: 'Boolean', default: false, reflect: true },
      'show-search': { type: 'Boolean', default: false, reflect: true },
      search: { type: 'String', default: '', reflect: true },
      'expand-all': { type: 'Boolean', default: false, reflect: true },
    },
  },

  // ─── Text ───
  {
    tag: 'sq-heading',
    category: 'text',
    attributes: {
      level: { type: 'String', values: ['1', '2', '3', '4', '5', '6'], default: '2' },
      variant: { type: 'String', values: ['default', 'accent', 'muted'], default: 'default' },
      align: { type: 'String', values: ['left', 'center', 'right'], default: 'left' },
      decorated: { type: 'Boolean', default: false },
    },
  },
  {
    tag: 'sq-text',
    category: 'text',
    attributes: {
      variant: { type: 'String', values: ['body', 'lead', 'small', 'caption'], default: 'body' },
      weight: { type: 'String', values: ['normal', 'medium', 'semibold', 'bold'], default: 'normal' },
      align: { type: 'String', values: ['left', 'center', 'right'], default: 'left' },
      truncate: { type: 'Boolean', default: false },
      ellipsis: { type: 'Boolean', default: false },
    },
  },
  {
    tag: 'sq-blockquote',
    category: 'text',
    attributes: {
      cite: { type: 'String', default: '' },
    },
  },
  {
    tag: 'sq-caption',
    category: 'text',
    attributes: {
      variant: { type: 'String', values: ['default', 'subtle', 'emphasis'], default: 'default' },
      align: { type: 'String', values: ['left', 'center', 'right'], default: 'center' },
    },
  },
  {
    tag: 'sq-code',
    category: 'text',
    attributes: {
      language: { type: 'String', default: '' },
      block: { type: 'Boolean', default: false },
    },
  },
  {
    tag: 'sq-kbd',
    category: 'text',
    attributes: {},
  },
  {
    tag: 'sq-mark',
    category: 'text',
    attributes: {
      color: { type: 'String', values: ['default', 'success', 'warning', 'danger', 'info'], default: 'default' },
    },
  },

  // ─── Media ───
  {
    tag: 'sq-image',
    category: 'media',
    attributes: {
      src: { type: 'String', default: '' },
      alt: { type: 'String', default: '' },
      width: { type: 'String', default: '' },
      height: { type: 'String', default: '' },
      'object-fit': { type: 'String', values: ['contain', 'cover', 'fill', 'none', 'scale-down'], default: 'contain' },
      lazy: { type: 'Boolean', default: true },
    },
  },
  {
    tag: 'sq-audio',
    category: 'media',
    attributes: {
      src: { type: 'String', default: '' },
      controls: { type: 'Boolean', default: true },
      autoplay: { type: 'Boolean', default: false },
      loop: { type: 'Boolean', default: false },
      muted: { type: 'Boolean', default: false },
      variant: { type: 'String', values: ['default', 'filled', 'subtle'], default: 'default', reflect: true },
      downloadable: { type: 'Boolean', default: false, reflect: true },
      'download-filename': { type: 'String', default: '' },
    },
  },
  {
    tag: 'sq-video',
    category: 'media',
    attributes: {
      src: { type: 'String', default: '' },
      poster: { type: 'String', default: '' },
      controls: { type: 'Boolean', default: true },
      autoplay: { type: 'Boolean', default: false },
      loop: { type: 'Boolean', default: false },
      muted: { type: 'Boolean', default: false },
      'plays-inline': { type: 'Boolean', default: true },
    },
  },
  {
    tag: 'sq-iframe',
    category: 'media',
    attributes: {
      src: { type: 'String', default: '' },
      title: { type: 'String', default: '' },
      'aspect-ratio': { type: 'String', default: '16/9' },
      sandbox: { type: 'String', default: '' },
    },
  },
  {
    tag: 'sq-album-cover',
    category: 'media',
    attributes: {
      src: { type: 'String', default: '' },
      alt: { type: 'String', default: '' },
      size: { type: 'String', values: ['sm', 'md', 'lg', 'xl'], default: 'md' },
      shape: { type: 'String', values: ['square', 'rounded', 'circle'], default: 'square' },
      'show-play-overlay': { type: 'Boolean', default: true },
      'now-playing': { type: 'Boolean', default: false },
    },
  },
  {
    tag: 'sq-song-row',
    category: 'media',
    attributes: {
      title: { type: 'String', default: '' },
      artist: { type: 'String', default: '' },
      album: { type: 'String', default: '' },
      duration: { type: 'String', default: '' },
      'index-num': { type: 'Number', default: 0 },
      playing: { type: 'Boolean', default: false },
      liked: { type: 'Boolean', default: false },
      header: { type: 'Boolean', default: false },
      'show-album': { type: 'Boolean', default: false },
    },
  },
  {
    tag: 'sq-equalizer',
    category: 'media',
    attributes: {
      bars: { type: 'Number', default: 8 },
      variant: { type: 'String', values: ['default', 'success', 'warning', 'danger', 'info'], default: 'default' },
      paused: { type: 'Boolean', default: false },
      duration: { type: 'String', default: '0.8s' },
    },
  },

  // ─── Feedback ───
  {
    tag: 'sq-alert',
    category: 'feedback',
    attributes: {
      variant: { type: 'String', values: ['default', 'success', 'warning', 'danger', 'info'], default: 'info' },
      size: { type: 'String', values: ['sm', 'md', 'lg'], default: 'md' },
      title: { type: 'String', default: '' },
      closable: { type: 'Boolean', default: false },
      dismissed: { type: 'Boolean', default: false },
      'show-icon': { type: 'Boolean', default: true },
    },
  },

  // ─── List ───
  {
    tag: 'sq-list',
    category: 'list',
    attributes: {
      type: { type: 'String', values: ['unordered', 'ordered', 'definition'], default: 'unordered' },
      dense: { type: 'Boolean', default: false },
      bordered: { type: 'Boolean', default: false },
    },
  },
  {
    tag: 'sq-definition-list',
    category: 'list',
    attributes: {
      horizontal: { type: 'Boolean', default: false },
    },
  },

  // ─── Table ───
  {
    tag: 'sq-table',
    category: 'table',
    attributes: {},
  },
  {
    tag: 'sq-td',
    category: 'table',
    attributes: {},
  },
  {
    tag: 'sq-th',
    category: 'table',
    attributes: {},
  },

  // ─── Semantic ───
  {
    tag: 'sq-header',
    category: 'semantic',
    attributes: {
      title: { type: 'String', default: '' },
      subtitle: { type: 'String', default: '' },
    },
  },
  {
    tag: 'sq-footer',
    category: 'semantic',
    attributes: {},
  },
  {
    tag: 'sq-nav',
    category: 'semantic',
    attributes: {
      orientation: { type: 'String', values: ['horizontal', 'vertical'], default: 'horizontal' },
      variant: { type: 'String', values: ['primary', 'subtle', 'underline'], default: 'primary', reflect: true },
    },
  },
  {
    tag: 'sq-main',
    category: 'semantic',
    attributes: {},
  },
  {
    tag: 'sq-article',
    category: 'semantic',
    attributes: {},
  },
  {
    tag: 'sq-aside',
    category: 'semantic',
    attributes: {},
  },
  {
    tag: 'sq-section',
    category: 'semantic',
    attributes: {
      label: { type: 'String', default: '' },
    },
  },
  {
    tag: 'sq-hgroup',
    category: 'semantic',
    attributes: {},
  },
  {
    tag: 'sq-search',
    category: 'semantic',
    attributes: {},
  },

  // ─── Head ───
  {
    tag: 'sq-head-elements',
    category: 'head',
    attributes: {},
  },
];

/**
 * Get a component definition by tag name.
 */
export function getComponent(tag: string): ComponentDefinition | undefined {
  return components.find(c => c.tag === tag);
}

/**
 * Get all valid tag names.
 */
export function getAllTags(): string[] {
  return components.map(c => c.tag);
}

/**
 * Get all components in a category.
 */
export function getComponentsByCategory(category: string): ComponentDefinition[] {
  return components.filter(c => c.category === category);
}

/**
 * Get all available categories.
 */
export function getCategories(): string[] {
  return [...new Set(components.map(c => c.category))];
}
