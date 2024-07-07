<script lang="ts" setup>
import Input from '@/components/ToDoList/Input.vue'
import Button from '@/components/ToDoList/Button.vue'
import Blank from '@/components/ToDoList/Blank.vue'
import { ref } from 'vue'
const tasks: any = ref([])
let inputText: string = ''
function createTask(): void {
  let id: number = tasks.value.length + 1

  tasks.value.push({
    id: id,
    text: inputText
  })
}
function findElem(id: number) {}
function deleteTask() {}
</script>
<template>
  <div class="wrapper">
    <div class="form">
      <Input v-model="inputText" type="text" placeholder="Введите задачу" />
      <Button textButton="Создать" @click="createTask" />
    </div>
    <div class="output">
      <Blank :value="tasks" />
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
