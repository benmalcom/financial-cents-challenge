<script setup>
import { watch } from 'vue';
import { Button } from '@/components/ui';
import { usePagination } from '@/composables';

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

const { onPreviousClick, onNextClick, currentPage, onPageChange } = usePagination({
  initialPage: props.currentPage,
  totalPages: props.totalPages
});

const emit = defineEmits(['page-change']);

watch(currentPage, (newPage) => emit('page-change', newPage));
</script>

<template>
  <div class="pagination-wrapper" aria-label="Pagination">
    <Button @click="onPreviousClick" variant="success" :disabled="currentPage <= 1"
      >Previous</Button
    >
    <label for="page-selector" class="sr-only">Select a page:</label>
    <select class="page-selector" aria-controls="page-selector" @change="onPageChange($event)">
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

    <Button @click="onNextClick" variant="success" :disabled="currentPage >= totalPages"
      >Next</Button
    >
  </div>
</template>

<style scoped>
.pagination-wrapper {
  @apply flex justify-between items-center w-full h-14 mt-8 p-0;
}

.page-selector {
  @apply px-3 pl-3.5 box-border py-2.5 font-bold border-[1px] border-solid border-gray-30 text-gray-700 text-base rounded-md block w-[60px] focus:outline-none appearance-none;
}
</style>
