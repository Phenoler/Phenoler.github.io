import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView/HomeView.vue'
import ContactView from '@/views/ContactView/ContactView.vue'
import BlogView from '@/views/BlogView/BlogView.vue'
import BlogDetailView from '@/views/BlogDetailView/BlogDetailView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },{
        path: '/blog',
        name: 'blog',
        component: BlogView
      },{
        path: '/blog/:slug',
        name: 'blogdetail',
        component: BlogDetailView
      },{
        path: '/contact',
        name: 'contact',
        component: ContactView
      },
  ],
})

export default router
