import type { Meta, StoryObj } from '@storybook/web-components-vite';
import './sq-grid';

const meta: Meta = {
  title: 'Layout/Grid',
  tags: ['autodocs'],
  component: 'sq-grid',
  argTypes: {
    columns: { control: 'text' },
    gap: { control: 'text' },
    alignItems: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch'],
    },
    justifyItems: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch'],
    },
  },
  args: {
    columns: 'repeat(3, 1fr)',
    gap: '16px',
    alignItems: 'start',
    justifyItems: 'start',
  },
};
export default meta;
type Story = StoryObj;

/* ---- Helper: styled card element ---- */
const card = (label: string, extraStyle = '') => {
  const div = document.createElement('div');
  div.style.cssText =
    'background: var(--sq-bg-elevated); border: 1px solid var(--sq-border-subtle); border-radius: var(--sq-radius-md); padding: 20px;';
  if (extraStyle) div.style.cssText += extraStyle;
  div.innerHTML = `<strong>${label}</strong>`;
  return div;
};

/* ---- Helper: section wrapper with title ---- */
const section = (title: string, ...children: HTMLElement[]) => {
  const wrapper = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.style.cssText = 'font-size: 14px; font-weight: 600; margin: 0 0 12px 0; color: var(--sq-fg-muted); text-transform: uppercase; letter-spacing: 0.05em;';
  h3.textContent = title;
  wrapper.append(h3, ...children);
  return wrapper;
};

/* ---- Helper: page wrapper stacking sections ---- */
const page = (...sections: HTMLElement[]) => {
  const container = document.createElement('div');
  container.style.cssText = 'display: flex; flex-direction: column; gap: 40px;';
  container.append(...sections);
  return container;
};

/* ---- Helper: colored block for layout visualization ---- */
const block = (label: string, color: string, extraStyle = '') => {
  const div = document.createElement('div');
  div.style.cssText = `background: ${color}; border-radius: var(--sq-radius-md); padding: 24px; color: white; font-weight: 600; font-size: 14px; text-align: center; min-height: 80px; display: flex; align-items: center; justify-content: center;`;
  if (extraStyle) div.style.cssText += extraStyle;
  div.textContent = label;
  return div;
};

/* ============================================================================
   STORY 1 — Default (3-column equal grid)
   ============================================================================ */
export const Default: Story = {
  render: (args) => {
    const grid = document.createElement('sq-grid');
    grid.columns = args.columns;
    grid.gap = args.gap;
    grid.alignItems = args.alignItems;
    grid.justifyItems = args.justifyItems;
    grid.append(
      card('Card 1'),
      card('Card 2'),
      card('Card 3'),
      card('Card 4'),
      card('Card 5'),
      card('Card 6')
    );
    return grid;
  },
  args: { columns: 'repeat(3, 1fr)' },
};

/* ============================================================================
   STORY 2 — Card Grid (realistic product/content cards)
   ============================================================================ */
export const CardGrid: Story = {
  render: () => {
    const makeCard = (title: string, description: string) => {
      const div = document.createElement('div');
      div.style.cssText =
        'background: var(--sq-bg-elevated); border: 1px solid var(--sq-border-subtle); border-radius: var(--sq-radius-md); padding: 20px; display: flex; flex-direction: column; gap: 8px;';
      const accent = document.createElement('div');
      accent.style.cssText = 'height: 120px; background: var(--sq-accent-primary-light); border-radius: var(--sq-radius-sm);';
      const h4 = document.createElement('h4');
      h4.style.cssText = 'margin: 0; font-size: 16px; font-weight: 600; color: var(--sq-fg-default);';
      h4.textContent = title;
      const p = document.createElement('p');
      p.style.cssText = 'margin: 0; font-size: 14px; color: var(--sq-fg-muted); line-height: 1.5;';
      p.textContent = description;
      div.append(accent, h4, p);
      return div;
    };

    const grid = document.createElement('sq-grid');
    grid.columns = 'repeat(3, 1fr)';
    grid.gap = '16px';
    grid.append(
      makeCard('Dashboard', 'View your analytics and key metrics at a glance.'),
      makeCard('Reports', 'Generate and export detailed reports.'),
      makeCard('Settings', 'Configure your account and preferences.'),
      makeCard('Team', 'Manage team members and permissions.'),
      makeCard('Integrations', 'Connect with your favorite tools and services.'),
      makeCard('Support', 'Get help and browse documentation.')
    );
    return grid;
  },
};

/* ============================================================================
   STORY 3 — Dashboard Layout (spanning items with auto-fit)
   Shows a hero banner spanning all columns, stat cards, and a sidebar
   ============================================================================ */
export const DashboardLayout: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 16px;';

    // Hero banner spanning full width
    const hero = block('Hero Banner — Full Width', 'var(--sq-accent-primary)');
    container.append(hero);

    // Stats row: 4 equal columns
    const statsGrid = document.createElement('sq-grid');
    statsGrid.columns = 'repeat(4, 1fr)';
    statsGrid.gap = '16px';
    statsGrid.append(
      block('Users\n1,234', 'var(--sq-color-info)'),
      block('Revenue\n$45K', 'var(--sq-color-success)'),
      block('Orders\n567', 'var(--sq-color-warning)'),
      block('Errors\n12', 'var(--sq-color-danger)')
    );
    container.append(statsGrid);

    // Main content + sidebar: 3:1 ratio
    const contentGrid = document.createElement('sq-grid');
    contentGrid.columns = '3fr 1fr';
    contentGrid.gap = '16px';
    contentGrid.append(
      block('Main Content Area\n(3fr)', 'var(--sq-fg-muted)'),
      block('Sidebar\n(1fr)', 'var(--sq-accent-primary)')
    );
    container.append(contentGrid);

    return container;
  },
};

/* ============================================================================
   STORY 4 — Responsive Auto-Fit Grid
   Uses minmax() for automatic responsive columns without media queries
   ============================================================================ */
export const AutoFitGrid: Story = {
  render: () => {
    const grid = document.createElement('sq-grid');
    grid.columns = 'repeat(auto-fill, minmax(200px, 1fr))';
    grid.gap = '16px';
    const colors = [
      'var(--sq-accent-primary)',
      'var(--sq-color-info)',
      'var(--sq-color-success)',
      'var(--sq-color-warning)',
      'var(--sq-color-danger)',
      'var(--sq-fg-muted)',
      'var(--sq-fg-default)',
      '#8b5cf6',
      '#ec4899',
      '#06b6d4',
      '#84cc16',
      '#f97316',
    ];
    colors.forEach((color, i) => {
      grid.append(block(`Item ${i + 1}`, color));
    });
    return grid;
  },
};

/* ============================================================================
   STORY 5 — Alignment Demo
   Shows all alignItems and justifyItems combinations
   ============================================================================ */
export const AlignmentDemo: Story = {
  render: () => {
    const makeAlignmentGrid = (alignItems: string, justifyItems: string) => {
      const grid = document.createElement('sq-grid');
      grid.columns = 'repeat(3, 1fr)';
      grid.gap = '16px';
      grid.alignItems = alignItems;
      grid.justifyItems = justifyItems;
      // Items with different heights to show alignment
      grid.append(
        block('Tall', 'var(--sq-accent-primary)', 'min-height: 120px;'),
        block('Short', 'var(--sq-color-info)', 'min-height: 60px;'),
        block('Medium', 'var(--sq-color-success)', 'min-height: 90px;')
      );
      return grid;
    };

    return page(
      section('alignItems: start / justifyItems: start', makeAlignmentGrid('start', 'start')),
      section('alignItems: center / justifyItems: center', makeAlignmentGrid('center', 'center')),
      section('alignItems: end / justifyItems: end', makeAlignmentGrid('end', 'end')),
      section('alignItems: stretch / justifyItems: stretch', makeAlignmentGrid('stretch', 'stretch'))
    );
  },
};

/* ============================================================================
   STORY 6 — Photo Gallery
   Demonstrates a masonry-like grid with varied aspect ratios
   ============================================================================ */
export const PhotoGallery: Story = {
  render: () => {
    const grid = document.createElement('sq-grid');
    grid.columns = 'repeat(4, 1fr)';
    grid.gap = '12px';

    const photos = [
      { label: 'Landscape', height: '160px', color: '#3b82f6' },
      { label: 'Portrait', height: '120px', color: '#22c55e' },
      { label: 'Close-up', height: '140px', color: '#f59e0b' },
      { label: 'Wide', height: '100px', color: '#ef4444' },
      { label: 'Square', height: '140px', color: '#8b5cf6' },
      { label: 'Tall', height: '160px', color: '#ec4899' },
      { label: 'Panorama', height: '100px', color: '#06b6d4' },
      { label: 'Standard', height: '120px', color: '#84cc16' },
    ];

    photos.forEach((photo) => {
      const div = document.createElement('div');
      div.style.cssText = `background: ${photo.color}; border-radius: var(--sq-radius-md); height: ${photo.height}; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 14px;`;
      div.textContent = photo.label;
      grid.append(div);
    });

    return grid;
  },
};

/* ============================================================================
   STORY 7 — Form Layout
   Shows a practical form using grid for label/input alignment
   ============================================================================ */
export const FormLayout: Story = {
  render: () => {
    const form = document.createElement('form');
    form.style.cssText = 'max-width: 600px; display: flex; flex-direction: column; gap: 16px;';
    form.addEventListener('submit', (e) => e.preventDefault());

    const makeFieldRow = (label: string, inputType: string, cols: string) => {
      const grid = document.createElement('sq-grid');
      grid.columns = cols;
      grid.gap = '12px';
      grid.alignItems = 'center';

      const labelEl = document.createElement('label');
      labelEl.style.cssText = 'font-size: 14px; font-weight: 500; color: var(--sq-fg-default);';
      labelEl.textContent = label;

      const input = document.createElement('input');
      input.type = inputType;
      input.style.cssText =
        'padding: 8px 12px; border: 1px solid var(--sq-border-subtle); border-radius: var(--sq-radius-sm); font-size: 14px; background: var(--sq-bg-surface); color: var(--sq-fg-default);';

      grid.append(labelEl, input);
      return grid;
    };

    form.append(
      makeFieldRow('First Name', 'text', '120px 1fr'),
      makeFieldRow('Last Name', 'text', '120px 1fr'),
      makeFieldRow('Email', 'email', '120px 1fr'),
      makeFieldRow('Phone', 'tel', '120px 1fr')
    );

    // Submit button row
    const buttonGrid = document.createElement('sq-grid');
    buttonGrid.columns = '120px 1fr';
    buttonGrid.gap = '12px';
    buttonGrid.alignItems = 'center';
    const spacer = document.createElement('div');
    const button = document.createElement('button');
    button.type = 'submit';
    button.style.cssText =
      'padding: 10px 24px; background: var(--sq-accent-primary); color: var(--sq-fg-inverse); border: none; border-radius: var(--sq-radius-full); font-weight: 600; font-size: 14px; cursor: pointer;';
    button.textContent = 'Submit';
    buttonGrid.append(spacer, button);
    form.append(buttonGrid);

    return form;
  },
};

/* ============================================================================
   STORY 8 — Gap Comparison
   Side-by-side comparison of different gap sizes
   ============================================================================ */
export const GapComparison: Story = {
  render: () => {
    const gaps = ['4px', '8px', '16px', '24px', '32px'];

    return page(
      ...gaps.map((gap) => {
        const grid = document.createElement('sq-grid');
        grid.columns = 'repeat(3, 1fr)';
        grid.gap = gap;
        grid.append(
          block('A', 'var(--sq-accent-primary)'),
          block('B', 'var(--sq-color-info)'),
          block('C', 'var(--sq-color-success)')
        );
        return section(`gap: ${gap}`, grid);
      })
    );
  },
};

/* ============================================================================
   STORY 9 — Column Variations
   Shows different column configurations side by side
   ============================================================================ */
export const ColumnVariations: Story = {
  render: () => {
    const configs = [
      { label: '2 columns', value: 'repeat(2, 1fr)' },
      { label: '3 columns', value: 'repeat(3, 1fr)' },
      { label: '4 columns', value: 'repeat(4, 1fr)' },
      { label: 'Unequal (1fr 2fr)', value: '1fr 2fr' },
      { label: 'Fixed + fluid (200px 1fr)', value: '200px 1fr' },
      { label: 'Auto-fill minmax(180px, 1fr)', value: 'repeat(auto-fill, minmax(180px, 1fr))' },
    ];

    return page(
      ...configs.map((config) => {
        const grid = document.createElement('sq-grid');
        grid.columns = config.value;
        grid.gap = '12px';
        const count = config.value.includes('auto') ? 8 : config.value.includes('2fr') ? 2 : config.value.includes('200px') ? 2 : parseInt(config.label) || 3;
        for (let i = 0; i < count; i++) {
          grid.append(block(`${i + 1}`, 'var(--sq-fg-muted)'));
        }
        return section(config.label, grid);
      })
    );
  },
};

/* ============================================================================
   STORY 10 — All Features (comprehensive overview)
   ============================================================================ */
export const AllFeatures: Story = {
  render: () => {
    return page(
      // Section 1: Basic 3-column grid
      section('Basic 3-Column Grid', (() => {
        const grid = document.createElement('sq-grid');
        grid.columns = 'repeat(3, 1fr)';
        grid.gap = '16px';
        grid.append(card('Item 1'), card('Item 2'), card('Item 3'), card('Item 4'), card('Item 5'), card('Item 6'));
        return grid;
      })()),

      // Section 2: Dashboard-style layout
      section('Dashboard Layout (3fr 1fr)', (() => {
        const grid = document.createElement('sq-grid');
        grid.columns = '3fr 1fr';
        grid.gap = '16px';
        grid.append(
          block('Main Content', 'var(--sq-fg-muted)'),
          block('Sidebar', 'var(--sq-accent-primary)')
        );
        return grid;
      })()),

      // Section 3: Auto-fit responsive
      section('Auto-Fit Responsive (minmax 200px)', (() => {
        const grid = document.createElement('sq-grid');
        grid.columns = 'repeat(auto-fill, minmax(200px, 1fr))';
        grid.gap = '16px';
        for (let i = 1; i <= 8; i++) {
          grid.append(block(`Responsive ${i}`, 'var(--sq-color-info)'));
        }
        return grid;
      })()),

      // Section 4: Alignment showcase
      section('Alignment: center / center', (() => {
        const grid = document.createElement('sq-grid');
        grid.columns = 'repeat(3, 1fr)';
        grid.gap = '16px';
        grid.alignItems = 'center';
        grid.justifyItems = 'center';
        grid.append(
          block('Tall', 'var(--sq-accent-primary)', 'min-height: 120px;'),
          block('Short', 'var(--sq-color-success)', 'min-height: 60px;'),
          block('Medium', 'var(--sq-color-warning)', 'min-height: 90px;')
        );
        return grid;
      })())
    );
  },
};
