import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/HomeView.vue'
import HeroList from '@/components/HeroList.vue'
import FavoritesView from '@/components/FavoritesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path:'/heroes',
      component: HeroList
    },
    {
      path:'/favorites',
      name:'Favorites',
      component:FavoritesView
    }
  ]
})

export default router
