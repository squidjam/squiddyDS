import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-radio';

const meta = {
  title: 'Form/Radio',
  component: 'sq-radio',
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-radio
    label="${args.label}"
    name="${args.name}"
    value="${args.value}"
    .checked="${args.checked}"
    ?disabled="${args.disabled}"
  ></sq-radio>`,
  args: { label: 'Option A', name: 'choice', value: 'a' },
};

export const Checked: Story = {
  render: (args) => html`<sq-radio
    label="${args.label}"
    name="${args.name}"
    value="${args.value}"
    .checked="${args.checked}"
    ?disabled="${args.disabled}"
  ></sq-radio>`,
  args: { label: 'Option B', name: 'choice', value: 'b', checked: true },
};

export const Disabled: Story = {
  render: (args) => html`<sq-radio
    label="${args.label}"
    name="${args.name}"
    value="${args.value}"
    .checked="${args.checked}"
    ?disabled="${args.disabled}"
  ></sq-radio>`,
  args: { label: 'Option C', name: 'choice', value: 'c', disabled: true },
};

export const Group: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <sq-radio label="Small" name="size" value="small"></sq-radio>
      <sq-radio label="Medium" name="size" value="medium" .checked="${true}"></sq-radio>
      <sq-radio label="Large" name="size" value="large"></sq-radio>
      <sq-radio label="Extra Large" name="size" value="xl" disabled></sq-radio>
    </div>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <sq-radio label="Unchecked" name="demo" value="1"></sq-radio>
      <sq-radio label="Checked" name="demo" value="2" .checked="${true}"></sq-radio>
      <sq-radio label="Disabled" name="demo" value="3" disabled></sq-radio>
    </div>
  `,
};
