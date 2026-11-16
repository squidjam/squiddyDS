import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-dialog';
import './sq-button';

const meta: Meta = {
  title: 'Interactive/Dialog',
  tags: ['autodocs'],
  component: 'sq-dialog',
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <sq-button @click="${() => document.querySelector('sq-dialog')?.show()}">Open Dialog</sq-button>
    <sq-dialog label="Confirm Action">
      <p>This action cannot be undone. Do you want to continue?</p>
      <div slot="footer">
        <sq-button variant="subtle" @click="${() => document.querySelector('sq-dialog')?.close()}">Cancel</sq-button>
        <sq-button @click="${() => document.querySelector('sq-dialog')?.close()}">Confirm</sq-button>
      </div>
    </sq-dialog>
  `,
};
