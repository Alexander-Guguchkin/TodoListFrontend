<script setup lang="ts">
import { useSearchStore } from '@/stores/search'
import TaskComponent from '@/components/ToDoList/TaskComponent.vue';
const searchStore = useSearchStore()

</script>

<template>
  <div class="searchingBlank">
    <template v-for="el in searchStore.search">
      <template v-for="el1 in el" :key="el1.id">
        <TaskComponent :id="el1.id" :text="el1.text" />
      </template>
    </template>
  </div>
</template>

<style scoped>
    .searchingBlank{
      background: rgb(7, 63, 216);
      border-radius: 9px;
      padding: 10px 12px;
      height: 24vh;
      box-shadow: 1px 1px 12px;
      overflow-y: auto;
      position: absolute;
      width: 20%;
    }
</style>