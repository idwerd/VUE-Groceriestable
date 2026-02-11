<script setup>
import { useRoute } from 'vue-router'
import GroceryForm from '../components/GroceryForm.vue'
import { updateGrocery } from '../store.js'

const route = useRoute();
const idOfEdit = Number(route.params.id);

const grocery = getGroceryById(idOfEdit);

</script>

<template>
    <GroceryForm :grocery="grocery" @updateList="updateGrocery"/>
</template>

<style>
</style>