import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../interactive/sq-carousel';

const meta = {
  title: 'Interactive/Carousel',
  component: 'sq-carousel',
  tags: ['autodocs'],
  argTypes: {
    animation: { control: { type: 'select', options: ['fade', 'slide'] } },
    direction: { control: { type: 'select', options: ['horizontal', 'vertical'] } },
    reverse: { control: 'boolean' },
    animationLoop: { control: 'boolean' },
    controlNav: { control: 'boolean' },
    directionNav: { control: 'boolean' },
    autoPlay: { control: 'boolean' },
    interval: { control: { type: 'number', min: 1000, max: 10000, step: 500 } },
    pauseOnHover: { control: 'boolean' },
    pausePlay: { control: 'boolean' },
    showCounter: { control: 'boolean' },
    aspectRatio: { control: { type: 'select', options: ['16/9', '4/3', '1/1', 'auto'] } },
    current: { control: { type: 'number', min: 0, max: 5, step: 1 } },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const slideContent = (color: string, label: string) => html`
  <div style="background: ${color}; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: bold; width: 100%; height: 100%;">
    ${label}
  </div>
`;

export const Default: Story = {
  render: () => html`
    <sq-carousel style="max-width: 600px;">
      ${slideContent('#3b82f6', 'Slide 1')}
      ${slideContent('#22c55e', 'Slide 2')}
      ${slideContent('#f59e0b', 'Slide 3')}
      ${slideContent('#ef4444', 'Slide 4')}
    </sq-carousel>
  `,
};

export const SlideAnimation: Story = {
  render: () => html`
    <sq-carousel animation="slide" style="max-width: 600px;">
      ${slideContent('#3b82f6', 'Slide 1')}
      ${slideContent('#22c55e', 'Slide 2')}
      ${slideContent('#f59e0b', 'Slide 3')}
    </sq-carousel>
  `,
};

export const VerticalSlide: Story = {
  render: () => html`
    <sq-carousel animation="slide" direction="vertical" style="max-width: 600px;">
      ${slideContent('#3b82f6', 'Slide 1')}
      ${slideContent('#22c55e', 'Slide 2')}
      ${slideContent('#f59e0b', 'Slide 3')}
    </sq-carousel>
  `,
};

export const AutoPlay: Story = {
  render: () => html`
    <sq-carousel auto-play interval="3000" pause-play show-counter style="max-width: 600px;">
      ${slideContent('#3b82f6', 'Slide 1')}
      ${slideContent('#22c55e', 'Slide 2')}
      ${slideContent('#f59e0b', 'Slide 3')}
      ${slideContent('#ef4444', 'Slide 4')}
    </sq-carousel>
  `,
};

export const SquareAspectRatio: Story = {
  render: () => html`
    <sq-carousel aspect-ratio="1/1" style="max-width: 400px;">
      ${slideContent('#8b5cf6', 'Square 1')}
      ${slideContent('#ec4899', 'Square 2')}
      ${slideContent('#06b6d4', 'Square 3')}
    </sq-carousel>
  `,
};

export const NoLoop: Story = {
  render: () => html`
    <sq-carousel .animationLoop=${false} style="max-width: 600px;">
      ${slideContent('#3b82f6', 'First')}
      ${slideContent('#22c55e', 'Middle')}
      ${slideContent('#f59e0b', 'Last')}
    </sq-carousel>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px; max-width: 600px;">
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Fade (Default)</p>
        <sq-carousel style="max-width: 100%;">
          ${slideContent('#3b82f6', 'Fade 1')}
          ${slideContent('#22c55e', 'Fade 2')}
        </sq-carousel>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Slide</p>
        <sq-carousel animation="slide" style="max-width: 100%;">
          ${slideContent('#f59e0b', 'Slide 1')}
          ${slideContent('#ef4444', 'Slide 2')}
        </sq-carousel>
      </div>
      <div>
        <p style="font-weight: 600; margin-bottom: 8px;">Auto-play with Counter</p>
        <sq-carousel auto-play interval="3000" show-counter pause-play style="max-width: 100%;">
          ${slideContent('#8b5cf6', 'Auto 1')}
          ${slideContent('#ec4899', 'Auto 2')}
          ${slideContent('#06b6d4', 'Auto 3')}
        </sq-carousel>
      </div>
    </div>
  `,
};
