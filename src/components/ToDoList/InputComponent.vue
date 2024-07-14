<script setup lang="ts">
defineProps({
  type: String,
  placeholder: String
})
// объявление реактивной переменной для того чтобы передать значение input
// в родительский компонент
const model = defineModel()
</script>
<template>
  <div class="input">
    <input :type="type" :placeholder="placeholder" v-model="model" />
  </div>
</template>
<style scoped>
input {
  border: 2px solid rgb(7, 63, 216);
  border-radius: 9px;
  width: 100%;
  padding: 10px 12px;
}

input::placeholder {
  color: rgb(89, 126, 228);
}

input:focus {
  box-shadow: 1px 1px 12px;
  outline: none;
}
</style>
