import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-breadcrumb';
import './sq-link';

const meta = {
  title: 'Navigation/Breadcrumb',
  component: 'sq-breadcrumb',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: { type: 'select', options: ['primary', 'subtle', 'underline'] } },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-breadcrumb variant="${args.variant}">
    <sq-link href="#">Home</sq-link>
    <span class="sep">/</span>
    <sq-link href="#">Products</sq-link>
    <span class="sep">/</span>
    <sq-link href="#" aria-current="page">Details</sq-link>
  </sq-breadcrumb>`,
  args: { variant: 'primary' },
};

export const Subtle: Story = {
  render: () => html`<sq-breadcrumb variant="subtle">
    <sq-link href="#">Home</sq-link>
    <span class="sep">/</span>
    <sq-link href="#">Products</sq-link>
    <span class="sep">/</span>
    <sq-link href="#" aria-current="page">Details</sq-link>
  </sq-breadcrumb>`,
};

export const Underline: Story = {
  render: () => html`<sq-breadcrumb variant="underline">
    <sq-link href="#">Home</sq-link>
    <span class="sep">/</span>
    <sq-link href="#">Products</sq-link>
    <span class="sep">/</span>
    <sq-link href="#" aria-current="page">Details</sq-link>
  </sq-breadcrumb>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <sq-breadcrumb variant="primary">
        <sq-link href="#">Home</sq-link>
        <span class="sep">/</span>
        <sq-link href="#" aria-current="page">Current Page</sq-link>
      </sq-breadcrumb>
      <sq-breadcrumb variant="subtle">
        <sq-link href="#">Home</sq-link>
        <span class="sep">/</span>
        <sq-link href="#">Category</sq-link>
        <span class="sep">/</span>
        <sq-link href="#" aria-current="page">Current Page</sq-link>
      </sq-breadcrumb>
      <sq-breadcrumb variant="underline">
        <sq-link href="#">Home</sq-link>
        <span class="sep">/</span>
        <sq-link href="#">Category</sq-link>
        <span class="sep">/</span>
        <sq-link href="#">Subcategory</sq-link>
        <span class="sep">/</span>
        <sq-link href="#" aria-current="page">Item</sq-link>
      </sq-breadcrumb>
    </div>
  `,
};
