import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-caption';

const meta: Meta = {
  title: 'Text/Caption',
  tags: ['autodocs'],
  component: 'sq-caption',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'subtle', 'emphasis'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
  },
  args: {
    variant: 'default',
    align: 'center',
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-caption variant="${args.variant}" align="${args.align}">A descriptive caption text</sq-caption>`,
};

export const Subtle: Story = {
  render: () => html`<sq-caption variant="subtle">A subtle caption text</sq-caption>`,
};

export const Emphasis: Story = {
  render: () => html`<sq-caption variant="emphasis">An emphasized caption text</sq-caption>`,
};

export const LeftAligned: Story = {
  render: () => html`<sq-caption align="left">Left aligned caption</sq-caption>`,
};

export const RightAligned: Story = {
  render: () => html`<sq-caption align="right">Right aligned caption</sq-caption>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Default</h4>
        <sq-caption variant="default">Default caption variant</sq-caption>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Subtle</h4>
        <sq-caption variant="subtle">Subtle caption variant</sq-caption>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Emphasis</h4>
        <sq-caption variant="emphasis">Emphasis caption variant</sq-caption>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Left Aligned</h4>
        <sq-caption align="left">Left aligned caption</sq-caption>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Center Aligned</h4>
        <sq-caption align="center">Center aligned caption</sq-caption>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Right Aligned</h4>
        <sq-caption align="right">Right aligned caption</sq-caption>
      </div>
    </div>
  `,
};
