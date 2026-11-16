import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-switch';

const meta = {
  title: 'Interactive/Switch',
  component: 'sq-switch',
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-switch
    label="${args.label}"
    .checked="${args.checked}"
    ?disabled="${args.disabled}"
  ></sq-switch>`,
  args: { label: 'Toggle me' },
};

export const Checked: Story = {
  render: () => html`<sq-switch label="Enabled" .checked="${true}"></sq-switch>`,
};

export const Disabled: Story = {
  render: () => html`<sq-switch label="Locked" disabled></sq-switch>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <sq-switch label="Off"></sq-switch>
      <sq-switch label="On" .checked="${true}"></sq-switch>
      <sq-switch label="Disabled Off" disabled></sq-switch>
      <sq-switch label="Disabled On" .checked="${true}" disabled></sq-switch>
    </div>
  `,
};
