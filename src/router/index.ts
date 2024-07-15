import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ToDoList',
      component: () => import('../views/ToDoList.vue')
    },
    {
      path: '/note',
      name: 'Note',
      component: () => import('../views/Note.vue')
    }
  ]
})

export default router
