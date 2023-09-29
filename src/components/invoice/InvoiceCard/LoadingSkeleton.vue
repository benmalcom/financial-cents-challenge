<template>
  <div class="loading-card">
    <!-- Loading Skeleton for User Info -->
    <div class="client-info-skeleton">
      <div class="client-avatar-skeleton"></div>
      <div class="client-info-details">
        <div class="client-name-skeleton">Loading User...</div>
        <div class="client-status-skeleton"></div>
      </div>
    </div>

    <!-- Loading Skeleton for Invoice Details -->
    <div class="invoice-summary-skeleton">
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

.client-info-skeleton {
  @apply w-full flex p-5 box-border gap-x-3 items-center bg-gray-200 rounded-t-2xl animate-pulse;
}

.client-avatar-skeleton {
  @apply h-12 w-12 rounded-lg bg-gray-300;
}

.client-info-details {
  @apply flex-1 flex justify-between gap-x-2 h-full items-center;
}

.client-name-skeleton {
  @apply font-semibold text-white flex-1;
}

.client-status-skeleton {
  @apply w-8 h-2 bg-gray-300;
}

.invoice-summary-skeleton {
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
