<script setup lang="ts">
import InputComponent from '@/components/ToDoList/InputComponent.vue'
import ButtonComponent from '@/components/ToDoList/ButtonComponent.vue'
// import { RouterLink } from 'vue-router'
import { ref } from 'vue'
let inputName = ref('');
let inputMail = ref('');
let inputPassword = ref('');
let inputCheckPassword = ref('');

</script>

<template>
  <div class="register">
    <div class="register__container">

      <div class="register__header">
              <div class="register__title"></div>
      </div>

      <div class="register__main">
        <div class="register__inputs">
            <InputComponent type="text" placeholder="Имя пользователя" v-model="inputName"/>
            <InputComponent type="email" placeholder="Почта" v-model="inputMail"/>
            <InputComponent type="password" placeholder="Пароль" v-model="inputPassword"/>
            <InputComponent type="password" placeholder="Подтвердите пароль" v-model="inputCheckPassword"/>
        </div>
        <div class="register__buttons">
            <ButtonComponent textButton="Зарегистрироваться"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>