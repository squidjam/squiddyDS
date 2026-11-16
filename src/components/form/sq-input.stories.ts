import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-input';

const meta = {
  title: 'Form/Input',
  component: 'sq-input',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    type: { control: { type: 'select', options: ['text', 'email', 'password', 'tel', 'url', 'search', 'number'] } },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    leadingIcon: { control: 'text' },
    trailingIcon: { control: 'text' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const input = document.createElement('sq-input');
    input.label = args.label;
    input.type = args.type;
    input.placeholder = args.placeholder;
    if (args.value) input.value = args.value;
    if (args.helperText) input.helperText = args.helperText;
    if (args.error) input.error = args.error;
    input.disabled = args.disabled;
    input.required = args.required;
    if (args.leadingIcon) input.leadingIcon = args.leadingIcon;
    if (args.trailingIcon) input.trailingIcon = args.trailingIcon;
    return input;
  },
  args: { label: 'Full Name', type: 'text', placeholder: 'Enter your name', required: true },
};

export const Email: Story = {
  render: (args) => {
    const input = document.createElement('sq-input');
    input.label = args.label;
    input.type = args.type;
    input.placeholder = args.placeholder;
    if (args.value) input.value = args.value;
    if (args.helperText) input.helperText = args.helperText;
    if (args.error) input.error = args.error;
    input.disabled = args.disabled;
    input.required = args.required;
    if (args.leadingIcon) input.leadingIcon = args.leadingIcon;
    if (args.trailingIcon) input.trailingIcon = args.trailingIcon;
    return input;
  },
  args: { label: 'Email Address', type: 'email', placeholder: 'you@example.com', required: true, leadingIcon: '✉' },
};

export const Password: Story = {
  render: (args) => {
    const input = document.createElement('sq-input');
    input.label = args.label;
    input.type = args.type;
    input.placeholder = args.placeholder;
    if (args.value) input.value = args.value;
    if (args.helperText) input.helperText = args.helperText;
    if (args.error) input.error = args.error;
    input.disabled = args.disabled;
    input.required = args.required;
    if (args.leadingIcon) input.leadingIcon = args.leadingIcon;
    if (args.trailingIcon) input.trailingIcon = args.trailingIcon;
    return input;
  },
  args: { label: 'Password', type: 'password', placeholder: '••••••••', required: true, leadingIcon: '🔒' },
};

export const WithHelperText: Story = {
  render: (args) => {
    const input = document.createElement('sq-input');
    input.label = args.label;
    input.type = args.type;
    input.placeholder = args.placeholder;
    if (args.value) input.value = args.value;
    if (args.helperText) input.helperText = args.helperText;
    if (args.error) input.error = args.error;
    input.disabled = args.disabled;
    input.required = args.required;
    if (args.leadingIcon) input.leadingIcon = args.leadingIcon;
    if (args.trailingIcon) input.trailingIcon = args.trailingIcon;
    return input;
  },
  args: { label: 'Username', type: 'text', placeholder: 'Choose a username', helperText: 'Must be 3-20 characters long' },
};

export const WithError: Story = {
  render: (args) => {
    const input = document.createElement('sq-input');
    input.label = args.label;
    input.type = args.type;
    input.placeholder = args.placeholder;
    if (args.value) input.value = args.value;
    if (args.helperText) input.helperText = args.helperText;
    if (args.error) input.error = args.error;
    input.disabled = args.disabled;
    input.required = args.required;
    if (args.leadingIcon) input.leadingIcon = args.leadingIcon;
    if (args.trailingIcon) input.trailingIcon = args.trailingIcon;
    return input;
  },
  args: { label: 'Email', type: 'email', value: 'invalid-email', error: 'Please enter a valid email address' },
};

export const Disabled: Story = {
  render: (args) => {
    const input = document.createElement('sq-input');
    input.label = args.label;
    input.type = args.type;
    input.placeholder = args.placeholder;
    if (args.value) input.value = args.value;
    if (args.helperText) input.helperText = args.helperText;
    if (args.error) input.error = args.error;
    input.disabled = args.disabled;
    input.required = args.required;
    if (args.leadingIcon) input.leadingIcon = args.leadingIcon;
    if (args.trailingIcon) input.trailingIcon = args.trailingIcon;
    return input;
  },
  args: { label: 'Disabled Input', type: 'text', value: 'Cannot edit this', placeholder: 'Read only', disabled: true },
};

export const WithIcons: Story = {
  render: (args) => {
    const input = document.createElement('sq-input');
    input.label = args.label;
    input.type = args.type;
    input.placeholder = args.placeholder;
    if (args.value) input.value = args.value;
    if (args.helperText) input.helperText = args.helperText;
    if (args.error) input.error = args.error;
    input.disabled = args.disabled;
    input.required = args.required;
    if (args.leadingIcon) input.leadingIcon = args.leadingIcon;
    if (args.trailingIcon) input.trailingIcon = args.trailingIcon;
    return input;
  },
  args: { label: 'Search', type: 'search', placeholder: 'Search...', leadingIcon: '🔍', trailingIcon: '⏎' },
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <sq-input label="Text" type="text" placeholder="Plain text" required></sq-input>
      <sq-input label="Email" type="email" placeholder="Email address" leadingIcon="✉"></sq-input>
      <sq-input label="Password" type="password" placeholder="Secret" leadingIcon="🔒"></sq-input>
      <sq-input label="With Helper" type="text" placeholder="Type something" helperText="This is helper text"></sq-input>
      <sq-input label="With Error" type="email" value="bad" error="Invalid email format"></sq-input>
      <sq-input label="Disabled" type="text" value="Read only" disabled></sq-input>
    </div>
  `,
};
