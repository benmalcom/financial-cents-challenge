<script setup>
import { computed, reactive } from 'vue';

const props = defineProps({
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
    color: 'text-green-30',
    bgColor: 'bg-green-10'
  },
  danger: {
    color: 'text-red-20',
    bgColor: 'bg-red-10'
  }
});

const variantClass = computed(
  () => `${colorVariantMap[props.variant].bgColor} ${colorVariantMap[props.variant].color}`
);
</script>

<template>
  <span :class="`${variantClass} text-xs mr-2 px-2 pt-1 rounded-2xl`">
    <slot></slot>
  </span>
</template>

<style scoped></style>
