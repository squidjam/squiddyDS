import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-blockquote';

const meta = {
  title: 'Text/Blockquote',
  component: 'sq-blockquote',
  tags: ['autodocs'],
  argTypes: {
    cite: { control: 'text' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-blockquote cite="${args.cite}">
    <p>"The only way to do great work is to love what you do."</p>
  </sq-blockquote>`,
  args: { cite: 'Steve Jobs' },
};

export const WithoutCitation: Story = {
  render: () => html`<sq-blockquote>
    <p>"In the middle of difficulty lies opportunity."</p>
  </sq-blockquote>`,
};

export const WithSlotCitation: Story = {
  render: () => html`<sq-blockquote>
    <p>"Stay hungry, stay foolish."</p>
    <span slot="citation">Steve Jobs, 1986</span>
  </sq-blockquote>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
      <sq-blockquote cite="Steve Jobs">
        <p>"The only way to do great work is to love what you do."</p>
      </sq-blockquote>
      <sq-blockquote>
        <p>"In the middle of difficulty lies opportunity."</p>
      </sq-blockquote>
      <sq-blockquote>
        <p>"Stay hungry, stay foolish."</p>
        <span slot="citation">Steve Jobs, 1986</span>
      </sq-blockquote>
    </div>
  `,
};
