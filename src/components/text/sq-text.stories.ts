import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-text';

const meta = {
  title: 'Text/Text',
  component: 'sq-text',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: { type: 'select', options: ['body', 'lead', 'small', 'caption'] } },
    weight: { control: { type: 'select', options: ['normal', 'medium', 'semibold', 'bold'] } },
    align: { control: { type: 'select', options: ['left', 'center', 'right'] } },
    truncate: { control: 'boolean' },
    ellipsis: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-text
    variant="${args.variant}"
    weight="${args.weight}"
    align="${args.align}"
    ?truncate="${args.truncate}"
  >The quick brown fox jumps over the lazy dog.</sq-text>`,
  args: { variant: 'body', weight: 'normal', align: 'left' },
};

export const Lead: Story = {
  render: () => html`<sq-text variant="lead">This is a lead paragraph — larger text with relaxed line height for introductions.</sq-text>`,
};

export const Small: Story = {
  render: () => html`<sq-text variant="small">This is small text for secondary information.</sq-text>`,
};

export const Caption: Story = {
  render: () => html`<sq-text variant="caption">This is caption text for images and figures.</sq-text>`,
};

export const Bold: Story = {
  render: () => html`<sq-text weight="bold">This text is bold.</sq-text>`,
};

export const Centered: Story = {
  render: () => html`<sq-text align="center">This text is centered.</sq-text>`,
};

export const Truncated: Story = {
  render: () => html`<sq-text truncate style="max-width: 300px;">This is a very long text that will be truncated with an ellipsis when it overflows the container width.</sq-text>`,
};

export const Ellipsis: Story = {
  render: () => html`<sq-text ellipsis style="max-width: 300px;">This is a very long text that will be truncated with an ellipsis when it overflows the container width.</sq-text>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
      <sq-text variant="lead">Lead text — larger intro paragraph.</sq-text>
      <sq-text variant="body">Body text — default paragraph style.</sq-text>
      <sq-text variant="body" weight="bold">Bold body text.</sq-text>
      <sq-text variant="small">Small text — secondary info.</sq-text>
      <sq-text variant="caption">Caption text — for images.</sq-text>
      <sq-text align="center">Centered text.</sq-text>
      <sq-text align="right">Right-aligned text.</sq-text>
    </div>
  `,
};
