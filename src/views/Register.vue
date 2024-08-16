<script setup lang="ts">
import InputComponent from '@/components/ToDoList/InputComponent.vue'
import ButtonComponent from '@/components/ToDoList/ButtonComponent.vue'
// import { RouterLink } from 'vue-router'
import {ref} from "vue";
import axios from "axios";
let name = ref('')
let email = ref('')
let password = ref('')
let password_confirmation = ref('')
function send(){
  let data = {
    name:name.value,
    email:email.value,
    password:password.value,
    password_confirmation: password_confirmation.value
  }
  axios.post('http://127.0.0.1:8000/api/register', data).then(response=>{
    console.log(response)
  })
}
</script>

<template>
  <div class="register">
    <div class="register__container register__flex">

      <div class="register__header">
              <div class="register__title"><h1>Зарегистрироваться</h1></div>
      </div>

      <div class="register__main">
        <div class="register__inputs register__flex">
            <InputComponent type="text" placeholder="Имя пользователя" v-model="name"/>
            <InputComponent type="email" placeholder="Почта" v-model="email"/>
            <InputComponent type="password" placeholder="Пароль" v-model="password"/>
            <InputComponent type="password" placeholder="Подтвердите пароль" v-model="password_confirmation"/>
        </div>
        <div class="register__buttons">
            <ButtonComponent textButton="Зарегистрироваться" @click="send"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register__container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 9px;
  padding: 10px 12px;
  height: 49vh;
  box-shadow: 1px 1px 12px;
  overflow-y: auto; 
  color: rgb(7, 63, 216);

}
.register__inputs{
  padding: 20px 0;
}
.register__flex{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>