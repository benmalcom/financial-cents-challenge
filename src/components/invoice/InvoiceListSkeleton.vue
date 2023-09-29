<script setup>
import { InvoiceCardSkeleton } from '@/components/invoice';
</script>

<template>
  <InvoiceCardSkeleton v-for="index in 6" :key="index" />
</template>

<style scoped></style>
