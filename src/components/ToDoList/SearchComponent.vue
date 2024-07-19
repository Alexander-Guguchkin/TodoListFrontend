<script setup lang="ts">
import ButtonComponent from '@/components/ToDoList/ButtonComponent.vue'
import InputComponent from '@/components/ToDoList/InputComponent.vue'
import SearchButtonComponent from './SearchButtonComponent.vue'
import { useTasksStore } from '@/stores/tasks'
import { ref } from 'vue'

const tasks = useTasksStore()
let searchInput = ref('')

const findTasks = () => {
  tasks.findTasks(searchInput)
  isActive()
}

let activeFlag = ref(false)

function isActive() {
  activeFlag.value = !activeFlag.value
}
</script>

<template>
  <div class="search">
    <InputComponent type="text" placeholder="Поиск" v-model="searchInput" v-if="activeFlag === true" />
    <SearchButtonComponent v-if="activeFlag === false" @click="isActive" />
    <ButtonComponent
      v-if="activeFlag === true"
      textButton="Найти"
      class="saveButton"
      @click="findTasks"
    />
  </div>
</template>
