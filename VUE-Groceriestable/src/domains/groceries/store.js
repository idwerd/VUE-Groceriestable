import { ref, computed } from 'vue';

//state
const groceries = ref([{
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

//getter
export const getAllGroceries = computed(() => groceries.value);

//action
export const addGrocery = (grocery) => groceries.value.push(grocery);