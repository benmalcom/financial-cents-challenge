<script setup>
import { InvoiceCard, LoadingSkeleton } from '@/components/invoice';
defineProps({
  loading: {
    type: Boolean,
    required: true
  },
  invoices: {
    type: Array,
    required: true
  }
});

// Define the number of loading skeleton items.
const loadingSkeletonCount = 6;
</script>

<template>
  <section aria-label="Invoices" :aria-busy="loading" v-cloak>
    <div class="grid-layout" v-if="loading" aria-busy="true">
      <LoadingSkeleton v-for="index in loadingSkeletonCount" :key="index" />
    </div>
    <div class="grid-layout" aria-label="Invoice Cards" v-else>
      <InvoiceCard v-for="invoice in invoices" :invoice="invoice" :key="invoice.user.id" />
    </div>
  </section>
</template>

<style scoped>
.grid-layout {
  @apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-6;
}
</style>
