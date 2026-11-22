import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-stack';

const meta: Meta = {
  title: 'Layout/Stack',
  tags: ['autodocs'],
  component: 'sq-stack',
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['column', 'row'],
    },
    gap: { control: 'text' },
  },
  args: {
    direction: 'column',
    gap: 'var(--sq-space-4)',
  },
};
export default meta;
type Story = StoryObj;

const stackItem = (color: string, label: string) => html`
  <div style="background: ${color}; padding: var(--sq-space-3) var(--sq-space-4); border-radius: var(--sq-radius-md); color: white; font-weight: var(--sq-font-weight-medium); text-align: center;">
    ${label}
  </div>
`;

export const Default: Story = {
  render: (args) => html`
    <sq-stack direction="${args.direction}" gap="${args.gap}">
      ${stackItem('#3b82f6', 'Item 1')}
      ${stackItem('#22c55e', 'Item 2')}
      ${stackItem('#f59e0b', 'Item 3')}
    </sq-stack>
  `,
  args: { direction: 'column' },
};

export const Column: Story = {
  render: () => html`
    <sq-stack direction="column">
      ${stackItem('#3b82f6', 'Item 1')}
      ${stackItem('#22c55e', 'Item 2')}
      ${stackItem('#f59e0b', 'Item 3')}
      ${stackItem('#ef4444', 'Item 4')}
    </sq-stack>
  `,
};

export const Row: Story = {
  render: () => html`
    <sq-stack direction="row">
      ${stackItem('#3b82f6', 'Item 1')}
      ${stackItem('#22c55e', 'Item 2')}
      ${stackItem('#f59e0b', 'Item 3')}
    </sq-stack>
  `,
};

export const SmallGap: Story = {
  render: () => html`
    <sq-stack direction="column" gap="var(--sq-space-2)">
      ${stackItem('#3b82f6', 'Item 1')}
      ${stackItem('#22c55e', 'Item 2')}
      ${stackItem('#f59e0b', 'Item 3')}
    </sq-stack>
  `,
};

export const LargeGap: Story = {
  render: () => html`
    <sq-stack direction="column" gap="var(--sq-space-8)">
      ${stackItem('#3b82f6', 'Item 1')}
      ${stackItem('#22c55e', 'Item 2')}
      ${stackItem('#f59e0b', 'Item 3')}
    </sq-stack>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <p style="font-weight: 600; margin-bottom: 8px; font-size: var(--sq-text-sm);">Column (Default)</p>
        <sq-stack direction="column">
          ${stackItem('#3b82f6', '1')}
          ${stackItem('#22c55e', '2')}
          ${stackItem('#f59e0b', '3')}
        </sq-stack>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px; font-size: var(--sq-text-sm);">Row</p>
        <sq-stack direction="row">
          ${stackItem('#ef4444', '1')}
          ${stackItem('#D946EF', '2')}
          ${stackItem('#ec4899', '3')}
        </sq-stack>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px; font-size: var(--sq-text-sm);">Small Gap</p>
        <sq-stack direction="column" gap="var(--sq-space-2)">
          ${stackItem('#06b6d4', '1')}
          ${stackItem('#84cc16', '2')}
          ${stackItem('#f97316', '3')}
        </sq-stack>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px; font-size: var(--sq-text-sm);">Large Gap</p>
        <sq-stack direction="column" gap="var(--sq-space-8)">
          ${stackItem('#D946EF', '1')}
          ${stackItem('#14b8a6', '2')}
          ${stackItem('#e11d48', '3')}
        </sq-stack>
      </div>
    </div>
  `,
};
