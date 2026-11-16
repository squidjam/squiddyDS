import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// All component entry points for individual imports
const componentEntries = {
  // Interactive
  'interactive/sq-button': resolve(import.meta.dirname, 'src/components/interactive/sq-button.ts'),
  'interactive/sq-dialog': resolve(import.meta.dirname, 'src/components/interactive/sq-dialog.ts'),
  'interactive/sq-details': resolve(import.meta.dirname, 'src/components/interactive/sq-details.ts'),
  'interactive/sq-progress': resolve(import.meta.dirname, 'src/components/interactive/sq-progress.ts'),
  'interactive/sq-meter': resolve(import.meta.dirname, 'src/components/interactive/sq-meter.ts'),
  'interactive/sq-switch': resolve(import.meta.dirname, 'src/components/interactive/sq-switch.ts'),
  'interactive/sq-carousel': resolve(import.meta.dirname, 'src/components/interactive/sq-carousel.ts'),
  'interactive/sq-accordion': resolve(import.meta.dirname, 'src/components/interactive/sq-accordion.ts'),
  'interactive/sq-spinner': resolve(import.meta.dirname, 'src/components/interactive/sq-spinner.ts'),
  'interactive/sq-skeleton': resolve(import.meta.dirname, 'src/components/interactive/sq-skeleton.ts'),
  'interactive/sq-collapsible': resolve(import.meta.dirname, 'src/components/interactive/sq-collapsible.ts'),
  'interactive/sq-clipboard': resolve(import.meta.dirname, 'src/components/interactive/sq-clipboard.ts'),
  'interactive/sq-split-button': resolve(import.meta.dirname, 'src/components/interactive/sq-split-button.ts'),
  'interactive/sq-button-group': resolve(import.meta.dirname, 'src/components/interactive/sq-button-group.ts'),

  // Semantic
  'semantic/sq-article': resolve(import.meta.dirname, 'src/components/semantic/sq-article.ts'),
  'semantic/sq-section': resolve(import.meta.dirname, 'src/components/semantic/sq-section.ts'),
  'semantic/sq-nav': resolve(import.meta.dirname, 'src/components/semantic/sq-nav.ts'),
  'semantic/sq-header': resolve(import.meta.dirname, 'src/components/semantic/sq-header.ts'),
  'semantic/sq-footer': resolve(import.meta.dirname, 'src/components/semantic/sq-footer.ts'),
  'semantic/sq-aside': resolve(import.meta.dirname, 'src/components/semantic/sq-aside.ts'),
  'semantic/sq-main': resolve(import.meta.dirname, 'src/components/semantic/sq-main.ts'),
  'semantic/sq-search': resolve(import.meta.dirname, 'src/components/semantic/sq-search.ts'),
  'semantic/sq-hgroup': resolve(import.meta.dirname, 'src/components/semantic/sq-hgroup.ts'),

  // Text
  'text/sq-text': resolve(import.meta.dirname, 'src/components/text/sq-text.ts'),
  'text/sq-code': resolve(import.meta.dirname, 'src/components/text/sq-code.ts'),
  'text/sq-mark': resolve(import.meta.dirname, 'src/components/text/sq-mark.ts'),
  'text/sq-kbd': resolve(import.meta.dirname, 'src/components/text/sq-kbd.ts'),
  'text/sq-blockquote': resolve(import.meta.dirname, 'src/components/text/sq-blockquote.ts'),
  'text/sq-caption': resolve(import.meta.dirname, 'src/components/text/sq-caption.ts'),
  'text/sq-heading': resolve(import.meta.dirname, 'src/components/text/sq-heading.ts'),

  // Media
  'media/sq-image': resolve(import.meta.dirname, 'src/components/media/sq-image.ts'),
  'media/sq-audio': resolve(import.meta.dirname, 'src/components/media/sq-audio.ts'),
  'media/sq-video': resolve(import.meta.dirname, 'src/components/media/sq-video.ts'),
  'media/sq-iframe': resolve(import.meta.dirname, 'src/components/media/sq-iframe.ts'),
  'media/sq-album-cover': resolve(import.meta.dirname, 'src/components/media/sq-album-cover.ts'),
  'media/sq-song-row': resolve(import.meta.dirname, 'src/components/media/sq-song-row.ts'),
  'media/sq-equalizer': resolve(import.meta.dirname, 'src/components/media/sq-equalizer.ts'),

  // Layout
  'layout/sq-card': resolve(import.meta.dirname, 'src/components/layout/sq-card.ts'),
  'layout/sq-divider': resolve(import.meta.dirname, 'src/components/layout/sq-divider.ts'),
  'layout/sq-container': resolve(import.meta.dirname, 'src/components/layout/sq-container.ts'),
  'layout/sq-grid': resolve(import.meta.dirname, 'src/components/layout/sq-grid.ts'),
  'layout/sq-flex': resolve(import.meta.dirname, 'src/components/layout/sq-flex.ts'),
  'layout/sq-stack': resolve(import.meta.dirname, 'src/components/layout/sq-stack.ts'),
  'layout/sq-masonry': resolve(import.meta.dirname, 'src/components/layout/sq-masonry.ts'),
  'layout/sq-theme': resolve(import.meta.dirname, 'src/components/layout/sq-theme.ts'),

  // Form
  'form/sq-input': resolve(import.meta.dirname, 'src/components/form/sq-input.ts'),
  'form/sq-select': resolve(import.meta.dirname, 'src/components/form/sq-select.ts'),
  'form/sq-textarea': resolve(import.meta.dirname, 'src/components/form/sq-textarea.ts'),
  'form/sq-checkbox': resolve(import.meta.dirname, 'src/components/form/sq-checkbox.ts'),
  'form/sq-radio': resolve(import.meta.dirname, 'src/components/form/sq-radio.ts'),
  'form/sq-label': resolve(import.meta.dirname, 'src/components/form/sq-label.ts'),
  'form/sq-fieldset': resolve(import.meta.dirname, 'src/components/form/sq-fieldset.ts'),
  'form/sq-range': resolve(import.meta.dirname, 'src/components/form/sq-range.ts'),
  'form/sq-color-picker': resolve(import.meta.dirname, 'src/components/form/sq-color-picker.ts'),
  'form/sq-date-picker': resolve(import.meta.dirname, 'src/components/form/sq-date-picker.ts'),
  'form/sq-date-range': resolve(import.meta.dirname, 'src/components/form/sq-date-range.ts'),
  'form/sq-file-upload': resolve(import.meta.dirname, 'src/components/form/sq-file-upload.ts'),
  'form/sq-input-group': resolve(import.meta.dirname, 'src/components/form/sq-input-group.ts'),
  'form/sq-radio-group': resolve(import.meta.dirname, 'src/components/form/sq-radio-group.ts'),
  'form/sq-checkbox-group': resolve(import.meta.dirname, 'src/components/form/sq-checkbox-group.ts'),
  'form/sq-form': resolve(import.meta.dirname, 'src/components/form/sq-form.ts'),

  // Table
  'table/sq-table': resolve(import.meta.dirname, 'src/components/table/sq-table.ts'),
  'table/sq-th': resolve(import.meta.dirname, 'src/components/table/sq-th.ts'),
  'table/sq-td': resolve(import.meta.dirname, 'src/components/table/sq-td.ts'),

  // List
  'list/sq-list': resolve(import.meta.dirname, 'src/components/list/sq-list.ts'),
  'list/sq-definition-list': resolve(import.meta.dirname, 'src/components/list/sq-definition-list.ts'),

  // Navigation
  'navigation/sq-link': resolve(import.meta.dirname, 'src/components/navigation/sq-link.ts'),
  'navigation/sq-breadcrumb': resolve(import.meta.dirname, 'src/components/navigation/sq-breadcrumb.ts'),
  'navigation/sq-menu': resolve(import.meta.dirname, 'src/components/navigation/sq-menu.ts'),
  'navigation/sq-menu-item': resolve(import.meta.dirname, 'src/components/navigation/sq-menu-item.ts'),
  'navigation/sq-menu-divider': resolve(import.meta.dirname, 'src/components/navigation/sq-menu-divider.ts'),
  'navigation/sq-stepper': resolve(import.meta.dirname, 'src/components/navigation/sq-stepper.ts'),
  'navigation/sq-tabs': resolve(import.meta.dirname, 'src/components/navigation/sq-tabs.ts'),

  // Feedback
  'feedback/sq-alert': resolve(import.meta.dirname, 'src/components/feedback/sq-alert.ts'),

  // Overlay
  'overlay/sq-drawer': resolve(import.meta.dirname, 'src/components/overlay/sq-drawer.ts'),
  'overlay/sq-tooltip': resolve(import.meta.dirname, 'src/components/overlay/sq-tooltip.ts'),
  'overlay/sq-dropdown': resolve(import.meta.dirname, 'src/components/overlay/sq-dropdown.ts'),

  // Data Display
  'data-display/sq-timeline': resolve(import.meta.dirname, 'src/components/data-display/sq-timeline.ts'),
  'data-display/sq-timetree': resolve(import.meta.dirname, 'src/components/data-display/sq-timetree.ts'),
  'data-display/sq-tree': resolve(import.meta.dirname, 'src/components/data-display/sq-tree.ts'),
  'data-display/sq-pagination': resolve(import.meta.dirname, 'src/components/data-display/sq-pagination.ts'),
  'data-display/sq-avatar': resolve(import.meta.dirname, 'src/components/data-display/sq-avatar.ts'),
  'data-display/sq-tag': resolve(import.meta.dirname, 'src/components/data-display/sq-tag.ts'),
  'data-display/sq-badge': resolve(import.meta.dirname, 'src/components/data-display/sq-badge.ts'),

  // Head
  'head/sq-head-elements': resolve(import.meta.dirname, 'src/components/head/sq-head-elements.ts'),

  // Base
  'base-component': resolve(import.meta.dirname, 'src/components/base-component.ts'),
};

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        'squiddy-ds': resolve(import.meta.dirname, 'src/index.ts'),
        ...componentEntries,
      },
      name: 'SquiddyDS',
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: /^lit/,
      output: {
        globals: {
          lit: 'Lit',
        },
      },
    },
  },
});
