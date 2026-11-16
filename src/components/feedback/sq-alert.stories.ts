import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-alert';
import '../interactive/sq-button';

const meta: Meta = {
  title: 'Feedback/Alert',
  tags: ['autodocs'],
  component: 'sq-alert',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'danger', 'info'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    closable: { control: { type: 'boolean' } },
    showIcon: { control: { type: 'boolean' } },
  },
  args: {
    variant: 'info',
    size: 'md',
    closable: false,
    showIcon: true,
  },
};
export default meta;
type Story = StoryObj;

export const Info: Story = {
  render: (args) => html`<sq-alert .variant=${args.variant} .size=${args.size} ?closable=${args.closable} ?showIcon=${args.showIcon}>This is an informational alert message.</sq-alert>`,
  args: { variant: 'info' },
};

export const Success: Story = {
  render: (args) => html`<sq-alert .variant=${args.variant} .size=${args.size} ?closable=${args.closable} ?showIcon=${args.showIcon}>Your changes have been saved successfully!</sq-alert>`,
  args: { variant: 'success' },
};

export const Warning: Story = {
  render: (args) => html`<sq-alert .variant=${args.variant} .size=${args.size} ?closable=${args.closable} ?showIcon=${args.showIcon}>Please review your input before submitting.</sq-alert>`,
  args: { variant: 'warning' },
};

export const Danger: Story = {
  render: (args) => html`<sq-alert .variant=${args.variant} .size=${args.size} ?closable=${args.closable} ?showIcon=${args.showIcon}>Failed to connect to the server. Please try again.</sq-alert>`,
  args: { variant: 'danger' },
};

export const WithTitle: Story = {
  render: () => html`
    <sq-alert variant="success">
      <div slot="header">Success!</div>
      <div>Your profile has been updated successfully. All changes are now live.</div>
    </sq-alert>
  `,
};

export const Closable: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <sq-alert variant="info" closable>
        <div slot="header">New Feature</div>
        <div>We've added a new dashboard. Click dismiss to hide this message.</div>
      </sq-alert>
      <sq-alert variant="warning" closable>
        <div slot="header">Session Expiring</div>
        <div>Your session will expire in 5 minutes. Save your work now.</div>
      </sq-alert>
    </div>
  `,
};

export const WithAction: Story = {
  render: () => html`
    <sq-alert variant="warning">
      <div slot="header">Storage Almost Full</div>
      <div>You have used 90% of your available storage space.</div>
      <sq-button slot="action" size="sm">Upgrade Plan</sq-button>
    </sq-alert>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <sq-alert variant="info" size="sm">Small alert message</sq-alert>
      <sq-alert variant="info" size="md">Medium alert message</sq-alert>
      <sq-alert variant="info" size="lg">Large alert message</sq-alert>
    </div>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <sq-alert variant="default">This is a default alert.</sq-alert>
      <sq-alert variant="success">This is a success alert.</sq-alert>
      <sq-alert variant="warning">This is a warning alert.</sq-alert>
      <sq-alert variant="danger">This is a danger alert.</sq-alert>
      <sq-alert variant="info">This is an info alert.</sq-alert>
    </div>
  `,
};
