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
  <span :class="[$style.base, $style[variant]]" v-bind="$attrs">
    <slot></slot>
  </span>
</template>

<style module>
.base {
  @apply text-[10px] px-2 py-0.5 rounded-2xl;
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
