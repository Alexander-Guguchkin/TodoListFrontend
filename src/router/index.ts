import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ToDoList',
      component: () => import('../views/ToDoList.vue')
    },
  ]
})

export default router
