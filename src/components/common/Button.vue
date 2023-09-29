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
  <button type="button" :class="[$style.baseTag, $style[variant]]" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<style module>
.baseTag {
  @apply text-white font-semibold rounded-md text-base px-5 py-3  border-none cursor-pointer opacity-90 hover:opacity-100;
  &:disabled {
    @apply text-gray-40 bg-gray-30 focus:hover:bg-gray-30 focus:hover:text-gray-50 cursor-default !important;
  }
}

.default {
  @apply text-white bg-blue-700 hover:bg-blue-800;
}

.success {
  @apply bg-green-30 border-green-30;
}

.danger {
  @apply bg-red-20 border-red-20;
}
</style>
