import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-label';
import '../form/sq-input';

const meta = {
  title: 'Form/Label',
  component: 'sq-label',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    forId: { control: 'text' },
    required: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-label
    for="${args.forId}"
    ?required="${args.required}"
  >${args.label}</sq-label>`,
  args: { label: 'Email Address', forId: 'email', required: true },
};

export const Required: Story = {
  render: () => html`<sq-label required>Email Address</sq-label>`,
};

export const WithInput: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <sq-label for="demo-input" required>Username</sq-label>
      <sq-input id="demo-input" type="text" placeholder="Enter username"></sq-input>
    </div>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <sq-label>Simple Label</sq-label>
      <sq-label required>Required Label</sq-label>
      <sq-label for="field1">Associated Label</sq-label>
    </div>
  `,
};
