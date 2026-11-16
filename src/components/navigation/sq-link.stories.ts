import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-link';

const meta = {
  title: 'Navigation/Link',
  component: 'sq-link',
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    variant: { control: { type: 'select', options: ['primary', 'subtle', 'underline'] } },
    external: { control: 'boolean' },
    download: { control: 'boolean' },
    target: { control: 'text' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-link
    href="${args.href}"
    variant="${args.variant}"
    ?external="${args.external}"
    ?download="${args.download}"
    target="${args.target}"
  >Click here</sq-link>`,
  args: { href: '#', variant: 'primary' },
};

export const Subtle: Story = {
  render: () => html`<sq-link href="#" variant="subtle">Subtle link</sq-link>`,
};

export const Underline: Story = {
  render: () => html`<sq-link href="#" variant="underline">Underlined link</sq-link>`,
};

export const External: Story = {
  render: () => html`<sq-link href="https://example.com" external>External link</sq-link>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <sq-link href="#" variant="primary">Primary link</sq-link>
      <sq-link href="#" variant="subtle">Subtle link</sq-link>
      <sq-link href="#" variant="underline">Underlined link</sq-link>
      <sq-link href="https://example.com" external>External link ↗</sq-link>
    </div>
  `,
};
