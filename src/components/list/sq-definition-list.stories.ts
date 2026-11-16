import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-definition-list';

const meta = {
  title: 'List/DefinitionList',
  component: 'sq-definition-list',
  tags: ['autodocs'],
  argTypes: {
    horizontal: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<sq-definition-list>
    <dt>HTML</dt>
    <dd>HyperText Markup Language — the standard markup language for documents designed to be displayed in a web browser.</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets — a style sheet language used for describing the presentation of a document written in HTML.</dd>
    <dt>JavaScript</dt>
    <dd>A programming language that is one of the core technologies of the World Wide Web.</dd>
  </sq-definition-list>`,
};

export const Horizontal: Story = {
  render: () => html`<sq-definition-list horizontal>
    <dt>Width</dt>
    <dd>1920px</dd>
    <dt>Height</dt>
    <dd>1080px</dd>
    <dt>Format</dt>
    <dd>PNG</dd>
  </sq-definition-list>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px; max-width: 600px;">
      <p>Vertical definition list:</p>
      <sq-definition-list>
        <dt>Term 1</dt>
        <dd>Definition of term 1.</dd>
        <dt>Term 2</dt>
        <dd>Definition of term 2.</dd>
      </sq-definition-list>
      <p>Horizontal definition list:</p>
      <sq-definition-list horizontal>
        <dt>Name</dt>
        <dd>Squiddy Design System</dd>
        <dt>Version</dt>
        <dd>1.0.0</dd>
        <dt>License</dt>
        <dd>MIT</dd>
      </sq-definition-list>
    </div>
  `,
};
