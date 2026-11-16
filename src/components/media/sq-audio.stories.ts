import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-audio';

const meta = {
  title: 'Media/Audio',
  component: 'sq-audio',
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    controls: { control: 'boolean' },
    autoplay: { control: 'boolean' },
    loop: { control: 'boolean' },
    muted: { control: 'boolean' },
    variant: { control: { type: 'select', options: ['default', 'filled', 'subtle'] } },
    downloadable: { control: 'boolean' },
    downloadFilename: { control: 'text' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-audio
    src="${args.src}"
    ?controls="${args.controls}"
    ?autoplay="${args.autoplay}"
    ?loop="${args.loop}"
    ?muted="${args.muted}"
  ></sq-audio>`,
  args: { src: '', controls: true },
};

export const WithControls: Story = {
  render: () => html`<sq-audio src="" controls></sq-audio>`,
};

export const Filled: Story = {
  render: (args) => html`<sq-audio
    src="${args.src}"
    variant="${args.variant}"
    ?controls="${args.controls}"
    ?downloadable="${args.downloadable}"
  ></sq-audio>`,
  args: { src: '', variant: 'filled', controls: true, downloadable: false },
};

export const Subtle: Story = {
  render: (args) => html`<sq-audio
    src="${args.src}"
    variant="${args.variant}"
    ?controls="${args.controls}"
    ?downloadable="${args.downloadable}"
  ></sq-audio>`,
  args: { src: '', variant: 'subtle', controls: true, downloadable: false },
};

export const Downloadable: Story = {
  render: (args) => html`<sq-audio
    src="${args.src}"
    variant="${args.variant}"
    ?controls="${args.controls}"
    ?downloadable="${args.downloadable}"
    download-filename="${args.downloadFilename}"
  ></sq-audio>`,
  args: { src: '', variant: 'default', controls: true, downloadable: true, downloadFilename: 'audio.mp3' },
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px; max-width: 500px;">
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Default</p>
        <sq-audio src="" controls></sq-audio>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Filled</p>
        <sq-audio src="" variant="filled" controls></sq-audio>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Subtle</p>
        <sq-audio src="" variant="subtle" controls></sq-audio>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Downloadable</p>
        <sq-audio src="" controls downloadable download-filename="audio.mp3"></sq-audio>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Filled + Downloadable</p>
        <sq-audio src="" variant="filled" controls downloadable download-filename="audio.mp3"></sq-audio>
      </div>
      <p style="color: var(--sq-fg-muted); font-size: 14px;">Note: Provide a valid <code>src</code> attribute to play audio.</p>
    </div>
  `,
};
