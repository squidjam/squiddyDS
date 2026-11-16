import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-details';
import './sq-progress';
import './sq-meter';
import './sq-switch';

const meta: Meta = {
  title: 'Interactive/All',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Details: Story = {
  render: () => html`
    <sq-details>
      <span slot="summary">Click to expand</span>
      <p>This is the expandable content inside the details component.</p>
    </sq-details>
  `,
};

export const Progress: Story = {
  render: () => html`
    <sq-progress value="65" max="100" show-label></sq-progress>
    <sq-progress indeterminate></sq-progress>
  `,
};

export const Meter: Story = {
  render: () => html`
    <sq-meter value="0.7" min="0" max="1" show-label></sq-meter>
    <sq-meter value="0.2" min="0" max="1" show-label></sq-meter>
  `,
};

export const Switch: Story = {
  render: () => html`
    <sq-switch label="Toggle me"></sq-switch>
    <sq-switch checked label="Already on"></sq-switch>
  `,
};
