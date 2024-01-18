import { createRouter, createWebHistory } from 'vue-router'
import SeriesView from '../views/SeriesView.vue'
import ArticleView from '../views/ArticleView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: SeriesView
  },
  {
    path: '/article',
    name: 'article',
    component: ArticleView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
