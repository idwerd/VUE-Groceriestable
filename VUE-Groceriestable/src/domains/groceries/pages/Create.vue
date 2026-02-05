<script setup>
import GroceryForm from '../components/GroceryForm.vue'
import { addGrocery, getAllGroceries } from '../store.js'

const grocery = {
    product: 'product', 
    price: 0.00, 
    amount: 0,
    id: generateID(),
};

function generateID() {
    if (getAllGroceries.value.length === 0){
        return 1;
    } else {
        return Number(getAllGroceries.value.at(-1).id + 1);
    }
}

</script>

<template>
    <GroceryForm :grocery="grocery" @updateList="addGrocery"/>
</template>

<style>
</style>