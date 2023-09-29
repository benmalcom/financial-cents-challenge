<script setup>
import InvoiceDetails from './InvoiceDetails.vue';
import UserDetails from './UserDetails.vue';

const props = defineProps({
  invoice: {
    type: Object,
    required: true
  }
});

const { user, ...invoiceData } = props.invoice;
</script>

<template>
  <div class="invoice-wrapper" aria-label="Invoice card" aria-current="true" v-bind="$attrs">
    <UserDetails :user="user" />
    <InvoiceDetails :data="invoiceData" />
  </div>
</template>

<style scoped>
.invoice-wrapper {
  @apply w-full flex flex-col drop-shadow-md hover:drop-shadow-xl rounded-2xl;
}
</style>
