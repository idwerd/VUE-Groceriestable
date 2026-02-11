<script setup>

</script>

<template>
  <nav>
    <RouterLink class="main-nav-item" :to="{name: 'groceries.overview'}">Overview</RouterLink>
    <RouterLink class="main-nav-item" to="/create">Create</RouterLink>
  </nav>

  <main>
    <RouterView/>
  </main>
  
</template>

<style scoped>

</style>
