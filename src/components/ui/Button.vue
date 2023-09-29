<script setup>
defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'danger', 'success'].includes(value)
  }
});
</script>

<template>
  <button type="button" :class="[$style.base, $style[variant]]" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<style module>
.base {
  @apply text-white font-semibold rounded-md text-base px-5 py-3 border-none cursor-pointer hover:opacity-80;
  &:disabled {
    @apply cursor-default hover:opacity-100 text-gray-40 bg-gray-20;
  }
}

.default {
  @apply text-gray-50 bg-gray-30;
}

.success {
  @apply bg-green-30 border-green-30;
}

.danger {
  @apply bg-red-20 border-red-20;
}
</style>
