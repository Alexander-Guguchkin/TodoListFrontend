<script lang="ts" setup>
import InputComponent from '@/components/ToDoList/InputComponent.vue'
import ButtonComponent from '@/components/ToDoList/ButtonComponent.vue'
import BlankComponent from '@/components/ToDoList/BlankComponent.vue'
import { useTasksStore } from '@/stores/tasks'

const tasksStore = useTasksStore()
let inputText: string | number;
const createTask = () => {
  tasksStore.createTask(inputText)
}

</script>
<template>
  <div class="wrapper">
    <div class="form">
      <InputComponent v-model="inputText" type="text" placeholder="Введите задачу" />
      <ButtonComponent textButton="Создать" @click="createTask" />
    </div>
    <div class="output">
      <BlankComponent />
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  margin: 0 auto;
  width: 900px;
  min-width: 440px;
}

.form {
  display: grid;
  grid-template-columns: 6fr 1fr;
  grid-gap: 40px;
  margin-bottom: 29px;
}
</style>
