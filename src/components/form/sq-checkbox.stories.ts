import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-checkbox';

const meta = {
  title: 'Form/Checkbox',
  component: 'sq-checkbox',
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    indeterminate: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-checkbox
    label="${args.label}"
    .checked="${args.checked}"
    ?disabled="${args.disabled}"
    .indeterminate="${args.indeterminate}"
  ></sq-checkbox>`,
  args: { label: 'I agree to the terms', checked: false },
};

export const Checked: Story = {
  render: (args) => html`<sq-checkbox
    label="${args.label}"
    .checked="${args.checked}"
    ?disabled="${args.disabled}"
    .indeterminate="${args.indeterminate}"
  ></sq-checkbox>`,
  args: { label: 'Subscribe to newsletter', checked: true },
};

export const Indeterminate: Story = {
  render: (args) => html`<sq-checkbox
    label="${args.label}"
    .checked="${args.checked}"
    ?disabled="${args.disabled}"
    .indeterminate="${args.indeterminate}"
  ></sq-checkbox>`,
  args: { label: 'Select all items', indeterminate: true },
};

export const Disabled: Story = {
  render: (args) => html`<sq-checkbox
    label="${args.label}"
    .checked="${args.checked}"
    ?disabled="${args.disabled}"
    .indeterminate="${args.indeterminate}"
  ></sq-checkbox>`,
  args: { label: 'Cannot change this', checked: true, disabled: true },
};

export const Group: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <sq-checkbox label="React"></sq-checkbox>
      <sq-checkbox label="Vue" .checked="${true}"></sq-checkbox>
      <sq-checkbox label="Angular" .checked="${true}"></sq-checkbox>
      <sq-checkbox label="Svelte" disabled></sq-checkbox>
    </div>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <sq-checkbox label="Default unchecked"></sq-checkbox>
      <sq-checkbox label="Checked" .checked="${true}"></sq-checkbox>
      <sq-checkbox label="Indeterminate" .indeterminate="${true}"></sq-checkbox>
      <sq-checkbox label="Disabled" disabled></sq-checkbox>
      <sq-checkbox label="Checked & Disabled" .checked="${true}" disabled></sq-checkbox>
    </div>
  `,
};
