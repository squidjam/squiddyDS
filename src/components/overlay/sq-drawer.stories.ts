import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-drawer';
import '../interactive/sq-button';

const meta: Meta = {
  title: 'Overlay/Drawer',
  tags: ['autodocs'],
  component: 'sq-drawer',
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['left', 'right', 'top', 'bottom'],
    },
    width: { control: 'text' },
    height: { control: 'text' },
    label: { control: 'text' },
    open: { control: 'boolean' },
    closeOnOverlay: { control: 'boolean' },
  },
  args: {
    position: 'right',
    width: '400px',
    height: '300px',
    label: 'Drawer',
    open: false,
    closeOnOverlay: true,
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <sq-button id="open-drawer-default">Open Drawer</sq-button>
    <sq-drawer id="drawer-default" label="Drawer">
      <p>This is the drawer content. You can put any content here.</p>
    </sq-drawer>
  `,
  play: ({ canvasElement }) => {
    const btn = canvasElement.querySelector('#open-drawer-default') as HTMLElement;
    const drawer = canvasElement.querySelector('#drawer-default') as HTMLElement;
    if (btn && drawer) {
      btn.addEventListener('click', () => {
        drawer.open = true;
      });
    }
  },
};

export const FromLeft: Story = {
  render: () => html`
    <sq-button id="open-drawer-left">Open Left Drawer</sq-button>
    <sq-drawer id="drawer-left" position="left" label="Left Drawer">
      <p>This drawer slides in from the left.</p>
    </sq-drawer>
  `,
  play: ({ canvasElement }) => {
    const btn = canvasElement.querySelector('#open-drawer-left') as HTMLElement;
    const drawer = canvasElement.querySelector('#drawer-left') as HTMLElement;
    if (btn && drawer) {
      btn.addEventListener('click', () => {
        drawer.open = true;
      });
    }
  },
};

export const FromTop: Story = {
  render: () => html`
    <sq-button id="open-drawer-top">Open Top Drawer</sq-button>
    <sq-drawer id="drawer-top" position="top" label="Top Drawer" height="250px">
      <p>This drawer slides in from the top.</p>
    </sq-drawer>
  `,
  play: ({ canvasElement }) => {
    const btn = canvasElement.querySelector('#open-drawer-top') as HTMLElement;
    const drawer = canvasElement.querySelector('#drawer-top') as HTMLElement;
    if (btn && drawer) {
      btn.addEventListener('click', () => {
        drawer.open = true;
      });
    }
  },
};

export const WithFooter: Story = {
  render: () => html`
    <sq-button id="open-drawer-footer">Open Drawer with Footer</sq-button>
    <sq-drawer id="drawer-footer" label="Drawer with Footer">
      <p>Drawer content goes here.</p>
      <div slot="footer">
        <sq-button variant="subtle" id="cancel-footer">Cancel</sq-button>
        <sq-button variant="primary" id="confirm-footer">Confirm</sq-button>
      </div>
    </sq-drawer>
  `,
  play: ({ canvasElement }) => {
    const btn = canvasElement.querySelector('#open-drawer-footer') as HTMLElement;
    const drawer = canvasElement.querySelector('#drawer-footer') as HTMLElement;
    const cancel = canvasElement.querySelector('#cancel-footer') as HTMLElement;
    const confirm = canvasElement.querySelector('#confirm-footer') as HTMLElement;
    if (btn && drawer) {
      btn.addEventListener('click', () => { drawer.open = true; });
      if (cancel) cancel.addEventListener('click', () => { drawer.open = false; });
      if (confirm) confirm.addEventListener('click', () => { drawer.open = false; });
    }
  },
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <h4 style="margin: 0; font-size: 14px; color: var(--sq-fg-muted);">Positions</h4>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <sq-button id="open-right">Right</sq-button>
        <sq-button id="open-left">Left</sq-button>
        <sq-button id="open-top">Top</sq-button>
        <sq-button id="open-bottom">Bottom</sq-button>
      </div>
      <sq-drawer id="drawer-right" position="right" label="Right Drawer">
        <p>Right drawer content.</p>
      </sq-drawer>
      <sq-drawer id="drawer-left" position="left" label="Left Drawer">
        <p>Left drawer content.</p>
      </sq-drawer>
      <sq-drawer id="drawer-top" position="top" label="Top Drawer" height="200px">
        <p>Top drawer content.</p>
      </sq-drawer>
      <sq-drawer id="drawer-bottom" position="bottom" label="Bottom Drawer" height="200px">
        <p>Bottom drawer content.</p>
      </sq-drawer>
    </div>
  `,
  play: ({ canvasElement }) => {
    const positions = ['right', 'left', 'top', 'bottom'];
    positions.forEach(pos => {
      const btn = canvasElement.querySelector(`#open-${pos}`) as HTMLElement;
      const drawer = canvasElement.querySelector(`#drawer-${pos}`) as HTMLElement;
      if (btn && drawer) {
        btn.addEventListener('click', () => { drawer.open = true; });
        drawer.addEventListener('close', () => { drawer.open = false; });
      }
    });
  },
};
