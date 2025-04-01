import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/:fileName',
      name: 'MarkdownCreate',
      component: () => import('@/views/MarkdownCreate.vue'),
    },
  ],
})

export default router
