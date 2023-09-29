<script setup>
import ClientProfile from './ClientProfile.vue';
import InvoiceSummary from './InvoiceSummary.vue';
import { isValidInvoice } from '@/helpers/utils';

const props = defineProps({
  invoice: {
    type: Object,
    required: true,
    validator(value) {
      return isValidInvoice(value);
    }
  }
});

const { user: client, ...invoiceData } = props.invoice;
</script>

<template>
  <div class="invoice-wrapper" aria-label="Invoice card" aria-current="true" v-bind="$attrs">
    <ClientProfile :client="client" />
    <InvoiceSummary :invoiceData="invoiceData" />
  </div>
</template>

<style scoped>
.invoice-wrapper {
  @apply w-full flex flex-col drop-shadow-md hover:drop-shadow-xl rounded-2xl;
}
</style>
