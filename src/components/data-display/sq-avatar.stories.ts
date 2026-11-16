import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-avatar';

const meta: Meta = {
  title: 'Data Display/Avatar',
  tags: ['autodocs'],
  component: 'sq-avatar',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'rounded', 'square'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'danger', 'info'],
    },
  },
  args: {
    size: 'md',
    shape: 'circle',
    variant: 'default',
  },
};
export default meta;
type Story = StoryObj;

export const Initials: Story = {
  render: (args) => html`<sq-avatar .size=${args.size} .shape=${args.shape} .variant=${args.variant}>${args.initials}</sq-avatar>`,
  args: { initials: 'JD', size: 'md', shape: 'circle', variant: 'default' },
};

export const Image: Story = {
  render: (args) => html`<sq-avatar src="https://i.pravatar.cc/150?img=1" alt="User avatar" .size=${args.size} .shape=${args.shape}></sq-avatar>`,
  args: { size: 'md', shape: 'circle' },
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
      <sq-avatar size="xs">XS</sq-avatar>
      <sq-avatar size="sm">SM</sq-avatar>
      <sq-avatar size="md">MD</sq-avatar>
      <sq-avatar size="lg">LG</sq-avatar>
      <sq-avatar size="xl">XL</sq-avatar>
    </div>
  `,
};

export const Shapes: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
      <sq-avatar shape="circle">AB</sq-avatar>
      <sq-avatar shape="rounded">CD</sq-avatar>
      <sq-avatar shape="square">EF</sq-avatar>
    </div>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
      <sq-avatar variant="default">DF</sq-avatar>
      <sq-avatar variant="success">SU</sq-avatar>
      <sq-avatar variant="warning">WA</sq-avatar>
      <sq-avatar variant="danger">DA</sq-avatar>
      <sq-avatar variant="info">IN</sq-avatar>
    </div>
  `,
};

export const Group: Story = {
  render: () => html`
    <sq-avatar-group max="3">
      <sq-avatar src="https://i.pravatar.cc/150?img=1" alt="User 1"></sq-avatar>
      <sq-avatar src="https://i.pravatar.cc/150?img=2" alt="User 2"></sq-avatar>
      <sq-avatar src="https://i.pravatar.cc/150?img=3" alt="User 3"></sq-avatar>
      <sq-avatar src="https://i.pravatar.cc/150?img=4" alt="User 4"></sq-avatar>
    </sq-avatar-group>
  `,
};

export const Mixed: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
      <sq-avatar src="https://i.pravatar.cc/150?img=5" alt="User" size="lg"></sq-avatar>
      <sq-avatar variant="success" size="lg">JD</sq-avatar>
      <sq-avatar variant="warning" shape="rounded" size="lg">AB</sq-avatar>
    </div>
  `,
};
