<script setup>
import { reactive } from 'vue';

defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'danger', 'success'].includes(value)
  }
});

const colorVariantMap = reactive({
  default: {
    color: 'text-gray-60',
    bgColor: 'bg-gray-30'
  },
  success: {
    color: 'text-gray-30',
    bgColor: 'bg-gray-10'
  },
  danger: {
    color: 'text-gray-20',
    bgColor: 'bg-gray-10'
  }
});
</script>

<template>
  <span
    :class="`${colorVariantMap[variant].bgColor} ${colorVariantMap[variant].color} text-xs mr-2 px-2.5 py-0.5 rounded `"
  >
    <slot></slot>
  </span>
</template>

<style scoped></style>
