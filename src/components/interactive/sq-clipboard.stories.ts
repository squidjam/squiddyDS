import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-clipboard';

const meta: Meta = {
  title: 'Interactive/Clipboard',
  tags: ['autodocs'],
  component: 'sq-clipboard',
  argTypes: {
    text: { control: 'text' },
    label: { control: 'text' },
    copiedLabel: { control: 'text' },
    feedbackDuration: { control: { type: 'number', min: 500, max: 5000, step: 100 } },
  },
  args: {
    text: 'Hello, World!',
    label: 'Copy',
    copiedLabel: 'Copied!',
    feedbackDuration: 2000,
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <sq-clipboard text="${args.text}" label="${args.label}" copied-label="${args.copiedLabel}"></sq-clipboard>
  `,
  args: { text: 'Hello, World!' },
};

export const CustomLabel: Story = {
  render: () => html`
    <sq-clipboard text="npm install squiddy-ds" label="Copy command" copied-label="Copied!">
    </sq-clipboard>
  `,
};

export const CodeBlock: Story = {
  render: () => html`
    <div style="position: relative; max-width: 500px; padding: 16px; background: var(--sq-bg-subtle); border-radius: var(--sq-radius-md); font-family: var(--sq-font-mono); font-size: var(--sq-text-sm);">
      <code style="position: absolute; top: 8px; right: 8px;">
        <sq-clipboard text="const greeting = 'Hello, World!';" label="Copy" copied-label="Copied!"></sq-clipboard>
      </code>
      <pre style="margin: 0; margin-top: 24px; white-space: pre-wrap;">const greeting = 'Hello, World!';</pre>
    </div>
  `,
};

export const Multiple: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
      <sq-clipboard text="Hello" label="Copy Hello"></sq-clipboard>
      <sq-clipboard text="World" label="Copy World"></sq-clipboard>
      <sq-clipboard text="SquiddyDS" label="Copy Name"></sq-clipboard>
    </div>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
      <div>
        <p style="font-weight: 600; margin-bottom: 8px; font-size: var(--sq-text-sm);">Default</p>
        <sq-clipboard text="Simple text to copy" label="Copy"></sq-clipboard>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px; font-size: var(--sq-text-sm);">Custom Label</p>
        <sq-clipboard text="npm install squiddy-ds" label="Copy command"></sq-clipboard>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px; font-size: var(--sq-text-sm);">In Code Block</p>
        <div style="position: relative; padding: 16px; background: var(--sq-bg-subtle); border-radius: var(--sq-radius-md); font-family: var(--sq-font-mono); font-size: var(--sq-text-sm);">
          <code style="position: absolute; top: 8px; right: 8px;">
            <sq-clipboard text="console.log('Hello!');" label="Copy"></sq-clipboard>
          </code>
          <pre style="margin: 0; margin-top: 24px; white-space: pre-wrap;">console.log('Hello!');</pre>
        </div>
      </div>
    </div>
  `,
};
