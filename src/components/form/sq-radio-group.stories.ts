import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-radio-group';

const meta: Meta = {
  title: 'Form/RadioGroup',
  tags: ['autodocs'],
  component: 'sq-radio-group',
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    error: { control: 'text' },
    helperText: { control: 'text' },
  },
  args: {
    label: 'Choose an option',
    value: '',
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
    const el = document.createElement('sq-radio-group');
    el.label = 'Choose a plan';
    el.options = [
      { label: 'Free', value: 'free' },
      { label: 'Pro', value: 'pro' },
      { label: 'Enterprise', value: 'enterprise' },
    ];
    return el;
  },
};

export const WithSelected: Story = {
  render: () => {
    const el = document.createElement('sq-radio-group');
    el.label = 'Choose a plan';
    el.value = 'pro';
    el.options = [
      { label: 'Free', value: 'free' },
      { label: 'Pro', value: 'pro' },
      { label: 'Enterprise', value: 'enterprise' },
    ];
    return el;
  },
};

export const WithDisabled: Story = {
  render: () => {
    const el = document.createElement('sq-radio-group');
    el.label = 'Choose a plan';
    el.options = [
      { label: 'Free', value: 'free' },
      { label: 'Pro (Unavailable)', value: 'pro', disabled: true },
      { label: 'Enterprise', value: 'enterprise' },
    ];
    return el;
  },
};

export const Required: Story = {
  render: () => {
    const el = document.createElement('sq-radio-group');
    el.label = 'Gender';
    el.required = true;
    el.options = [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' },
    ];
    return el;
  },
};

export const WithError: Story = {
  render: () => {
    const el = document.createElement('sq-radio-group');
    el.label = 'Gender';
    el.required = true;
    el.error = 'Please select an option';
    el.options = [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' },
    ];
    return el;
  },
};

export const WithHelper: Story = {
  render: () => {
    const el = document.createElement('sq-radio-group');
    el.label = 'Notification preference';
    el.helperText = 'You can change this later in settings';
    el.options = [
      { label: 'Email', value: 'email' },
      { label: 'SMS', value: 'sms' },
      { label: 'Push', value: 'push' },
    ];
    return el;
  },
};

export const AllVariants: Story = {
  render: () => {
    const opts = [
      { label: 'Free', value: 'free' },
      { label: 'Pro', value: 'pro' },
      { label: 'Enterprise', value: 'enterprise' },
    ];
    const genderOpts = [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' },
    ];

    const d = document.createElement('sq-radio-group');
    d.label = 'Choose a plan';
    d.options = opts;

    const s = document.createElement('sq-radio-group');
    s.label = 'Choose a plan';
    s.value = 'pro';
    s.options = opts;

    const r = document.createElement('sq-radio-group');
    r.label = 'Gender';
    r.required = true;
    r.options = genderOpts;

    const e = document.createElement('sq-radio-group');
    e.label = 'Gender';
    e.required = true;
    e.error = 'Please select an option';
    e.options = genderOpts;

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
