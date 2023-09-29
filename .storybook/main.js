/** @type { import('@storybook/vue3-vite').StorybookConfig } */
import { mergeConfig } from 'vitest/config';
import * as path from 'path';

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
    'storybook-addon-vue-slots'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.join(process.cwd(), 'src')
        }
      },
      define: { 'process.env': {} }
    });
  }
};
export default config;
