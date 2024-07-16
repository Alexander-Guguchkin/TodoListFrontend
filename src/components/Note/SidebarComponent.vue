<script setup lang="ts">

</script>
<template>
  <div class="sidebar">
    <div class="sidebar__header">
        <h1 class="sidebar__title">
            Мои заметки
        </h1>
  </div>
  <div class="sidebar__body"></div>
  <div class="sidebar__footer"></div>
  </div>
</template>
<style scoped>
.sidebar {
  width: 200px;
  height: 100vh;
  background: rgb(7, 63, 216);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  padding: 10px;
}
.sidebar__title{
  text-align: center;
}
.sidebar__body {
  overflow-y: auto;
}
</style>