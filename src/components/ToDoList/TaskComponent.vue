<script setup lang="ts">
import ButtonComponent from '@/components/ToDoList/ButtonComponent.vue'
import InputComponent from '@/components/ToDoList/InputComponent.vue'
import { defineProps, ref } from 'vue'
import { useTasksStore } from '@/stores/tasks'
const tasksStore = useTasksStore()

const props = defineProps({
  id: Number,
  text: String
})

let edit = ref(false)
let inputText:string|number  = ref('')
// проверить как будет работать данный код в компоненте  Blank
let deleteTask = () => { tasksStore.deleteTask(props.id) }

function onEdit(): void {
  edit.value = true
}

function offEdit():void {
  edit.value = false
  tasksStore.editTask(props.id, inputText)
}

</script>
<template>
  <div class="task">
    <template v-if="edit === false">
      <div class="text">{{ text }} - {{ id }}</div>
    </template>
    <template v-else>
      <InputComponent v-model="inputText" type="text" :placeholder="text" />
    </template>

    <div class="buttons">
      <ButtonComponent textButton="Удалить" @click="deleteTask" />

      <template v-if="edit === false">
        <ButtonComponent textButton="Редактировать" @click="onEdit" />
      </template>

      <template v-else>
        <ButtonComponent textButton="Подтвердить" @click="offEdit" />
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
