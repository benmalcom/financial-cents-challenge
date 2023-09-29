<script setup>
import { computed } from 'vue';
import { Dropdown } from '@/components/ui';

// Define an array of dropdown items
const dropdownItems = ['View', 'Edit', 'Delete'];

// Define props for the client data
const props = defineProps({
  client: {
    type: Object,
    required: true
  }
});

// Compute the full name of the client using their first and last name
const fullName = computed(() => `${props.client.first_name} ${props.client.last_name}`);
</script>

<template>
  <!-- Client details component -->
  <div class="client-details" role="region" aria-label="Client details" aria-current="true">
    <!-- Client avatar section -->
    <div class="client-avatar">
      <img
        class="client-avatar-image"
        :src="client.avatar"
        alt="client avatar"
        aria-describedby="client-avatar-description"
      />
      <span id="client-avatar-description" class="sr-only">Avatar image for {{ fullName }}</span>
    </div>
    <!-- Client information section -->
    <div class="client-info">
      <!-- Display the full name of the client -->
      <div class="client-name">
        {{ fullName }}
      </div>
      <!-- Dropdown component for client actions -->
      <Dropdown :aria-haspopup="true" #default="{ isOpen }" :aria-expanded="isOpen">
        <!-- Dropdown menu with actions -->
        <ul class="dropdown-menu" role="menu">
          <!-- Iterate through dropdown items -->
          <li
            class="dropdown-item"
            role="menuitem"
            v-for="(item, index) in dropdownItems"
            :class="{ danger: index === dropdownItems.length - 1 }"
            :key="index"
            :aria-label="item + ' dropdown item'"
          >
            {{ item }}
          </li>
        </ul>
      </Dropdown>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
/* Styling for the client details component */
.client-details {
  @apply w-full flex p-5 box-border gap-x-3 items-center bg-green-30 rounded-t-[inherit];
}

/* Styling for the client avatar section */
.client-avatar {
  @apply w-12 h-12 flex flex-shrink-0;
}

/* Styling for the client avatar image */
.client-avatar-image {
  @apply w-full h-full rounded-xl;
}

/* Styling for the client information section */
.client-info {
  @apply flex w-full justify-between gap-x-2 h-full items-center min-w-0;
}

/* Styling for the client name */
.client-name {
  @apply font-medium text-gray-10 truncate mr-3.5;
}

/* Styling for the dropdown menu */
.dropdown-menu {
  @apply w-[115px] px-0 my-1 text-sm text-gray-50;
}

/* Styling for individual dropdown items */
.dropdown-item {
  @apply flex px-3 h-9 text-base cursor-pointer items-center box-border hover:bg-gray-20 hover:text-gray-60;
}

/* Styling for the last dropdown item (considered "danger") */
.dropdown-item.danger {
  @apply hover:bg-gray-20 text-red-20;
}
</style>
