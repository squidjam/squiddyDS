import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-progress';

const meta = {
  title: 'Interactive/Progress',
  component: 'sq-progress',
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 100 } },
    max: { control: { type: 'number' } },
    indeterminate: { control: 'boolean' },
    showLabel: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-progress
    .value="${args.value}"
    .max="${args.max}"
    ?indeterminate="${args.indeterminate}"
    ?showLabel="${args.showLabel}"
  ></sq-progress>`,
  args: { value: 50, max: 100 },
};

export const WithLabel: Story = {
  render: () => html`<sq-progress .value="${75}" .max="${100}" showLabel></sq-progress>`,
};

export const Indeterminate: Story = {
  render: () => html`<sq-progress indeterminate></sq-progress>`,
};

export const Complete: Story = {
  render: () => html`<sq-progress .value="${100}" .max="${100}" showLabel></sq-progress>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <p>25% progress:</p>
      <sq-progress .value="${25}" .max="${100}" showLabel></sq-progress>
      <p>50% progress:</p>
      <sq-progress .value="${50}" .max="${100}" showLabel></sq-progress>
      <p>75% progress:</p>
      <sq-progress .value="${75}" .max="${100}" showLabel></sq-progress>
      <p>Complete:</p>
      <sq-progress .value="${100}" .max="${100}" showLabel></sq-progress>
      <p>Indeterminate:</p>
      <sq-progress indeterminate></sq-progress>
    </div>
  `,
};
