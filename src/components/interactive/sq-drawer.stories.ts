import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { state } from 'lit/decorators.js';
import { LitElement } from 'lit';
import './sq-drawer';
import '../interactive/sq-button';

// Helper component to demonstrate drawer toggle
class DrawerDemo extends LitElement {
  @state() open = false;

  toggle() {
    this.open = !this.open;
  }

  render(position: string, title: string) {
    return html`
      <sq-button @click=${this.toggle}>Open ${position} Drawer</sq-button>
      <sq-drawer .open=${this.open} position=${position} title=${title}>
        <div slot="header">${title}</div>
        <p>This is the drawer content. You can place any content here, including forms, lists, or detailed information.</p>
        <p>The drawer slides in from the ${position} side and can be closed by clicking the overlay, the close button, or programmatically.</p>
        <div slot="footer">
          <sq-button variant="subtle" @click=${this.toggle}>Cancel</sq-button>
          <sq-button @click=${this.toggle}>Confirm</sq-button>
        </div>
      </sq-drawer>
    `;
  }

  createRenderRoot() {
    return this;
  }
}
customElements.get('drawer-demo') || customElements.define('drawer-demo', DrawerDemo);

const meta: Meta = {
  title: 'Interactive/Drawer',
  tags: ['autodocs'],
  component: 'sq-drawer',
};
export default meta;
type Story = StoryObj;

export const Right: Story = {
  render: () => html`<drawer-demo position="right" title="Right Drawer"></drawer-demo>`,
};

export const Left: Story = {
  render: () => html`<drawer-demo position="left" title="Left Drawer"></drawer-demo>`,
};

export const Top: Story = {
  render: () => html`<drawer-demo position="top" title="Top Drawer"></drawer-demo>`,
};

export const Bottom: Story = {
  render: () => html`<drawer-demo position="bottom" title="Bottom Drawer"></drawer-demo>`,
};

export const PreOpen: Story = {
  render: () => html`
    <sq-drawer open position="right" title="Settings">
      <div slot="header">Settings</div>
      <p>This drawer is open by default. Use the <code>open</code> attribute to control visibility.</p>
      <ul>
        <li>Profile settings</li>
        <li>Notification preferences</li>
        <li>Privacy options</li>
        <li>Account management</li>
      </ul>
      <div slot="footer">
        <sq-button variant="subtle">Cancel</sq-button>
        <sq-button>Save Changes</sq-button>
      </div>
    </sq-drawer>
  `,
};
