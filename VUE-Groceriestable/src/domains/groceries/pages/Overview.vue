<script setup>
import GroceriesTable from '../../../components/GroceriesTable.vue'
import { ref } from 'vue';
import { getAllGroceries } from '../store.js';

const groceries = getAllGroceries;

</script>

<template>
    <GroceriesTable v-model="groceries"/>
</template>

<style>
</style>