<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue';
import GroceryForm from '../components/GroceryForm.vue'
import { updateGrocery, getAllGroceries } from '../store.js'

let grocery;
const route = useRoute();
const idOfEdit = Number(route.params.id);

getGroceryById();
function getGroceryById() {
    for (let i = 0; i < getAllGroceries.value.length; i++) {
        if (getAllGroceries.value[i].id === idOfEdit) {
            grocery = ref({...getAllGroceries.value[i]});
            return grocery;
        }
    }
}
</script>

<template>
    <GroceryForm :grocery="grocery" @updateList="updateGrocery"/>
</template>

<style>
</style>