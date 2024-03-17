import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/project/:id', component: ProjectView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router;
