import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import headerRoutes from '@/router/header.routes'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: 'form',
    component: () =>
      import(/* webpackChunkName: "form" */ '../views/DefaultLayout.vue'),
    children: [...headerRoutes],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
