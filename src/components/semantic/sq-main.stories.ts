import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-main';

const meta = {
  title: 'Semantic/Main',
  component: 'sq-main',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<sq-main>
    <h1>Main Content Area</h1>
    <p>The main element represents the dominant content of the body of a document or application.</p>
  </sq-main>`,
};

export const AllVariants: Story = {
  render: () => html`
    <sq-main>
      <h1>Page Title</h1>
      <p>This is the main content area of the page. It should contain content that is directly related to or expands upon the central topic.</p>
    </sq-main>
  `,
};
