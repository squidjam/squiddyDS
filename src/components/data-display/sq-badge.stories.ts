import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-badge';

const meta: Meta = {
  title: 'Data Display/Badge',
  tags: ['autodocs'],
  component: 'sq-badge',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    dot: { control: { type: 'boolean' } },
    outlined: { control: { type: 'boolean' } },
    count: { control: { type: 'number' } },
  },
  args: {
    variant: 'primary',
    size: 'md',
    dot: false,
    outlined: false,
    count: 0,
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-badge .variant=${args.variant} .size=${args.size} ?dot=${args.dot} ?outlined=${args.outlined} .count=${args.count}></sq-badge>`,
  args: { variant: 'primary', size: 'md', count: 5 },
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
      <sq-badge variant="default" count="1">1</sq-badge>
      <sq-badge variant="primary" count="5">5</sq-badge>
      <sq-badge variant="success" count="3">3</sq-badge>
      <sq-badge variant="warning" count="7">7</sq-badge>
      <sq-badge variant="danger" count="12">12</sq-badge>
      <sq-badge variant="info" count="9">9</sq-badge>
    </div>
  `,
};

export const Dot: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
      <sq-badge variant="primary" dot></sq-badge>
      <sq-badge variant="success" dot></sq-badge>
      <sq-badge variant="warning" dot></sq-badge>
      <sq-badge variant="danger" dot></sq-badge>
      <sq-badge variant="info" dot></sq-badge>
    </div>
  `,
};

export const Outlined: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
      <sq-badge outlined variant="default" count="1">1</sq-badge>
      <sq-badge outlined variant="primary" count="5">5</sq-badge>
      <sq-badge outlined variant="success" count="3">3</sq-badge>
      <sq-badge outlined variant="warning" count="7">7</sq-badge>
      <sq-badge outlined variant="danger" count="12">12</sq-badge>
      <sq-badge outlined variant="info" count="9">9</sq-badge>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
      <sq-badge size="sm" count="3">3</sq-badge>
      <sq-badge size="md" count="5">5</sq-badge>
      <sq-badge size="lg" count="12">12</sq-badge>
    </div>
  `,
};

export const LargeCount: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
      <sq-badge count="100">100</sq-badge>
      <sq-badge count="999">999</sq-badge>
      <sq-badge count="1">1</sq-badge>
    </div>
  `,
};

export const Wrapper: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center;">
      <sq-badge-wrapper>
        <span style="font-size: 24px;">🔔</span>
        <sq-badge slot="badge" variant="danger" count="5"></sq-badge>
      </sq-badge-wrapper>
      <sq-badge-wrapper>
        <span style="font-size: 24px;">✉️</span>
        <sq-badge slot="badge" variant="primary" count="12"></sq-badge>
      </sq-badge-wrapper>
      <sq-badge-wrapper>
        <span style="font-size: 24px;">🛒</span>
        <sq-badge slot="badge" variant="success" dot></sq-badge>
      </sq-badge-wrapper>
    </div>
  `,
};

export const Mixed: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
      <sq-badge variant="danger" dot></sq-badge>
      <sq-badge variant="primary" size="sm" count="3">3</sq-badge>
      <sq-badge variant="success" outlined count="7">7</sq-badge>
      <sq-badge variant="warning" size="lg" count="15">15</sq-badge>
    </div>
  `,
};
