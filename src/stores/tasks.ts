import { ref, } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref([]);

  function createTask(textTask: string | number): void {
    // Создание уникального id 
    const lengthTasks: number = tasks.value.length + 1;
    //Добавление в главный массив задачу 
    tasks.value.push({
      id: lengthTasks,
      text: textTask
    });
  }
  function deleteTask(id: any): void {
    tasks.value = tasks.value.filter((task) => task.id !== id);
  }
  function getTaskById(id: any) {
    return tasks.value.find(task => task.id === id); //поиск элемента по его id
  }
  function editTask(id: any, newText: string | number): void {
    const task = getTaskById(id);
    if (task) {
      task.text = newText; // Редактирование текста задачи
    }
  }

  return { tasks, createTask, deleteTask, editTask }
})
