import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-tag';

const meta: Meta = {
  title: 'DataDisplay/Tag',
  tags: ['autodocs'],
  component: 'sq-tag',
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    removable: { control: 'boolean' },
    disabled: { control: 'boolean' },
    clickable: { control: 'boolean' },
  },
  args: {
    label: 'Tag',
    variant: 'default',
    size: 'md',
    removable: false,
    disabled: false,
    clickable: false,
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-tag label="${args.label}" variant="${args.variant}" size="${args.size}" ?removable="${args.removable}" ?disabled="${args.disabled}" ?clickable="${args.clickable}"></sq-tag>`,
};

export const Primary: Story = {
  render: () => html`<sq-tag variant="primary">Primary</sq-tag>`,
};

export const Success: Story = {
  render: () => html`<sq-tag variant="success">Success</sq-tag>`,
};

export const Warning: Story = {
  render: () => html`<sq-tag variant="warning">Warning</sq-tag>`,
};

export const Error: Story = {
  render: () => html`<sq-tag variant="error">Error</sq-tag>`,
};

export const Info: Story = {
  render: () => html`<sq-tag variant="info">Info</sq-tag>`,
};

export const Small: Story = {
  render: () => html`<sq-tag size="sm">Small</sq-tag>`,
};

export const Large: Story = {
  render: () => html`<sq-tag size="lg">Large</sq-tag>`,
};

export const Removable: Story = {
  render: () => html`<sq-tag removable>Removable Tag</sq-tag>`,
};

export const Clickable: Story = {
  render: () => html`<sq-tag clickable>Clickable Tag</sq-tag>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Variants</h4>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <sq-tag variant="default">Default</sq-tag>
          <sq-tag variant="primary">Primary</sq-tag>
          <sq-tag variant="success">Success</sq-tag>
          <sq-tag variant="warning">Warning</sq-tag>
          <sq-tag variant="error">Error</sq-tag>
          <sq-tag variant="info">Info</sq-tag>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Sizes</h4>
        <div style="display: flex; gap: 8px; align-items: center;">
          <sq-tag size="sm">Small</sq-tag>
          <sq-tag size="md">Medium</sq-tag>
          <sq-tag size="lg">Large</sq-tag>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Removable</h4>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <sq-tag removable>React</sq-tag>
          <sq-tag removable>Vue</sq-tag>
          <sq-tag removable>Angular</sq-tag>
          <sq-tag removable>Svelte</sq-tag>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Clickable</h4>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <sq-tag clickable>Filter 1</sq-tag>
          <sq-tag clickable>Filter 2</sq-tag>
          <sq-tag clickable>Filter 3</sq-tag>
        </div>
      </div>
    </div>
  `,
};
