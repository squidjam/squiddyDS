import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-aside';

const meta = {
  title: 'Semantic/Aside',
  component: 'sq-aside',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<sq-aside>
    <p>This is an aside element. It contains content tangentially related to the main content.</p>
  </sq-aside>`,
};

export const WithTip: Story = {
  render: () => html`<sq-aside>
    <strong>Tip:</strong> Asides are great for side notes, callouts, or supplementary information.
  </sq-aside>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 500px;">
      <sq-aside><p>Simple aside content.</p></sq-aside>
      <sq-aside><strong>Note:</strong> This is a note aside.</sq-aside>
      <sq-aside><strong>Tip:</strong> This is a helpful tip.</sq-aside>
    </div>
  `,
};
