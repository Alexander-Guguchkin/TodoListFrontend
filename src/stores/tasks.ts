import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTasksStore = defineStore('tasks', () => {
  // главный массив с задачами
  const tasks = ref([])
  function getTasks(){
    axios.get('http://127.0.0.1:8000/api/tasks/', ).then(res=>{
      tasks.value = res.data
    })
  }
  function createTask(textTask: string | number): void {
    // формирование объекта для создания задачи
    const data = {
      text: textTask
    }
    axios.post(`http://127.0.0.1:8000/api/tasks/`, data)
    getTasks()
  }

  function deleteTask(id: any): void {
    tasks.value = tasks.value.filter((task) => task.id !== id)
  }
  function getTaskById(id: any) {
    return tasks.value.find((task) => task.id === id) //поиск элемента по его id
  }
  function editTask(id: any, newText: string | number): void {
    const task = getTaskById(id)
    if (task) {
      task.text = newText // Редактирование текста задачи
    }
  }
  function findTasks(textTask:any){
    // tasks.value = tasks.value.filter((task) => task.text === textTask)
    // доработать на стороне сервера
    return ''
  }

  return { tasks, createTask, deleteTask, editTask, findTasks, getTasks }
})
