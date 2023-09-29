<script setup>
import { COLORS_VARIANTS } from '@/utils/constants';

defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => COLORS_VARIANTS.includes(value)
  }
});
</script>

<template>
  <button type="button" :class="[$style.base, $style[variant]]" v:bind="$attrs">
    <slot />
  </button>
</template>

<style module>
.base {
  @apply text-white font-semibold rounded-md text-base px-5 py-3 border-none cursor-pointer hover:opacity-80;
  &:disabled {
    @apply text-gray-40 bg-gray-20 cursor-default hover:opacity-100;
  }
}

.default {
  @apply text-gray-30 bg-gray-60 border-gray-60;
}

.success {
  @apply bg-green-30 border-green-30;
}

.danger {
  @apply bg-red-20 border-red-20;
}
</style>
