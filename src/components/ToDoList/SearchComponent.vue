<script setup lang="ts">
import ButtonComponent from '@/components/ToDoList/ButtonComponent.vue'
import InputComponent from '@/components/ToDoList/InputComponent.vue'
import SearchButtonComponent from './SearchButtonComponent.vue'
import { useSearchStore } from '@/stores/search'
import { useTasksStore } from '@/stores/tasks'
import { onMounted, ref } from 'vue'
const tasksStore = useTasksStore()
const searchStore = useSearchStore()
// const searchTask = ()=>{
//   searchStore.searchTask(searchInput.value)
// }
let searchInput = ref('')
let activeFlag = ref(false)

function activeOn(){
  activeFlag.value = true

}
onMounted(()=>{

})
function activeOff(){
  console.log( tasksStore.findTask())
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
