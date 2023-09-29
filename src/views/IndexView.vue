<script setup>
import { StackedLayout } from '@/components/layouts';
import { InvoiceCard, InvoiceCardSkeleton } from '@/components/invoice';
import { onMounted, reactive, ref } from 'vue';
import { getRandomInvoices } from '@/utils/invoice';
import { Pagination } from '@/components/common';

const currentPage = ref(1);
const totalPages = ref(0);

const invoiceState = reactive({
  invoices: [],
  loading: false,
  error: false
});

const fetchInvoices = async () => {
  invoiceState.loading = true;
  try {
    const body = await fetch(`https://reqres.in/api/users?page=${currentPage.value}`);
    const response = await body.json();
    invoiceState.invoices = getRandomInvoices(response.data);
    totalPages.value = response.total_pages;
  } catch (e) {
    invoiceState.error = true;
  } finally {
    invoiceState.loading = false;
  }
};

onMounted(async () => {
  await fetchInvoices();
});

const onPageChange = (newPage) => {
  currentPage.value = newPage;
  fetchInvoices();
};
</script>

<template>
  <StackedLayout>
    <h1 class="text-gray-60 mb-0 font-medium">Monthly Bookkeeping</h1>
    <p class="text-gray-50 mt-3">List of paid and outstanding invoices.</p>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-6 box-border">
      <InvoiceCardSkeleton v-for="index in 6" :key="index" v-if="invoiceState.loading" />
      <InvoiceCard
        v-else
        v-for="invoice in invoiceState.invoices"
        :invoice="invoice"
        :key="invoice.user.id"
      />
    </div>
    <Pagination :currentPage="currentPage" :totalPages="totalPages" @page-change="onPageChange" />
  </StackedLayout>
</template>
