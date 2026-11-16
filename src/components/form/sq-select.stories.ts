import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-select';

const meta = {
  title: 'Form/Select',
  component: 'sq-select',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    multiple: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-select
    label="${args.label}"
    .value="${args.value}"
    ?disabled="${args.disabled}"
    ?required="${args.required}"
    ?multiple="${args.multiple}"
  >
    <option value="">Select an option...</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </sq-select>`,
  args: { label: 'Choose Option', required: true },
};

export const WithGroups: Story = {
  render: () => html`<sq-select label="Category">
    <option value="">Select category...</option>
    <optgroup label="Frontend">
      <option value="react">React</option>
      <option value="vue">Vue</option>
      <option value="angular">Angular</option>
    </optgroup>
    <optgroup label="Backend">
      <option value="node">Node.js</option>
      <option value="python">Python</option>
      <option value="java">Java</option>
    </optgroup>
  </sq-select>`,
};

export const Disabled: Story = {
  render: () => html`<sq-select label="Disabled Select" disabled>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </sq-select>`,
};

export const Multiple: Story = {
  render: () => html`<sq-select label="Multiple Select" multiple>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </sq-select>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <sq-select label="Simple Select" required>
        <option value="">Choose...</option>
        <option value="1">First</option>
        <option value="2">Second</option>
      </sq-select>
      <sq-select label="With Groups">
        <optgroup label="Group A"><option value="a1">A1</option><option value="a2">A2</option></optgroup>
        <optgroup label="Group B"><option value="b1">B1</option><option value="b2">B2</option></optgroup>
      </sq-select>
      <sq-select label="Disabled" disabled>
        <option value="1">Cannot select</option>
      </sq-select>
    </div>
  `,
};
