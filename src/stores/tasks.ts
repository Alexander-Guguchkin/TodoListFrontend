import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTasksStore = defineStore('tasks', () => {
  // главный массив с задачами
  const tasks = ref([])
  const apiURL = 'http://127.0.0.1:8000/api/tasks/'
  function getTasks() {
    axios.get(apiURL).then((res) => {
      tasks.value = res.data
    })
  }
  function createTask(textTask: string | number): void {
    axios.post(apiURL, { text: textTask }).then(() => {
      getTasks()
    })
  }
  function findTask (){
    const text: string = '2'
    return tasks.value.find((task)=>{
          return task.valueOf() == text
    })
  }
  function deleteTask(id: any): void {
    axios.delete(`${apiURL}`+id).then(() => {
      getTasks()
    })
  }
  function editTask(id: any, newText: string): void {
    axios.patch(`${apiURL}`+id, { text: newText }).then(() => {
      getTasks()
    })
  }

  return { tasks, createTask, deleteTask, editTask, getTasks, findTask }
})
