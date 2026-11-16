import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-range';

const meta = {
  title: 'Form/Range',
  component: 'sq-range',
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 100 } },
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    step: { control: { type: 'number' } },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-range
    label="${args.label}"
    .value="${args.value}"
    .min="${args.min}"
    .max="${args.max}"
    .step="${args.step}"
    ?disabled="${args.disabled}"
  ></sq-range>`,
  args: { label: 'Volume', value: 50, min: 0, max: 100, step: 1 },
};

export const CustomRange: Story = {
  render: (args) => html`<sq-range
    label="${args.label}"
    .value="${args.value}"
    .min="${args.min}"
    .max="${args.max}"
    .step="${args.step}"
    ?disabled="${args.disabled}"
  ></sq-range>`,
  args: { label: 'Price ($)', value: 25, min: 0, max: 200, step: 5 },
};

export const Disabled: Story = {
  render: (args) => html`<sq-range
    label="${args.label}"
    .value="${args.value}"
    .min="${args.min}"
    .max="${args.max}"
    .step="${args.step}"
    ?disabled="${args.disabled}"
  ></sq-range>`,
  args: { label: 'Disabled Range', value: 30, disabled: true },
};

export const WithoutLabel: Story = {
  render: (args) => html`<sq-range
    label="${args.label}"
    .value="${args.value}"
    .min="${args.min}"
    .max="${args.max}"
    .step="${args.step}"
    ?disabled="${args.disabled}"
  ></sq-range>`,
  args: { value: 75 },
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px; max-width: 400px;">
      <sq-range label="Volume" .value="${50}"></sq-range>
      <sq-range label="Brightness" .value="${75}" .min="${0}" .max="${100}"></sq-range>
      <sq-range label="Price ($)" .value="${25}" .min="${0}" .max="${200}" .step="${5}"></sq-range>
      <sq-range label="Disabled" .value="${30}" disabled></sq-range>
    </div>
  `,
};
