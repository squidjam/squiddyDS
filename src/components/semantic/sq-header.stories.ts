import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-header';
import '../interactive/sq-button';

const meta = {
  title: 'Semantic/Header',
  component: 'sq-header',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-header
    title="${args.title}"
    subtitle="${args.subtitle}"
  ></sq-header>`,
  args: { title: 'Page Title', subtitle: 'Page subtitle description' },
};

export const WithActions: Story = {
  render: () => html`<sq-header title="Dashboard" subtitle="Welcome back">
    <sq-button slot="actions" variant="primary" size="sm">New Item</sq-button>
  </sq-header>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <sq-header title="Simple Header"></sq-header>
      <sq-header title="With Subtitle" subtitle="Additional context"></sq-header>
      <sq-header title="With Actions" subtitle="Header with action button">
        <sq-button slot="actions" variant="primary" size="sm">Action</sq-button>
      </sq-header>
    </div>
  `,
};
