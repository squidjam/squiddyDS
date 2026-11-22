import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../data-display/sq-timetree';

const meta = {
  title: 'Data Display/Timetree',
  component: 'sq-timetree',
  tags: ['autodocs'],
  argTypes: {
    showLegend: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const tree = document.createElement('sq-timetree');
    tree.nodes = [
      { id: '1', label: 'Initial commit', date: '2024-01-01', branch: 'main', description: 'Project initialization' },
      { id: '2', label: 'Add authentication', date: '2024-01-15', branch: 'main', description: 'User login and registration' },
      { id: '3', label: 'Feature: dark mode', date: '2024-02-01', branch: 'feature/dark-mode', description: 'Dark theme support', parentId: '2' },
      { id: '4', label: 'Fix: login bug', date: '2024-02-10', branch: 'main', description: 'Fixed session timeout issue' },
      { id: '5', label: 'Merge dark mode', date: '2024-02-15', branch: 'main', description: 'Merged feature/dark-mode', parentId: '4', mergeTargetId: '3', variant: 'success' },
      { id: '6', label: 'Feature: API v2', date: '2024-03-01', branch: 'feature/api-v2', description: 'New REST API endpoints', parentId: '5' },
      { id: '7', label: 'Hotfix: security', date: '2024-03-10', branch: 'main', description: 'Patched XSS vulnerability', parentId: '5', variant: 'error' },
    ];
    tree.branches = [
      { name: 'main', color: '#3b82f6' },
      { name: 'feature/dark-mode', color: '#22c55e' },
      { name: 'feature/api-v2', color: '#f59e0b' },
    ];
    return tree;
  },
};

export const SingleBranch: Story = {
  render: () => {
    const tree = document.createElement('sq-timetree');
    tree.nodes = [
      { id: '1', label: 'v1.0 Release', date: '2024-01-01', description: 'Initial public release' },
      { id: '2', label: 'v1.1 Patch', date: '2024-02-15', description: 'Bug fixes and improvements' },
      { id: '3', label: 'v2.0 Release', date: '2024-04-01', description: 'Major version upgrade', variant: 'success' },
      { id: '4', label: 'v2.1 Hotfix', date: '2024-05-20', description: 'Critical security patch', variant: 'error' },
    ];
    return tree;
  },
};

export const WithHeader: Story = {
  render: () => {
    const tree = document.createElement('sq-timetree');
    const wrapper = document.createElement('div');
    wrapper.style.maxWidth = '600px';
    const header = document.createElement('div');
    header.slot = 'header';
    header.innerHTML = '<h3 style="margin: 0 0 4px 0;">Git History</h3><p style="margin: 0; color: var(--sq-fg-muted); font-size: var(--sq-text-sm);">Branching timeline of recent commits.</p>';
    wrapper.appendChild(header);
    wrapper.appendChild(tree);
    tree.nodes = [
      { id: 'a1b2c3', label: 'feat: add user profiles', date: '2024-06-01', branch: 'main' },
      { id: 'd4e5f6', label: 'fix: profile image upload', date: '2024-06-05', branch: 'main' },
      { id: 'g7h8i9', label: 'feat: profile settings', date: '2024-06-10', branch: 'feature/profiles', parentId: 'a1b2c3' },
      { id: 'j0k1l2', label: 'merge: profile settings', date: '2024-06-15', branch: 'main', parentId: 'd4e5f6', mergeTargetId: 'g7h8i9', variant: 'success' },
    ];
    tree.branches = [
      { name: 'main', color: '#3b82f6' },
      { name: 'feature/profiles', color: '#D946EF' },
    ];
    return wrapper;
  },
};

export const WithoutLegend: Story = {
  render: () => {
    const tree = document.createElement('sq-timetree');
    tree.showLegend = false;
    tree.nodes = [
      { id: '1', label: 'Start', date: '2024-01-01', branch: 'main' },
      { id: '2', label: 'Branch off', date: '2024-02-01', branch: 'dev', parentId: '1' },
      { id: '3', label: 'Main continues', date: '2024-02-15', branch: 'main' },
      { id: '4', label: 'Merge back', date: '2024-03-01', branch: 'main', parentId: '3', mergeTargetId: '2', variant: 'info' },
    ];
    tree.branches = [
      { name: 'main', color: '#3b82f6' },
      { name: 'dev', color: '#22c55e' },
    ];
    return tree;
  },
};

export const Dense: Story = {
  render: () => {
    const tree = document.createElement('sq-timetree');
    tree.variant = 'dense';
    tree.nodes = [
      { id: '1', label: 'Initial commit', date: '2024-01-01', branch: 'main', description: 'Project initialization' },
      { id: '2', label: 'Add authentication', date: '2024-01-15', branch: 'main', description: 'User login and registration' },
      { id: '3', label: 'Feature: dark mode', date: '2024-02-01', branch: 'feature/dark-mode', description: 'Dark theme support', parentId: '2' },
      { id: '4', label: 'Fix: login bug', date: '2024-02-10', branch: 'main', description: 'Fixed session timeout issue' },
      { id: '5', label: 'Merge dark mode', date: '2024-02-15', branch: 'main', description: 'Merged feature/dark-mode', parentId: '4', mergeTargetId: '3', variant: 'success' },
      { id: '6', label: 'Feature: API v2', date: '2024-03-01', branch: 'feature/api-v2', description: 'New REST API endpoints', parentId: '5' },
      { id: '7', label: 'Hotfix: security', date: '2024-03-10', branch: 'main', description: 'Patched XSS vulnerability', parentId: '5', variant: 'error' },
    ];
    tree.branches = [
      { name: 'main', color: '#3b82f6' },
      { name: 'feature/dark-mode', color: '#22c55e' },
      { name: 'feature/api-v2', color: '#f59e0b' },
    ];
    return tree;
  },
};
