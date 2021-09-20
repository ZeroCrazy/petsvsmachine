import { createRouter, createWebHistory } from 'vue-router'
import homeRoutes from '@/modules/home/router'


const routes = [
  {
    path: '/',
    ...homeRoutes
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
