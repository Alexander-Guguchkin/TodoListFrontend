<script setup lang="ts">
import axios from 'axios';
import { RouterLink, useRouter } from 'vue-router'
import ButtonComponent from './ToDoList/ButtonComponent.vue';
import { ref, onMounted } from 'vue';  
const router = useRouter();

function logout() {
      // Отправка запроса на сервер для выхода
      axios.post('http://127.0.0.1:8000/api/logout', {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(() => {
        // Удаление токена из хранилища
        localStorage.removeItem('token');

        // Переход на страницу входа или главную страницу
        router.push({ name: 'login' });
      })
      .catch(error => {
        console.error('Ошибка при выходе из аккаунта:', error);
      });
    }

const userName = ref('');  // Создаем переменную для хранения имени пользователя
const error = ref('');  
  
const fetchUsers = async () => {  
  try {  
    const response = await axios.get('http://127.0.0.1:8000/api/user', {  
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    console.log(response);
    userName.value = response.data.name; // Сохраняем имя пользователя в переменную
    console.log(userName.value);
  } catch (err) {  
    error.value = err.response?.data?.message || 'Ошибка получения пользователей';  
  }  
};  
  
onMounted(fetchUsers); // Вызываем функцию при монтировании компонента
</script>
<!-- ... existing code ... -->
<template>
  <header>
    <nav>
      <RouterLink to="/">ToDoList</RouterLink>
      <div class="auth">
        <RouterLink to="/Login">Login</RouterLink>
        <ButtonComponent text-button="Logout" @click="logout"/>
        <div class="profile">
        <span class="profile-name">{{ userName }}</span> <!-- Выводим имя пользователя -->
      </div>
      </div>

    </nav>
  </header>
</template>
<style scoped>
header {
  padding: 16px;
  font-size: 26px;
  border-bottom: 2px solid rgb(89, 126, 228);
}
nav{
  display: flex;
  justify-content: space-between;
  gap: 16px;
}
.auth{
  display: flex;
  gap: 20px;
}
</style>