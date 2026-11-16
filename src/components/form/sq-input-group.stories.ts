import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-input-group';
import '../form/sq-input';

const meta: Meta = {
  title: 'Form/InputGroup',
  tags: ['autodocs'],
  component: 'sq-input-group',
  argTypes: {
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    errorMsg: { control: 'text' },
    helperText: { control: 'text' },
  },
  args: {
    error: false,
    disabled: false,
    errorMsg: '',
    helperText: '',
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <sq-input-group>
      <span slot="prefix">$</span>
      <input type="text" placeholder="Enter amount" />
    </sq-input-group>
  `,
};

export const WithSuffix: Story = {
  render: () => html`
    <sq-input-group>
      <input type="text" placeholder="Search" />
      <span slot="suffix">kg</span>
    </sq-input-group>
  `,
};

export const WithBoth: Story = {
  render: () => html`
    <sq-input-group>
      <span slot="prefix">https://</span>
      <input type="text" placeholder="example.com" />
      <span slot="suffix">/</span>
    </sq-input-group>
  `,
};

export const WithError: Story = {
  render: () => html`
    <sq-input-group error error-msg="Invalid URL format">
      <span slot="prefix">https://</span>
      <input type="text" value="invalid" />
    </sq-input-group>
  `,
};

export const WithHelper: Story = {
  render: () => html`
    <sq-input-group helper-text="Enter your website URL">
      <span slot="prefix">https://</span>
      <input type="text" placeholder="example.com" />
    </sq-input-group>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <sq-input-group disabled>
      <span slot="prefix">$</span>
      <input type="text" value="100.00" disabled />
    </sq-input-group>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">With Prefix</h4>
        <sq-input-group>
          <span slot="prefix">$</span>
          <input type="text" placeholder="Enter amount" />
        </sq-input-group>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">With Suffix</h4>
        <sq-input-group>
          <input type="text" placeholder="Enter weight" />
          <span slot="suffix">kg</span>
        </sq-input-group>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">With Both</h4>
        <sq-input-group>
          <span slot="prefix">https://</span>
          <input type="text" placeholder="example.com" />
          <span slot="suffix">/</span>
        </sq-input-group>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">With Error</h4>
        <sq-input-group error error-msg="Invalid URL format">
          <span slot="prefix">https://</span>
          <input type="text" value="invalid" />
        </sq-input-group>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">With Helper Text</h4>
        <sq-input-group helper-text="Enter your website URL">
          <span slot="prefix">https://</span>
          <input type="text" placeholder="example.com" />
        </sq-input-group>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Disabled</h4>
        <sq-input-group disabled>
          <span slot="prefix">$</span>
          <input type="text" value="100.00" disabled />
        </sq-input-group>
      </div>
    </div>
  `,
};
