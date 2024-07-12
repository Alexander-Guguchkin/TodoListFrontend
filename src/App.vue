<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <div class="container">
    <div class="container__header">
      <HeaderComponent />
    </div>
    <div class="conteiner__main">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.conteiner__main {
  padding: 24px;
}
</style>
