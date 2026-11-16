import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-search';
import '../form/sq-input';
import '../interactive/sq-button';

const meta = {
  title: 'Semantic/Search',
  component: 'sq-search',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<sq-search>
    <sq-input type="search" placeholder="Search..." leadingIcon="🔍"></sq-input>
  </sq-search>`,
};

export const WithButton: Story = {
  render: () => html`<sq-search>
    <div style="display: flex; gap: 8px;">
      <sq-input type="search" placeholder="Search..." leadingIcon="🔍"></sq-input>
      <sq-button variant="primary">Search</sq-button>
    </div>
  </sq-search>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 500px;">
      <sq-search>
        <sq-input type="search" placeholder="Search..." leadingIcon="🔍"></sq-input>
      </sq-search>
      <sq-search>
        <div style="display: flex; gap: 8px;">
          <sq-input type="search" placeholder="Search..." leadingIcon="🔍"></sq-input>
          <sq-button variant="primary">Search</sq-button>
        </div>
      </sq-search>
    </div>
  `,
};
