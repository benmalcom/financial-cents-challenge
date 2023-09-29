<script setup>
import { Badge, Dropdown } from '@/components/common';
import { formatAmount } from '@/utils/invoice';
import * as dayjs from 'dayjs';
import { computed } from 'vue';

const dropdownItems = ['View', 'Edit', 'Delete'];

const props = defineProps({
  invoice: {
    type: Object,
    required: true
  }
});

const badgeVariant = computed(() => (props.invoice.status === 'Overdue' ? 'danger' : 'success'));
</script>

<template>
  <div class="w-full xl:w-[50%] 2xl:w-full flex flex-col drop-shadow-md hover:drop-shadow-xl">
    <div class="w-full flex p-5 box-border gap-x-3 items-center bg-green-30 rounded-t-2xl">
      <img class="w-12 h-12 rounded-lg" :src="invoice.user.avatar" alt="User Logo" />
      <div class="flex-1 flex justify-between gap-x-2 h-full items-center">
        <div class="font-semibold text-white flex-1">
          {{ invoice.user.first_name + ' ' + invoice.user.last_name }}
        </div>
        <Dropdown>
          <ul class="w-32 px-0 py-0 my-1 text-sm text-gray-50">
            <li
              class="dropdown-item"
              v-for="(item, index) in dropdownItems"
              :class="{ danger: index === dropdownItems.length - 1 }"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
        </Dropdown>
      </div>
    </div>
    <div class="w-full p-6 box-border bg-white rounded-b-2xl flex flex-col justify-between">
      <div class="flex justify-between">
        <span class="invoice-detail">Last invoice</span>
        <span class="invoice-detail">{{ dayjs(invoice.due_date).format('MMMM D, YYYY') }}</span>
      </div>
      <hr />
      <div class="flex justify-between">
        <span class="invoice-detail">Amount</span>
        <div class="flex items-center gap-2">
          <span class="text-gray-60 font-medium">{{ formatAmount(invoice.amount) }}</span>
          <Badge :variant="badgeVariant">{{ invoice.status }}</Badge>
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
