<script setup>
import { Button } from '@/components/common';

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
  <div class="flex justify-between items-center w-full h-14 mt-8 p-0">
    <Button @click="onPreviousClick" variant="success" :disabled="currentPage <= 1"
      >Previous</Button
    >
    <select
      id="countries"
      class="px-3 box-border py-3 border-[1px] border-solid bg-white border-gray-30 text-gray-900 text-sm rounded-md block w-14 focus:outline-none"
      @change="onPageChange($event)"
    >
      <option v-for="page in totalPages" :value="page" :selected="currentPage === page" :key="page">
        {{ page }}
      </option>
    </select>
    <Button @click="onNextClick" variant="success" :disabled="currentPage >= totalPages"
      >Next</Button
    >
  </div>
</template>

<style scoped></style>
