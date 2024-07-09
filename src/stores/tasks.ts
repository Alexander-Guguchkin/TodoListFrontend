import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
  const tasks: any[] = ref([]) // общий массив где лежат объекты с задачами
  const lengthTasks = tasks.value.length + 1
  function createTask(textTask: any): void {
    // Создание уникального id
    const id: number = lengthTasks
    //Добавление в главный массив задачу
    tasks.value.push({
      id: id,
      text: textTask
    })
  }
  return { tasks, createTask }
})
