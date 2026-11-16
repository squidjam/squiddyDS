import type { Preview } from '@storybook/web-components';
import { DocsContainer } from 'sb-theme-switcher/docs';
import { html } from 'lit';
// @ts-ignore - side-effect import
import '../src/tokens/tokens.css';
import '../src/components/layout/sq-theme.js';

/**
 * All Squiddy DS named themes available in the theme selector.
 */
const SQIDDY_THEMES = [
  { value: 'none', title: 'Default' },
  { value: 'blue', title: '🔵 Blue' },
  { value: 'red', title: '🔴 Red' },
  { value: 'lime', title: '🟢 Lime' },
  { value: 'cyan', title: '🔵 Cyan' },
  { value: 'green', title: '🟢 Green' },
  { value: 'gold', title: '🟡 Gold' },
  { value: 'pink', title: '🩷 Pink' },
  { value: 'fuchsia', title: '🟣 Fuchsia' },
  { value: 'magenta', title: '🟣 Magenta' },
  { value: 'rainbow', title: '🌈 Rainbow' },
  { value: 'sq-theme', title: '🦑 SQ Theme' },
] as const;

/**
 * Global types for the SQ Theme selector toolbar.
 * This creates a toolbar dropdown in Storybook's header.
 */
export const globalTypes = {
  squiddyTheme: {
    description: 'Squiddy DS Theme',
    defaultValue: 'none',
    toolbar: {
      icon: 'palette',
      title: 'SQ Theme',
      items: SQIDDY_THEMES,
      showName: true,
    },
  },
};

/**
 * Get the currently selected theme from globals.
 */
function getSelectedTheme(globals: Record<string, unknown>): string {
  return (globals.squiddyTheme as string) || 'none';
}

const preview: Preview = {
  decorators: [
    (story: () => any, context: any) => {
      const selectedTheme = getSelectedTheme(context.globals);

      // If no theme is selected, just render the story as-is
      if (selectedTheme === 'none') {
        return story();
      }

      // Otherwise, wrap in sq-theme element using Lit's html template
      return html`
        <sq-theme sq-theme="${selectedTheme}">
          ${story()}
        </sq-theme>
      `;
    },
  ],
  parameters: {
    other: {
      page: 'Components/Overview--all-components',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      container: DocsContainer,
      styles: `
        /* Fix asymmetric padding in Storybook docs pages */
        .sbdocs-preview {
          padding-left: 20px !important;
          padding-right: 20px !important;
        }
        .sbdocs-content {
          padding-left: 20px !important;
          padding-right: 20px !important;
        }
        /* Ensure story canvas has symmetric padding */
        .sbdocs-canvas {
          padding-left: 20px !important;
          padding-right: 20px !important;
        }
      `,
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FCF7ED' },
        { name: 'dark', value: '#0b0d10' },
      ],
    },
  },
  tags: ['autodocs'],
};

export default preview;
