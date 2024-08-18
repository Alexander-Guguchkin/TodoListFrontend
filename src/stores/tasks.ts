import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTasksStore = defineStore('tasks', () => {
  // главный массив с задачами
  const tasks = ref([])
  const token = localStorage.getItem('token')
  const apiURL = 'http://127.0.0.1:8000/api/tasks/'
  const configQuery = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  function getTasks() {
    axios.get(apiURL, configQuery).then((res) => {
      tasks.value = res.data
    })
  }
  function createTask(textTask: string | number): void {
    axios.post(apiURL, { text: textTask }, configQuery).then(() => {
      getTasks()
    })
  }
  function deleteTask(id: any): void {
    axios.delete(`${apiURL}` + id, configQuery).then(() => {
      getTasks()
    })
  }
  function editTask(id: any, newText: string): void {
    axios.patch(`${apiURL}` + id, { text: newText }, configQuery).then(() => {
      getTasks()
    })
  }

  return { tasks, createTask, deleteTask, editTask, getTasks }
})
