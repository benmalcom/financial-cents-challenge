<script setup>
import { StackedLayout } from '@/components/layouts';
import { InvoiceList, InvoiceListSkeleton } from '@/components/invoice';
import { computed, onMounted, reactive, ref } from 'vue';
import { getRandomInvoices } from '@/utils/invoice';
import { Pagination, Banner } from '@/components/common';
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

const showList = computed(
  () => !invoiceState.loading && invoiceState.invoices.length > 0 && !invoiceState.error
);

const showPagination = computed(() => invoiceState.invoices.length > 0 && !invoiceState.error);
</script>

<template>
  <StackedLayout>
    <h1 class="text-gray-60 mb-0 font-medium text-2xl md:text-3xl">Monthly Bookkeeping</h1>
    <p class="text-gray-40 mt-3">List of paid and outstanding invoices.</p>

    <Banner
      variant="danger"
      message="An error occurred while fetching invoices, please reload page."
      v-if="invoiceState.error && !invoiceState.loading"
    />
    <Banner
      variant="default"
      message="There are no invoices available."
      v-if="invoiceState.invoices.length === 0 && !invoiceState.loading && !invoiceState.error"
    />

    <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-6 box-border">
      <InvoiceListSkeleton v-if="invoiceState.loading" />
      <InvoiceList v-if="showList" :invoices="invoiceState.invoices" />
    </div>
    <Pagination
      v-if="showPagination"
      :currentPage="currentPage"
      :totalPages="totalPages"
      @page-change="onPageChange"
    />
  </StackedLayout>
</template>
