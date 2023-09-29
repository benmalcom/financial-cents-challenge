<script setup>
import UserDetails from '@/components/invoice/InvoiceCard/UserDetails.vue';
import InvoiceDetails from '@/components/invoice/InvoiceCard/InvoiceDetails.vue';

const props = defineProps({
  invoice: {
    type: Object,
    required: true
  }
});

const { user, ...invoiceData } = props.invoice;
</script>

<template>
  <div class="invoice-wrapper">
    <UserDetails :user="user" />
    <InvoiceDetails :data="invoiceData" />
  </div>
</template>

<style scoped>
.invoice-wrapper {
  @apply flex flex-col drop-shadow-md hover:drop-shadow-xl rounded-2xl;
}
</style>
