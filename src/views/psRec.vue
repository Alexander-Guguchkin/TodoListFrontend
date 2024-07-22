<script setup lang="ts">
import InputComponent from '@/components/ToDoList/InputComponent.vue'
import ButtonComponent from '@/components/ToDoList/ButtonComponent.vue'
// import { RouterLink } from 'vue-router'
import { ref } from 'vue'

let inputMail = ref('');
</script>
<template>
  <div class="psRec">
    <div class="psRec__container psRec__flex">
      <div class="psRec__header">
        <div class="psRec__title"><h1>Востановление пароля</h1></div>
      </div>

      <div class="psRec__main">
        <div class="psRec__inputs psRec__flex">
          <InputComponent type="email" placeholder="Введите вашу почту" v-model="inputMail" />
        </div>
        <div class="psRec__buttons">
          <ButtonComponent textButton="Отправить" />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.psRec__container {
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
.psRec__inputs{
  padding: 20px 0;
}
.psRec__flex{
  display: flex;
  flex-direction: column;
  gap: 10px;
}</style>
