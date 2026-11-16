import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-button';

const meta: Meta = {
  title: 'Interactive/Button',
  tags: ['autodocs'],
  component: 'sq-button',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'subtle', 'danger', 'success', 'warning', 'info'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
  },
};
export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: (args) => html`<sq-button variant="${args.variant}" size="${args.size}" ?disabled="${args.disabled}" ?loading="${args.loading}">Primary</sq-button>`,
  args: { variant: 'primary', size: 'md' },
};

export const Secondary: Story = {
  render: (args) => html`<sq-button variant="${args.variant}" size="${args.size}" ?disabled="${args.disabled}" ?loading="${args.loading}">Secondary</sq-button>`,
  args: { variant: 'secondary', size: 'md' },
};

export const Subtle: Story = {
  render: (args) => html`<sq-button variant="${args.variant}" size="${args.size}" ?disabled="${args.disabled}" ?loading="${args.loading}">Subtle</sq-button>`,
  args: { variant: 'subtle', size: 'md' },
};

export const Danger: Story = {
  render: (args) => html`<sq-button variant="${args.variant}" size="${args.size}" ?disabled="${args.disabled}" ?loading="${args.loading}">Delete</sq-button>`,
  args: { variant: 'danger', size: 'md' },
};

export const Success: Story = {
  render: (args) => html`<sq-button variant="${args.variant}" size="${args.size}" ?disabled="${args.disabled}" ?loading="${args.loading}">Save</sq-button>`,
  args: { variant: 'success', size: 'md' },
};

export const Warning: Story = {
  render: (args) => html`<sq-button variant="${args.variant}" size="${args.size}" ?disabled="${args.disabled}" ?loading="${args.loading}">Warning</sq-button>`,
  args: { variant: 'warning', size: 'md' },
};

export const Info: Story = {
  render: (args) => html`<sq-button variant="${args.variant}" size="${args.size}" ?disabled="${args.disabled}" ?loading="${args.loading}">Info</sq-button>`,
  args: { variant: 'info', size: 'md' },
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
      <sq-button size="sm">Small</sq-button>
      <sq-button size="md">Medium</sq-button>
      <sq-button size="lg">Large</sq-button>
    </div>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
      <sq-button>Primary</sq-button>
      <sq-button variant="secondary">Secondary</sq-button>
      <sq-button variant="subtle">Subtle</sq-button>
      <sq-button variant="danger">Danger</sq-button>
      <sq-button variant="success">Success</sq-button>
      <sq-button variant="warning">Warning</sq-button>
      <sq-button variant="info">Info</sq-button>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
      <sq-button disabled>Primary</sq-button>
      <sq-button variant="secondary" disabled>Secondary</sq-button>
      <sq-button variant="subtle" disabled>Subtle</sq-button>
      <sq-button variant="danger" disabled>Danger</sq-button>
    </div>
  `,
};

export const Loading: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
      <sq-button loading>Processing</sq-button>
      <sq-button variant="secondary" loading>Waiting</sq-button>
      <sq-button variant="danger" loading>Deleting</sq-button>
    </div>
  `,
};
