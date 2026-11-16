import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../form/sq-date-picker';

const meta = {
  title: 'Form/Date Picker',
  component: 'sq-date-picker',
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'date' } },
    placeholder: { control: 'text' },
    format: { control: 'text' },
    minDate: { control: { type: 'date' } },
    maxDate: { control: { type: 'date' } },
    clearable: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    firstDay: { control: { type: 'select', options: [0, 1] } },
    disableWeekdays: { control: 'boolean' },
    disableWeekends: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<sq-date-picker style="max-width: 250px;"></sq-date-picker>`,
};

export const WithValue: Story = {
  render: () => html`<sq-date-picker value="2024-06-15" style="max-width: 250px;"></sq-date-picker>`,
};

export const WithConstraints: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 250px;">
      <sq-date-picker min-date="2024-01-01" max-date="2024-12-31" placeholder="Select in 2024"></sq-date-picker>
      <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-sm);">
        Only dates between Jan 1 and Dec 31, 2024 are selectable.
      </p>
    </div>
  `,
};

export const CustomFormat: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 250px;">
      <sq-date-picker value="2024-06-15" format="MM/DD/YYYY" placeholder="MM/DD/YYYY"></sq-date-picker>
      <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-sm);">
        Displayed in MM/DD/YYYY format.
      </p>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`<sq-date-picker value="2024-03-01" disabled style="max-width: 250px;"></sq-date-picker>`,
};

export const MondayStart: Story = {
  render: () => html`<sq-date-picker first-day="1" style="max-width: 250px;"></sq-date-picker>`,
};

export const SundayStart: Story = {
  render: () => html`<sq-date-picker first-day="0" style="max-width: 250px;"></sq-date-picker>`,
};

export const DisableWeekdays: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 250px;">
      <sq-date-picker disable-weekdays style="max-width: 250px;"></sq-date-picker>
      <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-sm);">
        Monday through Friday are disabled. Only weekends are selectable.
      </p>
    </div>
  `,
};

export const DisableWeekends: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 250px;">
      <sq-date-picker disable-weekends style="max-width: 250px;"></sq-date-picker>
      <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-sm);">
        Saturday and Sunday are disabled. Only weekdays are selectable.
      </p>
    </div>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px; max-width: 250px;">
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Default</p>
        <sq-date-picker></sq-date-picker>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">With Value</p>
        <sq-date-picker value="2024-06-15"></sq-date-picker>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">With Constraints</p>
        <sq-date-picker min-date="2024-06-01" max-date="2024-06-30" placeholder="June 2024"></sq-date-picker>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Disabled</p>
        <sq-date-picker value="2024-01-01" disabled></sq-date-picker>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Disable Weekdays</p>
        <sq-date-picker disable-weekdays></sq-date-picker>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Disable Weekends</p>
        <sq-date-picker disable-weekends></sq-date-picker>
      </div>
    </div>
  `,
};
