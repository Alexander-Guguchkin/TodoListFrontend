<script setup lang="ts">
defineProps({
  textButton: String
})
</script>
<template>
  <div class="button">
    <button>{{ textButton }}</button>
  </div>
</template>
<style>
button {
  background: rgb(7, 63, 216);
  border: 2px solid rgb(7, 63, 216);
  border-radius: 9px;
  padding: 10px 12px;
  cursor: pointer;
  color: white;
  width: 100%;
}

button:hover {
  background: white;
  box-shadow: 1px 1px 12px;
  border: 2px solid rgb(7, 63, 216);
  color: black;
}
</style>
