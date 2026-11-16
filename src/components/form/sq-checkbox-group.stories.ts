import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-checkbox-group';

const meta: Meta = {
  title: 'Form/CheckboxGroup',
  tags: ['autodocs'],
  component: 'sq-checkbox-group',
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    error: { control: 'text' },
    helperText: { control: 'text' },
  },
  args: {
    label: 'Select options',
    disabled: false,
    required: false,
    error: '',
    helperText: '',
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const el = document.createElement('sq-checkbox-group');
    el.label = 'Select frameworks';
    el.options = [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular', value: 'angular' },
      { label: 'Svelte', value: 'svelte' },
    ];
    return el;
  },
};

export const WithSelected: Story = {
  render: () => {
    const el = document.createElement('sq-checkbox-group');
    el.label = 'Select frameworks';
    el.values = ['react', 'vue'];
    el.options = [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular', value: 'angular' },
      { label: 'Svelte', value: 'svelte' },
    ];
    return el;
  },
};

export const WithDisabled: Story = {
  render: () => {
    const el = document.createElement('sq-checkbox-group');
    el.label = 'Select features';
    el.options = [
      { label: 'Basic', value: 'basic' },
      { label: 'Pro (Unavailable)', value: 'pro', disabled: true },
      { label: 'Enterprise', value: 'enterprise' },
    ];
    return el;
  },
};

export const Required: Story = {
  render: () => {
    const el = document.createElement('sq-checkbox-group');
    el.label = 'Accept terms';
    el.required = true;
    el.options = [
      { label: 'I accept the terms and conditions', value: 'terms' },
      { label: 'I agree to the privacy policy', value: 'privacy' },
    ];
    return el;
  },
};

export const WithError: Story = {
  render: () => {
    const el = document.createElement('sq-checkbox-group');
    el.label = 'Accept terms';
    el.required = true;
    el.error = 'You must accept at least one option';
    el.options = [
      { label: 'I accept the terms and conditions', value: 'terms' },
      { label: 'I agree to the privacy policy', value: 'privacy' },
    ];
    return el;
  },
};

export const WithHelper: Story = {
  render: () => {
    const el = document.createElement('sq-checkbox-group');
    el.label = 'Notification channels';
    el.helperText = 'Select all channels you want to receive notifications on';
    el.options = [
      { label: 'Email', value: 'email' },
      { label: 'SMS', value: 'sms' },
      { label: 'Push', value: 'push' },
      { label: 'Slack', value: 'slack' },
    ];
    return el;
  },
};

export const AllVariants: Story = {
  render: () => {
    const frameworkOpts = [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular', value: 'angular' },
      { label: 'Svelte', value: 'svelte' },
    ];
    const termsOpts = [
      { label: 'I accept the terms and conditions', value: 'terms' },
      { label: 'I agree to the privacy policy', value: 'privacy' },
    ];

    const d = document.createElement('sq-checkbox-group');
    d.label = 'Select frameworks';
    d.options = frameworkOpts;

    const s = document.createElement('sq-checkbox-group');
    s.label = 'Select frameworks';
    s.values = ['react', 'vue'];
    s.options = frameworkOpts;

    const r = document.createElement('sq-checkbox-group');
    r.label = 'Accept terms';
    r.required = true;
    r.options = termsOpts;

    const e = document.createElement('sq-checkbox-group');
    e.label = 'Accept terms';
    e.required = true;
    e.error = 'You must accept at least one option';
    e.options = termsOpts;

    return html`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Default</h4>
          ${d}
        </div>
        <div>
          <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">With Selected</h4>
          ${s}
        </div>
        <div>
          <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Required</h4>
          ${r}
        </div>
        <div>
          <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">With Error</h4>
          ${e}
        </div>
      </div>
    `;
  },
};
