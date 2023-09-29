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
  <div class="wrapper">
    <Button @click="onPreviousClick" variant="success" :disabled="currentPage <= 1"
      >Previous</Button
    >
    <select id="countries" class="page-select" @change="onPageChange($event)">
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
.wrapper {
  @apply flex justify-between items-center w-full h-14 mt-8 p-0;
}
.page-select {
  @apply px-3 box-border py-3 font-bold border-[1px] border-solid border-gray-30 text-gray-900 text-sm rounded-md block w-14 focus:outline-none appearance-none;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgd2lkdGg9IjE5IiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7c3Ryb2tlOiMzNzQxNTE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoycHg7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZS8+PGcgaWQ9ImNoZXZyb24tYm90dG9tIj48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIxNiIgeDI9IjciIHkxPSIyMC41IiB5Mj0iMTEuNSIvPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjI1IiB4Mj0iMTYiIHkxPSIxMS41IiB5Mj0iMjAuNSIvPjwvZz48L3N2Zz4=)
    no-repeat 75% 50%;
  background-color: white;
  /* and then whatever styles you want*/
}
</style>
