import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../index';

const meta: Meta = {
  title: 'Components/Overview',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Squiddy Design System — A comprehensive web component library covering 150+ HTML elements.',
      },
    },
  },
};
export default meta;
type Story = StoryObj;

export const AllComponents: Story = {
  render: () => html`
    <sq-container size="lg" padded>
      <sq-hgroup>
        <h1>Squiddy Design System</h1>
        <h3>Web Components for Modern Web Applications</h3>
      </sq-hgroup>

      <sq-divider></sq-divider>

      <sq-section label="Interactive Components">
        <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
          <sq-button>Primary</sq-button>
          <sq-button variant="secondary">Secondary</sq-button>
          <sq-button variant="subtle">Subtle</sq-button>
          <sq-button variant="danger">Danger</sq-button>
          <sq-button variant="success">Success</sq-button>
          <sq-button size="sm">Small</sq-button>
          <sq-button size="lg">Large</sq-button>
          <sq-button disabled>Disabled</sq-button>
          <sq-button loading>Loading</sq-button>
        </div>
        <sq-divider></sq-divider>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <sq-details><span slot="summary">Expandable Section</span><p>Content inside details.</p></sq-details>
          <sq-progress value="75" max="100" show-label></sq-progress>
          <sq-meter value="0.6" min="0" max="1" show-label></sq-meter>
          <sq-switch label="Toggle Switch"></sq-switch>
        </div>
      </sq-section>

      <sq-section label="Form Components">
        <div style="display: grid; gap: 16px; max-width: 480px;">
          <sq-input label="Name" placeholder="Enter your name" required></sq-input>
          <sq-select label="Country">
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="de">Germany</option>
          </sq-select>
          <sq-textarea label="Message" placeholder="Type your message..." rows="3"></sq-textarea>
          <sq-range label="Volume" min="0" max="100" value="50"></sq-range>
          <sq-checkbox label="I agree to the terms"></sq-checkbox>
          <sq-radio name="plan" value="free" label="Free Plan" checked></sq-radio>
          <sq-radio name="plan" value="pro" label="Pro Plan"></sq-radio>
        </div>
      </sq-section>

      <sq-section label="Text Components">
        <sq-text variant="lead">This is a lead paragraph with larger text.</sq-text>
        <sq-text>Regular body text with normal weight.</sq-text>
        <sq-text weight="bold">Bold text for emphasis.</sq-text>
        <sq-text variant="small">Small text for captions and notes.</sq-text>
        <sq-code inline>const x = 42;</sq-code>
        <sq-mark>Highlighted text</sq-mark>
        <sq-kbd>Ctrl</sq-kbd> + <sq-kbd>C</sq-kbd>
        <sq-blockquote cite="Mark Twain">
          The secret of getting ahead is getting started.
        </sq-blockquote>
      </sq-section>

      <sq-section label="Layout Components">
        <sq-card variant="elevated" interactive>
          <span slot="header"><strong>Card Title</strong></span>
          <p>Card body content goes here.</p>
          <span slot="actions"><sq-button size="sm">Action</sq-button></span>
        </sq-card>
      </sq-section>

      <sq-section label="List Components">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
          <sq-list type="unordered">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </sq-list>
          <sq-list type="ordered">
            <li>Step one</li>
            <li>Step two</li>
            <li>Step three</li>
          </sq-list>
        </div>
      </sq-section>

      <sq-section label="Navigation">
        <sq-nav>
          <sq-link href="#">Home</sq-link>
          <sq-link href="#">About</sq-link>
          <sq-link href="#">Contact</sq-link>
        </sq-nav>
        <sq-divider></sq-divider>
        <sq-breadcrumb>
          <sq-link href="#">Home</sq-link>
          <span class="sep">/</span>
          <sq-link href="#">Products</sq-link>
          <span class="sep">/</span>
          <sq-link href="#" aria-current="page">Details</sq-link>
        </sq-breadcrumb>
      </sq-section>

      <sq-section label="Semantic Components">
        <sq-article>
          <span slot="header"><h2>Article Title</h2></span>
          <p>Article body content with rich text and media.</p>
          <span slot="metadata"><sq-text variant="small">Published on Nov 15, 2026</sq-text></span>
        </sq-article>
        <sq-aside>
          <p>This is an aside — supplementary information related to the main content.</p>
        </sq-aside>
      </sq-section>

      <sq-section label="Table Component">
        <table sq-table="border:all zebra">
          <caption>Sample Data</caption>
          <thead>
            <tr><th>Name</th><th>Role</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>Alice</td><td>Engineer</td><td>Active</td></tr>
            <tr><td>Bob</td><td>Designer</td><td>Away</td></tr>
            <tr><td>Charlie</td><td>Manager</td><td>Active</td></tr>
          </tbody>
        </table>
      </sq-section>

      <sq-section label="Head Elements">
        <sq-head-elements></sq-head-elements>
      </sq-section>

      <sq-footer>
        <sq-text variant="small" align="center">
          Squiddy Design System &copy; 2026 — Built with Lit.js &amp; Web Components
        </sq-text>
      </sq-footer>
    </sq-container>
  `,
};
