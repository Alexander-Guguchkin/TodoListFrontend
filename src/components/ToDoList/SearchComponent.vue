<script setup lang="ts">
import ButtonComponent from '@/components/ToDoList/ButtonComponent.vue'
import InputComponent from '@/components/ToDoList/InputComponent.vue'
import { ref } from 'vue'
let activeFlag = ref(false)
function isActive() {
  activeFlag.value = !activeFlag.value
}
</script>
<template>
  <div class="search">
    <!-- <input type="text" v-if="activeFlag === true"> -->
    <InputComponent v-if="activeFlag === true" />
    <button v-if="activeFlag === false" @click="isActive" class="seachButton">
      <img
        width="12"
        height="12"
        src="https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png"
        alt="search--v1"
      />
    </button>
    <ButtonComponent
      v-if="activeFlag === true"
      textButton="Сохранить"
      class="saveButton"
      @click="isActive"
    />
  </div>
</template>
<style scoped>
.search {
  display: flex;
  gap: 10px;
}
</style>
