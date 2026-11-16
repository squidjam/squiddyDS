import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-tabs';

const meta: Meta = {
  title: 'Navigation/Tabs',
  tags: ['autodocs'],
  component: 'sq-tabs',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['line', 'pill'],
    },
    activeIndex: { control: { type: 'number' } },
  },
  args: {
    variant: 'line',
    activeIndex: 0,
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <sq-tabs .variant=${args.variant} .activeIndex=${args.activeIndex}>
      <sq-tab label="Home">Home</sq-tab>
      <sq-tab label="Profile">Profile</sq-tab>
      <sq-tab label="Settings">Settings</sq-tab>
      <sq-tab-panel slot="panel">
        <p>This is the Home panel content.</p>
      </sq-tab-panel>
      <sq-tab-panel slot="panel">
        <p>This is the Profile panel content.</p>
      </sq-tab-panel>
      <sq-tab-panel slot="panel">
        <p>This is the Settings panel content.</p>
      </sq-tab-panel>
    </sq-tabs>
  `,
  args: { variant: 'line', activeIndex: 0 },
};

export const Pill: Story = {
  render: (args) => html`
    <sq-tabs .variant=${args.variant} .activeIndex=${args.activeIndex}>
      <sq-tab label="Overview">Overview</sq-tab>
      <sq-tab label="Analytics">Analytics</sq-tab>
      <sq-tab label="Reports">Reports</sq-tab>
      <sq-tab label="Archive">Archive</sq-tab>
      <sq-tab-panel slot="panel">
        <p>Overview panel content.</p>
      </sq-tab-panel>
      <sq-tab-panel slot="panel">
        <p>Analytics panel content.</p>
      </sq-tab-panel>
      <sq-tab-panel slot="panel">
        <p>Reports panel content.</p>
      </sq-tab-panel>
      <sq-tab-panel slot="panel">
        <p>Archive panel content.</p>
      </sq-tab-panel>
    </sq-tabs>
  `,
  args: { variant: 'pill', activeIndex: 1 },
};

export const WithBadge: Story = {
  render: () => html`
    <sq-tabs>
      <sq-tab label="Inbox">Inbox</sq-tab>
      <sq-tab label="Sent">Sent</sq-tab>
      <sq-tab label="Notifications" badge="5">Notifications</sq-tab>
      <sq-tab label="Archive">Archive</sq-tab>
      <sq-tab-panel slot="panel">
        <p>Inbox panel — your messages appear here.</p>
      </sq-tab-panel>
      <sq-tab-panel slot="panel">
        <p>Sent panel — your sent messages.</p>
      </sq-tab-panel>
      <sq-tab-panel slot="panel">
        <p>Notifications panel — 5 unread notifications.</p>
      </sq-tab-panel>
      <sq-tab-panel slot="panel">
        <p>Archive panel — archived items.</p>
      </sq-tab-panel>
    </sq-tabs>
  `,
};

export const ManyTabs: Story = {
  render: () => html`
    <sq-tabs>
      <sq-tab>Dashboard</sq-tab>
      <sq-tab>Users</sq-tab>
      <sq-tab>Products</sq-tab>
      <sq-tab>Orders</sq-tab>
      <sq-tab>Analytics</sq-tab>
      <sq-tab>Settings</sq-tab>
      <sq-tab-panel slot="panel"><p>Dashboard content.</p></sq-tab-panel>
      <sq-tab-panel slot="panel"><p>Users content.</p></sq-tab-panel>
      <sq-tab-panel slot="panel"><p>Products content.</p></sq-tab-panel>
      <sq-tab-panel slot="panel"><p>Orders content.</p></sq-tab-panel>
      <sq-tab-panel slot="panel"><p>Analytics content.</p></sq-tab-panel>
      <sq-tab-panel slot="panel"><p>Settings content.</p></sq-tab-panel>
    </sq-tabs>
  `,
};

export const SecondActive: Story = {
  render: () => html`
    <sq-tabs .activeIndex=${1}>
      <sq-tab>Home</sq-tab>
      <sq-tab>Profile</sq-tab>
      <sq-tab>Settings</sq-tab>
      <sq-tab-panel slot="panel"><p>Home panel content.</p></sq-tab-panel>
      <sq-tab-panel slot="panel"><p>Profile panel content — active by default.</p></sq-tab-panel>
      <sq-tab-panel slot="panel"><p>Settings panel content.</p></sq-tab-panel>
    </sq-tabs>
  `,
};
