<script lang="ts" setup>
import InputComponent from '@/components/ToDoList/InputComponent.vue'
import ButtonComponent from '@/components/ToDoList/ButtonComponent.vue'
import BlankComponent from '@/components/ToDoList/BlankComponent.vue'
import { useTasksStore } from '@/stores/tasks'
import SearchComponent from '@/components/ToDoList/SearchComponent.vue'

// инициализация общего хранилища для доступа к функциям
const tasksStore = useTasksStore()
let inputText: string | number

const createTask = () => {
  // вызов метода создания задачи из общего хранилища
  tasksStore.createTask(inputText)
}
</script>
<template>
  <div class="wrapper">
    <div class="form">
      <InputComponent v-model="inputText" type="text" placeholder="Введите задачу" />
      <ButtonComponent textButton="Создать" @click="createTask" class="createButton" />
      <SearchComponent />
    </div>
    <div class="output">
      <BlankComponent />
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  margin: 0 auto;
  min-width: 329px;
  padding: 24px;
}

.form {
  display: grid;
  grid-template-columns: 6fr 1fr 2fr;
  grid-gap: 40px;
  margin-bottom: 29px;
}
</style>
