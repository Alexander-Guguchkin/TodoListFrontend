<script setup lang="ts">
import Button from "@/components/ToDoList/Button.vue";

defineProps({
    text: String
});
</script>
<template>
    <div class="task">
        <div class="text"> {{ text }}</div>
        <div class="buttons">
            <Button textButton="Удалить" />
            <Button textButton="Редактировать" />
        </div>
    </div>
</template>
<style scoped>
.task {
    border-radius: 9px;
    padding: 9px 12px;
    color: black;
    background: white;
    display: grid;
    grid-template-columns: 4fr 2fr;
}

.text {
    place-content: center;
}

.buttons {
    display: flex;
    justify-content: space-around;
}
</style>