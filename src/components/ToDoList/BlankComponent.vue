<script setup lang="ts">
import TaskComponent from '@/components/ToDoList/TaskComponent.vue'
import { useTasksStore } from '@/stores/tasks'
import { onMounted } from 'vue'
// Инициализируем хранилище задач
const tasksStore = useTasksStore()
onMounted(()=>{
  tasksStore.getTasks()
})
</script>
<template>
  <div class="blank"> 
    <template v-for="el in tasksStore.tasks">
      <template v-for="el1 in el" :key="el1.id">
        <TaskComponent :id="el1.id" :text="el1.text" />
      </template>
    </template>
  </div>
</template>
<style scoped>
/* Стилизация  поля вывода задач */
.blank {
  background: rgb(7, 63, 216);
  border-radius: 9px;
  padding: 10px 12px;
  height: 69vh;
  box-shadow: 1px 1px 12px;
  overflow-y: auto; 
}
/* Стилизация полосы прокрутки */
.blank::-webkit-scrollbar {
  width: 12px; /* Ширина полосы прокрутки */
}

.blank::-webkit-scrollbar-track {
  background: #f1f1f1; /* Цвет фона полосы прокрутки */
  border-radius: 10px;
}

.blank::-webkit-scrollbar-thumb {
  background: rgb(7, 63, 216); /* Цвет ползунка */
  border-radius: 10px;
  border: 1px solid #f1f1f1;
}

.blank::-webkit-scrollbar-thumb:hover {
  background: #555; /* Цвет ползунка при наведении */
}
</style>
