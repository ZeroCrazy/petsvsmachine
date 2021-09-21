import { createRouter, createWebHistory } from 'vue-router'
import homeRoutes from '@/modules/home/router'
import authRoutes from '@/modules/auth/router'


const routes = [
  ...authRoutes,
  ...homeRoutes,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
