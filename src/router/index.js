import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/pages/Main.vue'
import Preview from '@/components/pages/Preview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview,
    },
  ],
})

export default router
