<script setup>

import { computed } from 'vue';

const products = defineModel();

const subtotal = (item) => {
  return Number(item.price * item.amount).toFixed(2);
};

const total = computed(() => {

  let totalPrice = 0;
  for (let item in products.value) {
    totalPrice += Number(subtotal(products.value[item]));
  }
  return totalPrice.toFixed(2);
  
});
</script>

<template>
  <table id="grocery-table">
        <tr>
            <th>Product</th>
            <th>Prijs</th>
            <th>Hoeveelheid</th>
            <th>Subtotaal</th>
        </tr>
        <tr v-for="(item, index) in products">
            <td class="product">{{item.product}}</td>
            <td class="amount product-price">{{ item.price }}</td>
            <td><input class="product-quantity" type="number" v-model="products[index].amount"></td>
            <td class="amount product-totalcost">{{ subtotal(item) }}</td>
        </tr>
        <tr>
            <td class="total" colspan="3"><strong>Totaal</strong></td>
            <td class="amount" id="totalcost"><strong></strong>{{ total }}</td>
        </tr>
    </table>

</template>

<style scoped>
</style>
