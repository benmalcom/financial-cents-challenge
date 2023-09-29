<template>
  <div class="loading-card">
    <!-- Loading Skeleton for User Info -->
    <div class="user-info-skeleton">
      <div class="user-avatar-skeleton"></div>
      <div class="user-info-details">
        <div class="user-name-skeleton">Loading User...</div>
        <div class="user-status-skeleton"></div>
      </div>
    </div>

    <!-- Loading Skeleton for Invoice Details -->
    <div class="invoice-details-skeleton">
      <div class="invoice-row-skeleton">
        <div class="invoice-label-skeleton"></div>
        <div class="invoice-value-skeleton"></div>
      </div>
      <hr />
      <div class="invoice-row-skeleton">
        <div class="invoice-label-skeleton"></div>
        <div class="invoice-value-skeleton"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loading-card {
  @apply flex flex-col drop-shadow-md;
}

.user-info-skeleton {
  @apply w-full flex p-5 box-border gap-x-3 items-center bg-gray-200 rounded-t-2xl animate-pulse;
}

.user-avatar-skeleton {
  @apply h-12 w-12 rounded-lg bg-gray-300;
}

.user-info-details {
  @apply flex-1 flex justify-between gap-x-2 h-full items-center;
}

.user-name-skeleton {
  @apply font-semibold text-white flex-1;
}

.user-status-skeleton {
  @apply w-8 h-2 bg-gray-300;
}

.invoice-details-skeleton {
  @apply w-full p-6 box-border bg-white rounded-b-2xl flex flex-col justify-between;
}

.invoice-row-skeleton {
  @apply flex justify-between items-center;
}

.invoice-label-skeleton {
  @apply w-1/4 h-5 bg-gray-300;
}

.invoice-value-skeleton {
  @apply w-1/4 h-5 bg-gray-300;
}
</style>
