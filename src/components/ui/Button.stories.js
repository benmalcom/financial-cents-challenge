import Button from './Button.vue';

export default {
  title: 'Components/UI/Button',
  component: Button,
  argTypes: {
    default: {
      content: 'text'
    },
    variant: {
      control: {
        type: 'inline-radio'
      },
      options: ['default', 'success'],
      description: 'Specifies the variant of the button, can be default or success'
    }
  },
  args: {
    variant: 'default',
    default: 'Badge'
  }
};

const Template = (args) => ({
  components: { Button },
  setup: () => ({ args }),
  template: '<Button v-bind="args">{{ args.default }}</Button>'
});

export const Default = Template.bind({});

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  variant: 'success',
  default: 'Button'
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  default: 'Button',
  disabled: true
};

Default.args = {
  default: 'Button'
};
