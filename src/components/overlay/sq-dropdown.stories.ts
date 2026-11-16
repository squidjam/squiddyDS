import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-dropdown';

const meta: Meta = {
  title: 'Overlay/Dropdown',
  tags: ['autodocs'],
  component: 'sq-dropdown',
  argTypes: {
    triggerLabel: { control: 'text' },
    minWidth: { control: 'text' },
    selectedValue: { control: 'text' },
  },
  args: {
    triggerLabel: 'Select option',
    minWidth: '200px',
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const el = document.createElement('sq-dropdown');
    el.triggerLabel = 'Select option';
    el.items = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ];
    return el;
  },
};

export const WithSelected: Story = {
  render: () => {
    const el = document.createElement('sq-dropdown');
    el.triggerLabel = 'Select option';
    el.selectedValue = '2';
    el.items = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ];
    return el;
  },
};

export const WithDivider: Story = {
  render: () => {
    const el = document.createElement('sq-dropdown');
    el.triggerLabel = 'Select option';
    el.items = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: '', value: '', divider: true },
      { label: 'Option 3', value: '3' },
      { label: 'Option 4', value: '4' },
    ];
    return el;
  },
};

export const WithDisabled: Story = {
  render: () => {
    const el = document.createElement('sq-dropdown');
    el.triggerLabel = 'Select option';
    el.items = [
      { label: 'Option 1', value: '1' },
      { label: 'Disabled Option', value: '2', disabled: true },
      { label: 'Option 3', value: '3' },
    ];
    return el;
  },
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Default</h4>
        <sq-dropdown id="dd-default"></sq-dropdown>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">With Selected</h4>
        <sq-dropdown id="dd-selected"></sq-dropdown>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">With Divider</h4>
        <sq-dropdown id="dd-divider"></sq-dropdown>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">With Disabled</h4>
        <sq-dropdown id="dd-disabled"></sq-dropdown>
      </div>
    </div>
  `,
  play: ({ canvasElement }) => {
    const defaultEl = canvasElement.querySelector('#dd-default') as HTMLElement;
    const selectedEl = canvasElement.querySelector('#dd-selected') as HTMLElement;
    const dividerEl = canvasElement.querySelector('#dd-divider') as HTMLElement;
    const disabledEl = canvasElement.querySelector('#dd-disabled') as HTMLElement;

    if (defaultEl) {
      defaultEl.triggerLabel = 'Default';
      (defaultEl as any).items = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ];
    }
    if (selectedEl) {
      selectedEl.triggerLabel = 'With Selected';
      (selectedEl as any).selectedValue = '2';
      (selectedEl as any).items = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ];
    }
    if (dividerEl) {
      dividerEl.triggerLabel = 'With Divider';
      (dividerEl as any).items = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: '', value: '', divider: true },
        { label: 'Option 3', value: '3' },
      ];
    }
    if (disabledEl) {
      disabledEl.triggerLabel = 'With Disabled';
      (disabledEl as any).items = [
        { label: 'Option 1', value: '1' },
        { label: 'Disabled', value: '2', disabled: true },
        { label: 'Option 3', value: '3' },
      ];
    }
  },
};
