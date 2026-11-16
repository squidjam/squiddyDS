import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-file-upload';

const meta: Meta = {
  title: 'Form/FileUpload',
  tags: ['autodocs'],
  component: 'sq-file-upload',
  argTypes: {
    multiple: { control: 'boolean' },
    accept: { control: 'text' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    hint: { control: 'text' },
  },
  args: {
    multiple: false,
    accept: '',
    disabled: false,
    label: 'Browse files',
    hint: 'PNG, JPG, or GIF up to 10MB',
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<sq-file-upload label="${args.label}" hint="${args.hint}" ?multiple="${args.multiple}" accept="${args.accept}" ?disabled="${args.disabled}"></sq-file-upload>`,
};

export const Multiple: Story = {
  render: () => html`<sq-file-upload multiple label="Browse files" hint="Select multiple files"></sq-file-upload>`,
};

export const ImageOnly: Story = {
  render: () => html`<sq-file-upload accept="image/*" label="Browse images" hint="Only image files accepted"></sq-file-upload>`,
};

export const Disabled: Story = {
  render: () => html`<sq-file-upload disabled label="Browse files"></sq-file-upload>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Default</h4>
        <sq-file-upload label="Browse files" hint="Drag and drop or click to upload"></sq-file-upload>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Multiple Files</h4>
        <sq-file-upload multiple label="Browse files" hint="Select multiple files"></sq-file-upload>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Image Only</h4>
        <sq-file-upload accept="image/*" label="Browse images" hint="Only image files accepted"></sq-file-upload>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--sq-fg-muted);">Disabled</h4>
        <sq-file-upload disabled label="Browse files"></sq-file-upload>
      </div>
    </div>
  `,
};
