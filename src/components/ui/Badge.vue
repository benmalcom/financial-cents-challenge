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
  <span
    :class="{
      base: true,
      [variant]: true
    }"
    v-bind="$attrs"
  >
    <slot />
  </span>
</template>

<style scoped>
.base {
  @apply text-[9px] py-[1px] px-2 rounded-2xl;
}

.default {
  @apply text-gray-60 bg-gray-30;
}

.success {
  @apply text-green-30 bg-green-10;
}

.danger {
  @apply text-red-20 bg-red-10;
}
</style>
