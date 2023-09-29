<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
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
  <div class="relative w-fit" v-click-outside="onOutsideClick">
    <slot name="trigger" :isOpen="isDropdownOpen" :toggleDropdown="toggleDropdown">
      <Icon
        icon="ph:dots-three-bold"
        class="dropdown-icon"
        :class="{ 'bg-green-20': isDropdownOpen }"
        @click="toggleDropdown"
        data-testid="dropdown-icon"
      />
    </slot>

    <!-- Dropdown content goes here -->
    <div
      v-if="isDropdownOpen"
      class="absolute right-0 w-fit py-0 mt-2 bg-white shadow-lg rounded-md z-20"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.dropdown-icon {
  @apply block text-white cursor-pointer w-6 h-6 hover:bg-green-20 rounded-full p-0.5;
}
</style>
