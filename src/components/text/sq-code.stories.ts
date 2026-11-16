import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-code';

const meta = {
  title: 'Text/Code',
  component: 'sq-code',
  tags: ['autodocs'],
  argTypes: {
    language: { control: 'text' },
    block: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Inline: Story = {
  render: () => html`<p>Use the <sq-code>console.log()</sq-code> function to debug.</p>`,
};

export const Block: Story = {
  render: () => html`<sq-code block language="javascript">
const greeting = 'Hello, World!';
console.log(greeting);
</sq-code>`,
};

export const WithLanguage: Story = {
  render: () => html`<sq-code block language="typescript">
interface User {
  name: string;
  age: number;
}
</sq-code>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
      <p>Inline code: <sq-code>const x = 42;</sq-code> in a sentence.</p>
      <sq-code block language="javascript">
function hello() {
  return 'Hello, World!';
}
</sq-code>
      <sq-code block language="css">
.container {
  display: flex;
  gap: 16px;
}
</sq-code>
    </div>
  `,
};
