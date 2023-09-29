<script setup>
import { Badge } from '@/components/common';
import { formatAmount } from '@/utils/invoice';
import dayjs from 'dayjs';
import { computed } from 'vue';

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
  <div class="invoice-card">
    <div class="invoice-header">
      <span class="invoice-detail">Last invoice</span>
      <span class="invoice-detail">{{ formattedDueDate }}</span>
    </div>
    <hr />
    <div class="invoice-details">
      <span class="invoice-detail">Amount</span>
      <div class="amount-badge">
        <span class="amount-text">{{ formattedAmount }}</span>
        <Badge :variant="badgeVariant">{{ data.status }}</Badge>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.invoice-card {
  @apply w-full px-6 py-2 box-border bg-white rounded-b-2xl flex flex-col justify-between;
}

.invoice-header {
  @apply flex justify-between items-center h-9;
}

.invoice-detail {
  @apply text-gray-40;
}

.invoice-details {
  @apply flex justify-between h-9  items-center;
}

.amount-badge {
  @apply flex items-center gap-2;
}

.amount-text {
  @apply text-gray-50;
}
</style>
