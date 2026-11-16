import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './sq-article';
import '../text/sq-text';

const meta = {
  title: 'Semantic/Article',
  component: 'sq-article',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<sq-article>
    <div slot="header"><h2>Article Title</h2></div>
    <p>This is the main content of the article. Articles are self-contained compositions within a document.</p>
    <div slot="footer"><sq-text variant="caption">Published on 2024-01-01</sq-text></div>
    <div slot="metadata"><span>By Author Name</span><span>5 min read</span></div>
  </sq-article>`,
};

export const WithHeader: Story = {
  render: () => html`<sq-article>
    <div slot="header">
      <h2>Understanding Web Components</h2>
      <p style="color: var(--sq-fg-muted); margin: 4px 0 0;">A comprehensive guide</p>
    </div>
    <p>Web components are a set of web platform APIs that allow you to create custom, reusable, encapsulated HTML elements.</p>
    <p>They work across frameworks and can be used with any JavaScript library.</p>
  </sq-article>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
      <sq-article>
        <div slot="header"><h2>Simple Article</h2></div>
        <p>Content goes here.</p>
      </sq-article>
      <sq-article>
        <div slot="header"><h2>Full Article</h2></div>
        <p>This article has header, body, footer, and metadata slots.</p>
        <div slot="footer">Footer content</div>
        <div slot="metadata"><span>Author</span><span>Date</span></div>
      </sq-article>
    </div>
  `,
};
