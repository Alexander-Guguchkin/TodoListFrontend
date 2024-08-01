<script setup lang="ts">
import ButtonComponent from '@/components/ToDoList/ButtonComponent.vue'
import InputComponent from '@/components/ToDoList/InputComponent.vue'
import SearchButtonComponent from './SearchButtonComponent.vue'
import { useSearchStore } from '@/stores/search'
import { ref } from 'vue'
import SearchingBlank from '@/components/ToDoList/SearchingBlank.vue'
const searchStore = useSearchStore()
const searchTask = ()=>{
  searchStore.searchTask(searchInput.value)
}
let searchInput = ref('')
let activeFlag = ref(false)

function activeOn(){
  activeFlag.value = true

}

function activeOff(){
  searchTask()
  // activeFlag.value = false
}

</script>

<template>
  <div class="search">
    <div class="searchInput">
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
    <div class="searchOutput">
      <SearchingBlank v-if="activeFlag === true" />
    </div>
  </div>
</template>
<style scoped>
  .searchInput{
    display: flex;
    gap: 10px;
  }
</style>