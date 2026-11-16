import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../form/sq-date-range';

const meta = {
  title: 'Form/Date Range',
  component: 'sq-date-range',
  tags: ['autodocs'],
  argTypes: {
    start: { control: { type: 'date' } },
    end: { control: { type: 'date' } },
    format: { control: 'text' },
    minDate: { control: { type: 'date' } },
    maxDate: { control: { type: 'date' } },
    clearable: { control: 'boolean' },
    showPresets: { control: 'boolean' },
    startPlaceholder: { control: 'text' },
    endPlaceholder: { control: 'text' },
    firstDay: { control: { type: 'select', options: [0, 1] } },
    disableWeekdays: { control: 'boolean' },
    disableWeekends: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<sq-date-range style="max-width: 400px;"></sq-date-range>`,
};

export const WithRange: Story = {
  render: () => html`
    <sq-date-range start="2024-06-01" end="2024-06-15" style="max-width: 400px;"></sq-date-range>
  `,
};

export const WithConstraints: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
      <sq-date-range min-date="2024-01-01" max-date="2024-12-31"></sq-date-range>
      <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-sm);">
        Only dates within 2024 are selectable.
      </p>
    </div>
  `,
};

export const WithoutPresets: Story = {
  render: () => html`
    <sq-date-range .showPresets=${false} style="max-width: 400px;"></sq-date-range>
  `,
};

export const CustomPlaceholders: Story = {
  render: () => html`
    <sq-date-range
      start-placeholder="From date"
      end-placeholder="To date"
      style="max-width: 400px;"
    ></sq-date-range>
  `,
};

export const CustomFormat: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
      <sq-date-range format="DD/MM/YYYY" style="max-width: 400px;"></sq-date-range>
      <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-sm);">
        Dates display as DD/MM/YYYY format.
      </p>
    </div>
  `,
};

export const SundayFirst: Story = {
  render: () => html`
    <sq-date-range first-day="0" style="max-width: 400px;"></sq-date-range>
  `,
};

export const DisableWeekdays: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
      <sq-date-range disable-weekdays style="max-width: 400px;"></sq-date-range>
      <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-sm);">
        Monday through Friday are disabled. Only weekends are selectable.
      </p>
    </div>
  `,
};

export const DisableWeekends: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
      <sq-date-range disable-weekends style="max-width: 400px;"></sq-date-range>
      <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-sm);">
        Saturday and Sunday are disabled. Only weekdays are selectable.
      </p>
    </div>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px; max-width: 400px;">
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Default</p>
        <sq-date-range></sq-date-range>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">With Range Selected</p>
        <sq-date-range start="2024-06-01" end="2024-06-15"></sq-date-range>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Without Presets</p>
        <sq-date-range .showPresets=${false}></sq-date-range>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Custom Placeholders</p>
        <sq-date-range start-placeholder="Check-in" end-placeholder="Check-out"></sq-date-range>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">With Constraints</p>
        <sq-date-range min-date="2024-01-01" max-date="2024-12-31"></sq-date-range>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Custom Format</p>
        <sq-date-range format="DD/MM/YYYY"></sq-date-range>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Sunday First</p>
        <sq-date-range first-day="0"></sq-date-range>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Disable Weekdays</p>
        <sq-date-range disable-weekdays></sq-date-range>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Disable Weekends</p>
        <sq-date-range disable-weekends></sq-date-range>
      </div>
    </div>
  `,
};
