import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-section';

const meta = {
  title: 'Semantic/Section',
  component: 'sq-section',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-section label="${args.label}">
    <p>Section content goes here. Sections group related content together.</p>
  </sq-section>`,
  args: { label: 'Section Title' },
};

export const WithoutLabel: Story = {
  render: () => html`<sq-section>
    <p>A section without a label heading.</p>
  </sq-section>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
      <sq-section label="First Section">
        <p>Content for the first section.</p>
      </sq-section>
      <sq-section label="Second Section">
        <p>Content for the second section.</p>
      </sq-section>
      <sq-section>
        <p>Section without a label.</p>
      </sq-section>
    </div>
  `,
};
