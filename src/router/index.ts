// Removed unnecessary Vue import as Vue 3 does not have a default export
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Removed Vue.use(VueRouter) as it is not needed in Vue 3

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    component: () => import('../views/About.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('../views/Resume.vue')
  },
  {
    path: '/game-projects',
    name: 'Game Projects',
    component: () => import('../views/GameProjects.vue')
  },
  {
    path: '/other-projects',
    name: 'Other Projects',
    component: () => import('../views/OtherProjects.vue')
  },
  {
    path: '/learning-lab',
    name: 'Learning Lab',
    component: () => import('../views/LearningProjects.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../views/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router