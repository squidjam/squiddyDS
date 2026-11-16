import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-textarea';

const meta = {
  title: 'Form/Textarea',
  component: 'sq-textarea',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    rows: { control: { type: 'number', min: 1, max: 20 } },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    helperText: { control: 'text' },
    error: { control: 'text' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const textarea = document.createElement('sq-textarea');
    textarea.label = args.label;
    textarea.placeholder = args.placeholder;
    if (args.value) textarea.value = args.value;
    textarea.rows = args.rows;
    if (args.helperText) textarea.helperText = args.helperText;
    textarea.disabled = args.disabled;
    textarea.required = args.required;
    return textarea;
  },
  args: { label: 'Message', placeholder: 'Type your message here...', rows: 4 },
};

export const WithHelperText: Story = {
  render: (args) => {
    const textarea = document.createElement('sq-textarea');
    textarea.label = args.label;
    textarea.placeholder = args.placeholder;
    if (args.value) textarea.value = args.value;
    textarea.rows = args.rows;
    if (args.helperText) textarea.helperText = args.helperText;
    textarea.disabled = args.disabled;
    textarea.required = args.required;
    return textarea;
  },
  args: { label: 'Bio', placeholder: 'Tell us about yourself...', rows: 3, helperText: 'Max 200 characters' },
};

export const WithError: Story = {
  render: (args) => {
    const textarea = document.createElement('sq-textarea');
    textarea.label = args.label;
    textarea.placeholder = args.placeholder;
    if (args.value) textarea.value = args.value;
    textarea.rows = args.rows;
    if (args.helperText) textarea.helperText = args.helperText;
    textarea.disabled = args.disabled;
    textarea.required = args.required;
    if (args.error) textarea.error = args.error;
    return textarea;
  },
  args: { label: 'Comment', value: '', error: 'Comment is required', rows: 3, required: true },
};

export const Disabled: Story = {
  render: (args) => {
    const textarea = document.createElement('sq-textarea');
    textarea.label = args.label;
    textarea.placeholder = args.placeholder;
    if (args.value) textarea.value = args.value;
    textarea.rows = args.rows;
    if (args.helperText) textarea.helperText = args.helperText;
    textarea.disabled = args.disabled;
    textarea.required = args.required;
    return textarea;
  },
  args: { label: 'Notes', value: 'Read-only notes', rows: 3, disabled: true },
};

export const Large: Story = {
  render: (args) => {
    const textarea = document.createElement('sq-textarea');
    textarea.label = args.label;
    textarea.placeholder = args.placeholder;
    if (args.value) textarea.value = args.value;
    textarea.rows = args.rows;
    if (args.helperText) textarea.helperText = args.helperText;
    textarea.disabled = args.disabled;
    textarea.required = args.required;
    return textarea;
  },
  args: { label: 'Description', placeholder: 'Write a detailed description...', rows: 8, required: true },
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 500px;">
      <sq-textarea label="Default" placeholder="Type here..." rows="3"></sq-textarea>
      <sq-textarea label="With Helper" placeholder="Type here..." rows="3" helperText="Max 500 characters"></sq-textarea>
      <sq-textarea label="With Error" error="This field is required" rows="2"></sq-textarea>
      <sq-textarea label="Disabled" value="Cannot edit" rows="2" disabled></sq-textarea>
      <sq-textarea label="Large" placeholder="Write more..." rows="8" required></sq-textarea>
    </div>
  `,
};
