import { create } from 'storybook/theming';

// Light theme — matches our design system warm-neutral palette
export const lightTheme = create({
  base: 'light',
  brandTitle: 'Squiddy Design System',
  brandUrl: '/',
  appBg: '#FCF7ED',
  appContentBg: '#FFFDF8',
  appBorderColor: '#AF019A',
  appBorderRadius: 8,
  textColor: '#370130',
  textInverseColor: '#FFFDF8',
  barTextColor: '#370130',
  barHoverColor: '#BB5DAF',
  barBg: '#FCF7ED',
  buttonBg: '#FE00F0',
  inputBg: '#FFFDF8',
  inputBorder: '#AF019A',
  inputTextColor: '#370130',
  inputBorderRadius: 8,
});

// Dark theme — matches our design system dark palette
export const darkTheme = create({
  base: 'dark',
  brandTitle: 'Squiddy Design System',
  brandUrl: '/',
  appBg: '#0b0d10',
  appContentBg: '#13171d',
  appBorderColor: 'rgba(255, 255, 255, 0.12)',
  appBorderRadius: 8,
  textColor: '#f1f5f9',
  textInverseColor: '#0b0d10',
  barTextColor: '#f1f5f9',
  barHoverColor: '#94a3b8',
  barBg: '#0b0d10',
  buttonBg: '#38bdf8',
  inputBg: '#13171d',
  inputBorder: 'rgba(255, 255, 255, 0.12)',
  inputTextColor: '#f1f5f9',
  inputBorderRadius: 8,
});
