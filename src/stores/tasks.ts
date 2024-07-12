import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref([]) // общий массив где лежат объекты с задачами

  function createTask(textTask: string | number): void {
    // Создание уникального id
    const lengthTasks = tasks.value.length + 1
    //Добавление в главный массив задачу
    tasks.value.push({
      id: lengthTasks,
      text: textTask
    })
  }
  function deleteTask(id: any): void {
    tasks.value = tasks.value.filter((task) => task.id !== id);
  }
  function getTaskById(id: any) { 
    return tasks.value.find(task => task.id === id); 
  } 
  function editTask(id: any, newText: string|number ): void {
    const task = getTaskById(id);
    if (task) {
      task.text = newText; // Редактирование текста задачи
    }
  }

  return { tasks, createTask, deleteTask, editTask }
})
