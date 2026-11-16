import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-image';

const meta = {
  title: 'Media/Image',
  component: 'sq-image',
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    objectFit: { control: { type: 'select', options: ['contain', 'cover', 'fill', 'none', 'scale-down'] } },
    lazy: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-image
    src="${args.src}"
    alt="${args.alt}"
    width="${args.width}"
    height="${args.height}"
    objectFit="${args.objectFit}"
    ?lazy="${args.lazy}"
  ></sq-image>`,
  args: { src: 'https://picsum.photos/600/400', alt: 'Placeholder image', objectFit: 'cover' },
};

export const WithCaption: Story = {
  render: () => html`<sq-image src="https://picsum.photos/600/400" alt="Landscape" objectFit="cover">
    <span slot="caption">A beautiful landscape photo</span>
  </sq-image>`,
};

export const Contain: Story = {
  render: () => html`<sq-image src="https://picsum.photos/600/400" alt="Contain fit" objectFit="contain"></sq-image>`,
};

export const Cover: Story = {
  render: () => html`<sq-image src="https://picsum.photos/600/400" alt="Cover fit" objectFit="cover"></sq-image>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 500px;">
      <sq-image src="https://picsum.photos/600/400" alt="Default" objectFit="cover"></sq-image>
      <sq-image src="https://picsum.photos/600/400" alt="With caption" objectFit="cover">
        <span slot="caption">Image with caption</span>
      </sq-image>
      <sq-image src="https://picsum.photos/600/400" alt="Contain" objectFit="contain"></sq-image>
    </div>
  `,
};
