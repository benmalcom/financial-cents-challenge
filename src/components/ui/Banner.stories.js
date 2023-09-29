import Banner from './Banner.vue';
import { InvoicesLayout } from '@/components/layouts';

export default {
  title: 'Components/UI/Banner',
  component: Banner,
  argTypes: {
    default: {
      content: 'text'
    },
    variant: {
      control: {
        type: 'inline-radio'
      },
      options: ['default', 'success'],
      description: 'Specifies the variant of the banner, can be success or danger'
    }
  },
  args: {
    variant: 'default',
    default: 'Badge'
  }
};

const Template = (args) => ({
  components: { Banner, InvoicesLayout },
  setup: () => ({ args }),
  template: `<InvoicesLayout>
                <Banner v-bind="args">{{ args.default }}</Banner>
            </InvoicesLayout>`
});

export const Default = Template.bind({});
Default.args = {
  default: 'This is a default banner to show empty invoices'
};

export const Error = Template.bind({});

Error.args = {
  ...Default.args,
  variant: 'danger',
  default: 'This is a banner to show error while fetching invoices'
};
