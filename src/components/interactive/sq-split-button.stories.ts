import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-split-button';

const meta: Meta = {
  title: 'Interactive/SplitButton',
  tags: ['autodocs'],
  component: 'sq-split-button',
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'subtle', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Action',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const el = document.createElement('sq-split-button');
    el.label = 'Action';
    el.options = [
      { label: 'Edit', value: 'edit' },
      { label: 'Duplicate', value: 'duplicate' },
      { label: 'Delete', value: 'delete' },
    ];
    return el;
  },
};

export const Primary: Story = {
  render: () => {
    const el = document.createElement('sq-split-button');
    el.label = 'Primary';
    el.variant = 'primary';
    el.options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ];
    return el;
  },
};

export const Secondary: Story = {
  render: () => {
    const el = document.createElement('sq-split-button');
    el.label = 'Secondary';
    el.variant = 'secondary';
    el.options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ];
    return el;
  },
};

export const Subtle: Story = {
  render: () => {
    const el = document.createElement('sq-split-button');
    el.label = 'Subtle';
    el.variant = 'subtle';
    el.options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ];
    return el;
  },
};

export const Danger: Story = {
  render: () => {
    const el = document.createElement('sq-split-button');
    el.label = 'Delete';
    el.variant = 'danger';
    el.options = [
      { label: 'Delete', value: 'delete' },
      { label: 'Move to trash', value: 'trash' },
    ];
    return el;
  },
};

export const Small: Story = {
  render: () => {
    const el = document.createElement('sq-split-button');
    el.label = 'Small';
    el.size = 'sm';
    el.options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ];
    return el;
  },
};

export const Large: Story = {
  render: () => {
    const el = document.createElement('sq-split-button');
    el.label = 'Large';
    el.size = 'lg';
    el.options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ];
    return el;
  },
};

export const WithDivider: Story = {
  render: () => {
    const el = document.createElement('sq-split-button');
    el.label = 'Action';
    el.options = [
      { label: 'Edit', value: 'edit' },
      { label: 'Duplicate', value: 'duplicate' },
      { label: '', value: '', divider: true },
      { label: 'Delete', value: 'delete' },
    ];
    return el;
  },
};

export const AllVariants: Story = {
  render: () => {
    const opts = [
      { label: 'Edit', value: 'edit' },
      { label: 'Duplicate', value: 'duplicate' },
      { label: '', value: '', divider: true },
      { label: 'Delete', value: 'delete' },
    ];
    const simpleOpts = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ];
    const dangerOpts = [
      { label: 'Delete', value: 'delete' },
      { label: 'Move to trash', value: 'trash' },
    ];

    const p = document.createElement('sq-split-button');
    p.label = 'Primary';
    p.variant = 'primary';
    p.options = opts;

    const s = document.createElement('sq-split-button');
    s.label = 'Secondary';
    s.variant = 'secondary';
    s.options = opts;

    const sub = document.createElement('sq-split-button');
    sub.label = 'Subtle';
    sub.variant = 'subtle';
    sub.options = opts;

    const d = document.createElement('sq-split-button');
    d.label = 'Delete';
    d.variant = 'danger';
    d.options = dangerOpts;

    const sm = document.createElement('sq-split-button');
    sm.label = 'Small';
    sm.size = 'sm';
    sm.options = simpleOpts;

    const md = document.createElement('sq-split-button');
    md.label = 'Medium';
    md.size = 'md';
    md.options = simpleOpts;

    const lg = document.createElement('sq-split-button');
    lg.label = 'Large';
    lg.size = 'lg';
    lg.options = simpleOpts;

    return html`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Primary</h4>
          ${p}
        </div>
        <div>
          <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Secondary</h4>
          ${s}
        </div>
        <div>
          <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Subtle</h4>
          ${sub}
        </div>
        <div>
          <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Danger</h4>
          ${d}
        </div>
        <div>
          <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Sizes</h4>
          <div style="display: flex; gap: 12px; align-items: center;">
            ${sm}
            ${md}
            ${lg}
          </div>
        </div>
      </div>
    `;
  },
};
