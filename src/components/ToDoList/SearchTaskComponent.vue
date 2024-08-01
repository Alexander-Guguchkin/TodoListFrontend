<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  id: Number,
  text: String
})
</script>

<template>
  <div class="task">
    <div class="text">{{ text }}</div>
  </div>
</template>

<style scoped>
.task:hover{
  opacity: 0.9;
}
</style>