import type { StorybookConfig } from '@storybook/web-components-vite';
import { lightTheme, darkTheme } from './themes';

const config: StorybookConfig = {
  stories: [
    { directory: '../src/components', files: 'overview.stories.@(js|jsx|mjs|ts|tsx)', titlePrefix: '' },
    { directory: '../src', files: '**/*.stories.@(js|jsx|mjs|ts|tsx)', titlePrefix: '' },
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    {
      name: 'sb-theme-switcher',
      options: {
        themes: [
          {
            id: 'light',
            title: 'Light',
            class: 'light',
            storybookTheme: lightTheme,
          },
          {
            id: 'dark',
            title: 'Dark',
            class: 'dark',
            storybookTheme: darkTheme,
          },
        ],
        defaultTheme: 'light',
        storageKey: 'squiddy-theme',
      },
    },
  ],
  framework: '@storybook/web-components-vite',
};

export default config;
