import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-spinner';

const meta: Meta = {
  title: 'Interactive/Spinner',
  tags: ['autodocs'],
  component: 'sq-spinner',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'error', 'info'],
    },
    speed: {
      control: { type: 'select' },
      options: ['slow', 'normal', 'fast', 'ultra'],
    },
    label: { control: 'text' },
  },
  args: {
    size: 'md',
    color: 'primary',
    speed: 'normal',
    label: 'Loading',
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-spinner size="${args.size}" color="${args.color}" label="${args.label}"></sq-spinner>`,
  args: { size: 'md', color: 'primary' },
};

export const Small: Story = {
  render: () => html`<sq-spinner size="sm"></sq-spinner>`,
};

export const Medium: Story = {
  render: () => html`<sq-spinner size="md"></sq-spinner>`,
};

export const Large: Story = {
  render: () => html`<sq-spinner size="lg"></sq-spinner>`,
};

export const Colors: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center;">
      <div style="text-align: center;">
        <sq-spinner color="primary"></sq-spinner>
        <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-top: 8px;">Primary</p>
      </div>
      <div style="text-align: center;">
        <sq-spinner color="success"></sq-spinner>
        <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-top: 8px;">Success</p>
      </div>
      <div style="text-align: center;">
        <sq-spinner color="warning"></sq-spinner>
        <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-top: 8px;">Warning</p>
      </div>
      <div style="text-align: center;">
        <sq-spinner color="error"></sq-spinner>
        <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-top: 8px;">Error</p>
      </div>
      <div style="text-align: center;">
        <sq-spinner color="info"></sq-spinner>
        <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-top: 8px;">Info</p>
      </div>
    </div>
  `,
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center;">
      <div style="text-align: center;">
        <sq-spinner size="sm"></sq-spinner>
        <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-top: 8px;">Small</p>
      </div>
      <div style="text-align: center;">
        <sq-spinner size="md"></sq-spinner>
        <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-top: 8px;">Medium</p>
      </div>
      <div style="text-align: center;">
        <sq-spinner size="lg"></sq-spinner>
        <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-top: 8px;">Large</p>
      </div>
    </div>
  `,
};

export const Slow: Story = {
  render: () => html`<sq-spinner speed="slow"></sq-spinner>`,
};

export const Normal: Story = {
  render: () => html`<sq-spinner speed="normal"></sq-spinner>`,
};

export const Fast: Story = {
  render: () => html`<sq-spinner speed="fast"></sq-spinner>`,
};

export const Ultra: Story = {
  render: () => html`<sq-spinner speed="ultra"></sq-spinner>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Sizes</h4>
        <div style="display: flex; gap: 24px; align-items: center;">
          <div style="text-align: center;">
            <sq-spinner size="sm"></sq-spinner>
            <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-top: 8px;">Small</p>
          </div>
          <div style="text-align: center;">
            <sq-spinner size="md"></sq-spinner>
            <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-top: 8px;">Medium</p>
          </div>
          <div style="text-align: center;">
            <sq-spinner size="lg"></sq-spinner>
            <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-top: 8px;">Large</p>
          </div>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Colors</h4>
        <div style="display: flex; gap: 24px; align-items: center;">
          <div style="text-align: center;">
            <sq-spinner color="primary"></sq-spinner>
            <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-top: 8px;">Primary</p>
          </div>
          <div style="text-align: center;">
            <sq-spinner color="success"></sq-spinner>
            <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-top: 8px;">Success</p>
          </div>
          <div style="text-align: center;">
            <sq-spinner color="warning"></sq-spinner>
            <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-top: 8px;">Warning</p>
          </div>
          <div style="text-align: center;">
            <sq-spinner color="error"></sq-spinner>
            <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-top: 8px;">Error</p>
          </div>
          <div style="text-align: center;">
            <sq-spinner color="info"></sq-spinner>
            <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-top: 8px;">Info</p>
          </div>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Speed</h4>
        <div style="display: flex; gap: 24px; align-items: center;">
          <div style="text-align: center;">
            <sq-spinner speed="slow"></sq-spinner>
            <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-top: 8px;">Slow (2s)</p>
          </div>
          <div style="text-align: center;">
            <sq-spinner speed="normal"></sq-spinner>
            <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-top: 8px;">Normal (0.8s)</p>
          </div>
          <div style="text-align: center;">
            <sq-spinner speed="fast"></sq-spinner>
            <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-top: 8px;">Fast (0.4s)</p>
          </div>
          <div style="text-align: center;">
            <sq-spinner speed="ultra"></sq-spinner>
            <p style="font-size: var(--sq-text-xs); color: var(--sq-fg-muted); margin-top: 8px;">Ultra (0.2s)</p>
          </div>
        </div>
      </div>
    </div>
  `,
};
