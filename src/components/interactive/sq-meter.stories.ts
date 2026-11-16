import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-meter';

const meta = {
  title: 'Interactive/Meter',
  component: 'sq-meter',
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 100 } },
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    low: { control: { type: 'number' } },
    high: { control: { type: 'number' } },
    showLabel: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-meter
    .value="${args.value}"
    .min="${args.min}"
    .max="${args.max}"
    ?showLabel="${args.showLabel}"
  ></sq-meter>`,
  args: { value: 0.5, min: 0, max: 1 },
};

export const Low: Story = {
  render: () => html`<sq-meter .value="${0.2}" .min="${0}" .max="${1}" showLabel></sq-meter>`,
};

export const High: Story = {
  render: () => html`<sq-meter .value="${0.8}" .min="${0}" .max="${1}" showLabel></sq-meter>`,
};

export const WithLabel: Story = {
  render: () => html`<sq-meter .value="${75}" .min="${0}" .max="${100}" showLabel></sq-meter>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <p>Low value (warning):</p>
      <sq-meter .value="${0.2}" .min="${0}" .max="${1}" showLabel></sq-meter>
      <p>Medium value:</p>
      <sq-meter .value="${0.5}" .min="${0}" .max="${1}" showLabel></sq-meter>
      <p>High value (success):</p>
      <sq-meter .value="${0.8}" .min="${0}" .max="${1}" showLabel></sq-meter>
      <p>Disk usage (0-100):</p>
      <sq-meter .value="${75}" .min="${0}" .max="${100}" showLabel></sq-meter>
    </div>
  `,
};
