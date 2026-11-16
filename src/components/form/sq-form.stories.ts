import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-form';
import '../form/sq-input';
import '../interactive/sq-button';

const meta: Meta = {
  title: 'Form/Form',
  tags: ['autodocs'],
  component: 'sq-form',
  argTypes: {
    method: {
      control: { type: 'select' },
      options: ['GET', 'POST', 'PUT', 'DELETE'],
    },
    disabled: { control: 'boolean' },
    noValidate: { control: 'boolean' },
  },
  args: {
    method: 'POST',
    disabled: false,
    noValidate: false,
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <sq-form>
      <sq-input label="Name" placeholder="Enter your name"></sq-input>
      <sq-input label="Email" type="email" placeholder="Enter your email"></sq-input>
      <sq-button type="submit" variant="primary">Submit</sq-button>
    </sq-form>
  `,
};

export const WithHeader: Story = {
  render: () => html`
    <sq-form>
      <div slot="header">
        <h3 style="margin: 0;">Contact Form</h3>
        <p style="margin: 4px 0 0; color: var(--sq-fg-muted); font-size: 14px;">Fill out the form below</p>
      </div>
      <sq-input label="Name" placeholder="Enter your name"></sq-input>
      <sq-input label="Email" type="email" placeholder="Enter your email"></sq-input>
      <sq-button type="submit" variant="primary">Submit</sq-button>
    </sq-form>
  `,
};

export const WithFooter: Story = {
  render: () => html`
    <sq-form>
      <sq-input label="Name" placeholder="Enter your name"></sq-input>
      <sq-input label="Email" type="email" placeholder="Enter your email"></sq-input>
      <div slot="footer">
        <sq-button variant="subtle">Cancel</sq-button>
        <sq-button type="submit" variant="primary">Submit</sq-button>
      </div>
    </sq-form>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Default Form</h4>
        <sq-form>
          <sq-input label="Name" placeholder="Enter your name"></sq-input>
          <sq-input label="Email" type="email" placeholder="Enter your email"></sq-input>
          <sq-button type="submit" variant="primary">Submit</sq-button>
        </sq-form>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">With Header</h4>
        <sq-form>
          <div slot="header">
            <h3 style="margin: 0;">Contact Form</h3>
            <p style="margin: 4px 0 0; color: var(--sq-fg-muted); font-size: 14px;">Fill out the form below</p>
          </div>
          <sq-input label="Name" placeholder="Enter your name"></sq-input>
          <sq-input label="Email" type="email" placeholder="Enter your email"></sq-input>
          <sq-button type="submit" variant="primary">Submit</sq-button>
        </sq-form>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">With Footer</h4>
        <sq-form>
          <sq-input label="Name" placeholder="Enter your name"></sq-input>
          <sq-input label="Email" type="email" placeholder="Enter your email"></sq-input>
          <div slot="footer">
            <sq-button variant="subtle">Cancel</sq-button>
            <sq-button type="submit" variant="primary">Submit</sq-button>
          </div>
        </sq-form>
      </div>
    </div>
  `,
};
