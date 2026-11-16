import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-hgroup';

const meta = {
  title: 'Semantic/HGroup',
  component: 'sq-hgroup',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<sq-hgroup>
    <h1>Main Heading</h1>
    <h2>Subheading</h2>
  </sq-hgroup>`,
};

export const WithThreeLevels: Story = {
  render: () => html`<sq-hgroup>
    <h1>Page Title</h1>
    <h2>Section Title</h2>
    <h3>Subsection Title</h3>
  </sq-hgroup>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px; max-width: 600px;">
      <sq-hgroup>
        <h1>H1 Heading</h1>
        <h2>H2 Subheading</h2>
      </sq-hgroup>
      <sq-hgroup>
        <h2>H2 Heading</h2>
        <h3>H3 Subheading</h3>
        <h4>H4 Sub-subheading</h4>
      </sq-hgroup>
    </div>
  `,
};
