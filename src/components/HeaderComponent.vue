<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <header>
    <nav>
      <RouterLink to="/">ToDoList</RouterLink>
      <RouterLink to="/note">Note</RouterLink>
    </nav>
  </header>
</template>
<style scoped>
header {
  padding: 16px;
  font-size: 26px;
  border-bottom: 2px solid rgb(89, 126, 228);
}
nav{
  display: flex;
  gap: 16px;
}
</style>
