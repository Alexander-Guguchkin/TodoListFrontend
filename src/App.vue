<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
</script>

<template>
  <Header />
  <div class="cont">
    <RouterView />
  </div>
</template>

<style scoped>
.cont {
  padding: 24px;
}
</style>
