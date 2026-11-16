import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-pagination';

const meta: Meta = {
  title: 'Data Display/Pagination',
  tags: ['autodocs'],
  component: 'sq-pagination',
  argTypes: {
    page: { control: { type: 'number' } },
    totalPages: { control: { type: 'number' } },
    siblingCount: { control: { type: 'number' } },
    showInfo: { control: { type: 'boolean' } },
  },
  args: {
    page: 1,
    totalPages: 10,
    siblingCount: 2,
    showInfo: false,
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-pagination .page=${args.page} .totalPages=${args.totalPages} .siblingCount=${args.siblingCount} .showInfo=${args.showInfo}></sq-pagination>`,
  args: { page: 1, totalPages: 10 },
};

export const MiddlePage: Story = {
  render: (args) => html`<sq-pagination .page=${args.page} .totalPages=${args.totalPages} .siblingCount=${args.siblingCount} .showInfo=${args.showInfo}></sq-pagination>`,
  args: { page: 5, totalPages: 20 },
};

export const LastPage: Story = {
  render: (args) => html`<sq-pagination .page=${args.page} .totalPages=${args.totalPages} .siblingCount=${args.siblingCount} .showInfo=${args.showInfo}></sq-pagination>`,
  args: { page: 20, totalPages: 20 },
};

export const WithInfo: Story = {
  render: (args) => html`<sq-pagination .page=${args.page} .totalPages=${args.totalPages} .siblingCount=${args.siblingCount} .showInfo=${args.showInfo}></sq-pagination>`,
  args: { page: 3, totalPages: 15, showInfo: true },
};

export const FewPages: Story = {
  render: (args) => html`<sq-pagination .page=${args.page} .totalPages=${args.totalPages} .siblingCount=${args.siblingCount} .showInfo=${args.showInfo}></sq-pagination>`,
  args: { page: 2, totalPages: 5 },
};

export const ManyPages: Story = {
  render: (args) => html`<sq-pagination .page=${args.page} .totalPages=${args.totalPages} .siblingCount=${args.siblingCount} .showInfo=${args.showInfo}></sq-pagination>`,
  args: { page: 42, totalPages: 100 },
};
