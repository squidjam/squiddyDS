import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../data-display/sq-tree';

const meta = {
  title: 'Data Display/Tree',
  component: 'sq-tree',
  tags: ['autodocs'],
  argTypes: {
    selectionMode: { control: { type: 'select', options: ['none', 'single', 'multiple'] } },
    showCheckboxes: { control: 'boolean' },
    showSearch: { control: 'boolean' },
    expandAll: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const sampleNodes = [
  { id: '1', label: 'Documents', icon: '📁', expanded: true, children: [
    { id: '1-1', label: 'Work', icon: '📁', children: [
      { id: '1-1-1', label: 'Reports', icon: '📄' },
      { id: '1-1-2', label: 'Presentations', icon: '📄' },
    ]},
    { id: '1-2', label: 'Personal', icon: '📁', children: [
      { id: '1-2-1', label: 'Photos', icon: '🖼️' },
      { id: '1-2-2', label: 'Notes', icon: '📝' },
    ]},
  ]},
  { id: '2', label: 'Downloads', icon: '📁', children: [
    { id: '2-1', label: 'Images', icon: '🖼️' },
    { id: '2-2', label: 'Videos', icon: '🎬' },
  ]},
  { id: '3', label: 'Desktop', icon: '🖥️' },
];

export const Default: Story = {
  render: () => {
    const tree = document.createElement('sq-tree');
    tree.style.maxWidth = '300px';
    tree.nodes = sampleNodes;
    return tree;
  },
};

export const SingleSelection: Story = {
  render: () => {
    const tree = document.createElement('sq-tree');
    tree.style.maxWidth = '300px';
    tree.selectionMode = 'single';
    tree.nodes = sampleNodes;
    return tree;
  },
};

export const MultipleSelection: Story = {
  render: () => {
    const tree = document.createElement('sq-tree');
    tree.style.maxWidth = '300px';
    tree.selectionMode = 'multiple';
    tree.nodes = sampleNodes;
    return tree;
  },
};

export const WithCheckboxes: Story = {
  render: () => {
    const tree = document.createElement('sq-tree');
    tree.style.maxWidth = '300px';
    tree.showCheckboxes = true;
    tree.nodes = sampleNodes;
    return tree;
  },
};

export const WithSearch: Story = {
  render: () => {
    const tree = document.createElement('sq-tree');
    tree.style.maxWidth = '300px';
    tree.showSearch = true;
    tree.expandAll = true;
    tree.nodes = sampleNodes;
    return tree;
  },
};

export const Expanded: Story = {
  render: () => {
    const tree = document.createElement('sq-tree');
    tree.style.maxWidth = '300px';
    tree.expandAll = true;
    tree.nodes = sampleNodes;
    return tree;
  },
};

export const AllFeatures: Story = {
  render: () => {
    const tree = document.createElement('sq-tree');
    tree.style.maxWidth = '300px';
    tree.selectionMode = 'multiple';
    tree.showCheckboxes = true;
    tree.showSearch = true;
    tree.nodes = sampleNodes;
    return tree;
  },
};
