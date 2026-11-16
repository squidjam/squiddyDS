import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-list';

const meta = {
  title: 'List/List',
  component: 'sq-list',
  tags: ['autodocs'],
  argTypes: {
    type: { control: { type: 'select', options: ['unordered', 'ordered', 'definition'] } },
    dense: { control: 'boolean' },
    bordered: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Unordered: Story = {
  render: () => html`<sq-list type="unordered">
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
    <li>Dates</li>
  </sq-list>`,
};

export const Ordered: Story = {
  render: () => html`<sq-list type="ordered">
    <li>First step: Prepare ingredients</li>
    <li>Second step: Mix everything</li>
    <li>Third step: Bake at 350°F</li>
  </sq-list>`,
};

export const Dense: Story = {
  render: () => html`<sq-list type="unordered" dense>
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
    <li>Item four</li>
  </sq-list>`,
};

export const Bordered: Story = {
  render: () => html`<sq-list type="unordered" bordered>
    <li>Separated item one</li>
    <li>Separated item two</li>
    <li>Separated item three</li>
  </sq-list>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <p>Unordered list:</p>
      <sq-list type="unordered">
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
      </sq-list>
      <p>Ordered list:</p>
      <sq-list type="ordered">
        <li>First step</li>
        <li>Second step</li>
        <li>Third step</li>
      </sq-list>
      <p>Dense list:</p>
      <sq-list type="unordered" dense>
        <li>Compact one</li>
        <li>Compact two</li>
        <li>Compact three</li>
      </sq-list>
      <p>Bordered list:</p>
      <sq-list type="unordered" bordered>
        <li>Separated one</li>
        <li>Separated two</li>
        <li>Separated three</li>
      </sq-list>
    </div>
  `,
};
