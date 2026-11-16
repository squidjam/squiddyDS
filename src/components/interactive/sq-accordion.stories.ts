import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './sq-accordion';

const meta: Meta = {
  title: 'Interactive/Accordion',
  tags: ['autodocs'],
  component: 'sq-accordion',
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <sq-accordion>
      <sq-accordion-item header="What is SquiddyDS?">
        <div slot="header">What is SquiddyDS?</div>
        <div>SquiddyDS is a modern design system built with Lit Web Components, providing reusable UI components with consistent styling.</div>
      </sq-accordion-item>
      <sq-accordion-item>
        <div slot="header">How do I get started?</div>
        <div>Install the package via npm and import the components you need. Each component is self-contained and ready to use.</div>
      </sq-accordion-item>
      <sq-accordion-item>
        <div slot="header">Is it accessible?</div>
        <div>Yes! All components follow WAI-ARIA guidelines and support keyboard navigation, focus management, and screen readers.</div>
      </sq-accordion-item>
    </sq-accordion>
  `,
};

export const OpenFirst: Story = {
  render: () => html`
    <sq-accordion>
      <sq-accordion-item open>
        <div slot="header">Getting Started</div>
        <div>Welcome to SquiddyDS! This accordion item is open by default using the <code>open</code> attribute.</div>
      </sq-accordion-item>
      <sq-accordion-item>
        <div slot="header">Installation</div>
        <div>Run <code>npm install squiddyds</code> to add the design system to your project.</div>
      </sq-accordion-item>
      <sq-accordion-item>
        <div slot="header">Theming</div>
        <div>Use the <code>sq-mode</code> attribute to switch between light and dark themes.</div>
      </sq-accordion-item>
    </sq-accordion>
  `,
};

export const MultipleOpen: Story = {
  render: () => html`
    <sq-accordion multiple>
      <sq-accordion-item open>
        <div slot="header">Feature One</div>
        <div>This accordion allows multiple items to be open simultaneously.</div>
      </sq-accordion-item>
      <sq-accordion-item open>
        <div slot="header">Feature Two</div>
        <div>Each item can be toggled independently without affecting others.</div>
      </sq-accordion-item>
      <sq-accordion-item>
        <div slot="header">Feature Three</div>
        <div>Click the header to expand or collapse any item.</div>
      </sq-accordion-item>
    </sq-accordion>
  `,
};
