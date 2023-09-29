<script setup>
import { Dropdown } from '@/components/ui';

const dropdownItems = ['View', 'Edit', 'Delete'];

defineProps({
  user: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="user-card">
    <div class="user-avatar">
      <img class="user-avatar-image" :src="user.avatar" alt="User Logo" />
    </div>
    <div class="user-info">
      <div class="user-name">
        {{ user.first_name + ' ' + user.last_name }}
      </div>
      <Dropdown>
        <ul class="dropdown-menu">
          <li
            class="dropdown-item"
            v-for="(item, index) in dropdownItems"
            :class="{ danger: index === dropdownItems.length - 1 }"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </Dropdown>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.user-card {
  @apply w-full flex p-5 box-border gap-x-3 items-center bg-green-30 rounded-t-[inherit];
}

.user-avatar {
  @apply w-12 h-12 flex flex-shrink-0;
}

.user-avatar-image {
  @apply w-full h-full rounded-xl;
}

.user-info {
  @apply flex w-full justify-between gap-x-2 h-full items-center min-w-0;
}

.user-name {
  @apply font-semibold text-white truncate mr-3.5;
}

.dropdown-menu {
  @apply w-32 px-0 py-1 my-1 text-sm text-gray-50;
}

.dropdown-item {
  @apply flex px-4 pt-1 h-8 text-base cursor-pointer items-center box-border hover:bg-gray-20 hover:text-gray-60;
}

.dropdown-item.danger {
  @apply hover:bg-gray-20 text-red-20;
}
</style>
