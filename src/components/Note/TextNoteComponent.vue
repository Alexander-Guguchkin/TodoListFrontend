<script setup lang="ts">
import { ref } from "vue";

const text = ref("");
</script>

<template>
  <div class="text-note">
    <textarea v-model="text" class="text-note__textarea" placeholder="Enter your text here..." ></textarea>
  </div>
</template>
<style scoped>
.text-note {
  width: 100%;
  height: 91vh;
  border: 1px solid #000;
  border-radius: 10px;
}

.text-note__textarea {
  width: 100%;
  height: 80%;
  border: none;
  outline: none;
}
</style>