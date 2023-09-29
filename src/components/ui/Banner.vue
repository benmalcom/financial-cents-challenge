<script setup>
import { COLORS_VARIANTS } from '@/helpers/constants';

defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => COLORS_VARIANTS.includes(value)
  }
});
</script>

<template>
  <div
    :class="{
      base: true,
      [variant]: true
    }"
    aria-label="alert"
    role="alert"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<style scoped>
.base {
  @apply flex items-center text-sm mt-10 p-3;
}

.default {
  @apply text-gray-60 bg-gray-20;
}

.success {
  @apply text-green-30 bg-green-10;
}

.danger {
  @apply text-red-20 bg-red-10;
}
</style>
