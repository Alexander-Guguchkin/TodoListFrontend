<script lang="ts" setup>
import SidebarComponent from '@/components/Note/SidebarComponent.vue'
import TextNoteComponent from '@/components/Note/TextNoteComponent.vue'
</script>
<template>
  <div class="wrapper">
    <SidebarComponent />
    <TextNoteComponent/>
  </div>
</template>
<style scoped>
.wrapper {
  margin: 0 auto;
  min-width: 329px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
}
</style>
