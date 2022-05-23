import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Main1 from '@/views/Main1'
import Album from '@/views/album'
import Board from '@/views/board'
import JsonHandling from '@/views/jsonHandling'
import Register from '@/views/register'
import UploadMusic from '@/views/UploadMusic'
import Croling from '@/views/Croling'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: Main1
  },
  {
    path: '/album/detail',
    name: 'album',
    component: Album,
    props: true
  },
  {
    path: '/board',
    name: 'board',
    component: Board
  },
  {
    path: '/jsonHandling',
    name: 'board',
    component: JsonHandling
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/upload',
    name: 'uploadMusic',
    component: UploadMusic
  },
  {
    path: '/croling',
    name: 'croling',
    component: Croling
  }
]

const router = new VueRouter({
  routes
})

export default router
