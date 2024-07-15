<script setup lang="ts">

</script>
<template>
  <div class="sidebar">
    <div class="sidebar__header">
        <h1>
            Мои заметки
    </h1>
  </div>
  <div class="sidebar__body">
    <p>
        Здесь будут храниться ваши заметки
    </p>
  </div>
  <div class="sidebar__footer">
    <p>
        <!-- Здесь будут храниться ваши заметки -->
    </p>
  </div>
  </div>
</template>
<style scoped>
.sidebar {
  width: 200px;
  height: 91vh;
  background-color: #9b4343;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sidebar__body {
  overflow-y: auto;
}
</style>