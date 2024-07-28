import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useSearchStore = defineStore('search', () => {
  // главный массив с задачами
  const search = ref([])
  const apiURL = 'http://127.0.0.1:8000/api/search/'
  function searchTask(id:string){
    axios.get(`${apiURL}`+id).then((res)=>{
        console.log(res.data);
    })
  }
  
  return { search,  searchTask}
})
