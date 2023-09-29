import Badge from './Badge.vue';

export default {
  title: 'Components/UI/Badge',
  component: Badge,
  argTypes: {
    default: {
      content: 'text'
    },
    variant: {
      control: {
        type: 'inline-radio'
      },
      options: ['default', 'success', 'danger'],
      description: 'Specifies the variant of the badge, can be default, success or danger'
    }
  },
  args: {
    variant: 'default',
    default: 'Badge'
  }
};

const Template = (args) => ({
  components: { Badge },
  setup: () => ({ args }),
  template: '<Badge v-bind="args">{{ args.default }}</Badge>'
});

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  default: 'Default'
};

export const Error = Template.bind({});

Error.args = {
  ...Default.args,
  variant: 'danger',
  default: 'Danger'
};

export const Success = Template.bind({});

Success.args = {
  ...Default.args,
  variant: 'success',
  content: 'Success'
};
