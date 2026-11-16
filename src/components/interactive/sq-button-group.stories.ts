import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-button-group';
import './sq-button';

const meta: Meta = {
  title: 'Interactive/ButtonGroup',
  tags: ['autodocs'],
  component: 'sq-button-group',
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
  },
  args: {
    orientation: 'horizontal',
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <sq-button-group>
      <sq-button>Left</sq-button>
      <sq-button>Middle</sq-button>
      <sq-button>Right</sq-button>
    </sq-button-group>
  `,
};

export const Horizontal: Story = {
  render: () => html`
    <sq-button-group orientation="horizontal">
      <sq-button>Home</sq-button>
      <sq-button>Insert</sq-button>
      <sq-button>Format</sq-button>
      <sq-button>Tools</sq-button>
    </sq-button-group>
  `,
};

export const Vertical: Story = {
  render: () => html`
    <sq-button-group orientation="vertical">
      <sq-button>Top</sq-button>
      <sq-button>Middle</sq-button>
      <sq-button>Bottom</sq-button>
    </sq-button-group>
  `,
};

export const Secondary: Story = {
  render: () => html`
    <sq-button-group>
      <sq-button variant="secondary">Edit</sq-button>
      <sq-button variant="secondary">Copy</sq-button>
      <sq-button variant="secondary">Paste</sq-button>
    </sq-button-group>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Horizontal</h4>
        <sq-button-group orientation="horizontal">
          <sq-button>Left</sq-button>
          <sq-button>Middle</sq-button>
          <sq-button>Right</sq-button>
        </sq-button-group>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Vertical</h4>
        <sq-button-group orientation="vertical">
          <sq-button>Top</sq-button>
          <sq-button>Middle</sq-button>
          <sq-button>Bottom</sq-button>
        </sq-button-group>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Secondary Variant</h4>
        <sq-button-group>
          <sq-button variant="secondary">Edit</sq-button>
          <sq-button variant="secondary">Copy</sq-button>
          <sq-button variant="secondary">Paste</sq-button>
        </sq-button-group>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Toolbar Style</h4>
        <sq-button-group>
          <sq-button>Home</sq-button>
          <sq-button>Insert</sq-button>
          <sq-button>Format</sq-button>
          <sq-button>Tools</sq-button>
        </sq-button-group>
      </div>
    </div>
  `,
};
