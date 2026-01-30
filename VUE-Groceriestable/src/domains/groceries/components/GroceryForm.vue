<script setup>
import { ref } from 'vue';

    const getNewGrocery = defineProps({
        grocery: {},
    })
    const localGrocery = ref({...getNewGrocery.grocery});

    const emit = defineEmits(['updateList']);
    const emitEvent = () => {
        emit('updateList', localGrocery.value);
    }
</script>

<template>
    <form @submit.prevent="emitEvent">
        <label v-for="(element, key, index) in localGrocery" :key="index">
            {{ key }}
            <input :name="element" v-model="localGrocery[key]"></input>
            <br></br>
        </label>
        <button type="submit">Submit</button>
    </form>

</template>

<style scoped>
</style>