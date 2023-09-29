import Banner from './Banner.vue';
import { InvoicesLayout } from '@/components/layouts';

export default {
  title: 'Components/UI/Banner',
  component: Banner
};

const Template = (args) => ({
  components: { Banner, InvoicesLayout },
  setup: () => ({ args }),
  template: `<InvoicesLayout>
                <Banner v-bind="args">{{ args.slotContent }}</Banner>
            </InvoicesLayout>`
});

export const Default = Template.bind({});
Default.args = {
  slotContent: 'This is a default banner to show empty invoices'
};

export const Error = Template.bind({});

Error.args = {
  ...Default.args,
  variant: 'danger',
  slotContent: 'This is a banner to show error while fetching invoices'
};
