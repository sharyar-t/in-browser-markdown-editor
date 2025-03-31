import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MarkdownCreate',
      component: () => import('@/views/MarkdownCreate.vue'),
    },
  ],
})

export default router
