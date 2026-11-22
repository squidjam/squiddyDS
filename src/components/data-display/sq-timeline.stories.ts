import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../data-display/sq-timeline';

const meta = {
  title: 'Data Display/Timeline',
  component: 'sq-timeline',
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: { type: 'select', options: ['vertical', 'horizontal'] } },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <sq-timeline style="max-width: 400px;">
      <div class="timeline-item" data-variant="default">
        <div class="timeline-item-content">
          <div class="timeline-item-header">
            <h3 class="timeline-item-title">Project Started</h3>
          </div>
          <time class="timeline-item-date">2024-01-15</time>
          <div class="timeline-item-body"><p>Initial project kickoff meeting and planning.</p></div>
        </div>
      </div>
      <div class="timeline-item" data-variant="success">
        <div class="timeline-item-content">
          <div class="timeline-item-header">
            <h3 class="timeline-item-title">Beta Release</h3>
          </div>
          <time class="timeline-item-date">2024-03-20</time>
          <div class="timeline-item-body"><p>First beta version released to testers.</p></div>
        </div>
      </div>
      <div class="timeline-item" data-variant="info">
        <div class="timeline-item-content">
          <div class="timeline-item-header">
            <h3 class="timeline-item-title">Public Launch</h3>
          </div>
          <time class="timeline-item-date">2024-06-01</time>
          <div class="timeline-item-body"><p>Product launched to the public.</p></div>
        </div>
      </div>
    </sq-timeline>
  `,
};

export const Programmatic: Story = {
  render: () => {
    const timeline = document.createElement('sq-timeline');
    timeline.style.maxWidth = '400px';
    timeline.items = [
      { date: '2024-01-15', title: 'Project Started', content: 'Initial project kickoff meeting.', variant: 'default' },
      { date: '2024-03-20', title: 'Beta Release', content: 'First beta version released.', variant: 'success' },
      { date: '2024-04-10', title: 'Security Alert', content: 'Critical vulnerability patched.', variant: 'warning' },
      { date: '2024-06-01', title: 'Public Launch', content: 'Product launched publicly.', variant: 'info' },
    ];
    return timeline;
  },
};

export const Horizontal: Story = {
  render: () => html`
    <sq-timeline orientation="horizontal" style="max-width: 800px;">
      <div class="timeline-item" data-variant="default">
        <div class="timeline-item-content">
          <div class="timeline-item-header">
            <h3 class="timeline-item-title">Planning</h3>
          </div>
          <time class="timeline-item-date">Q1 2024</time>
        </div>
      </div>
      <div class="timeline-item" data-variant="success">
        <div class="timeline-item-content">
          <div class="timeline-item-header">
            <h3 class="timeline-item-title">Development</h3>
          </div>
          <time class="timeline-item-date">Q2 2024</time>
        </div>
      </div>
      <div class="timeline-item" data-variant="info">
        <div class="timeline-item-content">
          <div class="timeline-item-header">
            <h3 class="timeline-item-title">Testing</h3>
          </div>
          <time class="timeline-item-date">Q3 2024</time>
        </div>
      </div>
      <div class="timeline-item" data-variant="warning">
        <div class="timeline-item-content">
          <div class="timeline-item-header">
            <h3 class="timeline-item-title">Launch</h3>
          </div>
          <time class="timeline-item-date">Q4 2024</time>
        </div>
      </div>
    </sq-timeline>
  `,
};

export const WithHeader: Story = {
  render: () => html`
    <sq-timeline style="max-width: 400px;">
      <div slot="header">
        <h3 style="margin: 0 0 4px 0;">Release History</h3>
        <p style="margin: 0; color: var(--sq-fg-muted); font-size: var(--sq-text-sm);">Key milestones for the project.</p>
      </div>
      <div class="timeline-item" data-variant="default">
        <div class="timeline-item-content">
          <div class="timeline-item-header">
            <h3 class="timeline-item-title">v1.0.0</h3>
          </div>
          <time class="timeline-item-date">2024-06-01</time>
          <div class="timeline-item-body"><p>Initial stable release.</p></div>
        </div>
      </div>
      <div class="timeline-item" data-variant="success">
        <div class="timeline-item-content">
          <div class="timeline-item-header">
            <h3 class="timeline-item-title">v2.0.0</h3>
          </div>
          <time class="timeline-item-date">2024-12-01</time>
          <div class="timeline-item-body"><p>Major feature update.</p></div>
        </div>
      </div>
    </sq-timeline>
  `,
};
