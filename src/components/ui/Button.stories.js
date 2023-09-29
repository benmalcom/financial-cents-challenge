import Button from './Button.vue';

export default {
  title: 'Components/UI/Button',
  component: Button,
  argTypes: {
    outlined: { control: 'boolean' }
  }
};

const Template = (args) => ({
  components: { Button },
  setup: () => ({ args }),
  template: '<Button v-bind="args">{{ args.slotContent }}</Button>'
});

export const Default = Template.bind({});

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  variant: 'success',
  slotContent: 'Button'
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  slotContent: 'Button',
  disabled: true
};

Default.args = {
  slotContent: 'Button'
};
