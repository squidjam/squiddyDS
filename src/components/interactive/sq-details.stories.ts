import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-details';

const meta = {
  title: 'Interactive/Details',
  component: 'sq-details',
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-details ?open="${args.open}">
    <span slot="summary">Click to expand</span>
    <p>This content is hidden until you click the summary. Details elements are great for FAQs and collapsible content.</p>
  </sq-details>`,
  args: { open: false },
};

export const Open: Story = {
  render: () => html`<sq-details open>
    <span slot="summary">Already expanded</span>
    <p>This details element starts in the open state.</p>
  </sq-details>`,
};

export const FAQ: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px; max-width: 500px;">
      <sq-details>
        <span slot="summary">What is a design system?</span>
        <p>A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.</p>
      </sq-details>
      <sq-details>
        <span slot="summary">What are web components?</span>
        <p>Web Components are a set of web platform APIs that allow you to create custom, reusable, encapsulated HTML elements.</p>
      </sq-details>
      <sq-details>
        <span slot="summary">Is this accessible?</span>
        <p>Yes, the details element is a native HTML element with built-in accessibility support including keyboard navigation and screen reader compatibility.</p>
      </sq-details>
    </div>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
      <sq-details>
        <span slot="summary">Closed by default</span>
        <p>Click to reveal this content.</p>
      </sq-details>
      <sq-details open>
        <span slot="summary">Open by default</span>
        <p>This content is visible immediately.</p>
      </sq-details>
    </div>
  `,
};
