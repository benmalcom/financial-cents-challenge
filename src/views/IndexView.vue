<script setup>
import { StackedLayout } from '@/components/layouts';
import { InvoiceList, InvoiceListSkeleton } from '@/components/invoice';
import { computed, onMounted, reactive, ref } from 'vue';
import { getRandomInvoices } from '@/utils/invoice';
import { Pagination, Banner } from '@/components/ui';
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
const showErrorBanner = computed(() => invoiceState.error && !invoiceState.loading);
const showEmptyBanner = computed(
  () => invoiceState.invoices.length === 0 && !invoiceState.loading && !invoiceState.error
);
</script>

<template>
  <StackedLayout>
    <h1 class="text-gray-60 mb-0 font-medium text-2xl md:text-3xl">Monthly Bookkeeping</h1>
    <p class="text-gray-40 mt-3">List of paid and outstanding invoices.</p>

    <Banner variant="danger" v-if="showErrorBanner">
      An error occurred while fetching invoices, please reload page.
    </Banner>
    <Banner variant="default" v-if="showEmptyBanner">There are no invoices available.</Banner>

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
