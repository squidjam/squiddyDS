import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-nav';

const meta = {
  title: 'Semantic/Nav',
  component: 'sq-nav',
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: { type: 'select', options: ['horizontal', 'vertical'] } },
    variant: { control: { type: 'select', options: ['primary', 'subtle', 'underline'] } },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-nav orientation="${args.orientation}">
    <a href="#">Home</a>
    <a href="#" aria-current="page">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
  </sq-nav>`,
  args: { orientation: 'horizontal' },
};

export const Vertical: Story = {
  render: () => html`<sq-nav orientation="vertical">
    <a href="#">Dashboard</a>
    <a href="#" aria-current="page">Settings</a>
    <a href="#">Profile</a>
    <a href="#">Logout</a>
  </sq-nav>`,
};

export const Subtle: Story = {
  render: () => html`<sq-nav orientation="horizontal" variant="subtle">
    <a href="#">Home</a>
    <a href="#" aria-current="page">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
  </sq-nav>`,
};

export const Underline: Story = {
  render: () => html`<sq-nav orientation="horizontal" variant="underline">
    <a href="#">Home</a>
    <a href="#" aria-current="page">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
  </sq-nav>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 500px;">
      <p>Primary:</p>
      <sq-nav orientation="horizontal" variant="primary">
        <a href="#">Home</a>
        <a href="#" aria-current="page">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </sq-nav>
      <p>Subtle:</p>
      <sq-nav orientation="horizontal" variant="subtle">
        <a href="#">Home</a>
        <a href="#" aria-current="page">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </sq-nav>
      <p>Underline:</p>
      <sq-nav orientation="horizontal" variant="underline">
        <a href="#">Home</a>
        <a href="#" aria-current="page">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </sq-nav>
      <p>Vertical:</p>
      <sq-nav orientation="vertical">
        <a href="#">Dashboard</a>
        <a href="#" aria-current="page">Settings</a>
        <a href="#">Profile</a>
      </sq-nav>
    </div>
  `,
};
