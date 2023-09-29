<script setup>
import { Button } from '@/components/ui';

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

const emit = defineEmits(['page-change']);

const onPreviousClick = () => {
  if (props.currentPage <= 1) return;
  emitPageChange(props.currentPage - 1);
};

const onNextClick = () => {
  if (props.currentPage >= props.totalPages) return;
  emitPageChange(props.currentPage + 1);
};

const emitPageChange = (page) => emit('page-change', page);

const onPageChange = (event) => emitPageChange(Number(event.target.value));
</script>

<template>
  <div class="pagination-wrapper">
    <Button @click="onPreviousClick" variant="success" :disabled="currentPage <= 1"
      >Previous</Button
    >
    <select class="page-selector" @change="onPageChange($event)">
      <option v-for="page in totalPages" :value="page" :selected="currentPage === page" :key="page">
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
