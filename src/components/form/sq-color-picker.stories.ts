import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../form/sq-color-picker';

const meta = {
  title: 'Form/Color Picker',
  component: 'sq-color-picker',
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'color' } },
    historySize: { control: { type: 'number', min: 1, max: 20, step: 1 } },
    showSliders: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<sq-color-picker value="#3b82f6"></sq-color-picker>`,
};

export const CustomValue: Story = {
  render: () => html`<sq-color-picker value="#ec4899"></sq-color-picker>`,
};

export const WithoutSliders: Story = {
  render: () => html`<sq-color-picker value="#22c55e" .showSliders=${false}></sq-color-picker>`,
};

export const CustomPalette: Story = {
  render: () => {
    const picker = document.createElement('sq-color-picker');
    picker.value = '#f59e0b';
    picker.palette = ['#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e', '#10b981', '#06b6d4'];
    return picker;
  },
};

export const WithHistory: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <sq-color-picker value="#8b5cf6" history-size="5"></sq-color-picker>
      <p style="color: var(--sq-fg-muted); font-size: var(--sq-text-sm);">
        Select colors to build recent history (persisted in localStorage).
      </p>
    </div>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px; max-width: 300px;">
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Default</p>
        <sq-color-picker value="#3b82f6"></sq-color-picker>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Without Sliders</p>
        <sq-color-picker value="#22c55e" .showSliders=${false}></sq-color-picker>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Custom Label</p>
        <sq-color-picker value="#ef4444" label="Brand Color"></sq-color-picker>
      </div>
    </div>
  `,
};
