<script setup>
import dayjs from 'dayjs';
import { computed } from 'vue';
import { Badge } from '@/components/ui';
import { formatAmount } from '@/helpers/formatter';

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

const formattedDueDate = computed(() => dayjs(props.data.due_date).format('MMMM D, YYYY'));
const formattedAmount = computed(() => formatAmount(props.data.amount));
const badgeVariant = computed(() => (props.data.status === 'Overdue' ? 'danger' : 'success'));
</script>

<template>
  <div class="invoice-summary" role="region" aria-label="Invoice summary" aria-current="true">
    <div class="invoice-summary-top">
      <span class="invoice-summary-item">Last invoice</span>
      <span class="invoice-summary-item">{{ formattedDueDate }}</span>
    </div>
    <hr role="separator" />
    <div class="invoice-summary-bottom">
      <span class="invoice-summary-item">Amount</span>
      <div class="invoice-summary-amount" aria-describedby="amount-text">
        <span class="amount-text" id="amount-text">{{ formattedAmount }}</span>
        <Badge
          :variant="badgeVariant"
          aria-role="status"
          :aria-label="data.status"
          :title="data.status"
          >{{ data.status }}</Badge
        >
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.invoice-summary {
  @apply w-full px-5 py-2 box-border bg-white flex flex-col justify-between rounded-b-[inherit];
}

.invoice-summary-top,
.invoice-summary-bottom {
  @apply flex justify-between items-center h-9;
}

.invoice-summary-item {
  @apply text-gray-40 font-normal;
}

.invoice-summary-amount {
  @apply flex items-center gap-1.5;
}

.amount-text {
  @apply text-gray-50;
}
</style>
