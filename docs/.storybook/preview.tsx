import React from 'react';
import type { Preview } from '@storybook/react';

// 隐藏 Storybook 侧边栏头部
const GlobalStyles = () => (
  <style>
    {`
      /* 针对侧边栏头部的全面隐藏样式 */
      .sidebar-header,
      .sb-sidebar-header,
      #storybook-explorer-header {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        height: 0 !important;
        width: 0 !important;
        overflow: hidden !important;
        position: absolute !important;
        z-index: -1 !important;
      }
      
      /* 确保侧边栏主体部分上移，填补隐藏头部的空间 */
      .sidebar-container,
      .sb-sidebar {
        padding-top: 0 !important;
        margin-top: 0 !important;
      }
    `}
  </style>
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#222222' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <Story />
        </div>
      </>
    ),
  ],
};

export default preview;
