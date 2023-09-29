<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleDropdown = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const onOutsideClick = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
  }
};
</script>

<template>
  <div class="relative w-fit -mr-1.5" v-bind="$attrs" v-click-outside="onOutsideClick">
    <!-- Dropdown trigger element -->
    <slot name="triggerElement" :isOpen="isMenuOpen" :toggleDropdown="toggleDropdown">
      <Icon
        icon="ph:dots-three-bold"
        class="dropdown-icon"
        :class="{ 'bg-green-20': isMenuOpen }"
        @click="toggleDropdown"
        data-testid="dropdown-icon"
        aria-label="Dropdown menu button"
      />
    </slot>

    <!-- Dropdown content -->
    <div v-if="isMenuOpen" class="absolute right-0 py-0 mt-1.5 bg-white shadow-lg rounded-md z-20">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.dropdown-icon {
  @apply block text-white cursor-pointer w-6 h-6 hover:bg-green-20 rounded-full p-0.5;
}
</style>
