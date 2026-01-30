<script setup>
import GroceryForm from '../components/GroceryForm.vue'
import { addGrocery } from '../store.js'

const grocery = {
    product: 'product', 
    price: 0, 
    amount: 0,
};


</script>

<template>
    <GroceryForm :grocery="grocery" @updateList="addGrocery"/>
</template>

<style>
</style>