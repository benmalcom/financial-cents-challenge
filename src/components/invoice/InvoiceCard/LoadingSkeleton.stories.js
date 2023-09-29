import LoadingSkeleton from './LoadingSkeleton.vue';
import { InvoicesLayout } from '@/components/layouts';

export default {
  title: 'Components/Invoice',
  component: LoadingSkeleton,
  parameters: {}
};

const Template = (args) => ({
  components: { LoadingSkeleton, InvoicesLayout },
  setup: () => ({ args }),
  template: `<InvoicesLayout>
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-6">
                  <LoadingSkeleton />
                </div>
        </InvoicesLayout>`
});

export const Loading = Template.bind({});
Loading.args = {};
