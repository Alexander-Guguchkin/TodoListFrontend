<script setup lang="ts">
import ButtonComponent from '@/components/ToDoList/ButtonComponent.vue'
import InputComponent from '@/components/ToDoList/InputComponent.vue'
import SearchButtonComponent from './SearchButtonComponent.vue'
import { useSearchStore } from '@/stores/search'
import { ref } from 'vue'
const searchStore = useSearchStore()
const searchTask = ()=>{
  searchStore.searchTask()
}
let searchInput = ref('')
let activeFlag = ref(false)

function activeOn(){
  activeFlag.value = true

}

function activeOff(){
  searchTask()
  activeFlag.value = false
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
    <SearchButtonComponent v-if="activeFlag === false" @click="activeOn" />
    <ButtonComponent
      v-if="activeFlag === true"
      textButton="Найти"
      class="saveButton"
      @click="activeOff"
    />
  </div>
</template>
