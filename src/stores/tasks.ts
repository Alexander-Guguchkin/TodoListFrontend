import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref([]) // общий массив где лежат объекты с задачами

  function createTask(textTask: string): void {
    // Создание уникального id
    const lengthTasks = tasks.value.length + 1
    //Добавление в главный массив задачу
    tasks.value.push({
      id: lengthTasks,
      text: textTask
    })
  }
  function deleteTask(id:any){
    tasks.value = tasks.value.filter((task)=> task.id !== id); 
  }

  return { tasks, createTask, deleteTask }
})
