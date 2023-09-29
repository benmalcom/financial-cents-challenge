<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

// Define a reactive reference for tracking the menu's open/closed state
const isMenuOpen = ref(false);

// Function to toggle the menu's open/closed state
const toggleDropdown = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Function to close the menu when clicking outside
const onOutsideClick = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
  }
};
</script>

<template>
  <!-- Container for the dropdown component -->
  <div class="relative w-fit -mr-1.5" v-bind="$attrs" v-click-outside="onOutsideClick">
    <!-- Dropdown trigger element (slot) -->
    <slot name="triggerElement" :isOpen="isMenuOpen" :toggleDropdown="toggleDropdown">
      <!-- Icon that acts as a dropdown trigger -->
      <Icon
        icon="ph:dots-three-bold"
        class="dropdown-icon"
        :class="{ 'bg-green-20': isMenuOpen }"
        @click="toggleDropdown"
        data-testid="dropdown-icon"
        aria-haspopup="true"
        :aria-expanded="isMenuOpen"
        aria-label="Dropdown menu button"
      />
    </slot>

    <!-- Dropdown content (menu) -->
    <div v-if="isMenuOpen" class="absolute right-0 py-0 mt-1.5 bg-white shadow-lg rounded-md z-20">
      <!-- Slot for the content of the dropdown (menu items) -->
      <slot :isOpen="isMenuOpen" />
    </div>
  </div>
</template>

<style scoped>
/* Styling for the dropdown icon */
.dropdown-icon {
  @apply block text-white cursor-pointer w-6 h-6 hover:bg-green-20 rounded-full p-0.5;
}
</style>
