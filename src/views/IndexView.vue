<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import { InvoiceList } from '@/components/invoice';
import { InvoicesLayout } from '@/components/layouts';
import { Pagination, Banner } from '@/components/ui';
import { getRandomInvoice } from '@/factories/invoice';
import { fetchUsers } from '@/services/user';

const currentPage = ref(1);
const totalPages = ref(0);

const invoiceState = reactive({
  invoices: [],
  loading: true,
  error: false
});

const fetchInvoices = async () => {
  if (!invoiceState.loading) invoiceState.loading = true;

  try {
    const response = await fetchUsers(currentPage.value);
    const users = response.data;
    invoiceState.invoices = users.map(getRandomInvoice);
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

const showPagination = computed(() => invoiceState.invoices.length > 0 && !invoiceState.error);
const showErrorBanner = computed(() => invoiceState.error && !invoiceState.loading);
const showEmptyBanner = computed(
  () => invoiceState.invoices.length === 0 && !invoiceState.loading && !invoiceState.error
);
</script>

<template>
  <InvoicesLayout role="region" aria-label="Monthly bookkeeping invoices list" aria-current="page">
    <h1 class="text-gray-60 mb-0 font-semibold opacity-90 text-2xl md:text-3xl">
      Monthly Bookkeeping
    </h1>
    <p class="text-gray-50 mt-3 font-normal opacity-80">List of paid and outstanding invoices.</p>

    <Banner variant="danger" v-if="showErrorBanner">
      An error occurred while fetching invoices, please reload page.
    </Banner>
    <Banner variant="default" v-if="showEmptyBanner">There are no invoices available.</Banner>

    <InvoiceList
      v-if="!invoiceState.error"
      :loading="invoiceState.loading"
      :invoices="invoiceState.invoices"
    />

    <Pagination
      v-if="showPagination"
      :currentPage="currentPage"
      :totalPages="totalPages"
      @page-change="onPageChange"
    />
  </InvoicesLayout>
</template>
