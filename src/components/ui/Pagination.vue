<script setup>
import { watch } from 'vue';
import { Button } from '@/components/ui';
import { usePagination } from '@/composables';

// Define props for the current page and total pages
const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
});

// This composable provides functions and properties for managing pagination state.
const { onPreviousClick, onNextClick, currentPage, onPageChange } = usePagination({
  initialPage: props.currentPage,
  totalPages: props.totalPages
});

// Define the emit function to emit the 'page-change' event
const emit = defineEmits(['page-change']);

// Watch for changes in currentPage and emit 'page-change' event
watch(currentPage, (newPage) => emit('page-change', newPage));
</script>

<template>
  <!-- Pagination wrapper component -->
  <div class="pagination-wrapper" aria-label="Pagination">
    <!-- Previous page button -->
    <Button @click="onPreviousClick" variant="success" :disabled="currentPage <= 1"
      >Previous</Button
    >
    <!-- Label for page selector dropdown -->
    <label for="page-selector" class="sr-only">Select a page:</label>
    <!-- Dropdown for selecting pages -->
    <select
      class="page-selector"
      id="page-selector"
      aria-controls="page-selector"
      @change="onPageChange(parseInt($event.target.value))"
    >
      <!-- Iterate through pages and create options -->
      <option
        v-for="page in totalPages"
        :value="page"
        :selected="currentPage === page"
        :key="page"
        :aria-current="currentPage === page"
      >
        {{ page }}
      </option>
    </select>
    <!-- Next page button -->
    <Button @click="onNextClick" variant="success" :disabled="currentPage >= totalPages"
      >Next</Button
    >
  </div>
</template>

<style scoped>
/* Styling for the pagination wrapper */
.pagination-wrapper {
  @apply flex justify-between items-center w-full h-14 mt-8 p-0;
}

/* Styling for the page selector dropdown */
.page-selector {
  @apply px-3 pl-3.5 box-border py-2.5 font-bold border-[1px] border-solid border-gray-30 text-gray-700 text-base rounded-md block w-[60px] focus:outline-none appearance-none;
}
</style>
