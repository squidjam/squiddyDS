import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-tooltip';
import '../interactive/sq-button';

const meta: Meta = {
  title: 'Overlay/Tooltip',
  tags: ['autodocs'],
  component: 'sq-tooltip',
  argTypes: {
    content: { control: 'text' },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'info', 'success', 'warning', 'error'],
    },
    hover: { control: 'boolean' },
    delay: { control: 'number' },
  },
  args: {
    content: 'Tooltip text',
    position: 'top',
    variant: 'default',
    hover: true,
    delay: 200,
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <sq-tooltip content="${args.content}" position="${args.position}" variant="${args.variant}" ?hover="${args.hover}">
      <sq-button>Hover me</sq-button>
    </sq-tooltip>
  `,
};

export const Top: Story = {
  render: () => html`
    <div style="height: 200px; display: flex; align-items: flex-end;">
      <sq-tooltip content="Top tooltip" position="top">
        <sq-button>Top</sq-button>
      </sq-tooltip>
    </div>
  `,
};

export const Bottom: Story = {
  render: () => html`
    <sq-tooltip content="Bottom tooltip" position="bottom">
      <sq-button>Bottom</sq-button>
    </sq-tooltip>
  `,
};

export const Left: Story = {
  render: () => html`
    <div style="width: 300px; display: flex; align-items: center; justify-content: flex-end;">
      <sq-tooltip content="Left tooltip" position="left">
        <sq-button>Left</sq-button>
      </sq-tooltip>
    </div>
  `,
};

export const Right: Story = {
  render: () => html`
    <sq-tooltip content="Right tooltip" position="right">
      <sq-button>Right</sq-button>
    </sq-tooltip>
  `,
};

export const Info: Story = {
  render: () => html`
    <sq-tooltip content="Info tooltip" variant="info">
      <sq-button>Info</sq-button>
    </sq-tooltip>
  `,
};

export const Success: Story = {
  render: () => html`
    <sq-tooltip content="Success tooltip" variant="success">
      <sq-button>Success</sq-button>
    </sq-tooltip>
  `,
};

export const Warning: Story = {
  render: () => html`
    <sq-tooltip content="Warning tooltip" variant="warning">
      <sq-button>Warning</sq-button>
    </sq-tooltip>
  `,
};

export const Error: Story = {
  render: () => html`
    <sq-tooltip content="Error tooltip" variant="error">
      <sq-button>Error</sq-button>
    </sq-tooltip>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Positions</h4>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <sq-tooltip content="Top" position="top"><sq-button>Top</sq-button></sq-tooltip>
          <sq-tooltip content="Bottom" position="bottom"><sq-button>Bottom</sq-button></sq-tooltip>
          <sq-tooltip content="Left" position="left"><sq-button>Left</sq-button></sq-tooltip>
          <sq-tooltip content="Right" position="right"><sq-button>Right</sq-button></sq-tooltip>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Variants</h4>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <sq-tooltip content="Default" variant="default"><sq-button>Default</sq-button></sq-tooltip>
          <sq-tooltip content="Info" variant="info"><sq-button>Info</sq-button></sq-tooltip>
          <sq-tooltip content="Success" variant="success"><sq-button>Success</sq-button></sq-tooltip>
          <sq-tooltip content="Warning" variant="warning"><sq-button>Warning</sq-button></sq-tooltip>
          <sq-tooltip content="Error" variant="error"><sq-button>Error</sq-button></sq-tooltip>
        </div>
      </div>
    </div>
  `,
};
