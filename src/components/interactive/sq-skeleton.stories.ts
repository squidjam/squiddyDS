import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-skeleton';

const meta: Meta = {
  title: 'Interactive/Skeleton',
  tags: ['autodocs'],
  component: 'sq-skeleton',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['rect', 'circle', 'rounded'],
    },
    width: { control: 'text' },
    height: { control: 'text' },
  },
  args: {
    variant: 'rect',
    width: '100%',
    height: '16px',
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-skeleton variant="${args.variant}" width="${args.width}" height="${args.height}"></sq-skeleton>`,
  args: { variant: 'rect', width: '100%', height: '16px' },
};

export const Circle: Story = {
  render: () => html`<sq-skeleton variant="circle" width="48px" height="48px"></sq-skeleton>`,
};

export const Rounded: Story = {
  render: () => html`<sq-skeleton variant="rounded" width="200px" height="32px"></sq-skeleton>`,
};

export const TextLines: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px; max-width: 400px;">
      <sq-skeleton height="24px" width="60%"></sq-skeleton>
      <sq-skeleton height="16px"></sq-skeleton>
      <sq-skeleton height="16px"></sq-skeleton>
      <sq-skeleton height="16px" width="80%"></sq-skeleton>
    </div>
  `,
};

export const CardPlaceholder: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px; max-width: 300px; padding: 16px; border: 1px solid var(--sq-border-subtle); border-radius: var(--sq-radius-md);">
      <sq-skeleton variant="circle" width="48px" height="48px"></sq-skeleton>
      <sq-skeleton height="20px" width="80%"></sq-skeleton>
      <sq-skeleton height="16px"></sq-skeleton>
      <sq-skeleton height="16px" width="70%"></sq-skeleton>
    </div>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
      <div>
        <p style="font-weight: 600; margin-bottom: 8px; font-size: var(--sq-text-sm);">Rectangle</p>
        <sq-skeleton variant="rect" height="16px"></sq-skeleton>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px; font-size: var(--sq-text-sm);">Circle</p>
        <sq-skeleton variant="circle" width="48px" height="48px"></sq-skeleton>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px; font-size: var(--sq-text-sm);">Rounded</p>
        <sq-skeleton variant="rounded" width="200px" height="32px"></sq-skeleton>
      </div>
    </div>
  `,
};
