<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />
  <div class="cont">
    <RouterView />
  </div>
</template>

<style scoped>
.cont {
  padding: 24px;
}
</style>
