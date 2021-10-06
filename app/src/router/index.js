import { createRouter, createWebHistory } from 'vue-router'
import homeRoutes from '@/modules/home/router'
import authRoutes from '@/modules/auth/router'
import feedRoutes from '@/modules/feed/router'


const routes = [
  ...authRoutes,
  ...homeRoutes,
  ...feedRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const defaultTitle = 'home'; 
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : defaultTitle;
  next();
});


export default router
