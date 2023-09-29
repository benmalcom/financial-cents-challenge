<script setup>
import { InvoiceCard } from '@/components/invoice';
defineProps({
  invoices: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <InvoiceCard v-for="invoice in invoices" :invoice="invoice" :key="invoice.user.id" />
</template>
