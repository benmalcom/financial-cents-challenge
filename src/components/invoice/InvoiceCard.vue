<script setup>
import UserDetails from '@/components/invoice/UserDetails.vue';
import InvoiceDetails from '@/components/invoice/InvoiceDetails.vue';

const props = defineProps({
  invoice: {
    type: Object,
    required: true
  }
});

const { user, ...invoiceData } = props.invoice;
</script>

<template>
  <div class="wrapper">
    <UserDetails :user="user" />
    <InvoiceDetails :data="invoiceData" />
  </div>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply w-full xl:w-[50%] 2xl:w-full flex flex-col drop-shadow-md hover:drop-shadow-xl;
}
</style>
