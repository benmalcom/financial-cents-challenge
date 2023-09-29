/** @type { import('@storybook/vue3').Preview } */
import { setup } from '@storybook/vue3';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '@/assets/main.css';
import '@/assets/stories.css';
import { onClickOutside } from '@/directives'; // replace with the name of your tailwind css file

const preview = {
  parameters: {
    layout: 'padded',
    viewport: {
      viewports: INITIAL_VIEWPORTS
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

setup((app) => {
  app.directive('click-outside', onClickOutside);
});

export default preview;
