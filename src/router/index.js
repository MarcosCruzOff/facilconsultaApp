import { createRouter, createWebHistory } from 'vue-router'
import FormMain from '../views/FormMain.vue'
import FormSecondary from '../views/FormSecondary.vue'
import FormReview from '../views/FormReview.vue'

const routes = [
  {
    path: '/',
    name: 'form-main',
    component: FormMain,
  },
  {
    path: '/form-secondary',
    name: 'form-secondary',
    component: FormSecondary,
  },
  {
    path: '/form-review',
    name: 'form-review',
    component: FormReview,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
