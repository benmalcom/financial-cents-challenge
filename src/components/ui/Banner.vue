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
    <slot />
  </span>
</template>

<style module>
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
