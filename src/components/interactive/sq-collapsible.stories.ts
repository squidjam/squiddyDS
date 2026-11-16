import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-collapsible';

const meta: Meta = {
  title: 'Interactive/Collapsible',
  tags: ['autodocs'],
  component: 'sq-collapsible',
  argTypes: {
    headerText: { control: 'text' },
    open: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    headerText: 'Toggle',
    open: false,
    disabled: false,
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <sq-collapsible header-text="${args.headerText}" ?open="${args.open}" ?disabled="${args.disabled}">
      <p>This is the collapsible content. It can contain any HTML or web components.</p>
    </sq-collapsible>
  `,
  args: { headerText: 'Click to expand' },
};

export const Open: Story = {
  render: () => html`
    <sq-collapsible header-text="Already Open" open>
      <p>This collapsible starts in the open state.</p>
    </sq-collapsible>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <sq-collapsible header-text="Disabled" disabled>
      <p>This content cannot be toggled.</p>
    </sq-collapsible>
  `,
};

export const Nested: Story = {
  render: () => html`
    <sq-collapsible header-text="Outer Collapsible" open>
      <p>Outer content goes here.</p>
      <sq-collapsible header-text="Inner Collapsible">
        <p>Nested collapsible content.</p>
      </sq-collapsible>
    </sq-collapsible>
  `,
};

export const Multiple: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 8px; max-width: 400px;">
      <sq-collapsible header-text="Section 1">
        <p>Content for section 1.</p>
      </sq-collapsible>
      <sq-collapsible header-text="Section 2" open>
        <p>Content for section 2, already open.</p>
      </sq-collapsible>
      <sq-collapsible header-text="Section 3">
        <p>Content for section 3.</p>
      </sq-collapsible>
    </div>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px; max-width: 400px;">
      <div>
        <p style="font-weight: 600; margin-bottom: 8px; font-size: var(--sq-text-sm);">Default (Closed)</p>
        <sq-collapsible header-text="Default">
          <p>Default closed collapsible.</p>
        </sq-collapsible>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px; font-size: var(--sq-text-sm);">Open</p>
        <sq-collapsible header-text="Open" open>
          <p>Starts open.</p>
        </sq-collapsible>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px; font-size: var(--sq-text-sm);">Disabled</p>
        <sq-collapsible header-text="Disabled" disabled>
          <p>Cannot be toggled.</p>
        </sq-collapsible>
      </div>
    </div>
  `,
};
