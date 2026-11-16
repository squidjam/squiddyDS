import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-divider';

const meta = {
  title: 'Layout/Divider',
  component: 'sq-divider',
  tags: ['autodocs'],
  argTypes: {
    inset: { control: 'boolean' },
    orientation: { control: { type: 'select', options: ['horizontal', 'vertical'] } },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <p>Content above the divider</p>
      <sq-divider></sq-divider>
      <p>Content below the divider</p>
    </div>
  `,
};

export const Inset: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <p>Content above</p>
      <sq-divider inset></sq-divider>
      <p>Content below</p>
    </div>
  `,
};

export const Vertical: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 8px;">
      <span>Left</span>
      <sq-divider orientation="vertical"></sq-divider>
      <span>Right</span>
    </div>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <div>
        <p>Horizontal</p>
        <sq-divider></sq-divider>
        <p>Below</p>
      </div>
      <div>
        <p>Inset</p>
        <sq-divider inset></sq-divider>
        <p>Below</p>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <span>Left</span>
        <sq-divider orientation="vertical"></sq-divider>
        <span>Right</span>
      </div>
    </div>
  `,
};
