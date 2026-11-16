/**
 * Squiddy Table — covers: `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>`, `<caption>`, `<col>`, `<colgroup>`
 *
 * Extends the native `<table>` element so the browser handles all table semantics.
 * No wrapping, no DOM restructuring — just plain CSS styling applied via attributes.
 *
 * Usage:
 *   <table sq-table>
 *     <thead><tr><th>Name</th><th>Role</th></tr></thead>
 *     <tbody><tr><td>Alice</td><td>Dev</td></tr></tbody>
 *   </table>
 *
 * Or with sub-components for cell-level control:
 *   <table sq-table="border:all zebra">
 *     <thead><tr><th><sq-th>Name</sq-th></th><th><sq-th>Role</sq-th></th></tr></thead>
 *     <tbody><tr><td><sq-td>Alice</sq-td></td><td><sq-td>Dev</sq-td></td></tr></tbody>
 *   </table>
 *
 * Combined attribute syntax:
 *   <table sq-table="border:all header:dark layout:fixed spacing:sparse">
 *
 * Attributes:
 * - `sq-table`: combined attribute for all table options
 *   - `border:<style>`: horizontal, vertical, all, none, outside, outline-subtle, inside
 *   - `header:<style>`: dark, uppercase
 *   - `layout:<type>`: fixed, auto
 *   - `spacing:<level>`: dense, default, sparse
 *   - `zebra` / `striped` / `hover`: coloring schema
 * - `border`: border style (standalone attribute)
 * - `variant`: coloring schema (striped, hover)
 * - `dense`: legacy shorthand for spacing:dense
 */

const SqTableStyles = `
  /* === Base table === */
  table[sq-table],
  table[sq-table] table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    font-size: var(--sq-text-sm, 0.875rem);
    color: var(--sq-fg-default, inherit);
    border-radius: var(--sq-radius-md, 0.5rem);
    overflow: hidden;
  }

  /* === Caption === */
  table[sq-table] caption {
    padding: var(--sq-space-2, 0.5rem) var(--sq-space-4, 1rem);
    text-align: left;
    font-style: italic;
    font-weight: var(--sq-font-weight-normal, 400);
    color: var(--sq-fg-muted, #6b7280);
    letter-spacing: 0.025em;
    caption-side: top;
  }

  /* === Cell base === */
  table[sq-table] th,
  table[sq-table] td {
    padding: var(--sq-space-3, 0.75rem) var(--sq-space-4, 1rem);
    text-align: left;
    vertical-align: middle;
    border: none;
  }

  /* === Header base === */
  table[sq-table] th {
    font-weight: var(--sq-font-weight-semibold, 600);
    background: var(--sq-bg-surface, #ffffff);
    color: var(--sq-fg-default, inherit);
  }

  /* === Spacing variants === */

  /* Default row height */
  table[sq-table] tr {
    min-height: var(--sq-row-height-default, 2.5rem);
  }

  /* Default spacing (normal air) */
  table[sq-table] th,
  table[sq-table] td {
    padding: var(--sq-space-3, 0.75rem) var(--sq-space-5, 1.25rem);
  }

  /* Dense spacing — tighter rows */
  table[sq-table][spacing="dense"] tr {
    min-height: var(--sq-row-height-dense, 2rem);
  }
  table[sq-table][spacing="dense"] th,
  table[sq-table][spacing="dense"] td {
    padding: var(--sq-space-2, 0.5rem) var(--sq-space-3, 0.75rem);
  }

  /* Legacy dense attribute */
  table[sq-table][dense] tr {
    min-height: var(--sq-row-height-dense, 2rem);
  }
  table[sq-table][dense] th,
  table[sq-table][dense] td {
    padding: var(--sq-space-2, 0.5rem) var(--sq-space-3, 0.75rem);
  }

  /* Sparse spacing — more air between rows */
  table[sq-table][spacing="sparse"] tr {
    min-height: var(--sq-row-height-sparse, 3.5rem);
  }
  table[sq-table][spacing="sparse"] th,
  table[sq-table][spacing="sparse"] td {
    padding: var(--sq-space-4, 1rem) var(--sq-space-6, 1.5rem);
  }

  /* === Layout variants === */
  table[sq-table][layout="fixed"] {
    table-layout: fixed;
  }

  /* === Header variants === */
  /* Dark header */
  table[sq-table][header="dark"] thead th {
    background: var(--sq-bg-header, #f3f4f6);
    color: var(--sq-fg-default, inherit);
  }

  /* Uppercase header */
  table[sq-table][header="uppercase"] thead th {
    text-transform: uppercase;
    font-size: var(--sq-text-xs, 0.75rem);
    letter-spacing: 0.05em;
  }

  /* === Border variants === */
  /* Border: horizontal (default) — single pixel between rows */
  table[sq-table]:not([border]) thead tr th,
  table[sq-table][border="horizontal"] thead tr th {
    border-bottom: 1px solid var(--sq-border-subtle, #e5e7eb);
  }
  table[sq-table]:not([border]) tbody tr td,
  table[sq-table][border="horizontal"] tbody tr td {
    border-bottom: 1px solid var(--sq-border-subtle, #e5e7eb);
  }
  table[sq-table]:not([border]) tbody tr:last-child td,
  table[sq-table][border="horizontal"] tbody tr:last-child td {
    border-bottom: none;
  }

  /* Border: vertical */
  table[sq-table][border="vertical"] th,
  table[sq-table][border="vertical"] td {
    border-bottom: none;
    border-right: none;
  }
  table[sq-table][border="vertical"] thead tr th {
    border-bottom: 1px solid var(--sq-border-subtle, #e5e7eb);
  }
  table[sq-table][border="vertical"] th:not(:last-child),
  table[sq-table][border="vertical"] td:not(:last-child) {
    border-right: 1px solid var(--sq-border-subtle, #e5e7eb);
  }

  /* Border: all */
  table[sq-table][border="all"] th,
  table[sq-table][border="all"] td {
    border-bottom: 1px solid var(--sq-border-subtle, #e5e7eb);
    border-right: none;
  }
  table[sq-table][border="all"] th:not(:last-child),
  table[sq-table][border="all"] td:not(:last-child) {
    border-right: 1px solid var(--sq-border-subtle, #e5e7eb);
  }
  table[sq-table][border="all"] tbody tr:last-child td,
  table[sq-table][border="all"] tfoot tr:last-child td {
    border-bottom: none;
  }

  /* Border: none */
  table[sq-table][border="none"] th,
  table[sq-table][border="none"] td {
    border: none;
  }

  /* Border: outside — normal border around entire table with rounded corners */
  table[sq-table][border="outside"] {
    border: 1px solid var(--sq-border-default, #AF019A);
  }
  table[sq-table][border="outside"] th,
  table[sq-table][border="outside"] td {
    border: none;
  }

  /* Border: outline-subtle — lighter border around entire table with rounded corners */
  table[sq-table][border="outline-subtle"] {
    border: 1px solid var(--sq-border-subtle, rgba(175, 1, 154, 0.2));
  }
  table[sq-table][border="outline-subtle"] th,
  table[sq-table][border="outline-subtle"] td {
    border: none;
  }

  /* Border: inside — vertical and horizontal dividers between cells, no outer border */
  table[sq-table][border="inside"] {
    border: none;
  }
  table[sq-table][border="inside"] th,
  table[sq-table][border="inside"] td {
    border-right: none;
    border-bottom: none;
  }
  table[sq-table][border="inside"] th:not(:last-child),
  table[sq-table][border="inside"] td:not(:last-child) {
    border-right: 1px solid var(--sq-border-subtle, #e5e7eb);
  }
  table[sq-table][border="inside"] thead tr th {
    border-bottom: 1px solid var(--sq-border-subtle, #e5e7eb);
  }
  table[sq-table][border="inside"] tbody tr:not(:last-child) td {
    border-bottom: 1px solid var(--sq-border-subtle, #e5e7eb);
  }

  /* === Coloring variants === */
  /* Striped (zebra) — adapts to theme via --sq-bg-subtle token */
  table[sq-table][variant="striped"] tbody tr:nth-child(even),
  table[sq-table][variant="zebra"] tbody tr:nth-child(even) {
    background: var(--sq-bg-subtle);
  }

  /* Hover */
  table[sq-table][variant="hover"] tbody tr:hover {
    background: var(--sq-accent-primary-light, #eff6ff);
  }

  /* === Vertical alignment === */
  table[sq-table][align-vertical="top"] th,
  table[sq-table][align-vertical="top"] td {
    vertical-align: top;
  }
  table[sq-table][align-vertical="bottom"] th,
  table[sq-table][align-vertical="bottom"] td {
    vertical-align: bottom;
  }

  /* === Footer styles === */
  table[sq-table] tfoot td {
    font-weight: var(--sq-font-weight-semibold, 600);
    border-top: 1px solid var(--sq-border-default, #d1d5db);
    background: var(--sq-bg-subtle, #f9fafb);
  }
`;

class SqTable extends HTMLTableElement {
  static stylesInjected = false;

  /**
   * Parse the combined `sq-table` attribute value.
   * Supports syntax like: "border:all header:dark layout:fixed spacing:sparse zebra"
   */
  static parseSqTableAttr(value: string | null): {
    border?: string;
    variant?: string;
    header?: string;
    layout?: string;
    spacing?: string;
    alignVertical?: string;
    dense?: boolean;
  } {
    if (!value) return {};

    const result: {
      border?: string;
      variant?: string;
      header?: string;
      layout?: string;
      spacing?: string;
      alignVertical?: string;
      dense?: boolean;
    } = {};
    const borderValues = ['horizontal', 'vertical', 'all', 'none', 'outside', 'outline-subtle', 'inside'];
    const parts = value.trim().split(/\s+/);

    for (const part of parts) {
      if (part.startsWith('border:')) {
        const borderValue = part.slice(7);
        if (borderValues.includes(borderValue)) {
          result.border = borderValue;
        }
      } else if (part.startsWith('header:')) {
        result.header = part.slice(7);
      } else if (part.startsWith('layout:')) {
        result.layout = part.slice(7);
      } else if (part.startsWith('spacing:')) {
        result.spacing = part.slice(8);
      } else if (part.startsWith('align-vertical:')) {
        result.alignVertical = part.slice(15);
      } else if (['striped', 'zebra', 'hover'].includes(part)) {
        result.variant = part === 'zebra' ? 'striped' : part;
      } else if (part === 'dense') {
        result.dense = true;
      }
    }

    return result;
  }

  connectedCallback() {
    // Inject global styles once
    if (!SqTable.stylesInjected) {
      SqTable.stylesInjected = true;
      const style = document.createElement('style');
      style.id = 'sq-table-styles';
      style.textContent = SqTableStyles;
      document.head.appendChild(style);
    }

    // Parse combined sq-table attribute and apply as separate attributes
    const sqTableValue = this.getAttribute('sq-table');
    if (sqTableValue) {
      const parsed = SqTable.parseSqTableAttr(sqTableValue);
      if (parsed.border && !this.hasAttribute('border')) {
        this.setAttribute('border', parsed.border);
      }
      if (parsed.variant && !this.hasAttribute('variant')) {
        this.setAttribute('variant', parsed.variant);
      }
      if (parsed.header && !this.hasAttribute('header')) {
        this.setAttribute('header', parsed.header);
      }
      if (parsed.layout && !this.hasAttribute('layout')) {
        this.setAttribute('layout', parsed.layout);
      }
      if (parsed.spacing && !this.hasAttribute('spacing')) {
        this.setAttribute('spacing', parsed.spacing);
      }
      if (parsed.alignVertical && !this.hasAttribute('align-vertical')) {
        this.setAttribute('align-vertical', parsed.alignVertical);
      }
      if (parsed.dense && !this.hasAttribute('dense')) {
        this.setAttribute('dense', '');
      }
    }
  }

  /** Border style variant */
  get border(): string {
    return this.getAttribute('border') || 'horizontal';
  }

  set border(v: string) {
    if (v) this.setAttribute('border', v);
    else this.removeAttribute('border');
  }

  /** Coloring schema (striped, hover) */
  get variant(): string {
    return this.getAttribute('variant') || '';
  }

  set variant(v: string) {
    if (v) this.setAttribute('variant', v);
    else this.removeAttribute('variant');
  }

  /** Header style variant (dark, uppercase) */
  get header(): string {
    return this.getAttribute('header') || '';
  }

  set header(v: string) {
    if (v) this.setAttribute('header', v);
    else this.removeAttribute('header');
  }

  /** Table layout (fixed, auto) */
  get layout(): string {
    return this.getAttribute('layout') || 'auto';
  }

  set layout(v: string) {
    if (v) this.setAttribute('layout', v);
    else this.removeAttribute('layout');
  }

  /** Spacing level (dense, default, sparse) */
  get spacing(): string {
    return this.getAttribute('spacing') || 'default';
  }

  set spacing(v: string) {
    if (v) this.setAttribute('spacing', v);
    else this.removeAttribute('spacing');
  }

  /** Vertical alignment (top, middle, bottom) */
  get alignVertical(): string {
    return this.getAttribute('align-vertical') || 'middle';
  }

  set alignVertical(v: string) {
    if (v) this.setAttribute('align-vertical', v);
    else this.removeAttribute('align-vertical');
  }

  /** Compact padding mode (legacy, use spacing:dense instead) */
  get dense(): boolean {
    return this.hasAttribute('dense');
  }

  set dense(v: boolean) {
    if (v) this.setAttribute('dense', '');
    else this.removeAttribute('dense');
  }
}

customElements.define('sq-table', SqTable, { extends: 'table' });

// Inject styles at module load time so they apply even when tables use
// the sq-table attribute without is="sq-table" (i.e., connectedCallback never fires).
if (!SqTable.stylesInjected) {
  SqTable.stylesInjected = true;
  const style = document.createElement('style');
  style.id = 'sq-table-styles';
  style.textContent = SqTableStyles;
  document.head.appendChild(style);
}

// Helper to parse and apply sq-table attribute values on a table element
function applySqTableAttributes(table: Element) {
  const sqTableValue = table.getAttribute('sq-table');
  if (!sqTableValue) return;
  const parsed = SqTable.parseSqTableAttr(sqTableValue);
  if (parsed.border && !table.hasAttribute('border')) {
    table.setAttribute('border', parsed.border);
  }
  if (parsed.variant && !table.hasAttribute('variant')) {
    table.setAttribute('variant', parsed.variant);
  }
  if (parsed.header && !table.hasAttribute('header')) {
    table.setAttribute('header', parsed.header);
  }
  if (parsed.layout && !table.hasAttribute('layout')) {
    table.setAttribute('layout', parsed.layout);
  }
  if (parsed.spacing && !table.hasAttribute('spacing')) {
    table.setAttribute('spacing', parsed.spacing);
  }
  if (parsed.alignVertical && !table.hasAttribute('align-vertical')) {
    table.setAttribute('align-vertical', parsed.alignVertical);
  }
  if (parsed.dense && !table.hasAttribute('dense')) {
    table.setAttribute('dense', '');
  }
}

// Scan existing DOM for any <table sq-table> elements already present
document.querySelectorAll('table[sq-table]').forEach(applySqTableAttributes);

// Observe the DOM for any <table sq-table> elements that appear and parse
// their combined attribute, even if they don't use is="sq-table".
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === 'childList') {
      for (const node of mutation.addedNodes) {
        if (node.nodeType !== Node.ELEMENT_NODE) continue;
        const el = node as Element;
        // Check if the added element itself is a table with sq-table
        if (el.tagName === 'TABLE' && el.hasAttribute('sq-table')) {
          applySqTableAttributes(el);
        }
        // Check descendants for table[sq-table]
        const tables = el.querySelectorAll?.('table[sq-table]');
        if (tables) {
          tables.forEach(applySqTableAttributes);
        }
      }
    }
  }
});
observer.observe(document.body, { childList: true, subtree: true });

export { SqTable };
