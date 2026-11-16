import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-card';
import '../interactive/sq-button';

const meta = {
  title: 'Layout/Card',
  component: 'sq-card',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: { type: 'select', options: ['elevated', 'outlined', 'filled'] } },
    interactive: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-card variant="${args.variant}" ?interactive="${args.interactive}">
    <div slot="header"><strong>Card Header</strong></div>
    <p>This is the card body content. Cards can contain any content you need.</p>
    <div slot="footer">Card footer info</div>
    <sq-button slot="actions" variant="primary" size="sm">Action</sq-button>
  </sq-card>`,
  args: { variant: 'elevated' },
};

export const Elevated: Story = {
  render: () => html`<sq-card variant="elevated">
    <div slot="header"><strong>Elevated Card</strong></div>
    <p>This card has elevation with a shadow and surface background.</p>
  </sq-card>`,
};

export const Outlined: Story = {
  render: () => html`<sq-card variant="outlined">
    <div slot="header"><strong>Outlined Card</strong></div>
    <p>This card has a border outline with no shadow.</p>
  </sq-card>`,
};

export const Filled: Story = {
  render: () => html`<sq-card variant="filled">
    <div slot="header"><strong>Filled Card</strong></div>
    <p>This card has a filled elevated background.</p>
  </sq-card>`,
};

export const Interactive: Story = {
  render: () => html`<sq-card interactive variant="elevated">
    <div slot="header"><strong>Interactive Card</strong></div>
    <p>Hover over this card to see the interactive effect.</p>
    <sq-button slot="actions" variant="primary" size="sm">Click</sq-button>
  </sq-card>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 480px;">
      <sq-card variant="elevated">
        <div slot="header"><strong>Elevated</strong></div>
        <p>Shadow and surface background.</p>
      </sq-card>
      <sq-card variant="outlined">
        <div slot="header"><strong>Outlined</strong></div>
        <p>Border outline, no shadow.</p>
      </sq-card>
      <sq-card variant="filled">
        <div slot="header"><strong>Filled</strong></div>
        <p>Filled elevated background.</p>
      </sq-card>
      <sq-card interactive variant="elevated">
        <div slot="header"><strong>Interactive</strong></div>
        <p>Hover to see the effect.</p>
        <sq-button slot="actions" variant="primary" size="sm">Action</sq-button>
      </sq-card>
    </div>
  `,
};
