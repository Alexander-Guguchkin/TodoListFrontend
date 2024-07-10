<script setup lang="ts">
import Task from '@/components/ToDoList/Task.vue'
import { useTasksStore } from '@/stores/tasks'
const tasksStore = useTasksStore()
const tasks = tasksStore.tasks
defineProps({
  value: Array
})
function deleteTask(id:number){
    tasks.value = tasks.value.filter((task) => task.id !== id); 
}
</script>
<template>
  <div class="blank">
    <template v-for="el in value" :key="el.id"> 
      <Task @delFunc="deleteTask" :text="el.text" />
    </template>
  </div>
</template>
<style scoped>
.blank {
  background: rgb(7, 63, 216);
  border-radius: 9px;
  padding: 10px 12px;
  height: 69vh;
  box-shadow: 1px 1px 12px;
}
</style>
