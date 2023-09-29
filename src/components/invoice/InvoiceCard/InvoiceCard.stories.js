import InvoiceCard from './InvoiceCard.vue';
import { SAMPLE_INVOICE } from './data';

export default {
  title: 'Components/Invoice/InvoiceCard',
  component: InvoiceCard
};

const Template = (args) => ({
  components: { InvoiceCard },
  setup: () => ({ args }),
  template: `<div class='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
              <InvoiceCard :invoice="args.invoice" v-bind="args"/>
          </div>`
});

export const Default = Template.bind({});
Default.args = {
  invoice: SAMPLE_INVOICE
};
