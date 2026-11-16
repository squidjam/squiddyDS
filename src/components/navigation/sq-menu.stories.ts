import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-menu';
import './sq-menu-item';
import './sq-menu-divider';

const meta: Meta = {
  title: 'Navigation/Menu',
  component: 'sq-menu',
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
    layout: {
      control: { type: 'radio' },
      options: ['inline', 'block'],
    },
  },
  args: {
    orientation: 'horizontal',
    layout: 'inline',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => html`
    <sq-menu orientation=${args.orientation} layout=${args.layout}>
      <sq-menu-item href="#home">Home</sq-menu-item>
      <sq-menu-item>
        File
        <sq-menu slot="submenu" submenu orientation="vertical">
          <sq-menu-item href="#new" kbd="⌘N">New</sq-menu-item>
          <sq-menu-item href="#open" kbd="⌘O">Open</sq-menu-item>
          <sq-menu-item href="#save" kbd="⌘S">Save</sq-menu-item>
          <sq-menu-divider></sq-menu-divider>
          <sq-menu-item href="#export">Export</sq-menu-item>
          <sq-menu-item href="#close" kbd="⌘W">Close</sq-menu-item>
        </sq-menu>
      </sq-menu-item>
      <sq-menu-item>
        Edit
        <sq-menu slot="submenu" submenu orientation="vertical">
          <sq-menu-item href="#undo" kbd="⌘Z">Undo</sq-menu-item>
          <sq-menu-item href="#redo" kbd="⇧⌘Z">Redo</sq-menu-item>
          <sq-menu-divider></sq-menu-divider>
          <sq-menu-item href="#cut" kbd="⌘X">Cut</sq-menu-item>
          <sq-menu-item href="#copy" kbd="⌘C">Copy</sq-menu-item>
          <sq-menu-item href="#paste" kbd="⌘V">Paste</sq-menu-item>
        </sq-menu>
      </sq-menu-item>
      <sq-menu-item href="#view">View</sq-menu-item>
      <sq-menu-item href="#help">Help</sq-menu-item>
    </sq-menu>
  `,
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    layout: 'block',
  },
  render: (args) => html`
    <sq-menu orientation=${args.orientation} layout=${args.layout}>
      <sq-menu-item href="#dashboard">Dashboard</sq-menu-item>
      <sq-menu-item>
        Projects
        <sq-menu slot="submenu" submenu orientation="horizontal">
          <sq-menu-item href="#all">All Projects</sq-menu-item>
          <sq-menu-item href="#active">Active</sq-menu-item>
          <sq-menu-item href="#archived">Archived</sq-menu-item>
          <sq-menu-item>
            More
            <sq-menu slot="submenu" submenu orientation="vertical">
              <sq-menu-item href="#starred">Starred</sq-menu-item>
              <sq-menu-item href="#shared">Shared</sq-menu-item>
            </sq-menu>
          </sq-menu-item>
        </sq-menu>
      </sq-menu-item>
      <sq-menu-item href="#team">Team</sq-menu-item>
      <sq-menu-item href="#settings">Settings</sq-menu-item>
      <sq-menu-divider></sq-menu-divider>
      <sq-menu-item href="#logout">Logout</sq-menu-item>
    </sq-menu>
  `,
};

export const Nested: Story = {
  render: () => html`
    <sq-menu orientation="horizontal">
      <sq-menu-item href="#home">Home</sq-menu-item>
      <sq-menu-item>
        Products
        <sq-menu slot="submenu" submenu orientation="vertical">
          <sq-menu-item href="#electronics">Electronics</sq-menu-item>
          <sq-menu-item>
            Clothing
            <sq-menu slot="submenu" submenu orientation="horizontal">
              <sq-menu-item href="#men">Men</sq-menu-item>
              <sq-menu-item>
                Women
                <sq-menu slot="submenu" submenu orientation="vertical">
                  <sq-menu-item href="#dresses">Dresses</sq-menu-item>
                  <sq-menu-item href="#tops">Tops</sq-menu-item>
                  <sq-menu-item>
                    Accessories
                    <sq-menu slot="submenu" submenu orientation="horizontal">
                      <sq-menu-item href="#bags">Bags</sq-menu-item>
                      <sq-menu-item href="#jewelry">Jewelry</sq-menu-item>
                    </sq-menu>
                  </sq-menu-item>
                </sq-menu>
              </sq-menu-item>
              <sq-menu-item href="#kids">Kids</sq-menu-item>
            </sq-menu>
          </sq-menu-item>
          <sq-menu-item href="#books">Books</sq-menu-item>
        </sq-menu>
      </sq-menu-item>
      <sq-menu-item href="#about">About</sq-menu-item>
    </sq-menu>
  `,
};

export const WithDividers: Story = {
  render: () => html`
    <sq-menu orientation="horizontal">
      <sq-menu-item href="#home">Home</sq-menu-item>
      <sq-menu-divider></sq-menu-divider>
      <sq-menu-item href="#products">Products</sq-menu-item>
      <sq-menu-item href="#services">Services</sq-menu-item>
      <sq-menu-divider></sq-menu-divider>
      <sq-menu-item href="#about">About</sq-menu-item>
      <sq-menu-item href="#contact">Contact</sq-menu-item>
    </sq-menu>
  `,
};

export const DisabledItems: Story = {
  render: () => html`
    <sq-menu orientation="horizontal">
      <sq-menu-item href="#home">Home</sq-menu-item>
      <sq-menu-item disabled>Disabled Item</sq-menu-item>
      <sq-menu-item href="#active">Active</sq-menu-item>
      <sq-menu-item>
        File
        <sq-menu slot="submenu" submenu orientation="vertical">
          <sq-menu-item href="#new">New</sq-menu-item>
          <sq-menu-item disabled>Save (Disabled)</sq-menu-item>
          <sq-menu-item href="#open">Open</sq-menu-item>
          <sq-menu-divider></sq-menu-divider>
          <sq-menu-item disabled>Export (Disabled)</sq-menu-item>
        </sq-menu>
      </sq-menu-item>
      <sq-menu-item href="#help">Help</sq-menu-item>
    </sq-menu>
  `,
};

export const SmartPositioning: Story = {
  render: () => html`
    <div style="display: flex; justify-content: space-between; padding: 20px;">
      <sq-menu orientation="horizontal">
        <sq-menu-item href="#left">Left Menu</sq-menu-item>
        <sq-menu-item>
          Submenu
          <sq-menu slot="submenu" submenu orientation="vertical">
            <sq-menu-item href="#item1">Item 1</sq-menu-item>
            <sq-menu-item href="#item2">Item 2</sq-menu-item>
            <sq-menu-item href="#item3">Item 3</sq-menu-item>
          </sq-menu>
        </sq-menu-item>
      </sq-menu>
      <sq-menu orientation="horizontal">
        <sq-menu-item>
          Edge Submenu
          <sq-menu slot="submenu" submenu orientation="vertical">
            <sq-menu-item href="#item1">Item 1</sq-menu-item>
            <sq-menu-item href="#item2">Item 2</sq-menu-item>
            <sq-menu-item href="#item3">Item 3</sq-menu-item>
          </sq-menu>
        </sq-menu-item>
        <sq-menu-item href="#right">Right Menu</sq-menu-item>
      </sq-menu>
    </div>
  `,
};
