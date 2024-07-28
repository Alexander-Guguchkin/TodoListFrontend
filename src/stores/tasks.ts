import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTasksStore = defineStore('tasks', () => {
  // главный массив с задачами
  const tasks = ref([])
  function getTasks() {
    axios.get('http://127.0.0.1:8000/api/tasks/').then((res) => {
      tasks.value = res.data
    })
  }
  function createTask(textTask: string | number): void {
    axios.post(`http://127.0.0.1:8000/api/tasks/`, { text: textTask }).then(() => {
      getTasks()
    })
  }

  function deleteTask(id: any): void {
    axios.delete(`http://127.0.0.1:8000/api/tasks/${id}`).then(() => {
      getTasks()
    })
  }
  function editTask(id: any, newText: string): void {
    axios.patch(`http://127.0.0.1:8000/api/tasks/${id}`, { text: newText }).then(() => {
      getTasks()
    })
  }

  return { tasks, createTask, deleteTask, editTask, getTasks }
})
