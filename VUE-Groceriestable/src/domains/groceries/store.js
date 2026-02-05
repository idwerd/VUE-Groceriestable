import { ref, computed } from 'vue';

//state
const groceries = ref([{
    product: 'Rijst',
    price: 1.00,
    amount: 0,
    id: 1,
  },
  {
    product: 'Broccoli',
    price: 0.99,
    amount: 0,
    id: 2,
  },
  {
    product: 'Koekjes',
    price: 1.20,
    amount: 0,
    id: 3,
  },
  {
    product: 'Noten',
    price: 2.99,
    amount: 0,
    id: 4,
  }
]);

//getter
export const getAllGroceries = computed(() => groceries.value);

//action
export const addGrocery = (grocery) => groceries.value.push(grocery);

export const updateGrocery = (grocery) => {
  for (let i = 0; i < groceries.value.length; i++) {

    if (groceries.value[i].id === grocery.id) {
      groceries.value[i] = grocery;   
    }

  }
}

export const removeGrocery = (groceryID) => {
   for (let i = 0; i < groceries.value.length; i++) {
    if (groceries.value[i].id === groceryID) {
      groceries.value.splice(i, 1);
    }
  }
}