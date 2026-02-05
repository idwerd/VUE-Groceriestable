<script setup>
import { ref } from 'vue';


    const getNewGrocery = defineProps({
        grocery: {},
    })
    const localGrocery = ref({...getNewGrocery.grocery});

    const emit = defineEmits(['updateList']);
    const updateGroceryList = () => {
        emit('updateList', localGrocery.value);
    }

    function redirectToOverview(){
        
    }
</script>

<template>

    <form id="edit">
        <label v-for="(element, key, index) in localGrocery" :key="index" v-show="key != 'id'">
            <h4>{{ key }}</h4>
            <input 
                :name="element" 
                :type="typeof localGrocery[key] === 'number' ? 'number' : 'text'"
                :step=0.01
                v-model="localGrocery[key]"
            >
            </input>
        </label>
        
        <button id="submit" type="button" @click="updateGroceryList">Submit</button>
    </form>

</template>

<style scoped>
</style>