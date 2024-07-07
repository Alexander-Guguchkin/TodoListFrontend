<script setup lang="ts">
import Task from "@/components/ToDoList/Task.vue";
defineProps({
    value: Array
});
</script>
<template>
    <div class="blank">
        <template v-for="el in value" :key="el.id">
            <Task :text="el.text" />
        </template>
    </div>
</template>
<style scoped>
.blank {
    background: rgb(7, 63, 216);
    border-radius: 9px;
    padding: 10px 12px;
}
</style>