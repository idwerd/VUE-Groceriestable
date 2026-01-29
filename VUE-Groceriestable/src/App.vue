<script setup>
import GroceriesTable from './components/GroceriesTable.vue'
import { ref } from 'vue';

const products = ref([{
    product: 'Rijst',
    price: 1.00,
    amount: 0,
  },
  {
    product: 'Broccoli',
    price: 0.99,
    amount: 0,
  },
  {
    product: 'Koekjes',
    price: 1.20,
    amount: 0,
  },
  {
    product: 'Noten',
    price: 2.99,
    amount: 0,
  }
]);

</script>

<template>
  <GroceriesTable v-model="products"/>
</template>

<style scoped>

</style>
