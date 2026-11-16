import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-container';

const meta = {
  title: 'Layout/Container',
  component: 'sq-container',
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select', options: ['sm', 'md', 'lg', 'xl', 'full'] } },
    padded: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-container size="${args.size}" ?padded="${args.padded}">
    <div style="padding: 16px; background: var(--sq-bg-surface); border: 1px dashed var(--sq-border-default); border-radius: 8px; text-align: center;">
      Container content — max-width: ${args.size === 'xl' ? '1280px' : args.size === 'lg' ? '1024px' : args.size === 'md' ? '768px' : args.size === 'sm' ? '640px' : '100%'}
    </div>
  </sq-container>`,
  args: { size: 'xl', padded: true },
};

export const Small: Story = {
  render: () => html`<sq-container size="sm">
    <div style="padding: 16px; background: var(--sq-bg-surface); border: 1px dashed var(--sq-border-default); border-radius: 8px; text-align: center;">
      Small container (640px max-width)
    </div>
  </sq-container>`,
};

export const Medium: Story = {
  render: () => html`<sq-container size="md">
    <div style="padding: 16px; background: var(--sq-bg-surface); border: 1px dashed var(--sq-border-default); border-radius: 8px; text-align: center;">
      Medium container (768px max-width)
    </div>
  </sq-container>`,
};

export const Large: Story = {
  render: () => html`<sq-container size="lg">
    <div style="padding: 16px; background: var(--sq-bg-surface); border: 1px dashed var(--sq-border-default); border-radius: 8px; text-align: center;">
      Large container (1024px max-width)
    </div>
  </sq-container>`,
};

export const FullWidth: Story = {
  render: () => html`<sq-container size="full">
    <div style="padding: 16px; background: var(--sq-bg-surface); border: 1px dashed var(--sq-border-default); border-radius: 8px; text-align: center;">
      Full width container (100%)
    </div>
  </sq-container>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <sq-container size="sm">
        <div style="padding: 16px; background: var(--sq-bg-surface); border: 1px dashed var(--sq-border-default); border-radius: 8px; text-align: center;">Small (640px)</div>
      </sq-container>
      <sq-container size="md">
        <div style="padding: 16px; background: var(--sq-bg-surface); border: 1px dashed var(--sq-border-default); border-radius: 8px; text-align: center;">Medium (768px)</div>
      </sq-container>
      <sq-container size="lg">
        <div style="padding: 16px; background: var(--sq-bg-surface); border: 1px dashed var(--sq-border-default); border-radius: 8px; text-align: center;">Large (1024px)</div>
      </sq-container>
      <sq-container size="xl">
        <div style="padding: 16px; background: var(--sq-bg-surface); border: 1px dashed var(--sq-border-default); border-radius: 8px; text-align: center;">XL (1280px)</div>
      </sq-container>
      <sq-container size="full">
        <div style="padding: 16px; background: var(--sq-bg-surface); border: 1px dashed var(--sq-border-default); border-radius: 8px; text-align: center;">Full (100%)</div>
      </sq-container>
    </div>
  `,
};
