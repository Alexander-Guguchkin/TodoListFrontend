<script setup lang="ts">
import ButtonComponent from '@/components/ToDoList/ButtonComponent.vue'
import InputComponent from '@/components/ToDoList/InputComponent.vue'
import { defineProps, ref } from 'vue'
import { useTasksStore } from '@/stores/tasks'
import DeleteButton from '@/components/ToDoList/DeleteButton.vue'
import EditButton from '@/components/ToDoList/EditButton.vue'

// инициализация общего хранилища для доступа к функциям
const tasksStore = useTasksStore()
const props = defineProps({
  id: Number,
  text: String
})
//  флаг для определения вкличён или выключен режим редактирования
let edit = ref(false)

let inputText = ref('')

// проверить как будет работать данный код в компоненте  Blank
let deleteTask = () => {
  tasksStore.deleteTask(props.id)
}

function onEdit(): void {
  edit.value = true
}
function offEdit(): void {
  edit.value = false
  tasksStore.editTask(props.id, inputText.value.toString())
}
</script>
<template>
  <div class="task">
    <template v-if="edit === false">
      <div class="text">{{ text }}</div>
    </template>

    <template v-else>
      <InputComponent v-model="inputText" type="text" :placeholder="text" />
    </template>

    <div class="buttons">
      <DeleteButton @click="deleteTask" class="button btn1" />
      <template v-if="edit === false">
        <EditButton  @click="onEdit" class="button btn2" />
      </template>
      <template v-else>
        <ButtonComponent textButton="Подтвердить" @click="offEdit" class="button btn2" />
      </template>
    </div>
  </div>
</template>
