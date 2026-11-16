import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-kbd';

const meta = {
  title: 'Text/Kbd',
  component: 'sq-kbd',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<p>Press <sq-kbd>Ctrl</sq-kbd> + <sq-kbd>C</sq-kbd> to copy.</p>`,
};

export const SingleKey: Story = {
  render: () => html`<p>Press <sq-kbd>Enter</sq-kbd> to confirm.</p>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
      <p>Single key: <sq-kbd>Enter</sq-kbd></p>
      <p>Combination: <sq-kbd>Ctrl</sq-kbd> + <sq-kbd>Shift</sq-kbd> + <sq-kbd>T</sq-kbd></p>
      <p>Shortcut: <sq-kbd>Cmd</sq-kbd> + <sq-kbd>,</sq-kbd> for preferences</p>
    </div>
  `,
};
