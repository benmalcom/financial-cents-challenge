<script setup>
import { Badge, Dropdown } from '@/components/common';

defineProps({
  invoice: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="w-full xl:w-[50%] 2xl:w-full flex flex-col drop-shadow-md hover:drop-shadow-xl">
    <div class="w-full flex p-5 box-border gap-x-3 items-center bg-green-30 rounded-t-2xl">
      <img class="h-full w-12 rounded-lg" :src="invoice.avatar" alt="User Logo" />
      <div class="flex-1 flex justify-between gap-x-2 h-full items-center">
        <div class="font-semibold text-white flex-1">
          {{ invoice.first_name + ' ' + invoice.last_name }}
        </div>
        <Dropdown>
          <ul class="px-0 py-0 my-1 text-sm text-gray-50">
            <li class="dropdown-item" v-for="(item, index) in ['View', 'Edit']" :key="index">
              {{ item }}
            </li>
            <li class="dropdown-item danger">Delete</li>
          </ul>
        </Dropdown>
      </div>
    </div>
    <div class="w-full p-6 box-border bg-white rounded-b-2xl flex flex-col justify-between">
      <div class="flex justify-between">
        <span class="invoice-detail">Last invoice</span>
        <span class="invoice-detail">September 2, 2023</span>
      </div>
      <hr />
      <div class="flex justify-between">
        <span class="invoice-detail">Amount</span>
        <div class="flex items-center gap-2">
          <span class="text-gray-60 font-medium">$600</span>
          <Badge variant="danger">paid</Badge>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.dropdown-item {
  @apply flex px-4 pt-1 h-8 cursor-pointer items-center box-border hover:bg-gray-20 hover:text-gray-60;
  &.danger {
    @apply hover:bg-gray-20 text-red-20;
  }
}

.invoice-detail {
  @apply text-gray-50 font-medium;
}
</style>
