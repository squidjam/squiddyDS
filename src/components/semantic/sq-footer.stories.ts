import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-footer';

const meta = {
  title: 'Semantic/Footer',
  component: 'sq-footer',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<sq-footer>
    <p>&copy; 2024 Squiddy Design System. All rights reserved.</p>
  </sq-footer>`,
};

export const WithLinks: Story = {
  render: () => html`<sq-footer>
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <span>&copy; 2024 Squiddy</span>
      <div style="display: flex; gap: 16px;">
        <a href="#" style="color: var(--sq-fg-link);">Privacy</a>
        <a href="#" style="color: var(--sq-fg-link);">Terms</a>
        <a href="#" style="color: var(--sq-fg-link);">Contact</a>
      </div>
    </div>
  </sq-footer>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <sq-footer><p>Simple footer text</p></sq-footer>
      <sq-footer>
        <div style="display: flex; justify-content: space-between;">
          <span>&copy; 2024</span>
          <span>Links here</span>
        </div>
      </sq-footer>
    </div>
  `,
};
