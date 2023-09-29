import Badge from './Badge.vue';

export default {
  title: 'Components/UI/Badge',
  component: Badge
};

const Template = (args) => ({
  components: { Badge },
  setup: () => ({ args }),
  template: '<Badge v-bind="args">{{ args.slotContent }}</Badge>'
});

export const Default = Template.bind({});
Default.args = {
  slotContent: 'Default'
};

export const Error = Template.bind({});

Error.args = {
  ...Default.args,
  variant: 'danger',
  slotContent: 'Danger'
};

export const Success = Template.bind({});

Success.args = {
  ...Default.args,
  variant: 'success',
  slotContent: 'Success'
};
