<script setup>
import dayjs from 'dayjs';
import { computed } from 'vue';
import { Badge } from '@/components/ui';
import { formatAmount } from '@/helpers/formatter';

// Define props for the invoice data
const props = defineProps({
  invoiceData: {
    type: Object,
    required: true
  }
});

// Compute formatted due date using dayjs
const formattedDueDate = computed(() => dayjs(props.invoiceData.due_date).format('MMMM D, YYYY'));

// Compute formatted amount using the formatter helper
const formattedAmount = computed(() => formatAmount(props.invoiceData.amount));

// Compute badge variant based on the invoice status
const badgeVariant = computed(() =>
  props.invoiceData.status === 'Overdue' ? 'danger' : 'success'
);
</script>

<template>
  <!-- Invoice summary component -->
  <div class="invoice-summary" role="region" aria-label="Invoice summary" aria-current="true">
    <!-- Top section with due date -->
    <div class="invoice-summary-top">
      <span class="invoice-summary-item">Last invoice</span>
      <span class="invoice-summary-item">{{ formattedDueDate }}</span>
    </div>
    <!-- Separator line -->
    <hr role="separator" />
    <!-- Bottom section with amount and badge -->
    <div class="invoice-summary-bottom">
      <span class="invoice-summary-item">Amount</span>
      <div class="invoice-summary-amount" aria-describedby="amount-text">
        <span class="amount-text" id="amount-text">{{ formattedAmount }}</span>
        <!-- Badge component to display status -->
        <Badge
          :variant="badgeVariant"
          role="status"
          :aria-label="invoiceData.status"
          :title="invoiceData.status"
          >{{ invoiceData.status }}</Badge
        >
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
/* Styling for the invoice summary component */
.invoice-summary {
  @apply w-full px-5 py-2 box-border bg-white flex flex-col justify-between rounded-b-[inherit];
}

/* Styling for top and bottom sections */
.invoice-summary-top,
.invoice-summary-bottom {
  @apply flex justify-between items-center h-9;
}

/* Styling for text items */
.invoice-summary-item {
  @apply text-gray-40 font-normal;
}

/* Styling for amount section */
.invoice-summary-amount {
  @apply flex items-center gap-1.5;
}

/* Styling for the amount text */
.amount-text {
  @apply text-gray-50;
}
</style>
