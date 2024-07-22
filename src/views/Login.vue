<script setup lang="ts">
import InputComponent from '@/components/ToDoList/InputComponent.vue'
import ButtonComponent from '@/components/ToDoList/ButtonComponent.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

let loginInput = ref('')
let passwordInput = ref('')
</script>

<template>
  <div class="login">
    <div class="login__container login__flex">
      <div class="login__header">
        <div class="login__title">
          <h1>Войти</h1>
        </div>
      </div>
      <div class="login__main login__flex">
        <div class="loginInputs login__flex">
          <InputComponent type="email" placeholder="Почта" v-model="loginInput" />
          <InputComponent type="password" placeholder="Пароль" v-model="passwordInput" />
        </div>
        <div class="loginButtons">
          <ButtonComponent textButton="Войти" />
        </div>
      </div>
      <div class="login__footer">
        <RouterLink to="/psRec">Забыли пароль?</RouterLink>
        <RouterLink to="/register">Зарегистрироваться</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login__container {
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

.loginInputs {
  padding: 20px 0;
}
.login__flex {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.login__footer{
  display: flex;
  font-size: 10px;
  gap: 20px;
  
}
</style>
