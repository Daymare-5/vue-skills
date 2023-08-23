import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from '@/views/NotFound'
import MyCarousel from '@/views/carousel/MyCarousel'

const ElementCarousel = () => import('@/views/carousel/ElementCarousel')
const MutipleColumnSort = () => import('@/views/table/MutipleColumnSort')
const FSPassValue = () => import('@/views/passValue/FSPassValue')
const ADPassValue = () => import('@/views/passValue/ADPassValue')
const NFSPassValue = () => import('@/views/passValue/NFSPassValue')
const LazyLoad = () => import('@/views/lazyLoad')
const DatePicker = () => import('@/views/datePicker')
const Other = () => import('@/views/other')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/myCarousel' },
  { path: '/myCarousel', component: MyCarousel },
  { path: '/elementCarousel', component: ElementCarousel },
  { path: '/mutipleColumnSort', component: MutipleColumnSort },
  { path: '/fsPassValue', component: FSPassValue },
  { path: '/adPassValue', component: ADPassValue },
  { path: '/nfsPassValue', component: NFSPassValue },
  { path: '/lazyLoad', component: LazyLoad },
  { path: '/datePicker', component: DatePicker },
  { path: '/other', component: Other },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  routes
})

export default router
