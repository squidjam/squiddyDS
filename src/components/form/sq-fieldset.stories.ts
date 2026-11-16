import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-fieldset';
import './sq-checkbox';
import './sq-input';
import './sq-radio';
import '../interactive/sq-button';

const meta = {
  title: 'Form/Fieldset',
  component: 'sq-fieldset',
  tags: ['autodocs'],
  argTypes: {
    legend: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-fieldset
    legend="${args.legend}"
    ?disabled="${args.disabled}"
  >
    <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 12px;">
      <sq-checkbox label="Remember me"></sq-checkbox>
      <sq-checkbox label="Accept cookies"></sq-checkbox>
    </div>
  </sq-fieldset>`,
  args: { legend: 'Preferences' },
};

export const WithForm: Story = {
  render: () => html`<sq-fieldset legend="Contact Information">
    <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 12px;">
      <sq-input label="Email" type="email" placeholder="you@example.com"></sq-input>
      <sq-input label="Phone" type="tel" placeholder="+1 (555) 000-0000"></sq-input>
    </div>
  </sq-fieldset>`,
};

export const Disabled: Story = {
  render: () => html`<sq-fieldset legend="Disabled Section" disabled>
    <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 12px;">
      <sq-input label="Name" type="text" placeholder="Cannot edit"></sq-input>
      <sq-checkbox label="Cannot check"></sq-checkbox>
    </div>
  </sq-fieldset>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 500px;">
      <sq-fieldset legend="Simple Fieldset">
        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 12px;">
          <sq-radio label="Option A" name="fs1" value="a" .checked="${true}"></sq-radio>
          <sq-radio label="Option B" name="fs1" value="b"></sq-radio>
        </div>
      </sq-fieldset>
      <sq-fieldset legend="With Inputs">
        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 12px;">
          <sq-input label="Username" type="text" placeholder="Enter username"></sq-input>
          <sq-input label="Password" type="password" placeholder="Enter password"></sq-input>
        </div>
      </sq-fieldset>
      <sq-fieldset legend="Disabled" disabled>
        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 12px;">
          <sq-input label="Locked" type="text" disabled></sq-input>
        </div>
      </sq-fieldset>
    </div>
  `,
};
