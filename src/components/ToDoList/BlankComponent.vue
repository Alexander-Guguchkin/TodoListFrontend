<script setup lang="ts">
import TaskComponent from '@/components/ToDoList/TaskComponent.vue'
import { useTasksStore } from '@/stores/tasks'
const tasksStore = useTasksStore()
</script>
<template>
  <div class="blank">
    <template v-for="el in tasksStore.tasks" :key="el.id">
      <TaskComponent :id="el.id" :text="el.text" />
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
