import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-iframe';

const meta = {
  title: 'Media/Iframe',
  component: 'sq-iframe',
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    title: { control: 'text' },
    aspectRatio: { control: 'text' },
    sandbox: { control: 'text' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-iframe
    src="${args.src}"
    title="${args.title}"
    aspectRatio="${args.aspectRatio}"
    sandbox="${args.sandbox}"
  ></sq-iframe>`,
  args: { src: 'https://example.com', title: 'Example', aspectRatio: '16/9' },
};

export const Square: Story = {
  render: () => html`<sq-iframe src="https://example.com" title="Square" aspectRatio="1/1"></sq-iframe>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
      <p>16:9 aspect ratio:</p>
      <sq-iframe src="https://example.com" title="16:9" aspectRatio="16/9"></sq-iframe>
      <p>1:1 aspect ratio:</p>
      <sq-iframe src="https://example.com" title="1:1" aspectRatio="1/1"></sq-iframe>
    </div>
  `,
};
