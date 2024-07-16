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
  height: 100vh;
  border: 1px solid #000;
}

.text-note__textarea {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 1.5rem;

  padding: 10px;
  background-color: #f0f0f0;  
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
</style>