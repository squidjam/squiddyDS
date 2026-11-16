import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-masonry';

const meta: Meta = {
  title: 'Layout/Masonry',
  tags: ['autodocs'],
  component: 'sq-masonry',
  argTypes: {
    columns: { control: 'text' },
    columnsSm: { control: 'text' },
    columnsXs: { control: 'text' },
    gap: { control: 'text' },
  },
  args: {
    columns: '3',
    columnsSm: '2',
    columnsXs: '1',
    gap: 'var(--sq-space-4)',
  },
};
export default meta;
type Story = StoryObj;

const masonryItem = (color: string, label: string, height: string) => html`
  <div style="background: ${color}; padding: var(--sq-space-4); border-radius: var(--sq-radius-md); color: white; font-weight: var(--sq-font-weight-medium); text-align: center; min-height: ${height}; display: flex; align-items: center; justify-content: center;">
    ${label}
  </div>
`;

export const Default: Story = {
  render: (args) => html`
    <sq-masonry columns="${args.columns}" columns-sm="${args.columnsSm}" columns-xs="${args.columnsXs}" gap="${args.gap}">
      ${masonryItem('#3b82f6', 'Short', '80px')}
      ${masonryItem('#22c55e', 'Taller', '140px')}
      ${masonryItem('#f59e0b', 'Medium', '110px')}
      ${masonryItem('#ef4444', 'Tallest', '180px')}
      ${masonryItem('#8b5cf6', 'Short', '90px')}
      ${masonryItem('#ec4899', 'Medium', '120px')}
      ${masonryItem('#06b6d4', 'Tall', '160px')}
      ${masonryItem('#84cc16', 'Short', '100px')}
    </sq-masonry>
  `,
  args: { columns: '3' },
};

export const TwoColumns: Story = {
  render: () => html`
    <sq-masonry columns="2">
      ${masonryItem('#3b82f6', 'Item 1', '120px')}
      ${masonryItem('#22c55e', 'Item 2', '180px')}
      ${masonryItem('#f59e0b', 'Item 3', '90px')}
      ${masonryItem('#ef4444', 'Item 4', '150px')}
      ${masonryItem('#8b5cf6', 'Item 5', '110px')}
      ${masonryItem('#ec4899', 'Item 6', '140px')}
    </sq-masonry>
  `,
};

export const FourColumns: Story = {
  render: () => html`
    <sq-masonry columns="4">
      ${masonryItem('#3b82f6', '1', '80px')}
      ${masonryItem('#22c55e', '2', '120px')}
      ${masonryItem('#f59e0b', '3', '100px')}
      ${masonryItem('#ef4444', '4', '140px')}
      ${masonryItem('#8b5cf6', '5', '90px')}
      ${masonryItem('#ec4899', '6', '160px')}
      ${masonryItem('#06b6d4', '7', '110px')}
      ${masonryItem('#84cc16', '8', '130px')}
    </sq-masonry>
  `,
};

export const CustomGap: Story = {
  render: () => html`
    <sq-masonry columns="3" gap="var(--sq-space-8)">
      ${masonryItem('#3b82f6', '1', '100px')}
      ${masonryItem('#22c55e', '2', '160px')}
      ${masonryItem('#f59e0b', '3', '120px')}
      ${masonryItem('#ef4444', '4', '140px')}
      ${masonryItem('#8b5cf6', '5', '90px')}
      ${masonryItem('#ec4899', '6', '180px')}
    </sq-masonry>
  `,
};

export const PhotoGallery: Story = {
  render: () => html`
    <sq-masonry columns="3" gap="var(--sq-space-3)">
      ${masonryItem('#3b82f6', '📷 Photo 1', '150px')}
      ${masonryItem('#22c55e', '📷 Photo 2', '200px')}
      ${masonryItem('#f59e0b', '📷 Photo 3', '120px')}
      ${masonryItem('#ef4444', '📷 Photo 4', '180px')}
      ${masonryItem('#8b5cf6', '📷 Photo 5', '140px')}
      ${masonryItem('#ec4899', '📷 Photo 6', '160px')}
      ${masonryItem('#06b6d4', '📷 Photo 7', '130px')}
      ${masonryItem('#84cc16', '📷 Photo 8', '170px')}
      ${masonryItem('#f97316', '📷 Photo 9', '110px')}
    </sq-masonry>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <p style="font-weight: 600; margin-bottom: 8px; font-size: var(--sq-text-sm);">3 Columns</p>
        <sq-masonry columns="3">
          ${masonryItem('#3b82f6', '1', '100px')}
          ${masonryItem('#22c55e', '2', '160px')}
          ${masonryItem('#f59e0b', '3', '120px')}
          ${masonryItem('#ef4444', '4', '140px')}
          ${masonryItem('#8b5cf6', '5', '90px')}
          ${masonryItem('#ec4899', '6', '180px')}
        </sq-masonry>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px; font-size: var(--sq-text-sm);">2 Columns</p>
        <sq-masonry columns="2">
          ${masonryItem('#06b6d4', '1', '130px')}
          ${masonryItem('#84cc16', '2', '170px')}
          ${masonryItem('#f97316', '3', '110px')}
          ${masonryItem('#6366f1', '4', '150px')}
        </sq-masonry>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px; font-size: var(--sq-text-sm);">Large Gap</p>
        <sq-masonry columns="3" gap="var(--sq-space-8)">
          ${masonryItem('#3b82f6', '1', '100px')}
          ${masonryItem('#22c55e', '2', '140px')}
          ${masonryItem('#f59e0b', '3', '120px')}
        </sq-masonry>
      </div>
    </div>
  `,
};
