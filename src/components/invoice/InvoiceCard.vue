<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

defineProps({
  invoice: {
    type: Object,
    required: true
  }
});

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const onOutsideClick = () => {
  if (isDropdownOpen.value) {
    isDropdownOpen.value = false;
  }
};
</script>

<template>
  <div class="w-full xl:w-[50%] 2xl:w-full flex flex-col drop-shadow-md hover:drop-shadow-xl">
    <div class="w-full flex p-5 box-border gap-x-3 items-center bg-green-30 rounded-t-2xl">
      <img class="h-full w-12 rounded-lg" :src="invoice.avatar" alt="ChitChat Logo" />
      <div class="flex-1 flex justify-between gap-x-2 h-full items-center">
        <div class="font-semibold text-white flex-1">
          {{ invoice.first_name + ' ' + invoice.last_name }}
        </div>
        <div class="relative w-fit" v-click-outside="onOutsideClick">
          <Icon
            icon="ph:dots-three-bold"
            class="block text-white cursor-pointer w-6 h-6 hover:bg-green-20 rounded-full p-0.5"
            :class="{ 'bg-green-20': isDropdownOpen }"
            @click="toggleDropdown"
          />
          <!-- Dropdown content goes here -->
          <div
            v-if="isDropdownOpen"
            class="absolute right-0 w-32 py-0 mt-2 bg-white shadow-lg rounded-md z-20"
          >
            <ul class="px-0 py-0 my-1 text-sm text-gray-50">
              <li
                class="flex px-4 pt-1 h-8 cursor-pointer text-md items-center box-border hover:bg-gray-20 hover:text-gray-60"
              >
                View
              </li>
              <li
                class="flex px-4 pt-1 h-8 cursor-pointer text-md items-center box-border hover:bg-gray-20 hover:text-gray-60"
              >
                Edit
              </li>
              <li
                class="flex px-4 pt-1 h-8 cursor-pointer text-md items-center box-border hover:bg-gray-20 text-red-20"
              >
                Delete
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full p-6 box-border bg-white rounded-b-2xl flex flex-col justify-between">
      <div class="flex justify-between">
        <span class="text-gray-50 font-medium">Last invoice</span>
        <span class="text-gray-50 font-medium">September 2, 2023</span>
      </div>
      <hr />
      <div class="flex justify-between">
        <span class="text-gray-50 font-medium">Last invoice</span>
        <div></div>
        <span class="text-gray-50 font-medium">September 2, 2023</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
