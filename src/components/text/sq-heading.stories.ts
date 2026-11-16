import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-heading';

const meta: Meta = {
  title: 'Text/Heading',
  tags: ['autodocs'],
  component: 'sq-heading',
  argTypes: {
    level: {
      control: { type: 'select' },
      options: ['1', '2', '3', '4', '5', '6'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'accent', 'muted'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    decorated: { control: 'boolean' },
  },
  args: {
    level: '2',
    variant: 'default',
    align: 'left',
    decorated: false,
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-heading level="${args.level}" variant="${args.variant}" align="${args.align}" ?decorated="${args.decorated}">Heading Text</sq-heading>`,
};

export const H1: Story = {
  render: () => html`<sq-heading level="1">Level 1 Heading</sq-heading>`,
};

export const H2: Story = {
  render: () => html`<sq-heading level="2">Level 2 Heading</sq-heading>`,
};

export const H3: Story = {
  render: () => html`<sq-heading level="3">Level 3 Heading</sq-heading>`,
};

export const H4: Story = {
  render: () => html`<sq-heading level="4">Level 4 Heading</sq-heading>`,
};

export const Accent: Story = {
  render: () => html`<sq-heading variant="accent">Accent Heading</sq-heading>`,
};

export const Muted: Story = {
  render: () => html`<sq-heading variant="muted">Muted Heading</sq-heading>`,
};

export const Decorated: Story = {
  render: () => html`<sq-heading decorated>Decorated Heading</sq-heading>`,
};

export const Centered: Story = {
  render: () => html`<sq-heading align="center" decorated>Centered Heading</sq-heading>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Level 1</h4>
        <sq-heading level="1">Level 1 Heading</sq-heading>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Level 2</h4>
        <sq-heading level="2">Level 2 Heading</sq-heading>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Level 3</h4>
        <sq-heading level="3">Level 3 Heading</sq-heading>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Accent</h4>
        <sq-heading variant="accent">Accent Heading</sq-heading>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Muted</h4>
        <sq-heading variant="muted">Muted Heading</sq-heading>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Decorated</h4>
        <sq-heading decorated>Decorated Heading</sq-heading>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Centered & Decorated</h4>
        <sq-heading align="center" decorated>Centered Heading</sq-heading>
      </div>
    </div>
  `,
};
