import type { Meta, StoryObj } from '@storybook/web-components-vite';
import './sq-flex';

const meta: Meta = {
  title: 'Layout/Flex',
  tags: ['autodocs'],
  component: 'sq-flex',
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    wrap: {
      control: { type: 'select' },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    gap: { control: 'text' },
    alignItems: {
      control: { type: 'select' },
      options: ['stretch', 'start', 'center', 'end', 'baseline'],
    },
    justifyContent: {
      control: { type: 'select' },
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    },
  },
  args: {
    direction: 'row',
    wrap: 'nowrap',
    gap: '16px',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
};
export default meta;
type Story = StoryObj;

const item = (color: string, label: string) => {
  const div = document.createElement('div');
  div.style.cssText = `background: ${color}; padding: 12px 16px; border-radius: 8px; color: white; font-weight: 500; text-align: center; min-width: 60px;`;
  div.textContent = label;
  return div;
};

export const Default: Story = {
  render: (args) => {
    const flex = document.createElement('sq-flex');
    flex.direction = args.direction;
    flex.wrap = args.wrap;
    flex.gap = args.gap;
    flex.alignItems = args.alignItems;
    flex.justifyContent = args.justifyContent;
    flex.append(item('#3b82f6', '1'), item('#22c55e', '2'), item('#f59e0b', '3'), item('#ef4444', '4'));
    return flex;
  },
  args: { direction: 'row' },
};

export const Row: Story = {
  render: () => {
    const flex = document.createElement('sq-flex');
    flex.direction = 'row';
    flex.append(item('#3b82f6', '1'), item('#22c55e', '2'), item('#f59e0b', '3'));
    return flex;
  },
};

export const Column: Story = {
  render: () => {
    const flex = document.createElement('sq-flex');
    flex.direction = 'column';
    flex.append(item('#3b82f6', '1'), item('#22c55e', '2'), item('#f59e0b', '3'));
    return flex;
  },
};

export const Wrap: Story = {
  render: () => {
    const flex = document.createElement('sq-flex');
    flex.direction = 'row';
    flex.wrap = 'wrap';
    flex.append(item('#3b82f6', '1'), item('#22c55e', '2'), item('#f59e0b', '3'), item('#ef4444', '4'), item('#8b5cf6', '5'), item('#ec4899', '6'));
    return flex;
  },
};

export const SpaceBetween: Story = {
  render: () => {
    const flex = document.createElement('sq-flex');
    flex.direction = 'row';
    flex.justifyContent = 'space-between';
    flex.append(item('#3b82f6', '1'), item('#22c55e', '2'), item('#f59e0b', '3'));
    return flex;
  },
};

export const Center: Story = {
  render: () => {
    const flex = document.createElement('sq-flex');
    flex.direction = 'row';
    flex.alignItems = 'center';
    flex.justifyContent = 'center';
    flex.style.cssText = 'min-height: 120px; border: 1px dashed var(--sq-border-subtle, #e5e7eb); border-radius: 8px;';
    flex.append(item('#3b82f6', 'Centered'));
    return flex;
  },
};

export const AllVariants: Story = {
  render: () => {
    const row = document.createElement('sq-flex');
    row.direction = 'row';
    row.append(item('#3b82f6', '1'), item('#22c55e', '2'), item('#f59e0b', '3'));

    const column = document.createElement('sq-flex');
    column.direction = 'column';
    column.append(item('#ef4444', '1'), item('#8b5cf6', '2'), item('#ec4899', '3'));

    const wrap = document.createElement('sq-flex');
    wrap.direction = 'row';
    wrap.wrap = 'wrap';
    wrap.append(item('#06b6d4', '1'), item('#84cc16', '2'), item('#f97316', '3'), item('#6366f1', '4'));

    const spaceBetween = document.createElement('sq-flex');
    spaceBetween.direction = 'row';
    spaceBetween.justifyContent = 'space-between';
    spaceBetween.append(item('#3b82f6', '1'), item('#22c55e', '2'), item('#f59e0b', '3'));

    const section = (title: string, el: HTMLElement) => {
      const section = document.createElement('div');
      const titleEl = document.createElement('p');
      titleEl.style.cssText = 'font-weight: 600; margin-bottom: 8px; font-size: 14px;';
      titleEl.textContent = title;
      section.append(titleEl, el);
      return section;
    };

    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '32px';
    container.append(section('Row', row), section('Column', column), section('Wrap', wrap), section('Space Between', spaceBetween));
    return container;
  },
};
