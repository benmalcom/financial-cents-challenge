<template>
  <div class="flex flex-col drop-shadow-md">
    <!-- Loading Skeleton for User Info -->
    <div
      class="w-full flex p-5 box-border gap-x-3 items-center bg-gray-200 rounded-t-2xl animate-pulse"
    >
      <div class="h-12 w-12 rounded-lg bg-gray-300"></div>
      <div class="flex-1 flex justify-between gap-x-2 h-full items-center">
        <div class="font-semibold text-white flex-1">Loading User...</div>
        <div class="w-8 h-2 bg-gray-300"></div>
      </div>
    </div>

    <!-- Loading Skeleton for Invoice Details -->
    <div class="w-full p-6 box-border bg-white rounded-b-2xl flex flex-col justify-between">
      <div class="flex justify-between">
        <div class="w-1/4 h-5 bg-gray-300"></div>
        <div class="w-1/4 h-5 bg-gray-300"></div>
      </div>
      <hr />
      <div class="flex justify-between">
        <div class="w-1/4 h-5 bg-gray-300"></div>
        <div class="w-1/4 h-5 bg-gray-300"></div>
      </div>
    </div>
  </div>
</template>
