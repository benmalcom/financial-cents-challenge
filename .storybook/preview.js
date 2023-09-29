/** @type { import('@storybook/vue3').Preview } */
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/assets/main.css'; // replace with the name of your tailwind css file

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
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `
           <story />
      `
    })
  ]
};

export default preview;
