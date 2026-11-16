import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-stepper';

const meta: Meta = {
  title: 'Navigation/Stepper',
  tags: ['autodocs'],
  component: 'sq-stepper',
  argTypes: {
    currentStep: { control: { type: 'number', min: 0 } },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    clickable: { control: 'boolean' },
  },
  args: {
    currentStep: 1,
    orientation: 'horizontal',
    clickable: false,
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const el = document.createElement('sq-stepper');
    el.currentStep = 1;
    el.steps = [
      { label: 'Account', description: 'Create your account' },
      { label: 'Profile', description: 'Fill in your profile' },
      { label: 'Settings', description: 'Configure settings' },
      { label: 'Complete', description: 'All done!' },
    ];
    return el;
  },
};

export const Horizontal: Story = {
  render: () => {
    const el = document.createElement('sq-stepper');
    el.currentStep = 2;
    el.orientation = 'horizontal';
    el.steps = [
      { label: 'Shipping' },
      { label: 'Payment' },
      { label: 'Review' },
      { label: 'Confirm' },
    ];
    return el;
  },
};

export const Vertical: Story = {
  render: () => {
    const el = document.createElement('sq-stepper');
    el.currentStep = 1;
    el.orientation = 'vertical';
    el.steps = [
      { label: 'Account', description: 'Create your account' },
      { label: 'Profile', description: 'Fill in your profile' },
      { label: 'Settings', description: 'Configure settings' },
      { label: 'Complete', description: 'All done!' },
    ];
    return el;
  },
};

export const Clickable: Story = {
  render: () => {
    const el = document.createElement('sq-stepper');
    el.currentStep = 2;
    el.clickable = true;
    el.steps = [
      { label: 'Step 1' },
      { label: 'Step 2' },
      { label: 'Step 3' },
      { label: 'Step 4' },
    ];
    return el;
  },
};

export const WithError: Story = {
  render: () => {
    const el = document.createElement('sq-stepper');
    el.currentStep = 2;
    el.steps = [
      { label: 'Account', status: 'completed' },
      { label: 'Profile', status: 'completed' },
      { label: 'Settings', status: 'error' },
      { label: 'Complete', status: 'upcoming' },
    ];
    return el;
  },
};

export const AllVariants: Story = {
  render: () => {
    const checkoutSteps = [
      { label: 'Shipping' },
      { label: 'Payment' },
      { label: 'Review' },
      { label: 'Confirm' },
    ];
    const descSteps = [
      { label: 'Account', description: 'Create your account' },
      { label: 'Profile', description: 'Fill in your profile' },
      { label: 'Settings', description: 'Configure settings' },
      { label: 'Complete', description: 'All done!' },
    ];
    const errorSteps = [
      { label: 'Account', status: 'completed' as const },
      { label: 'Profile', status: 'completed' as const },
      { label: 'Settings', status: 'error' as const },
      { label: 'Complete', status: 'upcoming' as const },
    ];
    const h = document.createElement('sq-stepper');
    h.currentStep = 2;
    h.orientation = 'horizontal';
    h.steps = checkoutSteps;

    const v = document.createElement('sq-stepper');
    v.currentStep = 1;
    v.orientation = 'vertical';
    v.steps = descSteps;

    const e = document.createElement('sq-stepper');
    e.currentStep = 2;
    e.steps = errorSteps;

    const c = document.createElement('sq-stepper');
    c.currentStep = 1;
    c.clickable = true;
    c.steps = checkoutSteps;

    return html`
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Horizontal</h4>
          ${h}
        </div>
        <div>
          <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Vertical</h4>
          ${v}
        </div>
        <div>
          <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">With Error</h4>
          ${e}
        </div>
        <div>
          <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Clickable</h4>
          ${c}
        </div>
      </div>
    `;
  },
};
