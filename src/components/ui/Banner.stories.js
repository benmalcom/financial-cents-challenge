import Banner from './Banner.vue';

export default {
  title: 'Components/UI/Banner',
  component: Banner,
  argTypes: {
    outlined: { control: 'boolean' }
  }
};

const Template = (args) => ({
  components: { Banner },
  setup: () => ({ args }),
  template: '<Banner v-bind="args">{{ args.slotContent }}</Banner>'
});

export const Default = Template.bind({});
Default.args = {
  slotContent: 'This is a default banner to show  messages'
};

export const Error = Template.bind({});

Error.args = {
  ...Default.args,
  variant: 'danger',
  slotContent: 'This is a banner to show error messages'
};
