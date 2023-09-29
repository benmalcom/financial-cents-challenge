<script setup>
import { StackedLayout } from '@/components/layouts';
import { InvoiceCard } from '@/components/invoice';
import { ref } from 'vue';
const items = ref([
  {
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  },
  {
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg'
  },
  {
    id: 3,
    email: 'emma.wong@reqres.in',
    first_name: 'Emma',
    last_name: 'Wong',
    avatar: 'https://reqres.in/img/faces/3-image.jpg'
  },
  {
    id: 4,
    email: 'eve.holt@reqres.in',
    first_name: 'Eve',
    last_name: 'Holt',
    avatar: 'https://reqres.in/img/faces/4-image.jpg'
  },
  {
    id: 5,
    email: 'charles.morris@reqres.in',
    first_name: 'Charles',
    last_name: 'Morris',
    avatar: 'https://reqres.in/img/faces/5-image.jpg'
  },
  {
    id: 6,
    email: 'tracey.ramos@reqres.in',
    first_name: 'Tracey',
    last_name: 'Ramos',
    avatar: 'https://reqres.in/img/faces/6-image.jpg'
  }
]);
</script>

<template>
  <StackedLayout>
    <h1 class="text-gray-60 mb-0">Monthly Bookkeeping</h1>
    <p class="text-gray-50 text-lg mt-3">List of paid and outstanding invoices.</p>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-6 box-border">
      <InvoiceCard v-for="item in items" :invoice="item" :key="item.id" />
    </div>
  </StackedLayout>
</template>
