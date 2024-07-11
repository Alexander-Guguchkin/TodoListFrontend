<script setup lang="ts">
import Button from '@/components/ToDoList/Button.vue'
import Input from '@/components/ToDoList/Input.vue'
import { defineProps, ref } from 'vue'
import { useTasksStore } from '@/stores/tasks'
const tasksStore = useTasksStore()

const props = defineProps({
  id:Number,
  text: String
})

let edit = ref(false)
let inputText: string = ref('')
// проверить как будет работать данный код в компоненте  Blank
let deleteTask = ()=>{tasksStore.deleteTask(props.id)} 

function isEdit(): void {
  edit.value = !edit.value
}

</script>
<template>
  <div class="task">
    <template v-if="edit === false">
      <div class="text">{{ text }}</div>
    </template>
    <template v-else>
      <Input  v-model="inputText" type="text" placeholder="Введите задачу" />
    </template>

    <div class="buttons">
      <Button textButton="Удалить" @click="deleteTask" />

      <template v-if="edit === false">
        <Button textButton="Редактировать" @click="isEdit" />
      </template>

      <template v-else>
        <Button textButton="Подтвердить" @click="isEdit" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.task {
  border-radius: 9px;
  padding: 9px 12px;
  color: black;
  background: white;
  display: grid;
  grid-template-columns: 4fr 2fr;
  margin-bottom: 20px;
}

.text {
  place-content: center;
}

.buttons {
  display: flex;
  justify-content: space-around;
}
</style>
