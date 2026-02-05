<script setup>

import { computed } from 'vue';
import { removeGrocery } from '../domains/groceries/store.js';

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
            <th>Price</th>
            <th>Amount</th>
            <th>Subtotal</th>
        </tr>
        <tr v-for="(item, index) in products">
            <td class="product">{{item.product}}</td>
            <td class="amount product-price">€ {{ item.price.toFixed(2) }}</td>
            <td><input class="product-quantity" :name="item.product" type="number" v-model="products[index].amount"></td>
            <td class="amount product-totalcost">€ {{ subtotal(item) }}</td>
            <td><RouterLink class="btn-secondary" :to="'/edit/' + item.id">Edit</RouterLink></td>
            <td><button class="btn-tertiary" @click="removeGrocery(item.id)">Delete</button></td>
        </tr>
        <tr>
            <td class="total" colspan="3"><strong>Total</strong></td>
            <td class="amount" id="totalcost"><strong>€ {{ total }}</strong></td>
        </tr>
    </table>

</template>

<style scoped>
</style>
