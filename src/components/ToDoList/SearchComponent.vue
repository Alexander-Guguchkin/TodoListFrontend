<script setup lang="ts">
import ButtonComponent from '@/components/ToDoList/ButtonComponent.vue'
import InputComponent from '@/components/ToDoList/InputComponent.vue'
import SearchButtonComponent from './SearchButtonComponent.vue'
import { useSearchStore } from '@/stores/search'
import { ref } from 'vue'

const search = useSearchStore()
const searchTask = ()=>{
  search.searchTask(searchInput.value)
}
let searchInput = ref('')
let activeFlag = ref(false)

function isActive() {
  activeFlag.value = !activeFlag.value
}
</script>

<template>
  <div class="search">
    <InputComponent
      type="text"
      placeholder="Поиск"
      v-model="searchInput"
      v-if="activeFlag === true"
    />
    <SearchButtonComponent v-if="activeFlag === false" @click="isActive" />
    <ButtonComponent
      v-if="activeFlag === true"
      textButton="Найти"
      class="saveButton"
      @click="searchTask"
    />
  </div>
</template>
