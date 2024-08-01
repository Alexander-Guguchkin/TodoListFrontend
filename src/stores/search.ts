
import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useSearchStore = defineStore('search', () => {
  const search = ref([]);
  const apiURL = 'http://127.0.0.1:8000/api/search/'
  function searchTask(textSearch:string){
    axios.get(apiURL + textSearch).then((res)=>{
        search.value = res.data;
    })
  }
  
  return {search, searchTask }
})
