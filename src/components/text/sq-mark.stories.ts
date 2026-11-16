import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-mark';

const meta = {
  title: 'Text/Mark',
  component: 'sq-mark',
  tags: ['autodocs'],
  argTypes: {
    color: { control: { type: 'select', options: ['default', 'success', 'warning', 'danger', 'info'] } },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<p>This text contains <sq-mark color="${args.color}">highlighted content</sq-mark> for emphasis.</p>`,
  args: { color: 'default' },
};

export const Success: Story = {
  render: () => html`<p><sq-mark color="success">Success highlight</sq-mark></p>`,
};

export const Warning: Story = {
  render: () => html`<p><sq-mark color="warning">Warning highlight</sq-mark></p>`,
};

export const Danger: Story = {
  render: () => html`<p><sq-mark color="danger">Danger highlight</sq-mark></p>`,
};

export const Info: Story = {
  render: () => html`<p><sq-mark color="info">Info highlight</sq-mark></p>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
      <p><sq-mark color="default">Default highlight</sq-mark></p>
      <p><sq-mark color="success">Success highlight</sq-mark></p>
      <p><sq-mark color="warning">Warning highlight</sq-mark></p>
      <p><sq-mark color="danger">Danger highlight</sq-mark></p>
      <p><sq-mark color="info">Info highlight</sq-mark></p>
    </div>
  `,
};
