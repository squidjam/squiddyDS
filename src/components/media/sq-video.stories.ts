import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-video';

const meta = {
  title: 'Media/Video',
  component: 'sq-video',
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    poster: { control: 'text' },
    controls: { control: 'boolean' },
    autoplay: { control: 'boolean' },
    loop: { control: 'boolean' },
    muted: { control: 'boolean' },
    playsInline: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-video
    src="${args.src}"
    poster="${args.poster}"
    ?controls="${args.controls}"
    ?autoplay="${args.autoplay}"
    ?loop="${args.loop}"
    ?muted="${args.muted}"
    ?playsInline="${args.playsInline}"
  ></sq-video>`,
  args: { src: '', poster: '', controls: true },
};

export const WithPoster: Story = {
  render: () => html`<sq-video src="" poster="https://picsum.photos/800/450" controls></sq-video>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
      <p>Video player with default controls:</p>
      <sq-video src="" poster="https://picsum.photos/800/450" controls></sq-video>
      <p style="color: var(--sq-fg-muted); font-size: 14px;">Note: Provide a valid <code>src</code> attribute to play video.</p>
    </div>
  `,
};
