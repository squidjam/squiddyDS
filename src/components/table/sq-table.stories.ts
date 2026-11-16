import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-table';
import './sq-th';
import './sq-td';

const meta = {
  title: 'Table/Table',
  component: 'table',
  tags: ['autodocs'],
  argTypes: {
    border: { control: { type: 'select', options: ['horizontal', 'vertical', 'all', 'none', 'outside', 'outline-subtle', 'inside'] } },
    variant: { control: { type: 'select', options: ['', 'striped', 'hover'] } },
    header: { control: { type: 'select', options: ['', 'dark', 'uppercase'] } },
    layout: { control: { type: 'select', options: ['', 'fixed'] } },
    spacing: { control: { type: 'select', options: ['', 'dense', 'sparse'] } },
    dense: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<table sq-table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice Johnson</td>
        <td>Developer</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Bob Smith</td>
        <td>Designer</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Carol White</td>
        <td>Manager</td>
        <td>Away</td>
      </tr>
    </tbody>
  </table>`,
};

export const WithSubComponents: Story = {
  render: () => html`<table sq-table="border:all zebra">
    <thead>
      <tr>
        <th><sq-th>Name</sq-th></th>
        <th><sq-th>Role</sq-th></th>
        <th><sq-th>Status</sq-th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><sq-td>Alice Johnson</sq-td></td>
        <td><sq-td>Developer</sq-td></td>
        <td><sq-td>Active</sq-td></td>
      </tr>
      <tr>
        <td><sq-td>Bob Smith</sq-td></td>
        <td><sq-td>Designer</sq-td></td>
        <td><sq-td>Active</sq-td></td>
      </tr>
      <tr>
        <td><sq-td>Carol White</sq-td></td>
        <td><sq-td>Manager</sq-td></td>
        <td><sq-td>Away</sq-td></td>
      </tr>
    </tbody>
  </table>`,
};

export const Striped: Story = {
  render: () => html`<table sq-table variant="striped">
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Stock</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Widget A</td><td>$10.00</td><td>150</td></tr>
      <tr><td>Widget B</td><td>$25.00</td><td>75</td></tr>
      <tr><td>Widget C</td><td>$15.00</td><td>200</td></tr>
      <tr><td>Widget D</td><td>$30.00</td><td>50</td></tr>
    </tbody>
  </table>`,
};

export const Hover: Story = {
  render: () => html`<table sq-table variant="hover">
    <thead>
      <tr>
        <th>File</th>
        <th>Size</th>
        <th>Modified</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>index.html</td><td>2.4 KB</td><td>Today</td></tr>
      <tr><td>styles.css</td><td>1.8 KB</td><td>Yesterday</td></tr>
      <tr><td>app.js</td><td>5.2 KB</td><td>2 days ago</td></tr>
    </tbody>
  </table>`,
};

export const BorderAll: Story = {
  render: () => html`<table sq-table border="all">
    <thead>
      <tr>
        <th>Q1</th>
        <th>Q2</th>
        <th>Q3</th>
        <th>Q4</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>$12K</td><td>$15K</td><td>$18K</td><td>$22K</td></tr>
      <tr><td>$10K</td><td>$14K</td><td>$16K</td><td>$20K</td></tr>
    </tbody>
  </table>`,
};

export const BorderOutside: Story = {
  render: () => html`<table sq-table border="outside">
    <thead>
      <tr>
        <th>Q1</th>
        <th>Q2</th>
        <th>Q3</th>
        <th>Q4</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>$12K</td><td>$15K</td><td>$18K</td><td>$22K</td></tr>
      <tr><td>$10K</td><td>$14K</td><td>$16K</td><td>$20K</td></tr>
    </tbody>
  </table>`,
};

export const BorderOutlineSubtle: Story = {
  render: () => html`<table sq-table border="outline-subtle">
    <thead>
      <tr>
        <th>Q1</th>
        <th>Q2</th>
        <th>Q3</th>
        <th>Q4</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>$12K</td><td>$15K</td><td>$18K</td><td>$22K</td></tr>
      <tr><td>$10K</td><td>$14K</td><td>$16K</td><td>$20K</td></tr>
    </tbody>
  </table>`,
};

export const BorderInside: Story = {
  render: () => html`<table sq-table border="inside">
    <thead>
      <tr>
        <th>Q1</th>
        <th>Q2</th>
        <th>Q3</th>
        <th>Q4</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>$12K</td><td>$15K</td><td>$18K</td><td>$22K</td></tr>
      <tr><td>$10K</td><td>$14K</td><td>$16K</td><td>$20K</td></tr>
    </tbody>
  </table>`,
};

export const Dense: Story = {
  render: () => html`<table sq-table dense>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>1</td><td>Alice</td><td>alice@example.com</td></tr>
      <tr><td>2</td><td>Bob</td><td>bob@example.com</td></tr>
      <tr><td>3</td><td>Carol</td><td>carol@example.com</td></tr>
    </tbody>
  </table>`,
};

export const WithCaption: Story = {
  render: () => html`<table sq-table>
    <caption>Team Members Overview</caption>
    <thead>
      <tr>
        <th>Name</th>
        <th>Department</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Alice</td><td>Engineering</td></tr>
      <tr><td>Bob</td><td>Design</td></tr>
    </tbody>
  </table>`,
};

export const CellAlignment: Story = {
  render: () => html`<table sq-table border="all">
    <thead>
      <tr>
        <th><sq-th>Name</sq-th></th>
        <th><sq-th align="center">Centered</sq-th></th>
        <th><sq-th align="right">Right</sq-th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><sq-td>Alice</sq-td></td>
        <td><sq-td align="center">Middle</sq-td></td>
        <td><sq-td align="right">$1,234</sq-td></td>
      </tr>
      <tr>
        <td><sq-td>Bob</sq-td></td>
        <td><sq-td align="center">Center</sq-td></td>
        <td><sq-td align="right">$5,678</sq-td></td>
      </tr>
    </tbody>
  </table>`,
};

export const HeaderDark: Story = {
  render: () => html`<table sq-table="header:dark">
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice Johnson</td>
        <td>Developer</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Bob Smith</td>
        <td>Designer</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Carol White</td>
        <td>Manager</td>
        <td>Away</td>
      </tr>
    </tbody>
  </table>`,
};

export const HeaderUppercase: Story = {
  render: () => html`<table sq-table="header:uppercase">
    <thead>
      <tr>
        <th>Product</th>
        <th>Category</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Widget A</td><td>Electronics</td><td>$10.00</td></tr>
      <tr><td>Widget B</td><td>Accessories</td><td>$25.00</td></tr>
      <tr><td>Widget C</td><td>Electronics</td><td>$15.00</td></tr>
    </tbody>
  </table>`,
};

export const SpacingDense: Story = {
  render: () => html`<table sq-table="spacing:dense">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>1</td><td>Alice</td><td>alice@example.com</td></tr>
      <tr><td>2</td><td>Bob</td><td>bob@example.com</td></tr>
      <tr><td>3</td><td>Carol</td><td>carol@example.com</td></tr>
    </tbody>
  </table>`,
};

export const SpacingSparse: Story = {
  render: () => html`<table sq-table="spacing:sparse">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Project Alpha</td><td>A comprehensive redesign of the main platform</td><td>In Progress</td></tr>
      <tr><td>Project Beta</td><td>Mobile application development for iOS and Android</td><td>Planning</td></tr>
      <tr><td>Project Gamma</td><td>Infrastructure migration to cloud services</td><td>Completed</td></tr>
    </tbody>
  </table>`,
};

export const LayoutFixed: Story = {
  render: () => html`<table sq-table="layout:fixed" style="table-layout: fixed; width: 100%;">
    <colgroup>
      <col style="width: 20%;">
      <col style="width: 50%;">
      <col style="width: 30%;">
    </colgroup>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Alice</td><td>This is a longer description that will wrap within the fixed column width</td><td>Active</td></tr>
      <tr><td>Bob</td><td>Short description</td><td>Away</td></tr>
    </tbody>
  </table>`,
};

export const CombinedAttributes: Story = {
  render: () => html`<table sq-table="border:all header:dark layout:fixed spacing:sparse zebra">
    <thead>
      <tr>
        <th><sq-th>Name</sq-th></th>
        <th><sq-th>Role</sq-th></th>
        <th><sq-th>Status</sq-th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><sq-td>Alice Johnson</sq-td></td>
        <td><sq-td>Developer</sq-td></td>
        <td><sq-td>Active</sq-td></td>
      </tr>
      <tr>
        <td><sq-td>Bob Smith</sq-td></td>
        <td><sq-td>Designer</sq-td></td>
        <td><sq-td>Active</sq-td></td>
      </tr>
      <tr>
        <td><sq-td>Carol White</sq-td></td>
        <td><sq-td>Manager</sq-td></td>
        <td><sq-td>Away</sq-td></td>
      </tr>
    </tbody>
  </table>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px; max-width: 600px;">
      <p>Default table with elegant styling:</p>
      <table sq-table>
        <thead><tr><th>Name</th><th>Role</th></tr></thead>
        <tbody><tr><td>Alice</td><td>Dev</td></tr><tr><td>Bob</td><td>Design</td></tr></tbody>
      </table>
      <p>Dark header with striped rows:</p>
      <table sq-table="header:dark zebra">
        <thead><tr><th>Name</th><th>Role</th></tr></thead>
        <tbody><tr><td>Alice</td><td>Dev</td></tr><tr><td>Bob</td><td>Design</td></tr><tr><td>Carol</td><td>PM</td></tr></tbody>
      </table>
      <p>Uppercase header with hover effect:</p>
      <table sq-table="header:uppercase hover">
        <thead><tr><th>Name</th><th>Role</th></tr></thead>
        <tbody><tr><td>Alice</td><td>Dev</td></tr><tr><td>Bob</td><td>Design</td></tr></tbody>
      </table>
      <p>All borders with outside rounded corners:</p>
      <table sq-table="border:all">
        <thead><tr><th>Name</th><th>Role</th></tr></thead>
        <tbody><tr><td>Alice</td><td>Dev</td></tr><tr><td>Bob</td><td>Design</td></tr></tbody>
      </table>
      <p>Outside border (normal strength):</p>
      <table sq-table="border:outside">
        <thead><tr><th>Name</th><th>Role</th></tr></thead>
        <tbody><tr><td>Alice</td><td>Dev</td></tr><tr><td>Bob</td><td>Design</td></tr></tbody>
      </table>
      <p>Outline subtle border:</p>
      <table sq-table="border:outline-subtle">
        <thead><tr><th>Name</th><th>Role</th></tr></thead>
        <tbody><tr><td>Alice</td><td>Dev</td></tr><tr><td>Bob</td><td>Design</td></tr></tbody>
      </table>
      <p>Dense spacing:</p>
      <table sq-table="spacing:dense">
        <thead><tr><th>Name</th><th>Role</th></tr></thead>
        <tbody><tr><td>Alice</td><td>Dev</td></tr><tr><td>Bob</td><td>Design</td></tr></tbody>
      </table>
      <p>Sparse spacing with more air:</p>
      <table sq-table="spacing:sparse">
        <thead><tr><th>Name</th><th>Role</th></tr></thead>
        <tbody><tr><td>Alice</td><td>Dev</td></tr><tr><td>Bob</td><td>Design</td></tr></tbody>
      </table>
      <p>Combined attributes with sub-components:</p>
      <table sq-table="border:all header:dark spacing:sparse zebra">
        <thead><tr><th><sq-th>Name</sq-th></th><th><sq-th>Role</sq-th></th></tr></thead>
        <tbody><tr><td><sq-td>Alice</sq-td></td><td><sq-td>Dev</sq-td></td></tr><tr><td><sq-td>Bob</sq-td></td><td><sq-td>Design</sq-td></td></tr></tbody>
      </table>
    </div>
  `,
};
