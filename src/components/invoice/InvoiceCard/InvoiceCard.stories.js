import { SAMPLE_INVOICE } from './data';
import InvoiceCard from './InvoiceCard.vue';
import { InvoicesLayout } from '@/components/layouts';

export default {
  title: 'Components/Invoice',
  component: InvoiceCard,
  argTypes: {
    invoice: {
      description: 'This is an invoice sample data',
      control: {
        type: 'object',
        mapping: SAMPLE_INVOICE
      }
    }
  },
  args: {
    invoice: SAMPLE_INVOICE
  }
};

const Template = (args) => ({
  components: { InvoiceCard, InvoicesLayout },
  setup: () => ({ args }),
  template: `<InvoicesLayout>
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-6">
                  <InvoiceCard :invoice="args.invoice"/>
                </div>
        </InvoicesLayout>`
});

export const Default = Template.bind({});
Default.args = {
  invoice: SAMPLE_INVOICE
};
